import { Params, ParamsSDKType } from "./feemarket";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /**
     * block gas is the amount of gas used on the last block before the upgrade.
     * Zero by default.
     */
    blockGas: Long;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params?: ParamsSDKType;
    /**
     * block gas is the amount of gas used on the last block before the upgrade.
     * Zero by default.
     */
    block_gas: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
