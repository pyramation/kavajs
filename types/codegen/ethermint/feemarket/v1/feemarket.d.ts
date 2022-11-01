import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
    /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    noBaseFee: boolean;
    /**
     * base fee change denominator bounds the amount the base fee can change
     * between blocks.
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticityMultiplier: number;
    /** height at which the base fee calculation is enabled. */
    enableHeight: Long;
    /** base fee for EIP-1559 blocks. */
    baseFee: string;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
    /** no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    no_base_fee: boolean;
    /**
     * base fee change denominator bounds the amount the base fee can change
     * between blocks.
     */
    base_fee_change_denominator: number;
    /**
     * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticity_multiplier: number;
    /** height at which the base fee calculation is enabled. */
    enable_height: Long;
    /** base fee for EIP-1559 blocks. */
    base_fee: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
