import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        issueTokens(value: MsgIssueTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        redeemTokens(value: MsgRedeemTokens): {
            typeUrl: string;
            value: Uint8Array;
        };
        blockAddress(value: MsgBlockAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        unblockAddress(value: MsgUnblockAddress): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPauseStatus(value: MsgSetPauseStatus): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        issueTokens(value: MsgIssueTokens): {
            typeUrl: string;
            value: MsgIssueTokens;
        };
        redeemTokens(value: MsgRedeemTokens): {
            typeUrl: string;
            value: MsgRedeemTokens;
        };
        blockAddress(value: MsgBlockAddress): {
            typeUrl: string;
            value: MsgBlockAddress;
        };
        unblockAddress(value: MsgUnblockAddress): {
            typeUrl: string;
            value: MsgUnblockAddress;
        };
        setPauseStatus(value: MsgSetPauseStatus): {
            typeUrl: string;
            value: MsgSetPauseStatus;
        };
    };
    toJSON: {
        issueTokens(value: MsgIssueTokens): {
            typeUrl: string;
            value: unknown;
        };
        redeemTokens(value: MsgRedeemTokens): {
            typeUrl: string;
            value: unknown;
        };
        blockAddress(value: MsgBlockAddress): {
            typeUrl: string;
            value: unknown;
        };
        unblockAddress(value: MsgUnblockAddress): {
            typeUrl: string;
            value: unknown;
        };
        setPauseStatus(value: MsgSetPauseStatus): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        issueTokens(value: any): {
            typeUrl: string;
            value: MsgIssueTokens;
        };
        redeemTokens(value: any): {
            typeUrl: string;
            value: MsgRedeemTokens;
        };
        blockAddress(value: any): {
            typeUrl: string;
            value: MsgBlockAddress;
        };
        unblockAddress(value: any): {
            typeUrl: string;
            value: MsgUnblockAddress;
        };
        setPauseStatus(value: any): {
            typeUrl: string;
            value: MsgSetPauseStatus;
        };
    };
    fromPartial: {
        issueTokens(value: MsgIssueTokens): {
            typeUrl: string;
            value: MsgIssueTokens;
        };
        redeemTokens(value: MsgRedeemTokens): {
            typeUrl: string;
            value: MsgRedeemTokens;
        };
        blockAddress(value: MsgBlockAddress): {
            typeUrl: string;
            value: MsgBlockAddress;
        };
        unblockAddress(value: MsgUnblockAddress): {
            typeUrl: string;
            value: MsgUnblockAddress;
        };
        setPauseStatus(value: MsgSetPauseStatus): {
            typeUrl: string;
            value: MsgSetPauseStatus;
        };
    };
};
