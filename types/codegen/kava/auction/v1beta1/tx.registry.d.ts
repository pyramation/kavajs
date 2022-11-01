import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceBid } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
    };
    toJSON: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        placeBid(value: any): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
    };
    fromPartial: {
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
    };
};
