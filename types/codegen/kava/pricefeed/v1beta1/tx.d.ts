import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPrice {
    /** address of client */
    from: string;
    marketId: string;
    price: string;
    expiry?: Timestamp;
}
/** MsgPostPrice represents a method for creating a new post price */
export interface MsgPostPriceSDKType {
    /** address of client */
    from: string;
    market_id: string;
    price: string;
    expiry?: TimestampSDKType;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponse {
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */
export interface MsgPostPriceResponseSDKType {
}
export declare const MsgPostPrice: {
    encode(message: MsgPostPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPrice;
    fromJSON(object: any): MsgPostPrice;
    toJSON(message: MsgPostPrice): unknown;
    fromPartial(object: Partial<MsgPostPrice>): MsgPostPrice;
};
export declare const MsgPostPriceResponse: {
    encode(_: MsgPostPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPriceResponse;
    fromJSON(_: any): MsgPostPriceResponse;
    toJSON(_: MsgPostPriceResponse): unknown;
    fromPartial(_: Partial<MsgPostPriceResponse>): MsgPostPriceResponse;
};
