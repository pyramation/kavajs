import { Params, ParamsSDKType, Deposit, DepositSDKType, Borrow, BorrowSDKType } from "./hard";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the hard module's genesis state. */
export interface GenesisState {
    params?: Params;
    previousAccumulationTimes: GenesisAccumulationTime[];
    deposits: Deposit[];
    borrows: Borrow[];
    totalSupplied: Coin[];
    totalBorrowed: Coin[];
    totalReserves: Coin[];
}
/** GenesisState defines the hard module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    previous_accumulation_times: GenesisAccumulationTimeSDKType[];
    deposits: DepositSDKType[];
    borrows: BorrowSDKType[];
    total_supplied: CoinSDKType[];
    total_borrowed: CoinSDKType[];
    total_reserves: CoinSDKType[];
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime?: Timestamp;
    supplyInterestFactor: string;
    borrowInterestFactor: string;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time?: TimestampSDKType;
    supply_interest_factor: string;
    borrow_interest_factor: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const GenesisAccumulationTime: {
    encode(message: GenesisAccumulationTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccumulationTime;
    fromJSON(object: any): GenesisAccumulationTime;
    toJSON(message: GenesisAccumulationTime): unknown;
    fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime;
};
