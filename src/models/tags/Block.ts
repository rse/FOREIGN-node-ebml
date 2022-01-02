import { EbmlDataTag } from "./EbmlDataTag";
import { BlockLacing, BlockLacing2Name } from "../enums/BlockLacing";
import { Tools } from "../../tools";
import { EbmlTagId, EbmlTagId2Name } from "../enums/EbmlTagId";
import { EbmlElementType, EbmlElementType2Name } from "../enums/EbmlElementType";
import { EbmlTagPosition2Name } from "../enums/EbmlTagPosition";

export class Block extends EbmlDataTag {
    payload: Buffer;
    track: number;
    value: number;

    invisible: boolean;
    lacing: BlockLacing;

    constructor(subTypeId?: number) {
        super(subTypeId || EbmlTagId.Block, EbmlElementType.Binary);
    }

    protected writeTrackBuffer(): Buffer {
        return Tools.writeVint(this.track);
    }

    protected writeValueBuffer(): Buffer {
        let value = Buffer.alloc(2);
        value.writeInt16BE(this.value, 0);
        return value;
    }

    protected writeFlagsBuffer(): Buffer {
        let flags = 0x00;
        if(this.invisible) {
            flags |= 0x10;
        }

        switch(this.lacing) {
            case BlockLacing.None:
            break;
            case BlockLacing.Xiph:
            flags |= 0x04;
            break;
            case BlockLacing.EBML:
            flags |= 0x08;
            break;
            case BlockLacing.FixedSize:
            flags |= 0x0c;
            break;
        }

        return Buffer.of(flags);
    }

    encodeContent(): Buffer {
        return Buffer.concat([
            this.writeTrackBuffer(),
            this.writeValueBuffer(),
            this.writeFlagsBuffer(),
            this.payload
        ]);
    }
    
    dumpContent(): String {
        const tag = EbmlTagId2Name["0x" + this.id.toString(16)];
        const dump = `<${tag} type="${EbmlElementType2Name[this.type]}" ` +
            `position="${EbmlTagPosition2Name[this.position]}" size="${this.size}" ` +
            `track="${this.track}" value="${this.value}" ` +
            `invisible="${this.invisible}" lacing="${BlockLacing2Name[this.lacing]}" ` +
            `payload-length="${this.payload.byteLength}" payload="${this.payload.toString('hex')}"/>`;
        return dump;
    }

    parseContent(data: Buffer): void {
      const track = Tools.readVint(data);
      this.track = track.value;
      this.value = Tools.readSigned(data.subarray(track.length, track.length+2));
      let flags: number = data[track.length+2];
      this.invisible = Boolean(flags & 0x10);
      switch(flags & 0x0c) {
        case 0x00:
          this.lacing = BlockLacing.None;
          break;
        
        case 0x04:
          this.lacing = BlockLacing.Xiph;
          break;

        case 0x08:
          this.lacing = BlockLacing.EBML;
          break;

        case 0x0c:
          this.lacing = BlockLacing.FixedSize;
          break;
      }
      this.payload = data.slice(track.length + 3);
    }
}
