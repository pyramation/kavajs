import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/auction parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/auction parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequest {
    auctionId: Long;
}
/** QueryAuctionRequest is the request type for the Query/Auction RPC method. */
export interface QueryAuctionRequestSDKType {
    auction_id: Long;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponse {
    auction?: Any;
}
/** QueryAuctionResponse is the response type for the Query/Auction RPC method. */
export interface QueryAuctionResponseSDKType {
    auction?: AnySDKType;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequest {
    type: string;
    owner: string;
    denom: string;
    phase: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryAuctionsRequest is the request type for the Query/Auctions RPC method. */
export interface QueryAuctionsRequestSDKType {
    type: string;
    owner: string;
    denom: string;
    phase: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponse {
    auctions: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAuctionsResponse is the response type for the Query/Auctions RPC method. */
export interface QueryAuctionsResponseSDKType {
    auctions: AnySDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequest {
}
/** QueryNextAuctionIDRequest defines the request type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDRequestSDKType {
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponse {
    id: Long;
}
/** QueryNextAuctionIDResponse defines the response type for querying x/auction next auction ID. */
export interface QueryNextAuctionIDResponseSDKType {
    id: Long;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAuctionRequest: {
    encode(message: QueryAuctionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest;
    fromJSON(object: any): QueryAuctionRequest;
    toJSON(message: QueryAuctionRequest): unknown;
    fromPartial(object: Partial<QueryAuctionRequest>): QueryAuctionRequest;
};
export declare const QueryAuctionResponse: {
    encode(message: QueryAuctionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionResponse;
    fromJSON(object: any): QueryAuctionResponse;
    toJSON(message: QueryAuctionResponse): unknown;
    fromPartial(object: Partial<QueryAuctionResponse>): QueryAuctionResponse;
};
export declare const QueryAuctionsRequest: {
    encode(message: QueryAuctionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsRequest;
    fromJSON(object: any): QueryAuctionsRequest;
    toJSON(message: QueryAuctionsRequest): unknown;
    fromPartial(object: Partial<QueryAuctionsRequest>): QueryAuctionsRequest;
};
export declare const QueryAuctionsResponse: {
    encode(message: QueryAuctionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionsResponse;
    fromJSON(object: any): QueryAuctionsResponse;
    toJSON(message: QueryAuctionsResponse): unknown;
    fromPartial(object: Partial<QueryAuctionsResponse>): QueryAuctionsResponse;
};
export declare const QueryNextAuctionIDRequest: {
    encode(_: QueryNextAuctionIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextAuctionIDRequest;
    fromJSON(_: any): QueryNextAuctionIDRequest;
    toJSON(_: QueryNextAuctionIDRequest): unknown;
    fromPartial(_: Partial<QueryNextAuctionIDRequest>): QueryNextAuctionIDRequest;
};
export declare const QueryNextAuctionIDResponse: {
    encode(message: QueryNextAuctionIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextAuctionIDResponse;
    fromJSON(object: any): QueryNextAuctionIDResponse;
    toJSON(message: QueryNextAuctionIDResponse): unknown;
    fromPartial(object: Partial<QueryNextAuctionIDResponse>): QueryNextAuctionIDResponse;
};
