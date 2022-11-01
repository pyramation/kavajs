import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export interface AminoMsgCreateCDP extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgCreateCDP";
    value: {
        sender: string;
        collateral: {
            denom: string;
            amount: string;
        };
        principal: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface AminoMsgDeposit extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        owner: string;
        collateral: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        owner: string;
        collateral: {
            denom: string;
            amount: string;
        };
        collateral_type: string;
    };
}
export interface AminoMsgDrawDebt extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgDrawDebt";
    value: {
        sender: string;
        collateral_type: string;
        principal: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgRepayDebt extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgRepayDebt";
    value: {
        sender: string;
        collateral_type: string;
        payment: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgLiquidate extends AminoMsg {
    type: "/kava.cdp.v1beta1.MsgLiquidate";
    value: {
        keeper: string;
        borrower: string;
        collateral_type: string;
    };
}
export declare const AminoConverter: {
    "/kava.cdp.v1beta1.MsgCreateCDP": {
        aminoType: string;
        toAmino: ({ sender, collateral, principal, collateralType }: MsgCreateCDP) => AminoMsgCreateCDP["value"];
        fromAmino: ({ sender, collateral, principal, collateral_type }: AminoMsgCreateCDP["value"]) => MsgCreateCDP;
    };
    "/kava.cdp.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, owner, collateral, collateral_type }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/kava.cdp.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, owner, collateral, collateralType }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ depositor, owner, collateral, collateral_type }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/kava.cdp.v1beta1.MsgDrawDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, principal }: MsgDrawDebt) => AminoMsgDrawDebt["value"];
        fromAmino: ({ sender, collateral_type, principal }: AminoMsgDrawDebt["value"]) => MsgDrawDebt;
    };
    "/kava.cdp.v1beta1.MsgRepayDebt": {
        aminoType: string;
        toAmino: ({ sender, collateralType, payment }: MsgRepayDebt) => AminoMsgRepayDebt["value"];
        fromAmino: ({ sender, collateral_type, payment }: AminoMsgRepayDebt["value"]) => MsgRepayDebt;
    };
    "/kava.cdp.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower, collateralType }: MsgLiquidate) => AminoMsgLiquidate["value"];
        fromAmino: ({ keeper, borrower, collateral_type }: AminoMsgLiquidate["value"]) => MsgLiquidate;
    };
};
