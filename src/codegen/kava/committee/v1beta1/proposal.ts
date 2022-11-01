import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */

export interface CommitteeChangeProposal {
  title: string;
  description: string;
  newCommittee?: Any;
}
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */

export interface CommitteeChangeProposalSDKType {
  title: string;
  description: string;
  new_committee?: AnySDKType;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */

export interface CommitteeDeleteProposal {
  title: string;
  description: string;
  committeeId: Long;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */

export interface CommitteeDeleteProposalSDKType {
  title: string;
  description: string;
  committee_id: Long;
}

function createBaseCommitteeChangeProposal(): CommitteeChangeProposal {
  return {
    title: "",
    description: "",
    newCommittee: undefined
  };
}

export const CommitteeChangeProposal = {
  encode(message: CommitteeChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.newCommittee !== undefined) {
      Any.encode(message.newCommittee, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeChangeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitteeChangeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.newCommittee = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitteeChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newCommittee: isSet(object.newCommittee) ? Any.fromJSON(object.newCommittee) : undefined
    };
  },

  toJSON(message: CommitteeChangeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.newCommittee !== undefined && (obj.newCommittee = message.newCommittee ? Any.toJSON(message.newCommittee) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CommitteeChangeProposal>): CommitteeChangeProposal {
    const message = createBaseCommitteeChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newCommittee = object.newCommittee !== undefined && object.newCommittee !== null ? Any.fromPartial(object.newCommittee) : undefined;
    return message;
  }

};

function createBaseCommitteeDeleteProposal(): CommitteeDeleteProposal {
  return {
    title: "",
    description: "",
    committeeId: Long.UZERO
  };
}

export const CommitteeDeleteProposal = {
  encode(message: CommitteeDeleteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (!message.committeeId.isZero()) {
      writer.uint32(24).uint64(message.committeeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitteeDeleteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitteeDeleteProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.committeeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommitteeDeleteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      committeeId: isSet(object.committeeId) ? Long.fromValue(object.committeeId) : Long.UZERO
    };
  },

  toJSON(message: CommitteeDeleteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.committeeId !== undefined && (obj.committeeId = (message.committeeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<CommitteeDeleteProposal>): CommitteeDeleteProposal {
    const message = createBaseCommitteeDeleteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? Long.fromValue(object.committeeId) : Long.UZERO;
    return message;
  }

};