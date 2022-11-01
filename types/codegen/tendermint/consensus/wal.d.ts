import { Message, MessageSDKType } from "./types";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { EventDataRoundState, EventDataRoundStateSDKType } from "../types/events";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
    msg?: Message;
    peerId: string;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoSDKType {
    msg?: MessageSDKType;
    peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
    duration?: Duration;
    height: Long;
    round: number;
    step: number;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoSDKType {
    duration?: DurationSDKType;
    height: Long;
    round: number;
    step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
    height: Long;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightSDKType {
    height: Long;
}
export interface WALMessage {
    eventDataRoundState?: EventDataRoundState;
    msgInfo?: MsgInfo;
    timeoutInfo?: TimeoutInfo;
    endHeight?: EndHeight;
}
export interface WALMessageSDKType {
    event_data_round_state?: EventDataRoundStateSDKType;
    msg_info?: MsgInfoSDKType;
    timeout_info?: TimeoutInfoSDKType;
    end_height?: EndHeightSDKType;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
    time?: Timestamp;
    msg?: WALMessage;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageSDKType {
    time?: TimestampSDKType;
    msg?: WALMessageSDKType;
}
export declare const MsgInfo: {
    encode(message: MsgInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo;
    fromJSON(object: any): MsgInfo;
    toJSON(message: MsgInfo): unknown;
    fromPartial(object: Partial<MsgInfo>): MsgInfo;
};
export declare const TimeoutInfo: {
    encode(message: TimeoutInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo;
    fromJSON(object: any): TimeoutInfo;
    toJSON(message: TimeoutInfo): unknown;
    fromPartial(object: Partial<TimeoutInfo>): TimeoutInfo;
};
export declare const EndHeight: {
    encode(message: EndHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight;
    fromJSON(object: any): EndHeight;
    toJSON(message: EndHeight): unknown;
    fromPartial(object: Partial<EndHeight>): EndHeight;
};
export declare const WALMessage: {
    encode(message: WALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage;
    fromJSON(object: any): WALMessage;
    toJSON(message: WALMessage): unknown;
    fromPartial(object: Partial<WALMessage>): WALMessage;
};
export declare const TimedWALMessage: {
    encode(message: TimedWALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage;
    fromJSON(object: any): TimedWALMessage;
    toJSON(message: TimedWALMessage): unknown;
    fromPartial(object: Partial<TimedWALMessage>): TimedWALMessage;
};
