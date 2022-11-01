import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export interface AminoMsgIssueTokens extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgIssueTokens";
    value: {
        sender: string;
        tokens: {
            denom: string;
            amount: string;
        };
        receiver: string;
    };
}
export interface AminoMsgRedeemTokens extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgRedeemTokens";
    value: {
        sender: string;
        tokens: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgBlockAddress extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgBlockAddress";
    value: {
        sender: string;
        denom: string;
        blocked_address: string;
    };
}
export interface AminoMsgUnblockAddress extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgUnblockAddress";
    value: {
        sender: string;
        denom: string;
        blocked_address: string;
    };
}
export interface AminoMsgSetPauseStatus extends AminoMsg {
    type: "/kava.issuance.v1beta1.MsgSetPauseStatus";
    value: {
        sender: string;
        denom: string;
        status: boolean;
    };
}
export declare const AminoConverter: {
    "/kava.issuance.v1beta1.MsgIssueTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens, receiver }: MsgIssueTokens) => AminoMsgIssueTokens["value"];
        fromAmino: ({ sender, tokens, receiver }: AminoMsgIssueTokens["value"]) => MsgIssueTokens;
    };
    "/kava.issuance.v1beta1.MsgRedeemTokens": {
        aminoType: string;
        toAmino: ({ sender, tokens }: MsgRedeemTokens) => AminoMsgRedeemTokens["value"];
        fromAmino: ({ sender, tokens }: AminoMsgRedeemTokens["value"]) => MsgRedeemTokens;
    };
    "/kava.issuance.v1beta1.MsgBlockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: MsgBlockAddress) => AminoMsgBlockAddress["value"];
        fromAmino: ({ sender, denom, blocked_address }: AminoMsgBlockAddress["value"]) => MsgBlockAddress;
    };
    "/kava.issuance.v1beta1.MsgUnblockAddress": {
        aminoType: string;
        toAmino: ({ sender, denom, blockedAddress }: MsgUnblockAddress) => AminoMsgUnblockAddress["value"];
        fromAmino: ({ sender, denom, blocked_address }: AminoMsgUnblockAddress["value"]) => MsgUnblockAddress;
    };
    "/kava.issuance.v1beta1.MsgSetPauseStatus": {
        aminoType: string;
        toAmino: ({ sender, denom, status }: MsgSetPauseStatus) => AminoMsgSetPauseStatus["value"];
        fromAmino: ({ sender, denom, status }: AminoMsgSetPauseStatus["value"]) => MsgSetPauseStatus;
    };
};
