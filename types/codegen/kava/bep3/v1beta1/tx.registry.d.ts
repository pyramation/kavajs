import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateAtomicSwap, MsgClaimAtomicSwap, MsgRefundAtomicSwap } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createAtomicSwap(value: MsgCreateAtomicSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimAtomicSwap(value: MsgClaimAtomicSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
        refundAtomicSwap(value: MsgRefundAtomicSwap): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createAtomicSwap(value: MsgCreateAtomicSwap): {
            typeUrl: string;
            value: MsgCreateAtomicSwap;
        };
        claimAtomicSwap(value: MsgClaimAtomicSwap): {
            typeUrl: string;
            value: MsgClaimAtomicSwap;
        };
        refundAtomicSwap(value: MsgRefundAtomicSwap): {
            typeUrl: string;
            value: MsgRefundAtomicSwap;
        };
    };
    toJSON: {
        createAtomicSwap(value: MsgCreateAtomicSwap): {
            typeUrl: string;
            value: unknown;
        };
        claimAtomicSwap(value: MsgClaimAtomicSwap): {
            typeUrl: string;
            value: unknown;
        };
        refundAtomicSwap(value: MsgRefundAtomicSwap): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createAtomicSwap(value: any): {
            typeUrl: string;
            value: MsgCreateAtomicSwap;
        };
        claimAtomicSwap(value: any): {
            typeUrl: string;
            value: MsgClaimAtomicSwap;
        };
        refundAtomicSwap(value: any): {
            typeUrl: string;
            value: MsgRefundAtomicSwap;
        };
    };
    fromPartial: {
        createAtomicSwap(value: MsgCreateAtomicSwap): {
            typeUrl: string;
            value: MsgCreateAtomicSwap;
        };
        claimAtomicSwap(value: MsgClaimAtomicSwap): {
            typeUrl: string;
            value: MsgClaimAtomicSwap;
        };
        refundAtomicSwap(value: MsgRefundAtomicSwap): {
            typeUrl: string;
            value: MsgRefundAtomicSwap;
        };
    };
};
