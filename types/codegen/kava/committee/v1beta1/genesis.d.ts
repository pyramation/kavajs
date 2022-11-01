import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** VoteType enumerates the valid types of a vote. */
export declare enum VoteType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
    VOTE_TYPE_YES = 1,
    /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
    VOTE_TYPE_NO = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
/** VoteType enumerates the valid types of a vote. */
export declare enum VoteTypeSDKType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
    VOTE_TYPE_YES = 1,
    /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
    VOTE_TYPE_NO = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** GenesisState defines the committee module's genesis state. */
export interface GenesisState {
    nextProposalId: Long;
    committees: Any[];
    proposals: Proposal[];
    votes: Vote[];
}
/** GenesisState defines the committee module's genesis state. */
export interface GenesisStateSDKType {
    next_proposal_id: Long;
    committees: AnySDKType[];
    proposals: ProposalSDKType[];
    votes: VoteSDKType[];
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface Proposal {
    content?: Any;
    id: Long;
    committeeId: Long;
    deadline?: Timestamp;
}
/** Proposal is an internal record of a governance proposal submitted to a committee. */
export interface ProposalSDKType {
    content?: AnySDKType;
    id: Long;
    committee_id: Long;
    deadline?: TimestampSDKType;
}
/** Vote is an internal record of a single governance vote. */
export interface Vote {
    proposalId: Long;
    voter: Uint8Array;
    voteType: VoteType;
}
/** Vote is an internal record of a single governance vote. */
export interface VoteSDKType {
    proposal_id: Long;
    voter: Uint8Array;
    vote_type: VoteTypeSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: Partial<Proposal>): Proposal;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: Partial<Vote>): Vote;
};
