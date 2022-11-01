import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin } from "./tx";
export interface AminoMsgConvertCoinToERC20 extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20";
  value: {
    initiator: string;
    receiver: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgConvertERC20ToCoin extends AminoMsg {
  type: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin";
  value: {
    initiator: string;
    receiver: string;
    kava_erc20_address: string;
    amount: string;
  };
}
export const AminoConverter = {
  "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
    toAmino: ({
      initiator,
      receiver,
      amount
    }: MsgConvertCoinToERC20): AminoMsgConvertCoinToERC20["value"] => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      amount
    }: AminoMsgConvertCoinToERC20["value"]): MsgConvertCoinToERC20 => {
      return {
        initiator,
        receiver,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
    aminoType: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
    toAmino: ({
      initiator,
      receiver,
      kavaErc20Address,
      amount
    }: MsgConvertERC20ToCoin): AminoMsgConvertERC20ToCoin["value"] => {
      return {
        initiator,
        receiver,
        kava_erc20_address: kavaErc20Address,
        amount
      };
    },
    fromAmino: ({
      initiator,
      receiver,
      kava_erc20_address,
      amount
    }: AminoMsgConvertERC20ToCoin["value"]): MsgConvertERC20ToCoin => {
      return {
        initiator,
        receiver,
        kavaErc20Address: kava_erc20_address,
        amount
      };
    }
  }
};