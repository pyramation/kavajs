import { AminoMsg } from "@cosmjs/amino";
import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export interface AminoMsgMintDeposit extends AminoMsg {
    type: "/kava.router.v1beta1.MsgMintDeposit";
    value: {
        depositor: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgDelegateMintDeposit extends AminoMsg {
    type: "/kava.router.v1beta1.MsgDelegateMintDeposit";
    value: {
        depositor: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgWithdrawBurn extends AminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurn";
    value: {
        from: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgWithdrawBurnUndelegate extends AminoMsg {
    type: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate";
    value: {
        from: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.router.v1beta1.MsgMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: MsgMintDeposit) => AminoMsgMintDeposit["value"];
        fromAmino: ({ depositor, validator, amount }: AminoMsgMintDeposit["value"]) => MsgMintDeposit;
    };
    "/kava.router.v1beta1.MsgDelegateMintDeposit": {
        aminoType: string;
        toAmino: ({ depositor, validator, amount }: MsgDelegateMintDeposit) => AminoMsgDelegateMintDeposit["value"];
        fromAmino: ({ depositor, validator, amount }: AminoMsgDelegateMintDeposit["value"]) => MsgDelegateMintDeposit;
    };
    "/kava.router.v1beta1.MsgWithdrawBurn": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: MsgWithdrawBurn) => AminoMsgWithdrawBurn["value"];
        fromAmino: ({ from, validator, amount }: AminoMsgWithdrawBurn["value"]) => MsgWithdrawBurn;
    };
    "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
        aminoType: string;
        toAmino: ({ from, validator, amount }: MsgWithdrawBurnUndelegate) => AminoMsgWithdrawBurnUndelegate["value"];
        fromAmino: ({ from, validator, amount }: AminoMsgWithdrawBurnUndelegate["value"]) => MsgWithdrawBurnUndelegate;
    };
};
