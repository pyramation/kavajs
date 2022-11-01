import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    committees(request?: QueryCommitteesRequest): Promise<QueryCommitteesResponse>;
    committee(request: QueryCommitteeRequest): Promise<QueryCommitteeResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    nextProposalID(request?: QueryNextProposalIDRequest): Promise<QueryNextProposalIDResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    tally(request: QueryTallyRequest): Promise<QueryTallyResponse>;
    rawParams(request: QueryRawParamsRequest): Promise<QueryRawParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    committees(request?: QueryCommitteesRequest): Promise<QueryCommitteesResponse>;
    committee(request: QueryCommitteeRequest): Promise<QueryCommitteeResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    nextProposalID(request?: QueryNextProposalIDRequest): Promise<QueryNextProposalIDResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    tally(request: QueryTallyRequest): Promise<QueryTallyResponse>;
    rawParams(request: QueryRawParamsRequest): Promise<QueryRawParamsResponse>;
};
