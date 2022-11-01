import { Any, AnySDKType } from "../../../google/protobuf/any";
import { VoteType, VoteTypeSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposal {
    pubProposal?: Any;
    proposer: string;
    committeeId: Long;
}
/** MsgSubmitProposal is used by committee members to create a new proposal that they can vote on. */
export interface MsgSubmitProposalSDKType {
    pub_proposal?: AnySDKType;
    proposer: string;
    committee_id: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponse {
    proposalId: Long;
}
/** MsgSubmitProposalResponse defines the SubmitProposal response type */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: Long;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVote {
    proposalId: Long;
    voter: string;
    voteType: VoteType;
}
/** MsgVote is submitted by committee members to vote on proposals. */
export interface MsgVoteSDKType {
    proposal_id: Long;
    voter: string;
    vote_type: VoteTypeSDKType;
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponse {
}
/** MsgVoteResponse defines the Vote response type */
export interface MsgVoteResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: Partial<MsgVote>): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
};
