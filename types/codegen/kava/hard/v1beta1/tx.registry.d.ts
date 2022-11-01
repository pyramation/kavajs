import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
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
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: Uint8Array;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: Uint8Array;
        };
        liquidate(value: MsgLiquidate): {
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
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
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
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: unknown;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: unknown;
        };
        liquidate(value: MsgLiquidate): {
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
        borrow(value: any): {
            typeUrl: string;
            value: MsgBorrow;
        };
        repay(value: any): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: any): {
            typeUrl: string;
            value: MsgLiquidate;
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
        borrow(value: MsgBorrow): {
            typeUrl: string;
            value: MsgBorrow;
        };
        repay(value: MsgRepay): {
            typeUrl: string;
            value: MsgRepay;
        };
        liquidate(value: MsgLiquidate): {
            typeUrl: string;
            value: MsgLiquidate;
        };
    };
};
