//@ts-nocheck
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
export const AminoConverter = {
  "/kava.hard.v1beta1.MsgDeposit": {
    aminoType: "/kava.hard.v1beta1.MsgDeposit",
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
  "/kava.hard.v1beta1.MsgWithdraw": {
    aminoType: "/kava.hard.v1beta1.MsgWithdraw",
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
  },
  "/kava.hard.v1beta1.MsgBorrow": {
    aminoType: "/kava.hard.v1beta1.MsgBorrow",
    toAmino: ({
      borrower,
      amount
    }: MsgBorrow): AminoMsgBorrow["value"] => {
      return {
        borrower,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      borrower,
      amount
    }: AminoMsgBorrow["value"]): MsgBorrow => {
      return {
        borrower,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.hard.v1beta1.MsgRepay": {
    aminoType: "/kava.hard.v1beta1.MsgRepay",
    toAmino: ({
      sender,
      owner,
      amount
    }: MsgRepay): AminoMsgRepay["value"] => {
      return {
        sender,
        owner,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      owner,
      amount
    }: AminoMsgRepay["value"]): MsgRepay => {
      return {
        sender,
        owner,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/kava.hard.v1beta1.MsgLiquidate": {
    aminoType: "/kava.hard.v1beta1.MsgLiquidate",
    toAmino: ({
      keeper,
      borrower
    }: MsgLiquidate): AminoMsgLiquidate["value"] => {
      return {
        keeper,
        borrower
      };
    },
    fromAmino: ({
      keeper,
      borrower
    }: AminoMsgLiquidate["value"]): MsgLiquidate => {
      return {
        keeper,
        borrower
      };
    }
  }
};