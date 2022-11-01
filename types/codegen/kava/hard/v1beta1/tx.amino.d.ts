import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgBorrow extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgBorrow";
    value: {
        borrower: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgRepay extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgRepay";
    value: {
        sender: string;
        owner: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgLiquidate extends AminoMsg {
    type: "/kava.hard.v1beta1.MsgLiquidate";
    value: {
        keeper: string;
        borrower: string;
    };
}
export declare const AminoConverter: {
    "/kava.hard.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, amount }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/kava.hard.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ depositor, amount }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/kava.hard.v1beta1.MsgBorrow": {
        aminoType: string;
        toAmino: ({ borrower, amount }: MsgBorrow) => AminoMsgBorrow["value"];
        fromAmino: ({ borrower, amount }: AminoMsgBorrow["value"]) => MsgBorrow;
    };
    "/kava.hard.v1beta1.MsgRepay": {
        aminoType: string;
        toAmino: ({ sender, owner, amount }: MsgRepay) => AminoMsgRepay["value"];
        fromAmino: ({ sender, owner, amount }: AminoMsgRepay["value"]) => MsgRepay;
    };
    "/kava.hard.v1beta1.MsgLiquidate": {
        aminoType: string;
        toAmino: ({ keeper, borrower }: MsgLiquidate) => AminoMsgLiquidate["value"];
        fromAmino: ({ keeper, borrower }: AminoMsgLiquidate["value"]) => MsgLiquidate;
    };
};
