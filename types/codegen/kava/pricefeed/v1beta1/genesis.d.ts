import { Params, ParamsSDKType, PostedPrice, PostedPriceSDKType } from "./store";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    postedPrices: PostedPrice[];
}
/** GenesisState defines the pricefeed module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params?: ParamsSDKType;
    posted_prices: PostedPriceSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
