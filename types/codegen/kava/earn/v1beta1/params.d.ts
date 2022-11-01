import { AllowedVault, AllowedVaultSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the earn module. */
export interface Params {
    allowedVaults: AllowedVault[];
}
/** Params defines the parameters of the earn module. */
export interface ParamsSDKType {
    allowed_vaults: AllowedVaultSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
