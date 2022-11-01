import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MultiRewardIndex, MultiRewardIndexSDKType, USDXMintingClaim, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimSDKType, SwapClaim, SwapClaimSDKType, SavingsClaim, SavingsClaimSDKType, EarnClaim, EarnClaimSDKType } from "./claims";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTime {
    collateralType: string;
    previousAccumulationTime?: Timestamp;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */
export interface AccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time?: TimestampSDKType;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardState {
    accumulationTimes: AccumulationTime[];
    multiRewardIndexes: MultiRewardIndex[];
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */
export interface GenesisRewardStateSDKType {
    accumulation_times: AccumulationTimeSDKType[];
    multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
    params?: Params;
    usdxRewardState?: GenesisRewardState;
    hardSupplyRewardState?: GenesisRewardState;
    hardBorrowRewardState?: GenesisRewardState;
    delegatorRewardState?: GenesisRewardState;
    swapRewardState?: GenesisRewardState;
    usdxMintingClaims: USDXMintingClaim[];
    hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
    delegatorClaims: DelegatorClaim[];
    swapClaims: SwapClaim[];
    savingsRewardState?: GenesisRewardState;
    savingsClaims: SavingsClaim[];
    earnRewardState?: GenesisRewardState;
    earnClaims: EarnClaim[];
}
/** GenesisState is the state that must be provided at genesis. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    usdx_reward_state?: GenesisRewardStateSDKType;
    hard_supply_reward_state?: GenesisRewardStateSDKType;
    hard_borrow_reward_state?: GenesisRewardStateSDKType;
    delegator_reward_state?: GenesisRewardStateSDKType;
    swap_reward_state?: GenesisRewardStateSDKType;
    usdx_minting_claims: USDXMintingClaimSDKType[];
    hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
    delegator_claims: DelegatorClaimSDKType[];
    swap_claims: SwapClaimSDKType[];
    savings_reward_state?: GenesisRewardStateSDKType;
    savings_claims: SavingsClaimSDKType[];
    earn_reward_state?: GenesisRewardStateSDKType;
    earn_claims: EarnClaimSDKType[];
}
export declare const AccumulationTime: {
    encode(message: AccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccumulationTime;
    fromJSON(object: any): AccumulationTime;
    toJSON(message: AccumulationTime): unknown;
    fromPartial(object: Partial<AccumulationTime>): AccumulationTime;
};
export declare const GenesisRewardState: {
    encode(message: GenesisRewardState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRewardState;
    fromJSON(object: any): GenesisRewardState;
    toJSON(message: GenesisRewardState): unknown;
    fromPartial(object: Partial<GenesisRewardState>): GenesisRewardState;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
