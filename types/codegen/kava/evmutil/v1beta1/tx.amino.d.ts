import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
        aminoType: string;
        toAmino: ({ initiator, receiver, amount }: MsgConvertCoinToERC20) => AminoMsgConvertCoinToERC20["value"];
        fromAmino: ({ initiator, receiver, amount }: AminoMsgConvertCoinToERC20["value"]) => MsgConvertCoinToERC20;
    };
    "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
        aminoType: string;
        toAmino: ({ initiator, receiver, kavaErc20Address, amount }: MsgConvertERC20ToCoin) => AminoMsgConvertERC20ToCoin["value"];
        fromAmino: ({ initiator, receiver, kava_erc20_address, amount }: AminoMsgConvertERC20ToCoin["value"]) => MsgConvertERC20ToCoin;
    };
};
