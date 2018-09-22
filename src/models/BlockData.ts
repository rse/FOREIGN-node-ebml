import { BlockLacing } from "./BlockLacing";

export class BlockData {
    payload: Buffer;
    track: number;
    value: number;

    invisible: boolean;
    lacing: BlockLacing;
}