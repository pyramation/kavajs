import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */

export interface MsgPlaceBid {
  auctionId: Long;
  bidder: string;
  amount?: Coin;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */

export interface MsgPlaceBidSDKType {
  auction_id: Long;
  bidder: string;
  amount?: CoinSDKType;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */

export interface MsgPlaceBidResponse {}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */

export interface MsgPlaceBidResponseSDKType {}

function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    auctionId: Long.UZERO,
    bidder: "",
    amount: undefined
  };
}

export const MsgPlaceBid = {
  encode(message: MsgPlaceBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }

    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.auctionId = (reader.uint64() as Long);
          break;

        case 2:
          message.bidder = reader.string();
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

  fromJSON(object: any): MsgPlaceBid {
    return {
      auctionId: isSet(object.auctionId) ? Long.fromValue(object.auctionId) : Long.UZERO,
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {};
    message.auctionId !== undefined && (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.auctionId = object.auctionId !== undefined && object.auctionId !== null ? Long.fromValue(object.auctionId) : Long.UZERO;
    message.bidder = object.bidder ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return {};
}

export const MsgPlaceBidResponse = {
  encode(_: MsgPlaceBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();

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

  fromJSON(_: any): MsgPlaceBidResponse {
    return {};
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  }

};