import { Tools } from "../../tools";
import { Block } from "./Block";
import { EbmlTagId, EbmlTagId2Name } from "../enums/EbmlTagId";
import { EbmlElementType2Name } from "../enums/EbmlElementType";
import { BlockLacing2Name } from "../enums/BlockLacing";
import { EbmlTagPosition2Name } from "../enums/EbmlTagPosition";

export class SimpleBlock extends Block {

    discardable: boolean;
    keyframe: boolean; 

    constructor() {
        super(EbmlTagId.SimpleBlock);
    }

    encodeContent(): Buffer {
        let flags = this.writeFlagsBuffer();

        if(this.keyframe) {
            flags[0] |= 0x80;
        }
        if(this.discardable) {
            flags[0] |= 0x01;
        }

        return Buffer.concat([
            this.writeTrackBuffer(),
            this.writeValueBuffer(),
            flags,
            this.payload
        ]);
    }

    dumpContent(): String {
        const tag = EbmlTagId2Name["0x" + this.id.toString(16)];
        const dump = `<${tag} type="${EbmlElementType2Name[this.type]}" ` +
            `position="${EbmlTagPosition2Name[this.position]}" size="${this.size}" ` +
            `track="${this.track}" value="${this.value}" ` +
            `invisible="${this.invisible}" lacing="${BlockLacing2Name[this.lacing]}" ` +
            `keyframe="${this.keyframe}" discardable="${this.discardable}" ` +
            `payload-length="${this.payload.byteLength}" payload="${this.payload.toString('hex')}"/>`;
        return dump;
    }

    parseContent(data: Buffer): void {
        super.parseContent(data);

        const track = Tools.readVint(data);
        let flags: number = data[track.length+2];
        this.keyframe = Boolean(flags & 0x80);
        this.discardable = Boolean(flags & 0x01);
    }
}
