import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the savings module. */
export interface Params {
    supportedDenoms: string[];
}
/** Params defines the parameters for the savings module. */
export interface ParamsSDKType {
    supported_denoms: string[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface Deposit {
    depositor: string;
    amount: Coin[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */
export interface DepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromJSON(object: any): Deposit;
    toJSON(message: Deposit): unknown;
    fromPartial(object: Partial<Deposit>): Deposit;
};
