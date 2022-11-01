//@ts-nocheck
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
export const AminoConverter = {
  "/kava.savings.v1beta1.MsgDeposit": {
    aminoType: "/kava.savings.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      amount
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      amount
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.savings.v1beta1.MsgWithdraw": {
    aminoType: "/kava.savings.v1beta1.MsgWithdraw",
    toAmino: ({
      depositor,
      amount
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      depositor,
      amount
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        depositor,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};