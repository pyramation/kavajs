import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw } from "./tx";
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
    };
};
