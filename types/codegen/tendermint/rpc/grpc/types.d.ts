import { ResponseCheckTx, ResponseCheckTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
export interface RequestPing {
}
export interface RequestPingSDKType {
}
export interface RequestBroadcastTx {
    tx: Uint8Array;
}
export interface RequestBroadcastTxSDKType {
    tx: Uint8Array;
}
export interface ResponsePing {
}
export interface ResponsePingSDKType {
}
export interface ResponseBroadcastTx {
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
}
export interface ResponseBroadcastTxSDKType {
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
}
export declare const RequestPing: {
    encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing;
    fromJSON(_: any): RequestPing;
    toJSON(_: RequestPing): unknown;
    fromPartial(_: Partial<RequestPing>): RequestPing;
};
export declare const RequestBroadcastTx: {
    encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx;
    fromJSON(object: any): RequestBroadcastTx;
    toJSON(message: RequestBroadcastTx): unknown;
    fromPartial(object: Partial<RequestBroadcastTx>): RequestBroadcastTx;
};
export declare const ResponsePing: {
    encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing;
    fromJSON(_: any): ResponsePing;
    toJSON(_: ResponsePing): unknown;
    fromPartial(_: Partial<ResponsePing>): ResponsePing;
};
export declare const ResponseBroadcastTx: {
    encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx;
    fromJSON(object: any): ResponseBroadcastTx;
    toJSON(message: ResponseBroadcastTx): unknown;
    fromPartial(object: Partial<ResponseBroadcastTx>): ResponseBroadcastTx;
};
