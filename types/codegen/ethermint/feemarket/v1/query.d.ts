import { Params, ParamsSDKType } from "./feemarket";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
    /** params define the evm module parameters. */
    params?: ParamsSDKType;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestSDKType {
}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    baseFee: string;
}
/** BaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseSDKType {
    base_fee: string;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequest {
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBlockGasRequestSDKType {
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponse {
    /** QueryBlockGasResponse returns block gas used for a given height. */
    gas: Long;
}
/** QueryBlockGasResponse returns block gas used for a given height. */
export interface QueryBlockGasResponseSDKType {
    /** QueryBlockGasResponse returns block gas used for a given height. */
    gas: Long;
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
export declare const QueryBaseFeeRequest: {
    encode(_: QueryBaseFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromJSON(_: any): QueryBaseFeeRequest;
    toJSON(_: QueryBaseFeeRequest): unknown;
    fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
};
export declare const QueryBaseFeeResponse: {
    encode(message: QueryBaseFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromJSON(object: any): QueryBaseFeeResponse;
    toJSON(message: QueryBaseFeeResponse): unknown;
    fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
};
export declare const QueryBlockGasRequest: {
    encode(_: QueryBlockGasRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasRequest;
    fromJSON(_: any): QueryBlockGasRequest;
    toJSON(_: QueryBlockGasRequest): unknown;
    fromPartial(_: Partial<QueryBlockGasRequest>): QueryBlockGasRequest;
};
export declare const QueryBlockGasResponse: {
    encode(message: QueryBlockGasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasResponse;
    fromJSON(object: any): QueryBlockGasResponse;
    toJSON(message: QueryBlockGasResponse): unknown;
    fromPartial(object: Partial<QueryBlockGasResponse>): QueryBlockGasResponse;
};
