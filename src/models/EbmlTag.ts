import { EbmlTagType } from "./EbmlTagType";
import { EbmlTagPosition } from "./EbmlTagPosition";
import { SimpleBlockData } from "./SimpleBlockData";

export class EbmlTag {
    type: EbmlTagType;
    position: EbmlTagPosition;
    size: number;
    data?: number | string | SimpleBlockData | Buffer;
}