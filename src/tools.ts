import { EbmlTagType } from "./models/EbmlTagType";
import { SimpleBlockData } from "./models/SimpleBlockData";
import { EbmlElementType } from "./models/EbmlElementType";
import { EbmlTagId } from "./models/EbmlTagId";
import { EbmlTag } from "./models/EbmlTag";

export class Tools {
  /**
   * read variable length integer per
   * https://www.matroska.org/technical/specs/index.html#EBML_ex
   * @param {Buffer} buffer containing input
   * @param {Number} [start=0] position in buffer
   * @returns {{length: Number, value: number}}  value / length object
   */
  static readVint(buffer, start = 0) {
    const length = 8 - Math.floor(Math.log2(buffer[start]));
    if (length > 8) {
      const number = Tools.readHexString(buffer, start, start + length);
      throw new Error(`Unrepresentable length: ${length} ${number}`);
    }

    if (start + length > buffer.length) {
      return null;
    }

    let value = buffer[start] & ((1 << (8 - length)) - 1);
    for (let i = 1; i < length; i += 1) {
      if (i === 7) {
        if (value >= 2 ** 8 && buffer[start + 7] > 0) {
          return {
            length,
            value: -1,
          };
        }
      }
      value *= 2 ** 8;
      value += buffer[start + i];
    }

    return {
      length,
      value,
    };
  }

  /**
   * write variable length integer
   * @param {Number} value to store into buffer
   * @returns {Buffer} containing the value
   */
  static writeVint(value) {
    if (value < 0 || value > 2 ** 53) {
      throw new Error(`Unrepresentable value: ${value}`);
    }

    let length = 1;
    for (length = 1; length <= 8; length += 1) {
      if (value < 2 ** (7 * length) - 1) {
        break;
      }
    }

    const buffer = Buffer.alloc(length);
    let val = value;
    for (let i = 1; i <= length; i += 1) {
      const b = val & 0xff;
      buffer[length - i] = b;
      val -= b;
      val /= 2 ** 8;
    }
    buffer[0] |= 1 << (8 - length);

    return buffer;
  }

  static padStart(val: string): string {
    if(val.length == 0) {
      return '00';
    }
    if(val.length == 1) {
      return '0' + val;
    }
    return val;
  }

  /**
   * get a hex text string from Buff[start,end)
   * @param {Buffer} buff from which to read the string
   * @param {Number} [start=0] starting point (default 0)
   * @param {Number} [end=buff.byteLength] ending point (default the whole buffer)
   * @returns {string} the hex string
   */
  static readHexString(buff, start = 0, end = buff.byteLength) {
    return Array.from(buff.slice(start, end))
      .map(q => Number(q).toString(16))
      .reduce((acc, current) => `${acc}${this.padStart(current)}`, '');
  }

  /**
   * tries to read out a UTF-8 encoded string
   * @param  {Buffer} buff the buffer to attempt to read from
   * @return {string|null}      the decoded text, or null if unable to
   */
  static readUtf8(buff) {
    try {
      return Buffer.from(buff).toString('utf8');
    } catch (exception) {
      return null;
    }
  }

  /**
   * get an unsigned number from a buffer
   * @param {Buffer} buff from which to read variable-length unsigned number
   * @returns {number|string} result (in hex for lengths > 6)
   */
  static readUnsigned(buff: Buffer): number | string {
    const b = new DataView(buff.buffer, buff.byteOffset, buff.byteLength);
    switch (buff.byteLength) {
      case 1:
        return b.getUint8(0);
      case 2:
        return b.getUint16(0);
      case 4:
        return b.getUint32(0);
      default:
        break;
    }
    if (buff.byteLength <= 6) {
      return buff.reduce((acc, current) => acc * 256 + current, 0);
    }

    return Tools.readHexString(buff, 0, buff.byteLength);
  }

  static writeUnsigned(num: number | string): Buffer {
    //TODO improve this
    if(typeof num === 'string') {
      return Buffer.from(num, 'hex');
    } else {
      //Any larger numbers should be passed as hexadecimal
      var buf = Buffer.alloc(4);
      buf.fill(0);
      buf.writeUInt32BE(num, 0);
      let firstValueIndex = buf.findIndex(b => b !== 0);
      if(firstValueIndex === -1) {
        firstValueIndex = 0;
      }
      let ret = buf.slice(firstValueIndex);
      return ret;
    }
  }

  /**
   * get an signed number from a buffer
   * @static
   * @param {Buffer} buff from which to read variable-length signed number
   * @returns {number} result
   */
  static readSigned(buff) {
    const b = new DataView(buff.buffer, buff.byteOffset, buff.byteLength);
    switch (buff.byteLength) {
      case 1:
        return b.getInt8(0);
      case 2:
        return b.getInt16(0);
      case 4:
        return b.getInt32(0);
      default:
        return NaN;
    }
  }

  static writeSigned(num: number): Buffer {
    var buf = Buffer.alloc(8);
    buf.writeInt32BE(num, 0);
    return buf;
  }

  /**
   * get an floating-point number from a buffer
   * @static
   * @param {Buffer} buff from which to read variable-length floating-point number
   * @returns {number} result
   */
  static readFloat(buff: Buffer) {
    const b = new DataView(buff.buffer, buff.byteOffset, buff.byteLength);
    switch (buff.byteLength) {
      case 4:
        return b.getFloat32(0);
      case 8:
        return b.getFloat64(0);
      default:
        return NaN;
    }
  }

  static writeFloat(num: number): Buffer {
    let buf = Buffer.alloc(8);
    let written = buf.writeFloatBE(num, 0);
    if(written <= 4) {
      buf = buf.slice(0,4);
    }
    return buf;
  }

  static readDataFromTag(tagType: EbmlTagType, data: Buffer): number | string | SimpleBlockData | Buffer {
    switch (tagType.dataType) {
      case EbmlElementType.UnsignedInt:
        return Tools.readUnsigned(data);
      case EbmlElementType.Float:
        return Tools.readFloat(data);
      case EbmlElementType.Integer:
        return Tools.readSigned(data);
      case EbmlElementType.String:
        return String.fromCharCode(...data);
      case EbmlElementType["Utf-8"]:
        return Tools.readUtf8(data);
      default:
        break;
    }

    if (tagType.id === EbmlTagId.SimpleBlock || tagType.id === EbmlTagId.Block) {
      let simpleBlockData = new SimpleBlockData();
      let p = 0;
      const track = Tools.readVint(data, p);
      p += track.length;
      simpleBlockData.track = track.value;
      const value = Tools.readSigned(data.slice(p, 2));
      p += 2;
      if (tagType.id === EbmlTagId.SimpleBlock) {
        simpleBlockData.keyframe = Boolean(data[p] & 0x80);
        simpleBlockData.discardable = Boolean(data[p] & 0x01);
      }
      p += 1;
      simpleBlockData.payload = data.slice(p);
      return simpleBlockData;
    }

    return data;
  }

  static writeContentForTag(tag: EbmlTag): Buffer {
    let outData: Buffer;
    switch (tag.type.dataType) {
      case EbmlElementType.UnsignedInt:
        outData = Tools.writeUnsigned(<number>tag.data);
        break;
      case EbmlElementType.Float:
        outData = Tools.writeFloat(<number>tag.data);
        break;
      case EbmlElementType.Integer:
        outData = Tools.writeSigned(<number>tag.data);
        break;
      case EbmlElementType.String:
        outData = Buffer.from(<string>tag.data, "ascii");
        break;
      case EbmlElementType["Utf-8"]:
        outData = Buffer.from(<string>tag.data, "utf8");
        break;
      case EbmlElementType.Binary:
      default:
        outData = <Buffer>tag.data;
        break;
    }

    if (tag.type.id === EbmlTagId.SimpleBlock || tag.type.id === EbmlTagId.Block) {
      let simpleBlockData: SimpleBlockData = <SimpleBlockData>tag.data;

      let len = 3+simpleBlockData.payload.length;
      outData = Buffer.alloc(len);
      outData[0] = simpleBlockData.track;
      outData[2] = simpleBlockData.keyframe ? 0x80 : 0x00;
      outData[2] |= simpleBlockData.discardable ? 0x01 : 0x00;
      simpleBlockData.payload.copy(outData, 3, 0);
    }
    
    let vint = Tools.writeVint(outData.length);
    return Buffer.concat([vint,outData]);
  }
}
