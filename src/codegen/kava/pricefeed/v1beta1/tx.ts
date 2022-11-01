import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** MsgPostPrice represents a method for creating a new post price */

export interface MsgPostPrice {
  /** address of client */
  from: string;
  marketId: string;
  price: string;
  expiry?: Timestamp;
}
/** MsgPostPrice represents a method for creating a new post price */

export interface MsgPostPriceSDKType {
  /** address of client */
  from: string;
  market_id: string;
  price: string;
  expiry?: TimestampSDKType;
}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */

export interface MsgPostPriceResponse {}
/** MsgPostPriceResponse defines the Msg/PostPrice response type. */

export interface MsgPostPriceResponseSDKType {}

function createBaseMsgPostPrice(): MsgPostPrice {
  return {
    from: "",
    marketId: "",
    price: "",
    expiry: undefined
  };
}

export const MsgPostPrice = {
  encode(message: MsgPostPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.marketId = reader.string();
          break;

        case 3:
          message.price = reader.string();
          break;

        case 4:
          message.expiry = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPostPrice {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },

  toJSON(message: MsgPostPrice): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    return obj;
  },

  fromPartial(object: Partial<MsgPostPrice>): MsgPostPrice {
    const message = createBaseMsgPostPrice();
    message.from = object.from ?? "";
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  }

};

function createBaseMsgPostPriceResponse(): MsgPostPriceResponse {
  return {};
}

export const MsgPostPriceResponse = {
  encode(_: MsgPostPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPostPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPostPriceResponse();

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

  fromJSON(_: any): MsgPostPriceResponse {
    return {};
  },

  toJSON(_: MsgPostPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgPostPriceResponse>): MsgPostPriceResponse {
    const message = createBaseMsgPostPriceResponse();
    return message;
  }

};