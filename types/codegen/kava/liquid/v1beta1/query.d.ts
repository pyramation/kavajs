import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequest {
    /** delegator is the address of the account to query */
    delegator: string;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceRequestSDKType {
    /** delegator is the address of the account to query */
    delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponse {
    /** vested is the amount of all delegated coins that have vested (ie not locked) */
    vested?: Coin;
    /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
    vesting?: Coin;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */
export interface QueryDelegatedBalanceResponseSDKType {
    /** vested is the amount of all delegated coins that have vested (ie not locked) */
    vested?: CoinSDKType;
    /** vesting is the amount of all delegated coins that are still vesting (ie locked) */
    vesting?: CoinSDKType;
}
export declare const QueryDelegatedBalanceRequest: {
    encode(message: QueryDelegatedBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatedBalanceRequest;
    fromJSON(object: any): QueryDelegatedBalanceRequest;
    toJSON(message: QueryDelegatedBalanceRequest): unknown;
    fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest;
};
export declare const QueryDelegatedBalanceResponse: {
    encode(message: QueryDelegatedBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatedBalanceResponse;
    fromJSON(object: any): QueryDelegatedBalanceResponse;
    toJSON(message: QueryDelegatedBalanceResponse): unknown;
    fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse;
};
