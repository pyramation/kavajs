import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */

export interface CommunityPoolDepositProposal {
  title: string;
  description: string;
  amount?: Coin;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */

export interface CommunityPoolDepositProposalSDKType {
  title: string;
  description: string;
  amount?: CoinSDKType;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */

export interface CommunityPoolDepositProposalJSON {
  title: string;
  description: string;
  amount?: Coin;
  deposit: Coin[];
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */

export interface CommunityPoolDepositProposalJSONSDKType {
  title: string;
  description: string;
  amount?: CoinSDKType;
  deposit: CoinSDKType[];
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */

export interface CommunityPoolWithdrawProposal {
  title: string;
  description: string;
  amount?: Coin;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */

export interface CommunityPoolWithdrawProposalSDKType {
  title: string;
  description: string;
  amount?: CoinSDKType;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */

export interface CommunityPoolWithdrawProposalJSON {
  title: string;
  description: string;
  amount?: Coin;
  deposit: Coin[];
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */

export interface CommunityPoolWithdrawProposalJSONSDKType {
  title: string;
  description: string;
  amount?: CoinSDKType;
  deposit: CoinSDKType[];
}

function createBaseCommunityPoolDepositProposal(): CommunityPoolDepositProposal {
  return {
    title: "",
    description: "",
    amount: undefined
  };
}

export const CommunityPoolDepositProposal = {
  encode(message: CommunityPoolDepositProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolDepositProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolDepositProposal();

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
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommunityPoolDepositProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: CommunityPoolDepositProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CommunityPoolDepositProposal>): CommunityPoolDepositProposal {
    const message = createBaseCommunityPoolDepositProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseCommunityPoolDepositProposalJSON(): CommunityPoolDepositProposalJSON {
  return {
    title: "",
    description: "",
    amount: undefined,
    deposit: []
  };
}

export const CommunityPoolDepositProposalJSON = {
  encode(message: CommunityPoolDepositProposalJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolDepositProposalJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolDepositProposalJSON();

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
          message.amount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): CommunityPoolDepositProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: CommunityPoolDepositProposalJSON): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);

    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CommunityPoolDepositProposalJSON>): CommunityPoolDepositProposalJSON {
    const message = createBaseCommunityPoolDepositProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCommunityPoolWithdrawProposal(): CommunityPoolWithdrawProposal {
  return {
    title: "",
    description: "",
    amount: undefined
  };
}

export const CommunityPoolWithdrawProposal = {
  encode(message: CommunityPoolWithdrawProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolWithdrawProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolWithdrawProposal();

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
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CommunityPoolWithdrawProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: CommunityPoolWithdrawProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CommunityPoolWithdrawProposal>): CommunityPoolWithdrawProposal {
    const message = createBaseCommunityPoolWithdrawProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseCommunityPoolWithdrawProposalJSON(): CommunityPoolWithdrawProposalJSON {
  return {
    title: "",
    description: "",
    amount: undefined,
    deposit: []
  };
}

export const CommunityPoolWithdrawProposalJSON = {
  encode(message: CommunityPoolWithdrawProposalJSON, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolWithdrawProposalJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolWithdrawProposalJSON();

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
          message.amount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): CommunityPoolWithdrawProposalJSON {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      deposit: Array.isArray(object?.deposit) ? object.deposit.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: CommunityPoolWithdrawProposalJSON): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);

    if (message.deposit) {
      obj.deposit = message.deposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.deposit = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CommunityPoolWithdrawProposalJSON>): CommunityPoolWithdrawProposalJSON {
    const message = createBaseCommunityPoolWithdrawProposalJSON();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.deposit = object.deposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};