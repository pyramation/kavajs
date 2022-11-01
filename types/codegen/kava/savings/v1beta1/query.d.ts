import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, Deposit, DepositSDKType } from "./store";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParamsRequest defines the request type for querying x/savings
 * parameters.
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsRequest defines the request type for querying x/savings
 * parameters.
 */
export interface QueryParamsRequestSDKType {
}
/**
 * QueryParamsResponse defines the response type for querying x/savings
 * parameters.
 */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QueryParamsResponse defines the response type for querying x/savings
 * parameters.
 */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryDepositsRequest defines the request type for querying x/savings
 * deposits.
 */
export interface QueryDepositsRequest {
    denom: string;
    owner: string;
    pagination?: PageRequest;
}
/**
 * QueryDepositsRequest defines the request type for querying x/savings
 * deposits.
 */
export interface QueryDepositsRequestSDKType {
    denom: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryDepositsResponse defines the response type for querying x/savings
 * deposits.
 */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}
/**
 * QueryDepositsResponse defines the response type for querying x/savings
 * deposits.
 */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
    pagination?: PageResponseSDKType;
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
