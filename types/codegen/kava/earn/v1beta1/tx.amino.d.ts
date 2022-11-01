import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "/kava.earn.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        };
        strategy: number;
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/kava.earn.v1beta1.MsgWithdraw";
    value: {
        from: string;
        amount: {
            denom: string;
            amount: string;
        };
        strategy: number;
    };
}
export declare const AminoConverter: {
    "/kava.earn.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount, strategy }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, amount, strategy }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/kava.earn.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, amount, strategy }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ from, amount, strategy }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
};
