import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        mintDeposit(value: MsgMintDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateMintDeposit(value: MsgDelegateMintDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawBurn(value: MsgWithdrawBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        mintDeposit(value: MsgMintDeposit): {
            typeUrl: string;
            value: MsgMintDeposit;
        };
        delegateMintDeposit(value: MsgDelegateMintDeposit): {
            typeUrl: string;
            value: MsgDelegateMintDeposit;
        };
        withdrawBurn(value: MsgWithdrawBurn): {
            typeUrl: string;
            value: MsgWithdrawBurn;
        };
        withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate): {
            typeUrl: string;
            value: MsgWithdrawBurnUndelegate;
        };
    };
    toJSON: {
        mintDeposit(value: MsgMintDeposit): {
            typeUrl: string;
            value: unknown;
        };
        delegateMintDeposit(value: MsgDelegateMintDeposit): {
            typeUrl: string;
            value: unknown;
        };
        withdrawBurn(value: MsgWithdrawBurn): {
            typeUrl: string;
            value: unknown;
        };
        withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        mintDeposit(value: any): {
            typeUrl: string;
            value: MsgMintDeposit;
        };
        delegateMintDeposit(value: any): {
            typeUrl: string;
            value: MsgDelegateMintDeposit;
        };
        withdrawBurn(value: any): {
            typeUrl: string;
            value: MsgWithdrawBurn;
        };
        withdrawBurnUndelegate(value: any): {
            typeUrl: string;
            value: MsgWithdrawBurnUndelegate;
        };
    };
    fromPartial: {
        mintDeposit(value: MsgMintDeposit): {
            typeUrl: string;
            value: MsgMintDeposit;
        };
        delegateMintDeposit(value: MsgDelegateMintDeposit): {
            typeUrl: string;
            value: MsgDelegateMintDeposit;
        };
        withdrawBurn(value: MsgWithdrawBurn): {
            typeUrl: string;
            value: MsgWithdrawBurn;
        };
        withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate): {
            typeUrl: string;
            value: MsgWithdrawBurnUndelegate;
        };
    };
};
