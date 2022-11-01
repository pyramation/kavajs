import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCommitteesRequest, QueryCommitteesResponse, QueryCommitteeRequest, QueryCommitteeResponse, QueryProposalsRequest, QueryProposalsResponse, QueryProposalRequest, QueryProposalResponse, QueryNextProposalIDRequest, QueryNextProposalIDResponse, QueryVotesRequest, QueryVotesResponse, QueryVoteRequest, QueryVoteResponse, QueryTallyRequest, QueryTallyResponse, QueryRawParamsRequest, QueryRawParamsResponse } from "./query";
/** Query defines the gRPC querier service for committee module */

export interface Query {
  /** Committees queries all committess of the committee module. */
  committees(request?: QueryCommitteesRequest): Promise<QueryCommitteesResponse>;
  /** Committee queries a committee based on committee ID. */

  committee(request: QueryCommitteeRequest): Promise<QueryCommitteeResponse>;
  /** Proposals queries proposals based on committee ID. */

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Deposits queries a proposal based on proposal ID. */

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** NextProposalID queries the next proposal ID of the committee module. */

  nextProposalID(request?: QueryNextProposalIDRequest): Promise<QueryNextProposalIDResponse>;
  /** Votes queries all votes for a single proposal ID. */

  votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Vote queries the vote of a single voter for a single proposal ID. */

  vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Tally queries the tally of a single proposal ID. */

  tally(request: QueryTallyRequest): Promise<QueryTallyResponse>;
  /** RawParams queries the raw params data of any subspace and key. */

  rawParams(request: QueryRawParamsRequest): Promise<QueryRawParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.committees = this.committees.bind(this);
    this.committee = this.committee.bind(this);
    this.proposals = this.proposals.bind(this);
    this.proposal = this.proposal.bind(this);
    this.nextProposalID = this.nextProposalID.bind(this);
    this.votes = this.votes.bind(this);
    this.vote = this.vote.bind(this);
    this.tally = this.tally.bind(this);
    this.rawParams = this.rawParams.bind(this);
  }

  committees(request: QueryCommitteesRequest = {}): Promise<QueryCommitteesResponse> {
    const data = QueryCommitteesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Committees", data);
    return promise.then(data => QueryCommitteesResponse.decode(new _m0.Reader(data)));
  }

  committee(request: QueryCommitteeRequest): Promise<QueryCommitteeResponse> {
    const data = QueryCommitteeRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Committee", data);
    return promise.then(data => QueryCommitteeResponse.decode(new _m0.Reader(data)));
  }

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new _m0.Reader(data)));
  }

  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  }

  nextProposalID(request: QueryNextProposalIDRequest = {}): Promise<QueryNextProposalIDResponse> {
    const data = QueryNextProposalIDRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "NextProposalID", data);
    return promise.then(data => QueryNextProposalIDResponse.decode(new _m0.Reader(data)));
  }

  votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new _m0.Reader(data)));
  }

  vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  }

  tally(request: QueryTallyRequest): Promise<QueryTallyResponse> {
    const data = QueryTallyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "Tally", data);
    return promise.then(data => QueryTallyResponse.decode(new _m0.Reader(data)));
  }

  rawParams(request: QueryRawParamsRequest): Promise<QueryRawParamsResponse> {
    const data = QueryRawParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.committee.v1beta1.Query", "RawParams", data);
    return promise.then(data => QueryRawParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    committees(request?: QueryCommitteesRequest): Promise<QueryCommitteesResponse> {
      return queryService.committees(request);
    },

    committee(request: QueryCommitteeRequest): Promise<QueryCommitteeResponse> {
      return queryService.committee(request);
    },

    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
      return queryService.proposals(request);
    },

    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.proposal(request);
    },

    nextProposalID(request?: QueryNextProposalIDRequest): Promise<QueryNextProposalIDResponse> {
      return queryService.nextProposalID(request);
    },

    votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
      return queryService.votes(request);
    },

    vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
      return queryService.vote(request);
    },

    tally(request: QueryTallyRequest): Promise<QueryTallyResponse> {
      return queryService.tally(request);
    },

    rawParams(request: QueryRawParamsRequest): Promise<QueryRawParamsResponse> {
      return queryService.rawParams(request);
    }

  };
};