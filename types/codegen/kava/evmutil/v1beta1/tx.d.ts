import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20. */
export interface MsgConvertCoinToERC20 {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: Coin;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20. */
export interface MsgConvertCoinToERC20SDKType {
    /** Kava bech32 address initiating the conversion. */
    initiator: string;
    /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */
    receiver: string;
    /** Amount is the sdk.Coin amount to convert. */
    amount?: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20Response {
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */
export interface MsgConvertCoinToERC20ResponseSDKType {
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin. */
export interface MsgConvertERC20ToCoin {
    /** EVM 0x hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the converted sdk.Coin. */
    receiver: string;
    /** EVM 0x hex address of the ERC20 contract. */
    kavaErc20Address: string;
    /** ERC20 token amount to convert. */
    amount: string;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin. */
export interface MsgConvertERC20ToCoinSDKType {
    /** EVM 0x hex address initiating the conversion. */
    initiator: string;
    /** Kava bech32 address that will receive the converted sdk.Coin. */
    receiver: string;
    /** EVM 0x hex address of the ERC20 contract. */
    kava_erc20_address: string;
    /** ERC20 token amount to convert. */
    amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponse {
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */
export interface MsgConvertERC20ToCoinResponseSDKType {
}
export declare const MsgConvertCoinToERC20: {
    encode(message: MsgConvertCoinToERC20, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20;
    fromJSON(object: any): MsgConvertCoinToERC20;
    toJSON(message: MsgConvertCoinToERC20): unknown;
    fromPartial(object: Partial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20;
};
export declare const MsgConvertCoinToERC20Response: {
    encode(_: MsgConvertCoinToERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20Response;
    fromJSON(_: any): MsgConvertCoinToERC20Response;
    toJSON(_: MsgConvertCoinToERC20Response): unknown;
    fromPartial(_: Partial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response;
};
export declare const MsgConvertERC20ToCoin: {
    encode(message: MsgConvertERC20ToCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoin;
    fromJSON(object: any): MsgConvertERC20ToCoin;
    toJSON(message: MsgConvertERC20ToCoin): unknown;
    fromPartial(object: Partial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin;
};
export declare const MsgConvertERC20ToCoinResponse: {
    encode(_: MsgConvertERC20ToCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoinResponse;
    fromJSON(_: any): MsgConvertERC20ToCoinResponse;
    toJSON(_: MsgConvertERC20ToCoinResponse): unknown;
    fromPartial(_: Partial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse;
};
