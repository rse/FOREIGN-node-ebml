import { EbmlTag } from "../EbmlTag";
import { EbmlTagId2Name } from "../enums/EbmlTagId";
import { EbmlElementType, EbmlElementType2Name } from "../enums/EbmlElementType";
import { EbmlTagPosition, EbmlTagPosition2Name } from "../enums/EbmlTagPosition";
import { Tools } from "../../tools";
import { EbmlTagFactory } from "../EbmlTagFactory";

export class EbmlMasterTag extends EbmlTag {

    private _children: EbmlTag[] = [];
    get Children(): EbmlTag[] {
        return this._children;
    }
    set Children(value: EbmlTag[]) {
        this._children = value;
    }
    
    constructor(
        id: number,
        position: EbmlTagPosition = EbmlTagPosition.Content
    ) {
        super(id, EbmlElementType.Master, position);
    }

    encodeContent(): Buffer {
        return Buffer.concat(this._children.map(child => child.encode()));
    }

    dumpContent(): String {
        const tag = EbmlTagId2Name["0x" + this.id.toString(16)];
        let dump;
        if (this.position === EbmlTagPosition.Start)
            dump = `<${tag} type="${EbmlElementType2Name[this.type]}" ` +
                `position="${EbmlTagPosition2Name[this.position]}" size="${this.size}">`;
        else if (this.position === EbmlTagPosition.End)
            dump = `</${tag}>`;
        else if (this.position === EbmlTagPosition.Content) {
            if (this._children.length > 0) {
                dump = `<${tag} type="${EbmlElementType2Name[this.type]}" ` +
                    `position="${EbmlTagPosition2Name[this.position]}" size="${this.size}">\n`;
                dump += (this._children.map(child => child.dump()).join("").replace(/^(.+)$/mg, "    $1"));
                dump += "</${tag}>";
            }
            else
                dump = `<${tag} type="${EbmlElementType2Name[this.type]}" ` +
                    `position="${EbmlTagPosition2Name[this.position]}" size="${this.size}"/>`;
        }
        return dump;
    }

    parseContent(content: Buffer): void {
        while(content.length > 0) {
            const tag = Tools.readVint(content);
            const size = Tools.readVint(content, tag.length);
            
            const tagIdHex = Tools.readHexString(content, 0, tag.length)
            const tagId = Number.parseInt(tagIdHex, 16);
            let tagObject = EbmlTagFactory.create(tagId);
            tagObject.size = size.value;

            let totalTagLength = tag.length + size.length + size.value;
            tagObject.parseContent(content.slice(tag.length + size.length, totalTagLength));
            this._children.push(tagObject);

            content = content.slice(totalTagLength);
        }
    }
}
