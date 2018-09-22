import { Transform, TransformOptions, TransformCallback } from 'stream';
import { Tools as tools } from './tools';
import { AllEbmlTagTypes } from './allEbmlTagTypes';
import { EbmlTagType } from './models/EbmlTagType';
import { EbmlTag } from './models/EbmlTag';
import { EbmlElementType } from './models/EbmlElementType';
import { EbmlTagPosition } from './models/EbmlTagPosition';
import { EbmlTagId } from './models/EbmlTagId';

export class EbmlDecoder extends Transform {
  private _currentBufferOffset: number = 0;
  private _tagStack: ProcessingTag[] = [];
  private _buffer: Buffer = Buffer.alloc(0);

  /* Expose property for testing */
  get buffer(): Buffer {
    return this._buffer;
  }

  constructor(options: TransformOptions = {}) {
    super({ ...options, readableObjectMode: true });
  }

  _transform(chunk: any, enc: string, done: TransformCallback): void {
    this._buffer = Buffer.concat([this._buffer, Buffer.from(chunk)]);
    while(this.parseTags());
    done();
  }

  private getTagType(tag: number): EbmlTagType {
    if (Number.isInteger(tag) && AllEbmlTagTypes.has(tag)) {
      return AllEbmlTagTypes.get(tag);
    }

    return <EbmlTagType>{
      id: undefined,
      dataType: undefined,
      level: undefined,
      minver: undefined,
      description: undefined
    };
  }

  private parseTags(): boolean {
    const currentTag = this.readTagHeader(this._buffer);
    if(!currentTag) {
      return false;
    }

    if(currentTag.tagType.dataType === EbmlElementType.Master) {
      this._tagStack.push({
        type: currentTag.tagType,
        absoluteStart: this._currentBufferOffset,
        contentSize: currentTag.tagSize,
        headerSize: currentTag.tagHeaderLength
      });
      this.push(<EbmlTag>{
        type: currentTag.tagType,
        position: EbmlTagPosition.Start,
        size: currentTag.tagSize
      });
      this.advanceBuffer(currentTag.tagHeaderLength);

      return true;
    } else {
      if(this._buffer.length < currentTag.tagHeaderLength + currentTag.tagSize) {
        return false;
      }

      const data = this._buffer.slice(currentTag.tagHeaderLength, currentTag.tagHeaderLength+ currentTag.tagSize);
      this.advanceBuffer(currentTag.tagHeaderLength + currentTag.tagSize);
      
      this.push(<EbmlTag>{
        type: currentTag.tagType,
        position: EbmlTagPosition.Content,
        size: currentTag.tagSize,
        data: tools.readDataFromTag(
          currentTag.tagType,
          Buffer.from(data)
        )
      });
      
      while (this._tagStack.length > 0) {
        const nextTag = this._tagStack[this._tagStack.length - 1];
        if (this._currentBufferOffset < (nextTag.absoluteStart + nextTag.headerSize + nextTag.contentSize)) {
          break;
        }

        this.push(<EbmlTag>{
          type: nextTag.type,
          position: EbmlTagPosition.End,
          size: nextTag.contentSize
        });
        this._tagStack.pop();
      }
    }

    return true;
  }

  private advanceBuffer(length: number): void {
      this._currentBufferOffset += length;
      this._buffer = this._buffer.slice(length);
  }

  private readTagHeader(buffer: Buffer, offset: number = 0): EbmlTagHeader {
    if (buffer.length == 0) {
      return null;
    }
    const tag = tools.readVint(buffer);
    if (tag == null) {
      return null;
    }
    const size = tools.readVint(buffer, tag.length);
    if(size == null) {
      return null;
    }
    
    const tagId = tools.readHexString(buffer, 0, tag.length);
    const tagType = this.getTagType(Number.parseInt(tagId, 16));

    return {
      tagType: tagType,
      tagSize: size.value,
      tagHeaderLength: tag.length + size.length
    };
  }

}

class EbmlTagHeader {
  tagType: EbmlTagType;
  tagSize: number;
  tagHeaderLength: number;
}

class ProcessingTag {
  type: EbmlTagType;
  absoluteStart: number;
  headerSize: number;
  contentSize: number;
}