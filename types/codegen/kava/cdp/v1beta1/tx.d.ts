import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDP {
    sender: string;
    collateral?: Coin;
    principal?: Coin;
    collateralType: string;
}
/** MsgCreateCDP defines a message to create a new CDP. */
export interface MsgCreateCDPSDKType {
    sender: string;
    collateral?: CoinSDKType;
    principal?: CoinSDKType;
    collateral_type: string;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponse {
    cdpId: Long;
}
/** MsgCreateCDPResponse defines the Msg/CreateCDP response type. */
export interface MsgCreateCDPResponseSDKType {
    cdp_id: Long;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDeposit {
    depositor: string;
    owner: string;
    collateral?: Coin;
    collateralType: string;
}
/** MsgDeposit defines a message to deposit to a CDP. */
export interface MsgDepositSDKType {
    depositor: string;
    owner: string;
    collateral?: CoinSDKType;
    collateral_type: string;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdraw {
    depositor: string;
    owner: string;
    collateral?: Coin;
    collateralType: string;
}
/** MsgWithdraw defines a message to withdraw collateral from a CDP. */
export interface MsgWithdrawSDKType {
    depositor: string;
    owner: string;
    collateral?: CoinSDKType;
    collateral_type: string;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebt {
    sender: string;
    collateralType: string;
    principal?: Coin;
}
/** MsgDrawDebt defines a message to draw debt from a CDP. */
export interface MsgDrawDebtSDKType {
    sender: string;
    collateral_type: string;
    principal?: CoinSDKType;
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponse {
}
/** MsgDrawDebtResponse defines the Msg/DrawDebt response type. */
export interface MsgDrawDebtResponseSDKType {
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebt {
    sender: string;
    collateralType: string;
    payment?: Coin;
}
/** MsgRepayDebt defines a message to repay debt from a CDP. */
export interface MsgRepayDebtSDKType {
    sender: string;
    collateral_type: string;
    payment?: CoinSDKType;
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponse {
}
/** MsgRepayDebtResponse defines the Msg/RepayDebt response type. */
export interface MsgRepayDebtResponseSDKType {
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidate {
    keeper: string;
    borrower: string;
    collateralType: string;
}
/**
 * MsgLiquidate defines a message to attempt to liquidate a CDP whos
 * collateralization ratio is under its liquidation ratio.
 */
export interface MsgLiquidateSDKType {
    keeper: string;
    borrower: string;
    collateral_type: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
}
export declare const MsgCreateCDP: {
    encode(message: MsgCreateCDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDP;
    fromJSON(object: any): MsgCreateCDP;
    toJSON(message: MsgCreateCDP): unknown;
    fromPartial(object: Partial<MsgCreateCDP>): MsgCreateCDP;
};
export declare const MsgCreateCDPResponse: {
    encode(message: MsgCreateCDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDPResponse;
    fromJSON(object: any): MsgCreateCDPResponse;
    toJSON(message: MsgCreateCDPResponse): unknown;
    fromPartial(object: Partial<MsgCreateCDPResponse>): MsgCreateCDPResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromJSON(object: any): MsgWithdraw;
    toJSON(message: MsgWithdraw): unknown;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(_: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(_: any): MsgWithdrawResponse;
    toJSON(_: MsgWithdrawResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgDrawDebt: {
    encode(message: MsgDrawDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebt;
    fromJSON(object: any): MsgDrawDebt;
    toJSON(message: MsgDrawDebt): unknown;
    fromPartial(object: Partial<MsgDrawDebt>): MsgDrawDebt;
};
export declare const MsgDrawDebtResponse: {
    encode(_: MsgDrawDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebtResponse;
    fromJSON(_: any): MsgDrawDebtResponse;
    toJSON(_: MsgDrawDebtResponse): unknown;
    fromPartial(_: Partial<MsgDrawDebtResponse>): MsgDrawDebtResponse;
};
export declare const MsgRepayDebt: {
    encode(message: MsgRepayDebt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebt;
    fromJSON(object: any): MsgRepayDebt;
    toJSON(message: MsgRepayDebt): unknown;
    fromPartial(object: Partial<MsgRepayDebt>): MsgRepayDebt;
};
export declare const MsgRepayDebtResponse: {
    encode(_: MsgRepayDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebtResponse;
    fromJSON(_: any): MsgRepayDebtResponse;
    toJSON(_: MsgRepayDebtResponse): unknown;
    fromPartial(_: Partial<MsgRepayDebtResponse>): MsgRepayDebtResponse;
};
export declare const MsgLiquidate: {
    encode(message: MsgLiquidate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidate;
    fromJSON(object: any): MsgLiquidate;
    toJSON(message: MsgLiquidate): unknown;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
};
export declare const MsgLiquidateResponse: {
    encode(_: MsgLiquidateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateResponse;
    fromJSON(_: any): MsgLiquidateResponse;
    toJSON(_: MsgLiquidateResponse): unknown;
    fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
};
