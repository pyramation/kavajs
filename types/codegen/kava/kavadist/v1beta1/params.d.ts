import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** Params governance parameters for kavadist module */
export interface Params {
    active: boolean;
    periods: Period[];
    infrastructureParams?: InfrastructureParams;
}
/** Params governance parameters for kavadist module */
export interface ParamsSDKType {
    active: boolean;
    periods: PeriodSDKType[];
    infrastructure_params?: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParams {
    infrastructurePeriods: Period[];
    coreRewards: CoreReward[];
    partnerRewards: PartnerReward[];
}
/** InfrastructureParams define the parameters for infrastructure rewards. */
export interface InfrastructureParamsSDKType {
    infrastructure_periods: PeriodSDKType[];
    core_rewards: CoreRewardSDKType[];
    partner_rewards: PartnerRewardSDKType[];
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreReward {
    address: Uint8Array;
    weight: string;
}
/** CoreReward defines the reward weights for core infrastructure providers. */
export interface CoreRewardSDKType {
    address: Uint8Array;
    weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerReward {
    address: Uint8Array;
    rewardsPerSecond?: Coin;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */
export interface PartnerRewardSDKType {
    address: Uint8Array;
    rewards_per_second?: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface Period {
    /** example "2020-03-01T15:20:00Z" */
    start?: Timestamp;
    /** example "2020-06-01T15:20:00Z" */
    end?: Timestamp;
    /** example "1.000000003022265980"  - 10% inflation */
    inflation: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */
export interface PeriodSDKType {
    /** example "2020-03-01T15:20:00Z" */
    start?: TimestampSDKType;
    /** example "2020-06-01T15:20:00Z" */
    end?: TimestampSDKType;
    /** example "1.000000003022265980"  - 10% inflation */
    inflation: Uint8Array;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const InfrastructureParams: {
    encode(message: InfrastructureParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InfrastructureParams;
    fromJSON(object: any): InfrastructureParams;
    toJSON(message: InfrastructureParams): unknown;
    fromPartial(object: Partial<InfrastructureParams>): InfrastructureParams;
};
export declare const CoreReward: {
    encode(message: CoreReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoreReward;
    fromJSON(object: any): CoreReward;
    toJSON(message: CoreReward): unknown;
    fromPartial(object: Partial<CoreReward>): CoreReward;
};
export declare const PartnerReward: {
    encode(message: PartnerReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PartnerReward;
    fromJSON(object: any): PartnerReward;
    toJSON(message: PartnerReward): unknown;
    fromPartial(object: Partial<PartnerReward>): PartnerReward;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial(object: Partial<Period>): Period;
};
