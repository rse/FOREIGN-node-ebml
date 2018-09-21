import { Transform, TransformOptions, TransformCallback } from 'stream';
import { Tools as tools } from './tools';
import { AllEbmlTagTypes } from './allEbmlTagTypes';
import { EbmlTagType } from './models/EbmlTagType';
import { EbmlTag } from './models/EbmlTag';
import { EbmlElementType } from './models/EbmlElementType';
import { EbmlTagPosition } from './models/EbmlTagPosition';

enum ProcessState {
  Tag,
  Content
}

class ProcessingTag {
  type: EbmlTagType;
  absoluteStart: number;
  size: number;
}

export class EbmlDecoder extends Transform {
  private _buffer: Buffer = Buffer.alloc(0);
  private _currentPositionInBuffer: number = 0;
  private _currentBufferOffset: number = 0;
  private _tagStack: ProcessingTag[] = [];
  private _processingState: ProcessState = ProcessState.Tag;

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
    if(this._processingState === ProcessState.Tag) {
      if (this._currentPositionInBuffer >= this._buffer.length) {
        return false;
      }
      const tag = tools.readVint(this._buffer, this._currentPositionInBuffer);
      if (tag == null) {
        return false;
      }
      const size = tools.readVint(this._buffer, this._currentPositionInBuffer + tag.length);
      if(size == null) {
        return false;
      }
      
      const tagId = tools.readHexString(this._buffer, this._currentPositionInBuffer, this._currentPositionInBuffer + tag.length);
      const tagType = this.getTagType(Number.parseInt(tagId, 16));
      const absoluteStart = this._currentBufferOffset + this._currentPositionInBuffer;
      this._tagStack.push({
        type: tagType,
        absoluteStart: absoluteStart,
        size: size.value
      });
      this._currentPositionInBuffer += (tag.length + size.length);
      
      this._processingState = ProcessState.Content;
    }
    if(this._processingState === ProcessState.Content) {
      const currentTag = this._tagStack[this._tagStack.length-1];
      
      if (currentTag.type.dataType === EbmlElementType.Master) {
        this.push(<EbmlTag>{
          type: currentTag.type,
          position: EbmlTagPosition.Start,
          size: currentTag.size
        });
        this._processingState = ProcessState.Tag;
      } else {
        if (this._buffer.length < this._currentPositionInBuffer + currentTag.size) {
          return false;
        }

        const data = this._buffer.slice(this._currentPositionInBuffer, this._currentPositionInBuffer + currentTag.size);
        this._processingState = ProcessState.Tag;

        this._currentPositionInBuffer += currentTag.size;
        this._currentBufferOffset += this._currentPositionInBuffer;
        this._buffer = this._buffer.slice(this._currentPositionInBuffer);
        this._currentPositionInBuffer = 0;
        
        this._tagStack.pop(); // remove the object from the stack
        
        this.push(<EbmlTag>{
          type: currentTag.type,
          position: EbmlTagPosition.Content,
          data: tools.readDataFromTag(
            currentTag.type,
            Buffer.from(data)
          )
        });
          
        while (this._tagStack.length > 0) {
          const nextTag = this._tagStack[this._tagStack.length - 1];
          if (this._currentBufferOffset + this._currentPositionInBuffer < (nextTag.absoluteStart + nextTag.size)) {
            break;
          }
          this.push(<EbmlTag>{
            type: nextTag.type,
            position: EbmlTagPosition.End,
            size: nextTag.size
          });
          this._tagStack.pop();
        }
      }
    }
    return true;
  }
}
