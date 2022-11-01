import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgDeposit";
    value: {
        depositor: string;
        token_a: {
            denom: string;
            amount: string;
        };
        token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgWithdraw";
    value: {
        from: string;
        shares: string;
        min_token_a: {
            denom: string;
            amount: string;
        };
        min_token_b: {
            denom: string;
            amount: string;
        };
        deadline: string;
    };
}
export interface AminoMsgSwapExactForTokens extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapExactForTokens";
    value: {
        requester: string;
        exact_token_a: {
            denom: string;
            amount: string;
        };
        token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export interface AminoMsgSwapForExactTokens extends AminoMsg {
    type: "/kava.swap.v1beta1.MsgSwapForExactTokens";
    value: {
        requester: string;
        token_a: {
            denom: string;
            amount: string;
        };
        exact_token_b: {
            denom: string;
            amount: string;
        };
        slippage: string;
        deadline: string;
    };
}
export declare const AminoConverter: {
    "/kava.swap.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/kava.swap.v1beta1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/kava.swap.v1beta1.MsgSwapExactForTokens": {
        aminoType: string;
        toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: MsgSwapExactForTokens) => AminoMsgSwapExactForTokens["value"];
        fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: AminoMsgSwapExactForTokens["value"]) => MsgSwapExactForTokens;
    };
    "/kava.swap.v1beta1.MsgSwapForExactTokens": {
        aminoType: string;
        toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: MsgSwapForExactTokens) => AminoMsgSwapForExactTokens["value"];
        fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: AminoMsgSwapForExactTokens["value"]) => MsgSwapForExactTokens;
    };
};
