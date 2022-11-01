import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export interface AminoMsgMintDerivative extends AminoMsg {
  type: "/kava.liquid.v1beta1.MsgMintDerivative";
  value: {
    sender: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgBurnDerivative extends AminoMsg {
  type: "/kava.liquid.v1beta1.MsgBurnDerivative";
  value: {
    sender: string;
    validator: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/kava.liquid.v1beta1.MsgMintDerivative": {
    aminoType: "/kava.liquid.v1beta1.MsgMintDerivative",
    toAmino: ({
      sender,
      validator,
      amount
    }: MsgMintDerivative): AminoMsgMintDerivative["value"] => {
      return {
        sender,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      validator,
      amount
    }: AminoMsgMintDerivative["value"]): MsgMintDerivative => {
      return {
        sender,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.liquid.v1beta1.MsgBurnDerivative": {
    aminoType: "/kava.liquid.v1beta1.MsgBurnDerivative",
    toAmino: ({
      sender,
      validator,
      amount
    }: MsgBurnDerivative): AminoMsgBurnDerivative["value"] => {
      return {
        sender,
        validator,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      validator,
      amount
    }: AminoMsgBurnDerivative["value"]): MsgBurnDerivative => {
      return {
        sender,
        validator,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};