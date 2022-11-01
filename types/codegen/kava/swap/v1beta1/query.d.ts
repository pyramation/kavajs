import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./swap";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponse {
    /** params represents the swap module parameters */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponseSDKType {
    /** params represents the swap module parameters */
    params?: ParamsSDKType;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pool_id filters pools by id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequestSDKType {
    /** pool_id filters pools by id */
    pool_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools represents returned pools */
    pools: PoolResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponseSDKType {
    /** pools represents returned pools */
    pools: PoolResponseSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** Pool represents the state of a single pool */
export interface PoolResponse {
    /** name represents the name of the pool */
    name: string;
    /** coins represents the total reserves of the pool */
    coins: Coin[];
    /** total_shares represents the total shares of the pool */
    totalShares: string;
}
/** Pool represents the state of a single pool */
export interface PoolResponseSDKType {
    /** name represents the name of the pool */
    name: string;
    /** coins represents the total reserves of the pool */
    coins: CoinSDKType[];
    /** total_shares represents the total shares of the pool */
    total_shares: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** pool_id optionally fitlers deposits by pool id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** pool_id optionally fitlers deposits by pool id */
    pool_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponseSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponse {
    /** depositor represents the owner of the deposit */
    depositor: string;
    /** pool_id represents the pool the deposit is for */
    poolId: string;
    /** shares_owned presents the shares owned by the depositor for the pool */
    sharesOwned: string;
    /** shares_value represents the coin value of the shares_owned */
    sharesValue: Coin[];
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponseSDKType {
    /** depositor represents the owner of the deposit */
    depositor: string;
    /** pool_id represents the pool the deposit is for */
    pool_id: string;
    /** shares_owned presents the shares owned by the depositor for the pool */
    shares_owned: string;
    /** shares_value represents the coin value of the shares_owned */
    shares_value: CoinSDKType[];
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
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromJSON(object: any): PoolResponse;
    toJSON(message: PoolResponse): unknown;
    fromPartial(object: Partial<PoolResponse>): PoolResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const DepositResponse: {
    encode(message: DepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse;
    fromJSON(object: any): DepositResponse;
    toJSON(message: DepositResponse): unknown;
    fromPartial(object: Partial<DepositResponse>): DepositResponse;
};
