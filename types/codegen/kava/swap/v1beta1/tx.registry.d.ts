import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapExactForTokens(value: MsgSwapExactForTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapForExactTokens(value: MsgSwapForExactTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        swapExactForTokens(value: MsgSwapExactForTokens): {
            typeUrl: string;
            value: MsgSwapExactForTokens;
        };
        swapForExactTokens(value: MsgSwapForExactTokens): {
            typeUrl: string;
            value: MsgSwapForExactTokens;
        };
    };
    toJSON: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: unknown;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: unknown;
        };
        swapExactForTokens(value: MsgSwapExactForTokens): {
            typeUrl: string;
            value: unknown;
        };
        swapForExactTokens(value: MsgSwapForExactTokens): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: any): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        swapExactForTokens(value: any): {
            typeUrl: string;
            value: MsgSwapExactForTokens;
        };
        swapForExactTokens(value: any): {
            typeUrl: string;
            value: MsgSwapForExactTokens;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        swapExactForTokens(value: MsgSwapExactForTokens): {
            typeUrl: string;
            value: MsgSwapExactForTokens;
        };
        swapForExactTokens(value: MsgSwapForExactTokens): {
            typeUrl: string;
            value: MsgSwapForExactTokens;
        };
    };
};
