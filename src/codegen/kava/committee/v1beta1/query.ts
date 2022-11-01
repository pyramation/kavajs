import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { VoteType, VoteTypeSDKType, voteTypeFromJSON, voteTypeToJSON } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */

export interface QueryCommitteesRequest {}
/** QueryCommitteesRequest defines the request type for querying x/committee committees. */

export interface QueryCommitteesRequestSDKType {}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */

export interface QueryCommitteesResponse {
  committees: Any[];
}
/** QueryCommitteesResponse defines the response type for querying x/committee committees. */

export interface QueryCommitteesResponseSDKType {
  committees: AnySDKType[];
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */

export interface QueryCommitteeRequest {
  committeeId: Long;
}
/** QueryCommitteeRequest defines the request type for querying x/committee committee. */

export interface QueryCommitteeRequestSDKType {
  committee_id: Long;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */

export interface QueryCommitteeResponse {
  committee?: Any;
}
/** QueryCommitteeResponse defines the response type for querying x/committee committee. */

export interface QueryCommitteeResponseSDKType {
  committee?: AnySDKType;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */

export interface QueryProposalsRequest {
  committeeId: Long;
}
/** QueryProposalsRequest defines the request type for querying x/committee proposals. */

export interface QueryProposalsRequestSDKType {
  committee_id: Long;
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */

export interface QueryProposalsResponse {
  proposals: QueryProposalResponse[];
}
/** QueryProposalsResponse defines the response type for querying x/committee proposals. */

export interface QueryProposalsResponseSDKType {
  proposals: QueryProposalResponseSDKType[];
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */

export interface QueryProposalRequest {
  proposalId: Long;
}
/** QueryProposalRequest defines the request type for querying x/committee proposal. */

export interface QueryProposalRequestSDKType {
  proposal_id: Long;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */

export interface QueryProposalResponse {
  pubProposal?: Any;
  id: Long;
  committeeId: Long;
  deadline?: Timestamp;
}
/** QueryProposalResponse defines the response type for querying x/committee proposal. */

export interface QueryProposalResponseSDKType {
  pub_proposal?: AnySDKType;
  id: Long;
  committee_id: Long;
  deadline?: TimestampSDKType;
}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */

export interface QueryNextProposalIDRequest {}
/** QueryNextProposalIDRequest defines the request type for querying x/committee NextProposalID. */

export interface QueryNextProposalIDRequestSDKType {}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */

export interface QueryNextProposalIDResponse {
  nextProposalId: Long;
}
/** QueryNextProposalIDRequest defines the response type for querying x/committee NextProposalID. */

export interface QueryNextProposalIDResponseSDKType {
  next_proposal_id: Long;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */

export interface QueryVotesRequest {
  proposalId: Long;
  pagination?: PageRequest;
}
/** QueryVotesRequest defines the request type for querying x/committee votes. */

export interface QueryVotesRequestSDKType {
  proposal_id: Long;
  pagination?: PageRequestSDKType;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */

export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: QueryVoteResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryVotesResponse defines the response type for querying x/committee votes. */

export interface QueryVotesResponseSDKType {
  /** votes defined the queried votes. */
  votes: QueryVoteResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */

export interface QueryVoteRequest {
  proposalId: Long;
  voter: string;
}
/** QueryVoteRequest defines the request type for querying x/committee vote. */

export interface QueryVoteRequestSDKType {
  proposal_id: Long;
  voter: string;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */

export interface QueryVoteResponse {
  proposalId: Long;
  voter: string;
  voteType: VoteType;
}
/** QueryVoteResponse defines the response type for querying x/committee vote. */

export interface QueryVoteResponseSDKType {
  proposal_id: Long;
  voter: string;
  vote_type: VoteTypeSDKType;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */

export interface QueryTallyRequest {
  proposalId: Long;
}
/** QueryTallyRequest defines the request type for querying x/committee tally. */

export interface QueryTallyRequestSDKType {
  proposal_id: Long;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */

export interface QueryTallyResponse {
  proposalId: Long;
  yesVotes: string;
  noVotes: string;
  currentVotes: string;
  possibleVotes: string;
  voteThreshold: string;
  quorum: string;
}
/** QueryTallyResponse defines the response type for querying x/committee tally. */

export interface QueryTallyResponseSDKType {
  proposal_id: Long;
  yes_votes: string;
  no_votes: string;
  current_votes: string;
  possible_votes: string;
  vote_threshold: string;
  quorum: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */

export interface QueryRawParamsRequest {
  subspace: string;
  key: string;
}
/** QueryRawParamsRequest defines the request type for querying x/committee raw params. */

export interface QueryRawParamsRequestSDKType {
  subspace: string;
  key: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */

export interface QueryRawParamsResponse {
  rawData: string;
}
/** QueryRawParamsResponse defines the response type for querying x/committee raw params. */

export interface QueryRawParamsResponseSDKType {
  raw_data: string;
}

function createBaseQueryCommitteesRequest(): QueryCommitteesRequest {
  return {};
}

export const QueryCommitteesRequest = {
  encode(_: QueryCommitteesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryCommitteesRequest {
    return {};
  },

  toJSON(_: QueryCommitteesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryCommitteesRequest>): QueryCommitteesRequest {
    const message = createBaseQueryCommitteesRequest();
    return message;
  }

};

function createBaseQueryCommitteesResponse(): QueryCommitteesResponse {
  return {
    committees: []
  };
}

export const QueryCommitteesResponse = {
  encode(message: QueryCommitteesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.committees) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.committees.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCommitteesResponse {
    return {
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryCommitteesResponse): unknown {
    const obj: any = {};

    if (message.committees) {
      obj.committees = message.committees.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.committees = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryCommitteesResponse>): QueryCommitteesResponse {
    const message = createBaseQueryCommitteesResponse();
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryCommitteeRequest(): QueryCommitteeRequest {
  return {
    committeeId: Long.UZERO
  };
}

export const QueryCommitteeRequest = {
  encode(message: QueryCommitteeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.committeeId.isZero()) {
      writer.uint32(8).uint64(message.committeeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.committeeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCommitteeRequest {
    return {
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO
    };
  },

  toJSON(message: QueryCommitteeRequest): unknown {
    const obj: any = {};
    message.committeeId !== undefined && (obj.committeeId = (message.committeeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCommitteeRequest>): QueryCommitteeRequest {
    const message = createBaseQueryCommitteeRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryCommitteeResponse(): QueryCommitteeResponse {
  return {
    committee: undefined
  };
}

export const QueryCommitteeResponse = {
  encode(message: QueryCommitteeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.committee !== undefined) {
      Any.encode(message.committee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitteeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitteeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.committee = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCommitteeResponse {
    return {
      committee: isSet(object.committee) ? Any.fromJSON(object.committee) : undefined
    };
  },

  toJSON(message: QueryCommitteeResponse): unknown {
    const obj: any = {};
    message.committee !== undefined && (obj.committee = message.committee ? Any.toJSON(message.committee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCommitteeResponse>): QueryCommitteeResponse {
    const message = createBaseQueryCommitteeResponse();
    message.committee = object.committee !== undefined && object.committee !== null ? Any.fromPartial(object.committee) : undefined;
    return message;
  }

};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    committeeId: Long.UZERO
  };
}

export const QueryProposalsRequest = {
  encode(message: QueryProposalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.committeeId.isZero()) {
      writer.uint32(8).uint64(message.committeeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.committeeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalsRequest {
    return {
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO
    };
  },

  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.committeeId !== undefined && (obj.committeeId = (message.committeeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: []
  };
}

export const QueryProposalsResponse = {
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      QueryProposalResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposals.push(QueryProposalResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => QueryProposalResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? QueryProposalResponse.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => QueryProposalResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: Long.UZERO
  };
}

export const QueryProposalRequest = {
  encode(message: QueryProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    pubProposal: undefined,
    id: Long.UZERO,
    committeeId: Long.UZERO,
    deadline: undefined
  };
}

export const QueryProposalResponse = {
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubProposal !== undefined) {
      Any.encode(message.pubProposal, writer.uint32(10).fork()).ldelim();
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }

    if (message.deadline !== undefined) {
      Timestamp.encode(message.deadline, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubProposal = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.committeeId = (reader.uint64() as Long);
          break;

        case 4:
          message.deadline = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    return {
      pubProposal: isSet(object.pubProposal) ? Any.fromJSON(object.pubProposal) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO,
      deadline: isSet(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.pubProposal !== undefined && (obj.pubProposal = message.pubProposal ? Any.toJSON(message.pubProposal) : undefined);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.committeeId !== undefined && (obj.committeeId = (message.committeeId || Long.UZERO).toString());
    message.deadline !== undefined && (obj.deadline = fromTimestamp(message.deadline).toISOString());
    return obj;
  },

  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.pubProposal = object.pubProposal !== undefined && object.pubProposal !== null ? Any.fromPartial(object.pubProposal) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Timestamp.fromPartial(object.deadline) : undefined;
    return message;
  }

};

function createBaseQueryNextProposalIDRequest(): QueryNextProposalIDRequest {
  return {};
}

export const QueryNextProposalIDRequest = {
  encode(_: QueryNextProposalIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextProposalIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryNextProposalIDRequest {
    return {};
  },

  toJSON(_: QueryNextProposalIDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryNextProposalIDRequest>): QueryNextProposalIDRequest {
    const message = createBaseQueryNextProposalIDRequest();
    return message;
  }

};

function createBaseQueryNextProposalIDResponse(): QueryNextProposalIDResponse {
  return {
    nextProposalId: Long.UZERO
  };
}

export const QueryNextProposalIDResponse = {
  encode(message: QueryNextProposalIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextProposalId.isZero()) {
      writer.uint32(8).uint64(message.nextProposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextProposalIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextProposalIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextProposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNextProposalIDResponse {
    return {
      nextProposalId: isSet(object.nextProposalId) ? Long.fromValue(object.nextProposalId) : Long.UZERO
    };
  },

  toJSON(message: QueryNextProposalIDResponse): unknown {
    const obj: any = {};
    message.nextProposalId !== undefined && (obj.nextProposalId = (message.nextProposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryNextProposalIDResponse>): QueryNextProposalIDResponse {
    const message = createBaseQueryNextProposalIDResponse();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? Long.fromValue(object.nextProposalId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}

export const QueryVotesResponse = {
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      QueryVoteResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votes.push(QueryVoteResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => QueryVoteResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};

    if (message.votes) {
      obj.votes = message.votes.map(e => e ? QueryVoteResponse.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => QueryVoteResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: Long.UZERO,
    voter: ""
  };
}

export const QueryVoteRequest = {
  encode(message: QueryVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVoteRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },

  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    proposalId: Long.UZERO,
    voter: "",
    voteType: 0
  };
}

export const QueryVoteResponse = {
  encode(message: QueryVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.voteType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVoteResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0
    };
  },

  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.voteType !== undefined && (obj.voteType = voteTypeToJSON(message.voteType));
    return obj;
  },

  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.voteType = object.voteType ?? 0;
    return message;
  }

};

function createBaseQueryTallyRequest(): QueryTallyRequest {
  return {
    proposalId: Long.UZERO
  };
}

export const QueryTallyRequest = {
  encode(message: QueryTallyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTallyRequest {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },

  toJSON(message: QueryTallyRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryTallyRequest>): QueryTallyRequest {
    const message = createBaseQueryTallyRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTallyResponse(): QueryTallyResponse {
  return {
    proposalId: Long.UZERO,
    yesVotes: "",
    noVotes: "",
    currentVotes: "",
    possibleVotes: "",
    voteThreshold: "",
    quorum: ""
  };
}

export const QueryTallyResponse = {
  encode(message: QueryTallyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.yesVotes !== "") {
      writer.uint32(18).string(message.yesVotes);
    }

    if (message.noVotes !== "") {
      writer.uint32(26).string(message.noVotes);
    }

    if (message.currentVotes !== "") {
      writer.uint32(34).string(message.currentVotes);
    }

    if (message.possibleVotes !== "") {
      writer.uint32(42).string(message.possibleVotes);
    }

    if (message.voteThreshold !== "") {
      writer.uint32(50).string(message.voteThreshold);
    }

    if (message.quorum !== "") {
      writer.uint32(58).string(message.quorum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.yesVotes = reader.string();
          break;

        case 3:
          message.noVotes = reader.string();
          break;

        case 4:
          message.currentVotes = reader.string();
          break;

        case 5:
          message.possibleVotes = reader.string();
          break;

        case 6:
          message.voteThreshold = reader.string();
          break;

        case 7:
          message.quorum = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTallyResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      yesVotes: isSet(object.yesVotes) ? String(object.yesVotes) : "",
      noVotes: isSet(object.noVotes) ? String(object.noVotes) : "",
      currentVotes: isSet(object.currentVotes) ? String(object.currentVotes) : "",
      possibleVotes: isSet(object.possibleVotes) ? String(object.possibleVotes) : "",
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      quorum: isSet(object.quorum) ? String(object.quorum) : ""
    };
  },

  toJSON(message: QueryTallyResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.yesVotes !== undefined && (obj.yesVotes = message.yesVotes);
    message.noVotes !== undefined && (obj.noVotes = message.noVotes);
    message.currentVotes !== undefined && (obj.currentVotes = message.currentVotes);
    message.possibleVotes !== undefined && (obj.possibleVotes = message.possibleVotes);
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    return obj;
  },

  fromPartial(object: Partial<QueryTallyResponse>): QueryTallyResponse {
    const message = createBaseQueryTallyResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.yesVotes = object.yesVotes ?? "";
    message.noVotes = object.noVotes ?? "";
    message.currentVotes = object.currentVotes ?? "";
    message.possibleVotes = object.possibleVotes ?? "";
    message.voteThreshold = object.voteThreshold ?? "";
    message.quorum = object.quorum ?? "";
    return message;
  }

};

function createBaseQueryRawParamsRequest(): QueryRawParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}

export const QueryRawParamsRequest = {
  encode(message: QueryRawParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }

    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;

        case 2:
          message.key = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRawParamsRequest {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },

  toJSON(message: QueryRawParamsRequest): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: Partial<QueryRawParamsRequest>): QueryRawParamsRequest {
    const message = createBaseQueryRawParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  }

};

function createBaseQueryRawParamsResponse(): QueryRawParamsResponse {
  return {
    rawData: ""
  };
}

export const QueryRawParamsResponse = {
  encode(message: QueryRawParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawData !== "") {
      writer.uint32(10).string(message.rawData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rawData = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRawParamsResponse {
    return {
      rawData: isSet(object.rawData) ? String(object.rawData) : ""
    };
  },

  toJSON(message: QueryRawParamsResponse): unknown {
    const obj: any = {};
    message.rawData !== undefined && (obj.rawData = message.rawData);
    return obj;
  },

  fromPartial(object: Partial<QueryRawParamsResponse>): QueryRawParamsResponse {
    const message = createBaseQueryRawParamsResponse();
    message.rawData = object.rawData ?? "";
    return message;
  }

};