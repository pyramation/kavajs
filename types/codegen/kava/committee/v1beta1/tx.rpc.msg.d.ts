import { Rpc } from "../../../helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse } from "./tx";
/** Msg defines the committee Msg service */
export interface Msg {
    /** SubmitProposal defines a method for submitting a committee proposal */
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /** Vote defines a method for voting on a proposal */
    vote(request: MsgVote): Promise<MsgVoteResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
}
