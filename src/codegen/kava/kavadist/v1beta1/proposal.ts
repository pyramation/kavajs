import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */

export interface CommunityPoolMultiSpendProposal {
  title: string;
  description: string;
  recipientList: MultiSpendRecipient[];
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */

export interface CommunityPoolMultiSpendProposalSDKType {
  title: string;
  description: string;
  recipient_list: MultiSpendRecipientSDKType[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */

export interface CommunityPoolMultiSpendProposalJSON {
  title: string;
  description: string;
  recipientList: MultiSpendRecipient[];
  deposit: Coin[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */

export interface CommunityPoolMultiSpendProposalJSONSDKType {
  title: string;
  description: string;
  recipient_list: MultiSpendRecipientSDKType[];
  deposit: CoinSDKType[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */

export interface MultiSpendRecipient {
  address: string;
  amount: Coin[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */

export interface MultiSpendRecipientSDKType {
  address: string;
  amount: CoinSDKType[];
}

function createBaseCommunityPoolMultiSpendProposal(): CommunityPoolMultiSpendProposal {
  return {
    title: "",
    description: "",
    recipientList: []
  };
}

export const CommunityPoolMultiSpendProposal = {
  encode(message: CommunityPoolMultiSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.recipientList) {
      MultiSpendRecipient.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolMultiSpendProposal();

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
          message.recipientList.push(MultiSpendRecipient.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommunityPoolMultiSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipientList: Array.isArray(object?.recipientList) ? object.recipientList.map((e: any) => MultiSpendRecipient.fromJSON(e)) : []
    };
  },

  toJSON(message: CommunityPoolMultiSpendProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.recipientList) {
      obj.recipientList = message.recipientList.map(e => e ? MultiSpendRecipient.toJSON(e) : undefined);
    } else {
      obj.recipientList = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CommunityPoolMultiSpendProposal>): CommunityPoolMultiSpendProposal {
    const message = createBaseCommunityPoolMultiSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipientList = object.recipientList?.map(e => MultiSpendRecipient.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCommunityPoolMultiSpendProposalJSON(): CommunityPoolMultiSpendProposalJSON {
  return {
    title: "",
    description: "",
    recipientList: [],
    deposit: []
  };
}

export const CommunityPoolMultiSpendProposalJSON = {
  encode(message: CommunityPoolMultiSpendProposalJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.recipientList) {
      MultiSpendRecipient.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposalJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolMultiSpendProposalJSON();

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
          message.recipientList.push(MultiSpendRecipient.decode(reader, reader.uint32()));
          break;

        case 4:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommunityPoolMultiSpendProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipientList: Array.isArray(object?.recipientList) ? object.recipientList.map((e: any) => MultiSpendRecipient.fromJSON(e)) : [],
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: CommunityPoolMultiSpendProposalJSON): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);

    if (message.recipientList) {
      obj.recipientList = message.recipientList.map(e => e ? MultiSpendRecipient.toJSON(e) : undefined);
    } else {
      obj.recipientList = [];
    }

    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CommunityPoolMultiSpendProposalJSON>): CommunityPoolMultiSpendProposalJSON {
    const message = createBaseCommunityPoolMultiSpendProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipientList = object.recipientList?.map(e => MultiSpendRecipient.fromPartial(e)) || [];
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMultiSpendRecipient(): MultiSpendRecipient {
  return {
    address: "",
    amount: []
  };
}

export const MultiSpendRecipient = {
  encode(message: MultiSpendRecipient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSpendRecipient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSpendRecipient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MultiSpendRecipient {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MultiSpendRecipient): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MultiSpendRecipient>): MultiSpendRecipient {
    const message = createBaseMultiSpendRecipient();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};