import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createCDP(value: MsgCreateCDP): {
            typeUrl: string;
            value: Uint8Array;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        drawDebt(value: MsgDrawDebt): {
            typeUrl: string;
            value: Uint8Array;
        };
        repayDebt(value: MsgRepayDebt): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createCDP(value: MsgCreateCDP): {
            typeUrl: string;
            value: MsgCreateCDP;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        drawDebt(value: MsgDrawDebt): {
            typeUrl: string;
            value: MsgDrawDebt;
        };
        repayDebt(value: MsgRepayDebt): {
            typeUrl: string;
            value: MsgRepayDebt;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
    toJSON: {
        createCDP(value: MsgCreateCDP): {
            typeUrl: string;
            value: unknown;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: unknown;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: unknown;
        };
        drawDebt(value: MsgDrawDebt): {
            typeUrl: string;
            value: unknown;
        };
        repayDebt(value: MsgRepayDebt): {
            typeUrl: string;
            value: unknown;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createCDP(value: any): {
            typeUrl: string;
            value: MsgCreateCDP;
        };
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: any): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        drawDebt(value: any): {
            typeUrl: string;
            value: MsgDrawDebt;
        };
        repayDebt(value: any): {
            typeUrl: string;
            value: MsgRepayDebt;
        };
        liquidate(value: any): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
    fromPartial: {
        createCDP(value: MsgCreateCDP): {
            typeUrl: string;
            value: MsgCreateCDP;
        };
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        drawDebt(value: MsgDrawDebt): {
            typeUrl: string;
            value: MsgDrawDebt;
        };
        repayDebt(value: MsgRepayDebt): {
            typeUrl: string;
            value: MsgRepayDebt;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
};
