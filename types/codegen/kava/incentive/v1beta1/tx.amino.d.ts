import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export interface AminoMsgClaimUSDXMintingReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
    value: {
        sender: string;
        multiplier_name: string;
    };
}
export interface AminoMsgClaimHardReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimHardReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface AminoMsgClaimDelegatorReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface AminoMsgClaimSwapReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSwapReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface AminoMsgClaimSavingsReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export interface AminoMsgClaimEarnReward extends AminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimEarnReward";
    value: {
        sender: string;
        denoms_to_claim: {
            denom: string;
            multiplier_name: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
        aminoType: string;
        toAmino: ({ sender, multiplierName }: MsgClaimUSDXMintingReward) => AminoMsgClaimUSDXMintingReward["value"];
        fromAmino: ({ sender, multiplier_name }: AminoMsgClaimUSDXMintingReward["value"]) => MsgClaimUSDXMintingReward;
    };
    "/kava.incentive.v1beta1.MsgClaimHardReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimHardReward) => AminoMsgClaimHardReward["value"];
        fromAmino: ({ sender, denoms_to_claim }: AminoMsgClaimHardReward["value"]) => MsgClaimHardReward;
    };
    "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimDelegatorReward) => AminoMsgClaimDelegatorReward["value"];
        fromAmino: ({ sender, denoms_to_claim }: AminoMsgClaimDelegatorReward["value"]) => MsgClaimDelegatorReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSwapReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimSwapReward) => AminoMsgClaimSwapReward["value"];
        fromAmino: ({ sender, denoms_to_claim }: AminoMsgClaimSwapReward["value"]) => MsgClaimSwapReward;
    };
    "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimSavingsReward) => AminoMsgClaimSavingsReward["value"];
        fromAmino: ({ sender, denoms_to_claim }: AminoMsgClaimSavingsReward["value"]) => MsgClaimSavingsReward;
    };
    "/kava.incentive.v1beta1.MsgClaimEarnReward": {
        aminoType: string;
        toAmino: ({ sender, denomsToClaim }: MsgClaimEarnReward) => AminoMsgClaimEarnReward["value"];
        fromAmino: ({ sender, denoms_to_claim }: AminoMsgClaimEarnReward["value"]) => MsgClaimEarnReward;
    };
};
