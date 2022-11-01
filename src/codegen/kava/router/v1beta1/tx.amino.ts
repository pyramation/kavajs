//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/kava.router.v1beta1.MsgMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgMintDeposit",
    toAmino: ({
      depositor,
      validator,
      amount
    }: MsgMintDeposit): AminoMsgMintDeposit["value"] => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      depositor,
      validator,
      amount
    }: AminoMsgMintDeposit["value"]): MsgMintDeposit => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgDelegateMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgDelegateMintDeposit",
    toAmino: ({
      depositor,
      validator,
      amount
    }: MsgDelegateMintDeposit): AminoMsgDelegateMintDeposit["value"] => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      depositor,
      validator,
      amount
    }: AminoMsgDelegateMintDeposit["value"]): MsgDelegateMintDeposit => {
      return {
        depositor,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgWithdrawBurn": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurn",
    toAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurn): AminoMsgWithdrawBurn["value"] => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      validator,
      amount
    }: AminoMsgWithdrawBurn["value"]): MsgWithdrawBurn => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
    toAmino: ({
      from,
      validator,
      amount
    }: MsgWithdrawBurnUndelegate): AminoMsgWithdrawBurnUndelegate["value"] => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      validator,
      amount
    }: AminoMsgWithdrawBurnUndelegate["value"]): MsgWithdrawBurnUndelegate => {
      return {
        from,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};