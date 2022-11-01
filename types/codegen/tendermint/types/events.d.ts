import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface EventDataRoundState {
    height: Long;
    round: number;
    step: string;
}
export interface EventDataRoundStateSDKType {
    height: Long;
    round: number;
    step: string;
}
export declare const EventDataRoundState: {
    encode(message: EventDataRoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDataRoundState;
    fromJSON(object: any): EventDataRoundState;
    toJSON(message: EventDataRoundState): unknown;
    fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState;
};
