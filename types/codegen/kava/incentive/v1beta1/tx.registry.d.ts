import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claimUSDXMintingReward(value: MsgClaimUSDXMintingReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimHardReward(value: MsgClaimHardReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimDelegatorReward(value: MsgClaimDelegatorReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimSwapReward(value: MsgClaimSwapReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimSavingsReward(value: MsgClaimSavingsReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimEarnReward(value: MsgClaimEarnReward): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claimUSDXMintingReward(value: MsgClaimUSDXMintingReward): {
            typeUrl: string;
            value: MsgClaimUSDXMintingReward;
        };
        claimHardReward(value: MsgClaimHardReward): {
            typeUrl: string;
            value: MsgClaimHardReward;
        };
        claimDelegatorReward(value: MsgClaimDelegatorReward): {
            typeUrl: string;
            value: MsgClaimDelegatorReward;
        };
        claimSwapReward(value: MsgClaimSwapReward): {
            typeUrl: string;
            value: MsgClaimSwapReward;
        };
        claimSavingsReward(value: MsgClaimSavingsReward): {
            typeUrl: string;
            value: MsgClaimSavingsReward;
        };
        claimEarnReward(value: MsgClaimEarnReward): {
            typeUrl: string;
            value: MsgClaimEarnReward;
        };
    };
    toJSON: {
        claimUSDXMintingReward(value: MsgClaimUSDXMintingReward): {
            typeUrl: string;
            value: unknown;
        };
        claimHardReward(value: MsgClaimHardReward): {
            typeUrl: string;
            value: unknown;
        };
        claimDelegatorReward(value: MsgClaimDelegatorReward): {
            typeUrl: string;
            value: unknown;
        };
        claimSwapReward(value: MsgClaimSwapReward): {
            typeUrl: string;
            value: unknown;
        };
        claimSavingsReward(value: MsgClaimSavingsReward): {
            typeUrl: string;
            value: unknown;
        };
        claimEarnReward(value: MsgClaimEarnReward): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        claimUSDXMintingReward(value: any): {
            typeUrl: string;
            value: MsgClaimUSDXMintingReward;
        };
        claimHardReward(value: any): {
            typeUrl: string;
            value: MsgClaimHardReward;
        };
        claimDelegatorReward(value: any): {
            typeUrl: string;
            value: MsgClaimDelegatorReward;
        };
        claimSwapReward(value: any): {
            typeUrl: string;
            value: MsgClaimSwapReward;
        };
        claimSavingsReward(value: any): {
            typeUrl: string;
            value: MsgClaimSavingsReward;
        };
        claimEarnReward(value: any): {
            typeUrl: string;
            value: MsgClaimEarnReward;
        };
    };
    fromPartial: {
        claimUSDXMintingReward(value: MsgClaimUSDXMintingReward): {
            typeUrl: string;
            value: MsgClaimUSDXMintingReward;
        };
        claimHardReward(value: MsgClaimHardReward): {
            typeUrl: string;
            value: MsgClaimHardReward;
        };
        claimDelegatorReward(value: MsgClaimDelegatorReward): {
            typeUrl: string;
            value: MsgClaimDelegatorReward;
        };
        claimSwapReward(value: MsgClaimSwapReward): {
            typeUrl: string;
            value: MsgClaimSwapReward;
        };
        claimSavingsReward(value: MsgClaimSavingsReward): {
            typeUrl: string;
            value: MsgClaimSavingsReward;
        };
        claimEarnReward(value: MsgClaimEarnReward): {
            typeUrl: string;
            value: MsgClaimEarnReward;
        };
    };
};
