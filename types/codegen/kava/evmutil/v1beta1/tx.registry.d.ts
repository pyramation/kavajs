import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
    };
    toJSON: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: unknown;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        convertCoinToERC20(value: any): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: any): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
    };
    fromPartial: {
        convertCoinToERC20(value: MsgConvertCoinToERC20): {
            typeUrl: string;
            value: MsgConvertCoinToERC20;
        };
        convertERC20ToCoin(value: MsgConvertERC20ToCoin): {
            typeUrl: string;
            value: MsgConvertERC20ToCoin;
        };
    };
};
