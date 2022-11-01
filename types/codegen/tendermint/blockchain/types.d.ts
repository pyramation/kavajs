import { Block, BlockSDKType } from "../types/block";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
    height: Long;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
    height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
    height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseSDKType {
    height: Long;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
    block?: Block;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseSDKType {
    block?: BlockSDKType;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestSDKType {
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
    height: Long;
    base: Long;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseSDKType {
    height: Long;
    base: Long;
}
export interface Message {
    blockRequest?: BlockRequest;
    noBlockResponse?: NoBlockResponse;
    blockResponse?: BlockResponse;
    statusRequest?: StatusRequest;
    statusResponse?: StatusResponse;
}
export interface MessageSDKType {
    block_request?: BlockRequestSDKType;
    no_block_response?: NoBlockResponseSDKType;
    block_response?: BlockResponseSDKType;
    status_request?: StatusRequestSDKType;
    status_response?: StatusResponseSDKType;
}
export declare const BlockRequest: {
    encode(message: BlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest;
    fromJSON(object: any): BlockRequest;
    toJSON(message: BlockRequest): unknown;
    fromPartial(object: Partial<BlockRequest>): BlockRequest;
};
export declare const NoBlockResponse: {
    encode(message: NoBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse;
    fromJSON(object: any): NoBlockResponse;
    toJSON(message: NoBlockResponse): unknown;
    fromPartial(object: Partial<NoBlockResponse>): NoBlockResponse;
};
export declare const BlockResponse: {
    encode(message: BlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse;
    fromJSON(object: any): BlockResponse;
    toJSON(message: BlockResponse): unknown;
    fromPartial(object: Partial<BlockResponse>): BlockResponse;
};
export declare const StatusRequest: {
    encode(_: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest;
    fromJSON(_: any): StatusRequest;
    toJSON(_: StatusRequest): unknown;
    fromPartial(_: Partial<StatusRequest>): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse;
    fromJSON(object: any): StatusResponse;
    toJSON(message: StatusResponse): unknown;
    fromPartial(object: Partial<StatusResponse>): StatusResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
