import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ClaimType is the type of claim */
export declare enum ClaimType {
    CLAIM_TYPE_UNSPECIFIED = 0,
    CLAIM_TYPE_HARD_BORROW = 1,
    CLAIM_TYPE_HARD_SUPPLY = 2,
    CLAIM_TYPE_DELEGATOR = 3,
    CLAIM_TYPE_EARN = 4,
    CLAIM_TYPE_SAVINGS = 5,
    CLAIM_TYPE_SWAP = 6,
    CLAIM_TYPE_USDX_MINTING = 7,
    UNRECOGNIZED = -1
}
/** ClaimType is the type of claim */
export declare enum ClaimTypeSDKType {
    CLAIM_TYPE_UNSPECIFIED = 0,
    CLAIM_TYPE_HARD_BORROW = 1,
    CLAIM_TYPE_HARD_SUPPLY = 2,
    CLAIM_TYPE_DELEGATOR = 3,
    CLAIM_TYPE_EARN = 4,
    CLAIM_TYPE_SAVINGS = 5,
    CLAIM_TYPE_SWAP = 6,
    CLAIM_TYPE_USDX_MINTING = 7,
    UNRECOGNIZED = -1
}
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaim {
    owner: Uint8Array;
    reward?: Coin;
}
/** BaseClaim is a claim with a single reward coin types */
export interface BaseClaimSDKType {
    owner: Uint8Array;
    reward?: CoinSDKType;
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaim {
    owner: Uint8Array;
    reward: Coin[];
}
/** BaseMultiClaim is a claim with multiple reward coin types */
export interface BaseMultiClaimSDKType {
    owner: Uint8Array;
    reward: CoinSDKType[];
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndex {
    collateralType: string;
    rewardFactor: Uint8Array;
}
/** RewardIndex stores reward accumulation information */
export interface RewardIndexSDKType {
    collateral_type: string;
    reward_factor: Uint8Array;
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProto {
    rewardIndexes: RewardIndex[];
}
/** RewardIndexesProto defines a Protobuf wrapper around a RewardIndexes slice */
export interface RewardIndexesProtoSDKType {
    reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndex {
    collateralType: string;
    rewardIndexes: RewardIndex[];
}
/** MultiRewardIndex stores reward accumulation information on multiple reward types */
export interface MultiRewardIndexSDKType {
    collateral_type: string;
    reward_indexes: RewardIndexSDKType[];
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProto {
    multiRewardIndexes: MultiRewardIndex[];
}
/** MultiRewardIndexesProto defines a Protobuf wrapper around a MultiRewardIndexes slice */
export interface MultiRewardIndexesProtoSDKType {
    multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaim {
    baseClaim?: BaseClaim;
    rewardIndexes: RewardIndex[];
}
/** USDXMintingClaim is for USDX minting rewards */
export interface USDXMintingClaimSDKType {
    base_claim?: BaseClaimSDKType;
    reward_indexes: RewardIndexSDKType[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaim {
    baseClaim?: BaseMultiClaim;
    supplyRewardIndexes: MultiRewardIndex[];
    borrowRewardIndexes: MultiRewardIndex[];
}
/** HardLiquidityProviderClaim stores the hard liquidity provider rewards that can be claimed by owner */
export interface HardLiquidityProviderClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    supply_reward_indexes: MultiRewardIndexSDKType[];
    borrow_reward_indexes: MultiRewardIndexSDKType[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** DelegatorClaim stores delegation rewards that can be claimed by owner */
export interface DelegatorClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SwapClaim stores the swap rewards that can be claimed by owner */
export interface SwapClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** SavingsClaim stores the savings rewards that can be claimed by owner */
export interface SavingsClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaim {
    baseClaim?: BaseMultiClaim;
    rewardIndexes: MultiRewardIndex[];
}
/** EarnClaim stores the earn rewards that can be claimed by owner */
export interface EarnClaimSDKType {
    base_claim?: BaseMultiClaimSDKType;
    reward_indexes: MultiRewardIndexSDKType[];
}
/** Claim stores any generic rewards that can be claimed by owner */
export interface Claim {
    type: ClaimType;
    owner: Uint8Array;
    reward: Coin[];
    rewardIndexes: MultiRewardIndex[];
}
/** Claim stores any generic rewards that can be claimed by owner */
export interface ClaimSDKType {
    type: ClaimTypeSDKType;
    owner: Uint8Array;
    reward: CoinSDKType[];
    reward_indexes: MultiRewardIndexSDKType[];
}
export declare const BaseClaim: {
    encode(message: BaseClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseClaim;
    fromJSON(object: any): BaseClaim;
    toJSON(message: BaseClaim): unknown;
    fromPartial(object: Partial<BaseClaim>): BaseClaim;
};
export declare const BaseMultiClaim: {
    encode(message: BaseMultiClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseMultiClaim;
    fromJSON(object: any): BaseMultiClaim;
    toJSON(message: BaseMultiClaim): unknown;
    fromPartial(object: Partial<BaseMultiClaim>): BaseMultiClaim;
};
export declare const RewardIndex: {
    encode(message: RewardIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardIndex;
    fromJSON(object: any): RewardIndex;
    toJSON(message: RewardIndex): unknown;
    fromPartial(object: Partial<RewardIndex>): RewardIndex;
};
export declare const RewardIndexesProto: {
    encode(message: RewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardIndexesProto;
    fromJSON(object: any): RewardIndexesProto;
    toJSON(message: RewardIndexesProto): unknown;
    fromPartial(object: Partial<RewardIndexesProto>): RewardIndexesProto;
};
export declare const MultiRewardIndex: {
    encode(message: MultiRewardIndex, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardIndex;
    fromJSON(object: any): MultiRewardIndex;
    toJSON(message: MultiRewardIndex): unknown;
    fromPartial(object: Partial<MultiRewardIndex>): MultiRewardIndex;
};
export declare const MultiRewardIndexesProto: {
    encode(message: MultiRewardIndexesProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardIndexesProto;
    fromJSON(object: any): MultiRewardIndexesProto;
    toJSON(message: MultiRewardIndexesProto): unknown;
    fromPartial(object: Partial<MultiRewardIndexesProto>): MultiRewardIndexesProto;
};
export declare const USDXMintingClaim: {
    encode(message: USDXMintingClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): USDXMintingClaim;
    fromJSON(object: any): USDXMintingClaim;
    toJSON(message: USDXMintingClaim): unknown;
    fromPartial(object: Partial<USDXMintingClaim>): USDXMintingClaim;
};
export declare const HardLiquidityProviderClaim: {
    encode(message: HardLiquidityProviderClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HardLiquidityProviderClaim;
    fromJSON(object: any): HardLiquidityProviderClaim;
    toJSON(message: HardLiquidityProviderClaim): unknown;
    fromPartial(object: Partial<HardLiquidityProviderClaim>): HardLiquidityProviderClaim;
};
export declare const DelegatorClaim: {
    encode(message: DelegatorClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorClaim;
    fromJSON(object: any): DelegatorClaim;
    toJSON(message: DelegatorClaim): unknown;
    fromPartial(object: Partial<DelegatorClaim>): DelegatorClaim;
};
export declare const SwapClaim: {
    encode(message: SwapClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapClaim;
    fromJSON(object: any): SwapClaim;
    toJSON(message: SwapClaim): unknown;
    fromPartial(object: Partial<SwapClaim>): SwapClaim;
};
export declare const SavingsClaim: {
    encode(message: SavingsClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SavingsClaim;
    fromJSON(object: any): SavingsClaim;
    toJSON(message: SavingsClaim): unknown;
    fromPartial(object: Partial<SavingsClaim>): SavingsClaim;
};
export declare const EarnClaim: {
    encode(message: EarnClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EarnClaim;
    fromJSON(object: any): EarnClaim;
    toJSON(message: EarnClaim): unknown;
    fromPartial(object: Partial<EarnClaim>): EarnClaim;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Claim;
    fromJSON(object: any): Claim;
    toJSON(message: Claim): unknown;
    fromPartial(object: Partial<Claim>): Claim;
};
