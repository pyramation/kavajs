import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
    nextAuctionId: Long;
    params?: Params;
    /** Genesis auctions */
    auctions: Any[];
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateSDKType {
    next_auction_id: Long;
    params?: ParamsSDKType;
    /** Genesis auctions */
    auctions: AnySDKType[];
}
/** Params defines the parameters for the issuance module. */
export interface Params {
    maxAuctionDuration?: Duration;
    forwardBidDuration?: Duration;
    reverseBidDuration?: Duration;
    incrementSurplus: Uint8Array;
    incrementDebt: Uint8Array;
    incrementCollateral: Uint8Array;
}
/** Params defines the parameters for the issuance module. */
export interface ParamsSDKType {
    max_auction_duration?: DurationSDKType;
    forward_bid_duration?: DurationSDKType;
    reverse_bid_duration?: DurationSDKType;
    increment_surplus: Uint8Array;
    increment_debt: Uint8Array;
    increment_collateral: Uint8Array;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
