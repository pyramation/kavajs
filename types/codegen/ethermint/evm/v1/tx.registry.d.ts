import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEthereumTx } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: MsgEthereumTx;
        };
    };
    toJSON: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        ethereumTx(value: any): {
            typeUrl: string;
            value: MsgEthereumTx;
        };
    };
    fromPartial: {
        ethereumTx(value: MsgEthereumTx): {
            typeUrl: string;
            value: MsgEthereumTx;
        };
    };
};
