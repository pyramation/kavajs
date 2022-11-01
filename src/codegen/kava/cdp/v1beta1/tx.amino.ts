//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/kava.cdp.v1beta1.MsgCreateCDP": {
    aminoType: "/kava.cdp.v1beta1.MsgCreateCDP",
    toAmino: ({
      sender,
      collateral,
      principal,
      collateralType
    }: MsgCreateCDP): AminoMsgCreateCDP["value"] => {
      return {
        sender,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        principal: {
          denom: principal.denom,
          amount: Long.fromValue(principal.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      sender,
      collateral,
      principal,
      collateral_type
    }: AminoMsgCreateCDP["value"]): MsgCreateCDP => {
      return {
        sender,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        principal: {
          denom: principal.denom,
          amount: principal.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgDeposit": {
    aminoType: "/kava.cdp.v1beta1.MsgDeposit",
    toAmino: ({
      depositor,
      owner,
      collateral,
      collateralType
    }: MsgDeposit): AminoMsgDeposit["value"] => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      depositor,
      owner,
      collateral,
      collateral_type
    }: AminoMsgDeposit["value"]): MsgDeposit => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgWithdraw": {
    aminoType: "/kava.cdp.v1beta1.MsgWithdraw",
    toAmino: ({
      depositor,
      owner,
      collateral,
      collateralType
    }: MsgWithdraw): AminoMsgWithdraw["value"] => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: Long.fromValue(collateral.amount).toString()
        },
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      depositor,
      owner,
      collateral,
      collateral_type
    }: AminoMsgWithdraw["value"]): MsgWithdraw => {
      return {
        depositor,
        owner,
        collateral: {
          denom: collateral.denom,
          amount: collateral.amount
        },
        collateralType: collateral_type
      };
    }
  },
  "/kava.cdp.v1beta1.MsgDrawDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgDrawDebt",
    toAmino: ({
      sender,
      collateralType,
      principal
    }: MsgDrawDebt): AminoMsgDrawDebt["value"] => {
      return {
        sender,
        collateral_type: collateralType,
        principal: {
          denom: principal.denom,
          amount: Long.fromValue(principal.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      collateral_type,
      principal
    }: AminoMsgDrawDebt["value"]): MsgDrawDebt => {
      return {
        sender,
        collateralType: collateral_type,
        principal: {
          denom: principal.denom,
          amount: principal.amount
        }
      };
    }
  },
  "/kava.cdp.v1beta1.MsgRepayDebt": {
    aminoType: "/kava.cdp.v1beta1.MsgRepayDebt",
    toAmino: ({
      sender,
      collateralType,
      payment
    }: MsgRepayDebt): AminoMsgRepayDebt["value"] => {
      return {
        sender,
        collateral_type: collateralType,
        payment: {
          denom: payment.denom,
          amount: Long.fromValue(payment.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      collateral_type,
      payment
    }: AminoMsgRepayDebt["value"]): MsgRepayDebt => {
      return {
        sender,
        collateralType: collateral_type,
        payment: {
          denom: payment.denom,
          amount: payment.amount
        }
      };
    }
  },
  "/kava.cdp.v1beta1.MsgLiquidate": {
    aminoType: "/kava.cdp.v1beta1.MsgLiquidate",
    toAmino: ({
      keeper,
      borrower,
      collateralType
    }: MsgLiquidate): AminoMsgLiquidate["value"] => {
      return {
        keeper,
        borrower,
        collateral_type: collateralType
      };
    },
    fromAmino: ({
      keeper,
      borrower,
      collateral_type
    }: AminoMsgLiquidate["value"]): MsgLiquidate => {
      return {
        keeper,
        borrower,
        collateralType: collateral_type
      };
    }
  }
};