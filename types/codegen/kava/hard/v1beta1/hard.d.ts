import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the hard module. */
export interface Params {
    moneyMarkets: MoneyMarket[];
    minimumBorrowUsdValue: string;
}
/** Params defines the parameters for the hard module. */
export interface ParamsSDKType {
    money_markets: MoneyMarketSDKType[];
    minimum_borrow_usd_value: string;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarket {
    denom: string;
    borrowLimit?: BorrowLimit;
    spotMarketId: string;
    conversionFactor: string;
    interestRateModel?: InterestRateModel;
    reserveFactor: string;
    keeperRewardPercentage: string;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarketSDKType {
    denom: string;
    borrow_limit?: BorrowLimitSDKType;
    spot_market_id: string;
    conversion_factor: string;
    interest_rate_model?: InterestRateModelSDKType;
    reserve_factor: string;
    keeper_reward_percentage: string;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimit {
    hasMaxLimit: boolean;
    maximumLimit: string;
    loanToValue: string;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimitSDKType {
    has_max_limit: boolean;
    maximum_limit: string;
    loan_to_value: string;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModel {
    baseRateApy: string;
    baseMultiplier: string;
    kink: string;
    jumpMultiplier: string;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModelSDKType {
    base_rate_apy: string;
    base_multiplier: string;
    kink: string;
    jump_multiplier: string;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface Deposit {
    depositor: string;
    amount: Coin[];
    index: SupplyInterestFactor[];
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface DepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
    index: SupplyInterestFactorSDKType[];
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface Borrow {
    borrower: string;
    amount: Coin[];
    index: BorrowInterestFactor[];
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface BorrowSDKType {
    borrower: string;
    amount: CoinSDKType[];
    index: BorrowInterestFactorSDKType[];
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactor {
    denom: string;
    value: string;
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactorSDKType {
    denom: string;
    value: string;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactor {
    denom: string;
    value: string;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactorSDKType {
    denom: string;
    value: string;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProto {
    coins: Coin[];
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProtoSDKType {
    coins: CoinSDKType[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const MoneyMarket: {
    encode(message: MoneyMarket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MoneyMarket;
    fromJSON(object: any): MoneyMarket;
    toJSON(message: MoneyMarket): unknown;
    fromPartial(object: Partial<MoneyMarket>): MoneyMarket;
};
export declare const BorrowLimit: {
    encode(message: BorrowLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BorrowLimit;
    fromJSON(object: any): BorrowLimit;
    toJSON(message: BorrowLimit): unknown;
    fromPartial(object: Partial<BorrowLimit>): BorrowLimit;
};
export declare const InterestRateModel: {
    encode(message: InterestRateModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterestRateModel;
    fromJSON(object: any): InterestRateModel;
    toJSON(message: InterestRateModel): unknown;
    fromPartial(object: Partial<InterestRateModel>): InterestRateModel;
};
export declare const Deposit: {
    encode(message: Deposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit;
    fromJSON(object: any): Deposit;
    toJSON(message: Deposit): unknown;
    fromPartial(object: Partial<Deposit>): Deposit;
};
export declare const Borrow: {
    encode(message: Borrow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Borrow;
    fromJSON(object: any): Borrow;
    toJSON(message: Borrow): unknown;
    fromPartial(object: Partial<Borrow>): Borrow;
};
export declare const SupplyInterestFactor: {
    encode(message: SupplyInterestFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupplyInterestFactor;
    fromJSON(object: any): SupplyInterestFactor;
    toJSON(message: SupplyInterestFactor): unknown;
    fromPartial(object: Partial<SupplyInterestFactor>): SupplyInterestFactor;
};
export declare const BorrowInterestFactor: {
    encode(message: BorrowInterestFactor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BorrowInterestFactor;
    fromJSON(object: any): BorrowInterestFactor;
    toJSON(message: BorrowInterestFactor): unknown;
    fromPartial(object: Partial<BorrowInterestFactor>): BorrowInterestFactor;
};
export declare const CoinsProto: {
    encode(message: CoinsProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinsProto;
    fromJSON(object: any): CoinsProto;
    toJSON(message: CoinsProto): unknown;
    fromPartial(object: Partial<CoinsProto>): CoinsProto;
};
