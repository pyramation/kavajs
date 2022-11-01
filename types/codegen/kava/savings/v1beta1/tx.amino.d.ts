import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "/kava.savings.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/kava.savings.v1beta1.MsgWithdraw";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/kava.savings.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, amount }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/kava.savings.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ depositor, amount }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
};
