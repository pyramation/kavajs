import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** TallyOption enumerates the valid types of a tally. */

export enum TallyOption {
  /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
  TALLY_OPTION_UNSPECIFIED = 0,

  /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
  TALLY_OPTION_FIRST_PAST_THE_POST = 1,

  /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
  TALLY_OPTION_DEADLINE = 2,
  UNRECOGNIZED = -1,
}
/** TallyOption enumerates the valid types of a tally. */

export enum TallyOptionSDKType {
  /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
  TALLY_OPTION_UNSPECIFIED = 0,

  /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
  TALLY_OPTION_FIRST_PAST_THE_POST = 1,

  /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
  TALLY_OPTION_DEADLINE = 2,
  UNRECOGNIZED = -1,
}
export function tallyOptionFromJSON(object: any): TallyOption {
  switch (object) {
    case 0:
    case "TALLY_OPTION_UNSPECIFIED":
      return TallyOption.TALLY_OPTION_UNSPECIFIED;

    case 1:
    case "TALLY_OPTION_FIRST_PAST_THE_POST":
      return TallyOption.TALLY_OPTION_FIRST_PAST_THE_POST;

    case 2:
    case "TALLY_OPTION_DEADLINE":
      return TallyOption.TALLY_OPTION_DEADLINE;

    case -1:
    case "UNRECOGNIZED":
    default:
      return TallyOption.UNRECOGNIZED;
  }
}
export function tallyOptionToJSON(object: TallyOption): string {
  switch (object) {
    case TallyOption.TALLY_OPTION_UNSPECIFIED:
      return "TALLY_OPTION_UNSPECIFIED";

    case TallyOption.TALLY_OPTION_FIRST_PAST_THE_POST:
      return "TALLY_OPTION_FIRST_PAST_THE_POST";

    case TallyOption.TALLY_OPTION_DEADLINE:
      return "TALLY_OPTION_DEADLINE";

    case TallyOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BaseCommittee is a common type shared by all Committees */

export interface BaseCommittee {
  id: Long;
  description: string;
  members: Uint8Array[];
  permissions: Any[];
  /** Smallest percentage that must vote for a proposal to pass */

  voteThreshold: string;
  /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */

  proposalDuration?: Duration;
  tallyOption: TallyOption;
}
/** BaseCommittee is a common type shared by all Committees */

export interface BaseCommitteeSDKType {
  id: Long;
  description: string;
  members: Uint8Array[];
  permissions: AnySDKType[];
  /** Smallest percentage that must vote for a proposal to pass */

  vote_threshold: string;
  /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */

  proposal_duration?: DurationSDKType;
  tally_option: TallyOptionSDKType;
}
/** MemberCommittee is an alias of BaseCommittee */

export interface MemberCommittee {
  baseCommittee?: BaseCommittee;
}
/** MemberCommittee is an alias of BaseCommittee */

export interface MemberCommitteeSDKType {
  base_committee?: BaseCommitteeSDKType;
}
/** TokenCommittee supports voting on proposals by token holders */

export interface TokenCommittee {
  baseCommittee?: BaseCommittee;
  quorum: string;
  tallyDenom: string;
}
/** TokenCommittee supports voting on proposals by token holders */

export interface TokenCommitteeSDKType {
  base_committee?: BaseCommitteeSDKType;
  quorum: string;
  tally_denom: string;
}

function createBaseBaseCommittee(): BaseCommittee {
  return {
    id: Long.UZERO,
    description: "",
    members: [],
    permissions: [],
    voteThreshold: "",
    proposalDuration: undefined,
    tallyOption: 0
  };
}

export const BaseCommittee = {
  encode(message: BaseCommittee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.members) {
      writer.uint32(26).bytes(v!);
    }

    for (const v of message.permissions) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.voteThreshold !== "") {
      writer.uint32(42).string(message.voteThreshold);
    }

    if (message.proposalDuration !== undefined) {
      Duration.encode(message.proposalDuration, writer.uint32(50).fork()).ldelim();
    }

    if (message.tallyOption !== 0) {
      writer.uint32(56).int32(message.tallyOption);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseCommittee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseCommittee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.members.push(reader.bytes());
          break;

        case 4:
          message.permissions.push(Any.decode(reader, reader.uint32()));
          break;

        case 5:
          message.voteThreshold = reader.string();
          break;

        case 6:
          message.proposalDuration = Duration.decode(reader, reader.uint32());
          break;

        case 7:
          message.tallyOption = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BaseCommittee {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      description: isSet(object.description) ? String(object.description) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => bytesFromBase64(e)) : [],
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Any.fromJSON(e)) : [],
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      proposalDuration: isSet(object.proposalDuration) ? Duration.fromJSON(object.proposalDuration) : undefined,
      tallyOption: isSet(object.tallyOption) ? tallyOptionFromJSON(object.tallyOption) : 0
    };
  },

  toJSON(message: BaseCommittee): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.description !== undefined && (obj.description = message.description);

    if (message.members) {
      obj.members = message.members.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.members = [];
    }

    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.permissions = [];
    }

    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.proposalDuration !== undefined && (obj.proposalDuration = message.proposalDuration ? Duration.toJSON(message.proposalDuration) : undefined);
    message.tallyOption !== undefined && (obj.tallyOption = tallyOptionToJSON(message.tallyOption));
    return obj;
  },

  fromPartial(object: Partial<BaseCommittee>): BaseCommittee {
    const message = createBaseBaseCommittee();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.description = object.description ?? "";
    message.members = object.members?.map(e => e) || [];
    message.permissions = object.permissions?.map(e => Any.fromPartial(e)) || [];
    message.voteThreshold = object.voteThreshold ?? "";
    message.proposalDuration = object.proposalDuration !== undefined && object.proposalDuration !== null ? Duration.fromPartial(object.proposalDuration) : undefined;
    message.tallyOption = object.tallyOption ?? 0;
    return message;
  }

};

function createBaseMemberCommittee(): MemberCommittee {
  return {
    baseCommittee: undefined
  };
}

export const MemberCommittee = {
  encode(message: MemberCommittee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseCommittee !== undefined) {
      BaseCommittee.encode(message.baseCommittee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MemberCommittee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemberCommittee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseCommittee = BaseCommittee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MemberCommittee {
    return {
      baseCommittee: isSet(object.baseCommittee) ? BaseCommittee.fromJSON(object.baseCommittee) : undefined
    };
  },

  toJSON(message: MemberCommittee): unknown {
    const obj: any = {};
    message.baseCommittee !== undefined && (obj.baseCommittee = message.baseCommittee ? BaseCommittee.toJSON(message.baseCommittee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MemberCommittee>): MemberCommittee {
    const message = createBaseMemberCommittee();
    message.baseCommittee = object.baseCommittee !== undefined && object.baseCommittee !== null ? BaseCommittee.fromPartial(object.baseCommittee) : undefined;
    return message;
  }

};

function createBaseTokenCommittee(): TokenCommittee {
  return {
    baseCommittee: undefined,
    quorum: "",
    tallyDenom: ""
  };
}

export const TokenCommittee = {
  encode(message: TokenCommittee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseCommittee !== undefined) {
      BaseCommittee.encode(message.baseCommittee, writer.uint32(10).fork()).ldelim();
    }

    if (message.quorum !== "") {
      writer.uint32(18).string(message.quorum);
    }

    if (message.tallyDenom !== "") {
      writer.uint32(26).string(message.tallyDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCommittee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCommittee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseCommittee = BaseCommittee.decode(reader, reader.uint32());
          break;

        case 2:
          message.quorum = reader.string();
          break;

        case 3:
          message.tallyDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TokenCommittee {
    return {
      baseCommittee: isSet(object.baseCommittee) ? BaseCommittee.fromJSON(object.baseCommittee) : undefined,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      tallyDenom: isSet(object.tallyDenom) ? String(object.tallyDenom) : ""
    };
  },

  toJSON(message: TokenCommittee): unknown {
    const obj: any = {};
    message.baseCommittee !== undefined && (obj.baseCommittee = message.baseCommittee ? BaseCommittee.toJSON(message.baseCommittee) : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.tallyDenom !== undefined && (obj.tallyDenom = message.tallyDenom);
    return obj;
  },

  fromPartial(object: Partial<TokenCommittee>): TokenCommittee {
    const message = createBaseTokenCommittee();
    message.baseCommittee = object.baseCommittee !== undefined && object.baseCommittee !== null ? BaseCommittee.fromPartial(object.baseCommittee) : undefined;
    message.quorum = object.quorum ?? "";
    message.tallyDenom = object.tallyDenom ?? "";
    return message;
  }

};