import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
    from: string;
    to: string;
    recipientOtherChain: string;
    senderOtherChain: string;
    randomNumberHash: string;
    timestamp: Long;
    amount: Coin[];
    heightSpan: Long;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapSDKType {
    from: string;
    to: string;
    recipient_other_chain: string;
    sender_other_chain: string;
    random_number_hash: string;
    timestamp: Long;
    amount: CoinSDKType[];
    height_span: Long;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseSDKType {
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
    from: string;
    swapId: string;
    randomNumber: string;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapSDKType {
    from: string;
    swap_id: string;
    random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseSDKType {
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
    from: string;
    swapId: string;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapSDKType {
    from: string;
    swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseSDKType {
}
export declare const MsgCreateAtomicSwap: {
    encode(message: MsgCreateAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwap;
    fromJSON(object: any): MsgCreateAtomicSwap;
    toJSON(message: MsgCreateAtomicSwap): unknown;
    fromPartial(object: Partial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap;
};
export declare const MsgCreateAtomicSwapResponse: {
    encode(_: MsgCreateAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwapResponse;
    fromJSON(_: any): MsgCreateAtomicSwapResponse;
    toJSON(_: MsgCreateAtomicSwapResponse): unknown;
    fromPartial(_: Partial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse;
};
export declare const MsgClaimAtomicSwap: {
    encode(message: MsgClaimAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwap;
    fromJSON(object: any): MsgClaimAtomicSwap;
    toJSON(message: MsgClaimAtomicSwap): unknown;
    fromPartial(object: Partial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap;
};
export declare const MsgClaimAtomicSwapResponse: {
    encode(_: MsgClaimAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwapResponse;
    fromJSON(_: any): MsgClaimAtomicSwapResponse;
    toJSON(_: MsgClaimAtomicSwapResponse): unknown;
    fromPartial(_: Partial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse;
};
export declare const MsgRefundAtomicSwap: {
    encode(message: MsgRefundAtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwap;
    fromJSON(object: any): MsgRefundAtomicSwap;
    toJSON(message: MsgRefundAtomicSwap): unknown;
    fromPartial(object: Partial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap;
};
export declare const MsgRefundAtomicSwapResponse: {
    encode(_: MsgRefundAtomicSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwapResponse;
    fromJSON(_: any): MsgRefundAtomicSwapResponse;
    toJSON(_: MsgRefundAtomicSwapResponse): unknown;
    fromPartial(_: Partial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse;
};
