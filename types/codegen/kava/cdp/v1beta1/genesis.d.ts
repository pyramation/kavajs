import { CDP, CDPSDKType, Deposit, DepositSDKType } from "./cdp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    cdps: CDP[];
    deposits: Deposit[];
    startingCdpId: Long;
    debtDenom: string;
    govDenom: string;
    previousAccumulationTimes: GenesisAccumulationTime[];
    totalPrincipals: GenesisTotalPrincipal[];
}
/** GenesisState defines the cdp module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params?: ParamsSDKType;
    cdps: CDPSDKType[];
    deposits: DepositSDKType[];
    starting_cdp_id: Long;
    debt_denom: string;
    gov_denom: string;
    previous_accumulation_times: GenesisAccumulationTimeSDKType[];
    total_principals: GenesisTotalPrincipalSDKType[];
}
/** Params defines the parameters for the cdp module. */
export interface Params {
    collateralParams: CollateralParam[];
    debtParam?: DebtParam;
    globalDebtLimit?: Coin;
    surplusAuctionThreshold: string;
    surplusAuctionLot: string;
    debtAuctionThreshold: string;
    debtAuctionLot: string;
    circuitBreaker: boolean;
}
/** Params defines the parameters for the cdp module. */
export interface ParamsSDKType {
    collateral_params: CollateralParamSDKType[];
    debt_param?: DebtParamSDKType;
    global_debt_limit?: CoinSDKType;
    surplus_auction_threshold: string;
    surplus_auction_lot: string;
    debt_auction_threshold: string;
    debt_auction_lot: string;
    circuit_breaker: boolean;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParam {
    denom: string;
    referenceAsset: string;
    conversionFactor: string;
    debtFloor: string;
}
/** DebtParam defines governance params for debt assets */
export interface DebtParamSDKType {
    denom: string;
    reference_asset: string;
    conversion_factor: string;
    debt_floor: string;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParam {
    denom: string;
    type: string;
    liquidationRatio: string;
    debtLimit?: Coin;
    stabilityFee: string;
    auctionSize: string;
    liquidationPenalty: string;
    spotMarketId: string;
    liquidationMarketId: string;
    keeperRewardPercentage: string;
    checkCollateralizationIndexCount: string;
    conversionFactor: string;
}
/** CollateralParam defines governance parameters for each collateral type within the cdp module */
export interface CollateralParamSDKType {
    denom: string;
    type: string;
    liquidation_ratio: string;
    debt_limit?: CoinSDKType;
    stability_fee: string;
    auction_size: string;
    liquidation_penalty: string;
    spot_market_id: string;
    liquidation_market_id: string;
    keeper_reward_percentage: string;
    check_collateralization_index_count: string;
    conversion_factor: string;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime?: Timestamp;
    interestFactor: string;
}
/** GenesisAccumulationTime defines the previous distribution time and its corresponding denom */
export interface GenesisAccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time?: TimestampSDKType;
    interest_factor: string;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipal {
    collateralType: string;
    totalPrincipal: string;
}
/** GenesisTotalPrincipal defines the total principal and its corresponding collateral type */
export interface GenesisTotalPrincipalSDKType {
    collateral_type: string;
    total_principal: string;
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
export declare const DebtParam: {
    encode(message: DebtParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DebtParam;
    fromJSON(object: any): DebtParam;
    toJSON(message: DebtParam): unknown;
    fromPartial(object: Partial<DebtParam>): DebtParam;
};
export declare const CollateralParam: {
    encode(message: CollateralParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollateralParam;
    fromJSON(object: any): CollateralParam;
    toJSON(message: CollateralParam): unknown;
    fromPartial(object: Partial<CollateralParam>): CollateralParam;
};
export declare const GenesisAccumulationTime: {
    encode(message: GenesisAccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccumulationTime;
    fromJSON(object: any): GenesisAccumulationTime;
    toJSON(message: GenesisAccumulationTime): unknown;
    fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime;
};
export declare const GenesisTotalPrincipal: {
    encode(message: GenesisTotalPrincipal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisTotalPrincipal;
    fromJSON(object: any): GenesisTotalPrincipal;
    toJSON(message: GenesisTotalPrincipal): unknown;
    fromPartial(object: Partial<GenesisTotalPrincipal>): GenesisTotalPrincipal;
};
