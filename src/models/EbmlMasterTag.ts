import { EbmlTag } from "./EbmlTag";
import { EbmlElementType } from "./EbmlElementType";
import { EbmlTagPosition } from "./EbmlTagPosition";

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

    parseContent(content: Buffer): void {
        throw new Error("Method not implemented.");
    }
}