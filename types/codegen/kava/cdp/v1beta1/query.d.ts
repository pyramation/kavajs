import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./genesis";
import { ModuleAccount, ModuleAccountSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, DepositSDKType, TotalPrincipal, TotalPrincipalSDKType, TotalCollateral, TotalCollateralSDKType } from "./cdp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequestSDKType {
}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
    accounts: ModuleAccount[];
}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponseSDKType {
    accounts: ModuleAccountSDKType[];
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequest {
    collateralType: string;
    owner: string;
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequestSDKType {
    collateral_type: string;
    owner: string;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponse {
    cdp?: CDPResponse;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponseSDKType {
    cdp?: CDPResponseSDKType;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequest {
    collateralType: string;
    owner: string;
    id: Long;
    /** sdk.Dec as a string */
    ratio: string;
    pagination?: PageRequest;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequestSDKType {
    collateral_type: string;
    owner: string;
    id: Long;
    /** sdk.Dec as a string */
    ratio: string;
    pagination?: PageRequestSDKType;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponse {
    cdps: CDPResponse[];
    pagination?: PageResponse;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponseSDKType {
    cdps: CDPResponseSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    collateralType: string;
    owner: string;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
    collateral_type: string;
    owner: string;
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
    deposits: DepositSDKType[];
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequest {
    collateralType: string;
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequestSDKType {
    collateral_type: string;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponse {
    totalPrincipal: TotalPrincipal[];
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponseSDKType {
    total_principal: TotalPrincipalSDKType[];
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequest {
    collateralType: string;
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequestSDKType {
    collateral_type: string;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponse {
    totalCollateral: TotalCollateral[];
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponseSDKType {
    total_collateral: TotalCollateralSDKType[];
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponse {
    id: Long;
    owner: string;
    type: string;
    collateral?: Coin;
    principal?: Coin;
    accumulatedFees?: Coin;
    feesUpdated?: Timestamp;
    interestFactor: string;
    collateralValue?: Coin;
    collateralizationRatio: string;
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponseSDKType {
    id: Long;
    owner: string;
    type: string;
    collateral?: CoinSDKType;
    principal?: CoinSDKType;
    accumulated_fees?: CoinSDKType;
    fees_updated?: TimestampSDKType;
    interest_factor: string;
    collateral_value?: CoinSDKType;
    collateralization_ratio: string;
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
export declare const QueryAccountsRequest: {
    encode(_: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(_: any): QueryAccountsRequest;
    toJSON(_: QueryAccountsRequest): unknown;
    fromPartial(_: Partial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryCdpRequest: {
    encode(message: QueryCdpRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpRequest;
    fromJSON(object: any): QueryCdpRequest;
    toJSON(message: QueryCdpRequest): unknown;
    fromPartial(object: Partial<QueryCdpRequest>): QueryCdpRequest;
};
export declare const QueryCdpResponse: {
    encode(message: QueryCdpResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpResponse;
    fromJSON(object: any): QueryCdpResponse;
    toJSON(message: QueryCdpResponse): unknown;
    fromPartial(object: Partial<QueryCdpResponse>): QueryCdpResponse;
};
export declare const QueryCdpsRequest: {
    encode(message: QueryCdpsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsRequest;
    fromJSON(object: any): QueryCdpsRequest;
    toJSON(message: QueryCdpsRequest): unknown;
    fromPartial(object: Partial<QueryCdpsRequest>): QueryCdpsRequest;
};
export declare const QueryCdpsResponse: {
    encode(message: QueryCdpsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsResponse;
    fromJSON(object: any): QueryCdpsResponse;
    toJSON(message: QueryCdpsResponse): unknown;
    fromPartial(object: Partial<QueryCdpsResponse>): QueryCdpsResponse;
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
export declare const QueryTotalPrincipalRequest: {
    encode(message: QueryTotalPrincipalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalRequest;
    fromJSON(object: any): QueryTotalPrincipalRequest;
    toJSON(message: QueryTotalPrincipalRequest): unknown;
    fromPartial(object: Partial<QueryTotalPrincipalRequest>): QueryTotalPrincipalRequest;
};
export declare const QueryTotalPrincipalResponse: {
    encode(message: QueryTotalPrincipalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalResponse;
    fromJSON(object: any): QueryTotalPrincipalResponse;
    toJSON(message: QueryTotalPrincipalResponse): unknown;
    fromPartial(object: Partial<QueryTotalPrincipalResponse>): QueryTotalPrincipalResponse;
};
export declare const QueryTotalCollateralRequest: {
    encode(message: QueryTotalCollateralRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralRequest;
    fromJSON(object: any): QueryTotalCollateralRequest;
    toJSON(message: QueryTotalCollateralRequest): unknown;
    fromPartial(object: Partial<QueryTotalCollateralRequest>): QueryTotalCollateralRequest;
};
export declare const QueryTotalCollateralResponse: {
    encode(message: QueryTotalCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralResponse;
    fromJSON(object: any): QueryTotalCollateralResponse;
    toJSON(message: QueryTotalCollateralResponse): unknown;
    fromPartial(object: Partial<QueryTotalCollateralResponse>): QueryTotalCollateralResponse;
};
export declare const CDPResponse: {
    encode(message: CDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CDPResponse;
    fromJSON(object: any): CDPResponse;
    toJSON(message: CDPResponse): unknown;
    fromPartial(object: Partial<CDPResponse>): CDPResponse;
};
