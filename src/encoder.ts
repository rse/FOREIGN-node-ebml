import { Transform, TransformOptions, TransformCallback } from 'stream';
import {Tools as tools} from './tools';
import { Tag } from './types/tag.types';
import { EbmlTag } from './models/EbmlTag';
import { EbmlTagPosition } from './models/EbmlTagPosition';
import { EbmlTagType } from './models/EbmlTagType';
import { EbmlTagId } from './models/EbmlTagId';

export class EbmlEncoder extends Transform {
  private dataBuffer: Buffer = Buffer.alloc(0);
  private mCorked: boolean = false;
  private openTags: OpenTag[] = [];

  constructor(options: TransformOptions = {}) {
    super({ ...options, writableObjectMode: true });
  }

  _transform(chunk: EbmlTag, enc: string, done: TransformCallback) {
    if(chunk && chunk.type) {
      if (!chunk.type.id) {
        throw new Error(`No schema entry found for ${chunk}`);
      }

      switch (chunk.position) {
        case EbmlTagPosition.Start:
          this.startTag(chunk);
          break;
        case EbmlTagPosition.Content:
          this.writeTag(chunk);
          break;
        case EbmlTagPosition.End:
          this.endTag(chunk);
          break;

        default:
          break;
      }
    }

    done();
  }

  private getTagDeclaration(tag: EbmlTag): Buffer {
    let tagHex = tag.type.id.toString(16);
    if(tagHex.length%2!==0) {
      tagHex = `0${tagHex}`;
    }
    return Buffer.from(tagHex, 'hex');
  }

  bufferAndFlush(buffer: Buffer) {
    this.dataBuffer = Buffer.concat([this.dataBuffer, buffer]);
    this._flush(() => {});
  }

  _flush(callback: TransformCallback): void {
    let chunk: Buffer = null;
    if (this.dataBuffer.length > 0 && !this.mCorked) {
      chunk = Buffer.from(this.dataBuffer);
      this.dataBuffer = Buffer.alloc(0);
      this.push(chunk);
    }
    callback();
  }

  /* For testing */
  _bufferAndFlush(buffer) {
    this.bufferAndFlush(buffer);
  }

  flush(): void {
    this._flush(() => {});
  }

  get buffer(): Buffer {
    return this.dataBuffer;
  }
  set buffer(val: Buffer) {
    this.dataBuffer = val;
  }

  get stack(): OpenTag[] {
    return this.openTags;
  }

  cork() {
    this.mCorked = true;
  }

  uncork() {
    this.mCorked = false;
    this._flush(() => {});
  }

  writeTag(tag: EbmlTag): void {
    const data = Buffer.concat([this.getTagDeclaration(tag), tools.writeContentForTag(tag)]);
    if (this.openTags.length > 0) {
      let openTag: OpenTag = Object.assign(new OpenTag(), tag);
      openTag.encodedContent = data;
      this.openTags[this.openTags.length-1].children.push(openTag);
    } else {
      this.bufferAndFlush(data);
    }
  }

  startTag(tag: EbmlTag): void {
    let writeableTag = Object.assign(new OpenTag(), tag);
    if (this.openTags.length > 0) {
      this.openTags[this.openTags.length - 1].children.push(writeableTag);
    }
    this.openTags.push(writeableTag);
  }

  endTag(tag: EbmlTag) {
    const inMemoryTag: OpenTag = this.openTags.pop();
    if(tag.type !== inMemoryTag.type) {
      throw `Logic error - ${tag.type} is not ${inMemoryTag.type}`;
    }
    let childData = Buffer.concat(inMemoryTag.children.map(child => child.encodedContent));
    let vintSize = null;
    if(inMemoryTag.size === -1) {
      vintSize = Buffer.from('01ffffffffffffff', 'hex');
    } else {
      let specialLength: number = undefined;
      if([
        EbmlTagId.Segment,
        EbmlTagId.Cluster
      ].some(i => i === inMemoryTag.type.id)) {
        specialLength = 8;
      }
      vintSize = tools.writeVint(childData.length, specialLength);
    }

    inMemoryTag.encodedContent = Buffer.concat([
      this.getTagDeclaration(tag),
      vintSize,
      childData
    ]);

    if (this.openTags.length < 1) {
      this.bufferAndFlush(inMemoryTag.encodedContent);
    }
  }
}

class OpenTag extends EbmlTag {
  children: OpenTag[] = [];
  encodedContent: Buffer;
}