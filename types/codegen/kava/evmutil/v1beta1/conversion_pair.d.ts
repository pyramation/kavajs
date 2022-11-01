import * as _m0 from "protobufjs/minimal";
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPair {
    /** ERC20 address of the token on the Kava EVM */
    kavaErc20Address: Uint8Array;
    /** Denom of the corresponding sdk.Coin */
    denom: string;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */
export interface ConversionPairSDKType {
    /** ERC20 address of the token on the Kava EVM */
    kava_erc20_address: Uint8Array;
    /** Denom of the corresponding sdk.Coin */
    denom: string;
}
export declare const ConversionPair: {
    encode(message: ConversionPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConversionPair;
    fromJSON(object: any): ConversionPair;
    toJSON(message: ConversionPair): unknown;
    fromPartial(object: Partial<ConversionPair>): ConversionPair;
};
