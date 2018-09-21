import { EbmlTagId } from "./EbmlTagId";
import { EbmlElementType } from "./EbmlElementType";

export class EbmlTagType {
    id: EbmlTagId;
    dataType: EbmlElementType;
    level: number;
    minver: number;
    description: string;
}