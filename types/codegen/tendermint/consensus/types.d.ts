import { PartSetHeader, PartSetHeaderSDKType, Part, PartSDKType, SignedMsgType, SignedMsgTypeSDKType, BlockID, BlockIDSDKType } from "../types/types";
import { Proposal as Proposal1 } from "../types/types";
import { ProposalSDKType as Proposal1SDKType } from "../types/types";
import { Vote as Vote2 } from "../types/types";
import { VoteSDKType as Vote2SDKType } from "../types/types";
import { BitArray, BitArraySDKType } from "../libs/bits/types";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
    height: Long;
    round: number;
    step: number;
    secondsSinceStartTime: Long;
    lastCommitRound: number;
}
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStepSDKType {
    height: Long;
    round: number;
    step: number;
    seconds_since_start_time: Long;
    last_commit_round: number;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
    height: Long;
    round: number;
    blockPartSetHeader?: PartSetHeader;
    blockParts?: BitArray;
    isCommit: boolean;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlockSDKType {
    height: Long;
    round: number;
    block_part_set_header?: PartSetHeaderSDKType;
    block_parts?: BitArraySDKType;
    is_commit: boolean;
}
/** Proposal is sent when a new block is proposed. */
export interface Proposal {
    proposal?: Proposal1;
}
/** Proposal is sent when a new block is proposed. */
export interface ProposalSDKType {
    proposal?: Proposal1SDKType;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
    height: Long;
    proposalPolRound: number;
    proposalPol?: BitArray;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOLSDKType {
    height: Long;
    proposal_pol_round: number;
    proposal_pol?: BitArraySDKType;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
    height: Long;
    round: number;
    part?: Part;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPartSDKType {
    height: Long;
    round: number;
    part?: PartSDKType;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
    vote?: Vote2;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface VoteSDKType {
    vote?: Vote2SDKType;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
    height: Long;
    round: number;
    type: SignedMsgType;
    index: number;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVoteSDKType {
    height: Long;
    round: number;
    type: SignedMsgTypeSDKType;
    index: number;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
    height: Long;
    round: number;
    type: SignedMsgType;
    blockId?: BlockID;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23SDKType {
    height: Long;
    round: number;
    type: SignedMsgTypeSDKType;
    block_id?: BlockIDSDKType;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
    height: Long;
    round: number;
    type: SignedMsgType;
    blockId?: BlockID;
    votes?: BitArray;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBitsSDKType {
    height: Long;
    round: number;
    type: SignedMsgTypeSDKType;
    block_id?: BlockIDSDKType;
    votes?: BitArraySDKType;
}
export interface Message {
    newRoundStep?: NewRoundStep;
    newValidBlock?: NewValidBlock;
    proposal?: Proposal;
    proposalPol?: ProposalPOL;
    blockPart?: BlockPart;
    vote?: Vote;
    hasVote?: HasVote;
    voteSetMaj23?: VoteSetMaj23;
    voteSetBits?: VoteSetBits;
}
export interface MessageSDKType {
    new_round_step?: NewRoundStepSDKType;
    new_valid_block?: NewValidBlockSDKType;
    proposal?: ProposalSDKType;
    proposal_pol?: ProposalPOLSDKType;
    block_part?: BlockPartSDKType;
    vote?: VoteSDKType;
    has_vote?: HasVoteSDKType;
    vote_set_maj23?: VoteSetMaj23SDKType;
    vote_set_bits?: VoteSetBitsSDKType;
}
export declare const NewRoundStep: {
    encode(message: NewRoundStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewRoundStep;
    fromJSON(object: any): NewRoundStep;
    toJSON(message: NewRoundStep): unknown;
    fromPartial(object: Partial<NewRoundStep>): NewRoundStep;
};
export declare const NewValidBlock: {
    encode(message: NewValidBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewValidBlock;
    fromJSON(object: any): NewValidBlock;
    toJSON(message: NewValidBlock): unknown;
    fromPartial(object: Partial<NewValidBlock>): NewValidBlock;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: Partial<Proposal>): Proposal;
};
export declare const ProposalPOL: {
    encode(message: ProposalPOL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalPOL;
    fromJSON(object: any): ProposalPOL;
    toJSON(message: ProposalPOL): unknown;
    fromPartial(object: Partial<ProposalPOL>): ProposalPOL;
};
export declare const BlockPart: {
    encode(message: BlockPart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockPart;
    fromJSON(object: any): BlockPart;
    toJSON(message: BlockPart): unknown;
    fromPartial(object: Partial<BlockPart>): BlockPart;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: Partial<Vote>): Vote;
};
export declare const HasVote: {
    encode(message: HasVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HasVote;
    fromJSON(object: any): HasVote;
    toJSON(message: HasVote): unknown;
    fromPartial(object: Partial<HasVote>): HasVote;
};
export declare const VoteSetMaj23: {
    encode(message: VoteSetMaj23, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetMaj23;
    fromJSON(object: any): VoteSetMaj23;
    toJSON(message: VoteSetMaj23): unknown;
    fromPartial(object: Partial<VoteSetMaj23>): VoteSetMaj23;
};
export declare const VoteSetBits: {
    encode(message: VoteSetBits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteSetBits;
    fromJSON(object: any): VoteSetBits;
    toJSON(message: VoteSetBits): unknown;
    fromPartial(object: Partial<VoteSetBits>): VoteSetBits;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
