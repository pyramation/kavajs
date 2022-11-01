import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        mintDerivative(value: MsgMintDerivative): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnDerivative(value: MsgBurnDerivative): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        mintDerivative(value: MsgMintDerivative): {
            typeUrl: string;
            value: MsgMintDerivative;
        };
        burnDerivative(value: MsgBurnDerivative): {
            typeUrl: string;
            value: MsgBurnDerivative;
        };
    };
    toJSON: {
        mintDerivative(value: MsgMintDerivative): {
            typeUrl: string;
            value: unknown;
        };
        burnDerivative(value: MsgBurnDerivative): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        mintDerivative(value: any): {
            typeUrl: string;
            value: MsgMintDerivative;
        };
        burnDerivative(value: any): {
            typeUrl: string;
            value: MsgBurnDerivative;
        };
    };
    fromPartial: {
        mintDerivative(value: MsgMintDerivative): {
            typeUrl: string;
            value: MsgMintDerivative;
        };
        burnDerivative(value: MsgBurnDerivative): {
            typeUrl: string;
            value: MsgBurnDerivative;
        };
    };
};
