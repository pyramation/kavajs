import { Params, ParamsSDKType } from "./store";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequest {
    marketId: string;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */
export interface QueryPriceRequestSDKType {
    market_id: string;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponse {
    price?: CurrentPriceResponse;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */
export interface QueryPriceResponseSDKType {
    price?: CurrentPriceResponseSDKType;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequest {
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */
export interface QueryPricesRequestSDKType {
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponse {
    prices: CurrentPriceResponse[];
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */
export interface QueryPricesResponseSDKType {
    prices: CurrentPriceResponseSDKType[];
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequest {
    marketId: string;
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */
export interface QueryRawPricesRequestSDKType {
    market_id: string;
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponse {
    rawPrices: PostedPriceResponse[];
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */
export interface QueryRawPricesResponseSDKType {
    raw_prices: PostedPriceResponseSDKType[];
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequest {
    marketId: string;
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */
export interface QueryOraclesRequestSDKType {
    market_id: string;
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponse {
    /** List of oracle addresses */
    oracles: string[];
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */
export interface QueryOraclesResponseSDKType {
    /** List of oracle addresses */
    oracles: string[];
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequest {
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */
export interface QueryMarketsRequestSDKType {
}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */
export interface QueryMarketsResponse {
    /** List of markets */
    markets: MarketResponse[];
}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */
export interface QueryMarketsResponseSDKType {
    /** List of markets */
    markets: MarketResponseSDKType[];
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */
export interface PostedPriceResponse {
    marketId: string;
    oracleAddress: string;
    price: string;
    expiry?: Timestamp;
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */
export interface PostedPriceResponseSDKType {
    market_id: string;
    oracle_address: string;
    price: string;
    expiry?: TimestampSDKType;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceResponse {
    marketId: string;
    price: string;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */
export interface CurrentPriceResponseSDKType {
    market_id: string;
    price: string;
}
/** MarketResponse defines an asset in the pricefeed. */
export interface MarketResponse {
    marketId: string;
    baseAsset: string;
    quoteAsset: string;
    oracles: string[];
    active: boolean;
}
/** MarketResponse defines an asset in the pricefeed. */
export interface MarketResponseSDKType {
    market_id: string;
    base_asset: string;
    quote_asset: string;
    oracles: string[];
    active: boolean;
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
export declare const QueryPriceRequest: {
    encode(message: QueryPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest;
    fromJSON(object: any): QueryPriceRequest;
    toJSON(message: QueryPriceRequest): unknown;
    fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest;
};
export declare const QueryPriceResponse: {
    encode(message: QueryPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse;
    fromJSON(object: any): QueryPriceResponse;
    toJSON(message: QueryPriceResponse): unknown;
    fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse;
};
export declare const QueryPricesRequest: {
    encode(_: QueryPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesRequest;
    fromJSON(_: any): QueryPricesRequest;
    toJSON(_: QueryPricesRequest): unknown;
    fromPartial(_: Partial<QueryPricesRequest>): QueryPricesRequest;
};
export declare const QueryPricesResponse: {
    encode(message: QueryPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesResponse;
    fromJSON(object: any): QueryPricesResponse;
    toJSON(message: QueryPricesResponse): unknown;
    fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse;
};
export declare const QueryRawPricesRequest: {
    encode(message: QueryRawPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesRequest;
    fromJSON(object: any): QueryRawPricesRequest;
    toJSON(message: QueryRawPricesRequest): unknown;
    fromPartial(object: Partial<QueryRawPricesRequest>): QueryRawPricesRequest;
};
export declare const QueryRawPricesResponse: {
    encode(message: QueryRawPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesResponse;
    fromJSON(object: any): QueryRawPricesResponse;
    toJSON(message: QueryRawPricesResponse): unknown;
    fromPartial(object: Partial<QueryRawPricesResponse>): QueryRawPricesResponse;
};
export declare const QueryOraclesRequest: {
    encode(message: QueryOraclesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesRequest;
    fromJSON(object: any): QueryOraclesRequest;
    toJSON(message: QueryOraclesRequest): unknown;
    fromPartial(object: Partial<QueryOraclesRequest>): QueryOraclesRequest;
};
export declare const QueryOraclesResponse: {
    encode(message: QueryOraclesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesResponse;
    fromJSON(object: any): QueryOraclesResponse;
    toJSON(message: QueryOraclesResponse): unknown;
    fromPartial(object: Partial<QueryOraclesResponse>): QueryOraclesResponse;
};
export declare const QueryMarketsRequest: {
    encode(_: QueryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest;
    fromJSON(_: any): QueryMarketsRequest;
    toJSON(_: QueryMarketsRequest): unknown;
    fromPartial(_: Partial<QueryMarketsRequest>): QueryMarketsRequest;
};
export declare const QueryMarketsResponse: {
    encode(message: QueryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse;
    fromJSON(object: any): QueryMarketsResponse;
    toJSON(message: QueryMarketsResponse): unknown;
    fromPartial(object: Partial<QueryMarketsResponse>): QueryMarketsResponse;
};
export declare const PostedPriceResponse: {
    encode(message: PostedPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PostedPriceResponse;
    fromJSON(object: any): PostedPriceResponse;
    toJSON(message: PostedPriceResponse): unknown;
    fromPartial(object: Partial<PostedPriceResponse>): PostedPriceResponse;
};
export declare const CurrentPriceResponse: {
    encode(message: CurrentPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPriceResponse;
    fromJSON(object: any): CurrentPriceResponse;
    toJSON(message: CurrentPriceResponse): unknown;
    fromPartial(object: Partial<CurrentPriceResponse>): CurrentPriceResponse;
};
export declare const MarketResponse: {
    encode(message: MarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MarketResponse;
    fromJSON(object: any): MarketResponse;
    toJSON(message: MarketResponse): unknown;
    fromPartial(object: Partial<MarketResponse>): MarketResponse;
};
