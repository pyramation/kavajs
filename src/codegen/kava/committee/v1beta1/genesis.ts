import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** VoteType enumerates the valid types of a vote. */

export enum VoteType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
  VOTE_TYPE_UNSPECIFIED = 0,

  /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
  VOTE_TYPE_YES = 1,

  /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
  VOTE_TYPE_NO = 2,

  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}
/** VoteType enumerates the valid types of a vote. */

export enum VoteTypeSDKType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED defines a no-op vote option. */
  VOTE_TYPE_UNSPECIFIED = 0,

  /** VOTE_TYPE_YES - VOTE_TYPE_YES defines a yes vote option. */
  VOTE_TYPE_YES = 1,

  /** VOTE_TYPE_NO - VOTE_TYPE_NO defines a no vote option. */
  VOTE_TYPE_NO = 2,

  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN defines an abstain vote option. */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}
export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_UNSPECIFIED":
      return VoteType.VOTE_TYPE_UNSPECIFIED;

    case 1:
    case "VOTE_TYPE_YES":
      return VoteType.VOTE_TYPE_YES;

    case 2:
    case "VOTE_TYPE_NO":
      return VoteType.VOTE_TYPE_NO;

    case 3:
    case "VOTE_TYPE_ABSTAIN":
      return VoteType.VOTE_TYPE_ABSTAIN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}
export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_UNSPECIFIED:
      return "VOTE_TYPE_UNSPECIFIED";

    case VoteType.VOTE_TYPE_YES:
      return "VOTE_TYPE_YES";

    case VoteType.VOTE_TYPE_NO:
      return "VOTE_TYPE_NO";

    case VoteType.VOTE_TYPE_ABSTAIN:
      return "VOTE_TYPE_ABSTAIN";

    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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

function createBaseGenesisState(): GenesisState {
  return {
    nextProposalId: Long.UZERO,
    committees: [],
    proposals: [],
    votes: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextProposalId.isZero()) {
      writer.uint32(8).uint64(message.nextProposalId);
    }

    for (const v of message.committees) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextProposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.committees.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;

        case 4:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      nextProposalId: isSet(object.nextProposalId) ? Long.fromValue(object.nextProposalId) : Long.UZERO,
      committees: Array.isArray(object?.committees) ? object.committees.map((e: any) => Any.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nextProposalId !== undefined && (obj.nextProposalId = (message.nextProposalId || Long.UZERO).toString());

    if (message.committees) {
      obj.committees = message.committees.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.committees = [];
    }

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }

    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextProposalId = object.nextProposalId !== undefined && object.nextProposalId !== null ? Long.fromValue(object.nextProposalId) : Long.UZERO;
    message.committees = object.committees?.map(e => Any.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    return message;
  }

};

function createBaseProposal(): Proposal {
  return {
    content: undefined,
    id: Long.UZERO,
    committeeId: Long.UZERO,
    deadline: undefined
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): Proposal {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO,
      deadline: isSet(object.deadline) ? fromJsonTimestamp(object.deadline) : undefined
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.committeeId !== undefined && (obj.committeeId = (message.committeeId || Long.UZERO).toString());
    message.deadline !== undefined && (obj.deadline = fromTimestamp(message.deadline).toISOString());
    return obj;
  },

  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    message.deadline = object.deadline !== undefined && object.deadline !== null ? Timestamp.fromPartial(object.deadline) : undefined;
    return message;
  }

};

function createBaseVote(): Vote {
  return {
    proposalId: Long.UZERO,
    voter: new Uint8Array(),
    voteType: 0
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter.length !== 0) {
      writer.uint32(18).bytes(message.voter);
    }

    if (message.voteType !== 0) {
      writer.uint32(24).int32(message.voteType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.bytes();
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

  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? bytesFromBase64(object.voter) : new Uint8Array(),
      voteType: isSet(object.voteType) ? voteTypeFromJSON(object.voteType) : 0
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = base64FromBytes(message.voter !== undefined ? message.voter : new Uint8Array()));
    message.voteType !== undefined && (obj.voteType = voteTypeToJSON(message.voteType));
    return obj;
  },

  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? new Uint8Array();
    message.voteType = object.voteType ?? 0;
    return message;
  }

};