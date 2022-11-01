import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/kavadist parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/kavadist parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/kavadist parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/kavadist parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryBalanceRequest defines the request type for querying x/kavadist balance. */
export interface QueryBalanceRequest {
}
/** QueryBalanceRequest defines the request type for querying x/kavadist balance. */
export interface QueryBalanceRequestSDKType {
}
/** QueryBalanceResponse defines the response type for querying x/kavadist balance. */
export interface QueryBalanceResponse {
    coins: Coin[];
}
/** QueryBalanceResponse defines the response type for querying x/kavadist balance. */
export interface QueryBalanceResponseSDKType {
    coins: CoinSDKType[];
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
export declare const QueryBalanceRequest: {
    encode(_: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(_: any): QueryBalanceRequest;
    toJSON(_: QueryBalanceRequest): unknown;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
