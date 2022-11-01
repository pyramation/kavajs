import { ConversionPair, ConversionPairSDKType } from "./conversion_pair";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisState {
    accounts: Account[];
    /** params defines all the parameters of the module. */
    params?: Params;
}
/** GenesisState defines the evmutil module's genesis state. */
export interface GenesisStateSDKType {
    accounts: AccountSDKType[];
    /** params defines all the parameters of the module. */
    params?: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface Account {
    address: Uint8Array;
    /** balance indicates the amount of akava owned by the address. */
    balance: string;
}
/** BalanceAccount defines an account in the evmutil module. */
export interface AccountSDKType {
    address: Uint8Array;
    /** balance indicates the amount of akava owned by the address. */
    balance: string;
}
/** Params defines the evmutil module params */
export interface Params {
    /**
     * enabled_conversion_pairs defines the list of conversion pairs allowed to be
     * converted between Kava ERC20 and sdk.Coin
     */
    enabledConversionPairs: ConversionPair[];
}
/** Params defines the evmutil module params */
export interface ParamsSDKType {
    /**
     * enabled_conversion_pairs defines the list of conversion pairs allowed to be
     * converted between Kava ERC20 and sdk.Coin
     */
    enabled_conversion_pairs: ConversionPairSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    fromPartial(object: Partial<Account>): Account;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
