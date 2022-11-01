import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse } from "./tx";
/** Msg defines the committee Msg service */

export interface Msg {
  /** SubmitProposal defines a method for submitting a committee proposal */
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /** Vote defines a method for voting on a proposal */

  vote(request: MsgVote): Promise<MsgVoteResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.vote = this.vote.bind(this);
  }

  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  }

  vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  }

}