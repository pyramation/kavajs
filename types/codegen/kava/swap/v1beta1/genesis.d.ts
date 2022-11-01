import { Params, ParamsSDKType, PoolRecord, PoolRecordSDKType, ShareRecord, ShareRecordSDKType } from "./swap";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters related to swap */
    params?: Params;
    /** pool_records defines the available pools */
    poolRecords: PoolRecord[];
    /** share_records defines the owned shares of each pool */
    shareRecords: ShareRecord[];
}
/** GenesisState defines the swap module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters related to swap */
    params?: ParamsSDKType;
    /** pool_records defines the available pools */
    pool_records: PoolRecordSDKType[];
    /** share_records defines the owned shares of each pool */
    share_records: ShareRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
