import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest defines the request type for querying x/issuance parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/issuance parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/issuance parameters. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/issuance parameters. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
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
