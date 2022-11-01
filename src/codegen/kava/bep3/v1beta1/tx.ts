import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */

export interface MsgCreateAtomicSwap {
  from: string;
  to: string;
  recipientOtherChain: string;
  senderOtherChain: string;
  randomNumberHash: string;
  timestamp: Long;
  amount: Coin[];
  heightSpan: Long;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */

export interface MsgCreateAtomicSwapSDKType {
  from: string;
  to: string;
  recipient_other_chain: string;
  sender_other_chain: string;
  random_number_hash: string;
  timestamp: Long;
  amount: CoinSDKType[];
  height_span: Long;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */

export interface MsgCreateAtomicSwapResponse {}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */

export interface MsgCreateAtomicSwapResponseSDKType {}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */

export interface MsgClaimAtomicSwap {
  from: string;
  swapId: string;
  randomNumber: string;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */

export interface MsgClaimAtomicSwapSDKType {
  from: string;
  swap_id: string;
  random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */

export interface MsgClaimAtomicSwapResponse {}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */

export interface MsgClaimAtomicSwapResponseSDKType {}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */

export interface MsgRefundAtomicSwap {
  from: string;
  swapId: string;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */

export interface MsgRefundAtomicSwapSDKType {
  from: string;
  swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */

export interface MsgRefundAtomicSwapResponse {}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */

export interface MsgRefundAtomicSwapResponseSDKType {}

function createBaseMsgCreateAtomicSwap(): MsgCreateAtomicSwap {
  return {
    from: "",
    to: "",
    recipientOtherChain: "",
    senderOtherChain: "",
    randomNumberHash: "",
    timestamp: Long.ZERO,
    amount: [],
    heightSpan: Long.UZERO
  };
}

export const MsgCreateAtomicSwap = {
  encode(message: MsgCreateAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }

    if (message.recipientOtherChain !== "") {
      writer.uint32(26).string(message.recipientOtherChain);
    }

    if (message.senderOtherChain !== "") {
      writer.uint32(34).string(message.senderOtherChain);
    }

    if (message.randomNumberHash !== "") {
      writer.uint32(42).string(message.randomNumberHash);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(48).int64(message.timestamp);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.heightSpan.isZero()) {
      writer.uint32(64).uint64(message.heightSpan);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAtomicSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.recipientOtherChain = reader.string();
          break;

        case 4:
          message.senderOtherChain = reader.string();
          break;

        case 5:
          message.randomNumberHash = reader.string();
          break;

        case 6:
          message.timestamp = (reader.int64() as Long);
          break;

        case 7:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.heightSpan = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      randomNumberHash: isSet(object.randomNumberHash) ? String(object.randomNumberHash) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      heightSpan: isSet(object.heightSpan) ? Long.fromValue(object.heightSpan) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateAtomicSwap): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.recipientOtherChain !== undefined && (obj.recipientOtherChain = message.recipientOtherChain);
    message.senderOtherChain !== undefined && (obj.senderOtherChain = message.senderOtherChain);
    message.randomNumberHash !== undefined && (obj.randomNumberHash = message.randomNumberHash);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    message.heightSpan !== undefined && (obj.heightSpan = (message.heightSpan || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap {
    const message = createBaseMsgCreateAtomicSwap();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.heightSpan = object.heightSpan !== undefined && object.heightSpan !== null ? Long.fromValue(object.heightSpan) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateAtomicSwapResponse(): MsgCreateAtomicSwapResponse {
  return {};
}

export const MsgCreateAtomicSwapResponse = {
  encode(_: MsgCreateAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAtomicSwapResponse();

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

  fromJSON(_: any): MsgCreateAtomicSwapResponse {
    return {};
  },

  toJSON(_: MsgCreateAtomicSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse {
    const message = createBaseMsgCreateAtomicSwapResponse();
    return message;
  }

};

function createBaseMsgClaimAtomicSwap(): MsgClaimAtomicSwap {
  return {
    from: "",
    swapId: "",
    randomNumber: ""
  };
}

export const MsgClaimAtomicSwap = {
  encode(message: MsgClaimAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }

    if (message.randomNumber !== "") {
      writer.uint32(26).string(message.randomNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAtomicSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.swapId = reader.string();
          break;

        case 3:
          message.randomNumber = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      swapId: isSet(object.swapId) ? String(object.swapId) : "",
      randomNumber: isSet(object.randomNumber) ? String(object.randomNumber) : ""
    };
  },

  toJSON(message: MsgClaimAtomicSwap): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.swapId !== undefined && (obj.swapId = message.swapId);
    message.randomNumber !== undefined && (obj.randomNumber = message.randomNumber);
    return obj;
  },

  fromPartial(object: Partial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap {
    const message = createBaseMsgClaimAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    message.randomNumber = object.randomNumber ?? "";
    return message;
  }

};

function createBaseMsgClaimAtomicSwapResponse(): MsgClaimAtomicSwapResponse {
  return {};
}

export const MsgClaimAtomicSwapResponse = {
  encode(_: MsgClaimAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAtomicSwapResponse();

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

  fromJSON(_: any): MsgClaimAtomicSwapResponse {
    return {};
  },

  toJSON(_: MsgClaimAtomicSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse {
    const message = createBaseMsgClaimAtomicSwapResponse();
    return message;
  }

};

function createBaseMsgRefundAtomicSwap(): MsgRefundAtomicSwap {
  return {
    from: "",
    swapId: ""
  };
}

export const MsgRefundAtomicSwap = {
  encode(message: MsgRefundAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundAtomicSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.swapId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRefundAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      swapId: isSet(object.swapId) ? String(object.swapId) : ""
    };
  },

  toJSON(message: MsgRefundAtomicSwap): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.swapId !== undefined && (obj.swapId = message.swapId);
    return obj;
  },

  fromPartial(object: Partial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap {
    const message = createBaseMsgRefundAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    return message;
  }

};

function createBaseMsgRefundAtomicSwapResponse(): MsgRefundAtomicSwapResponse {
  return {};
}

export const MsgRefundAtomicSwapResponse = {
  encode(_: MsgRefundAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundAtomicSwapResponse();

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

  fromJSON(_: any): MsgRefundAtomicSwapResponse {
    return {};
  },

  toJSON(_: MsgRefundAtomicSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse {
    const message = createBaseMsgRefundAtomicSwapResponse();
    return message;
  }

};