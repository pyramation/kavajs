import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/kava.issuance.v1beta1.MsgIssueTokens": {
    aminoType: "/kava.issuance.v1beta1.MsgIssueTokens",
    toAmino: ({
      sender,
      tokens,
      receiver
    }: MsgIssueTokens): AminoMsgIssueTokens["value"] => {
      return {
        sender,
        tokens: {
          denom: tokens.denom,
          amount: Long.fromValue(tokens.amount).toString()
        },
        receiver
      };
    },
    fromAmino: ({
      sender,
      tokens,
      receiver
    }: AminoMsgIssueTokens["value"]): MsgIssueTokens => {
      return {
        sender,
        tokens: {
          denom: tokens.denom,
          amount: tokens.amount
        },
        receiver
      };
    }
  },
  "/kava.issuance.v1beta1.MsgRedeemTokens": {
    aminoType: "/kava.issuance.v1beta1.MsgRedeemTokens",
    toAmino: ({
      sender,
      tokens
    }: MsgRedeemTokens): AminoMsgRedeemTokens["value"] => {
      return {
        sender,
        tokens: {
          denom: tokens.denom,
          amount: Long.fromValue(tokens.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      tokens
    }: AminoMsgRedeemTokens["value"]): MsgRedeemTokens => {
      return {
        sender,
        tokens: {
          denom: tokens.denom,
          amount: tokens.amount
        }
      };
    }
  },
  "/kava.issuance.v1beta1.MsgBlockAddress": {
    aminoType: "/kava.issuance.v1beta1.MsgBlockAddress",
    toAmino: ({
      sender,
      denom,
      blockedAddress
    }: MsgBlockAddress): AminoMsgBlockAddress["value"] => {
      return {
        sender,
        denom,
        blocked_address: blockedAddress
      };
    },
    fromAmino: ({
      sender,
      denom,
      blocked_address
    }: AminoMsgBlockAddress["value"]): MsgBlockAddress => {
      return {
        sender,
        denom,
        blockedAddress: blocked_address
      };
    }
  },
  "/kava.issuance.v1beta1.MsgUnblockAddress": {
    aminoType: "/kava.issuance.v1beta1.MsgUnblockAddress",
    toAmino: ({
      sender,
      denom,
      blockedAddress
    }: MsgUnblockAddress): AminoMsgUnblockAddress["value"] => {
      return {
        sender,
        denom,
        blocked_address: blockedAddress
      };
    },
    fromAmino: ({
      sender,
      denom,
      blocked_address
    }: AminoMsgUnblockAddress["value"]): MsgUnblockAddress => {
      return {
        sender,
        denom,
        blockedAddress: blocked_address
      };
    }
  },
  "/kava.issuance.v1beta1.MsgSetPauseStatus": {
    aminoType: "/kava.issuance.v1beta1.MsgSetPauseStatus",
    toAmino: ({
      sender,
      denom,
      status
    }: MsgSetPauseStatus): AminoMsgSetPauseStatus["value"] => {
      return {
        sender,
        denom,
        status
      };
    },
    fromAmino: ({
      sender,
      denom,
      status
    }: AminoMsgSetPauseStatus["value"]): MsgSetPauseStatus => {
      return {
        sender,
        denom,
        status
      };
    }
  }
};