import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
    };
    toJSON: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: unknown;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: any): {
            typeUrl: string;
            value: MsgVote;
        };
    };
    fromPartial: {
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
    };
};
