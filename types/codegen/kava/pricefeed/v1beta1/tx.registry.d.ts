import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPostPrice } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        postPrice(value: MsgPostPrice): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        postPrice(value: MsgPostPrice): {
            typeUrl: string;
            value: MsgPostPrice;
        };
    };
    toJSON: {
        postPrice(value: MsgPostPrice): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        postPrice(value: any): {
            typeUrl: string;
            value: MsgPostPrice;
        };
    };
    fromPartial: {
        postPrice(value: MsgPostPrice): {
            typeUrl: string;
            value: MsgPostPrice;
        };
    };
};
