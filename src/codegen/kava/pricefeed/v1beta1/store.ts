import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** Params defines the parameters for the pricefeed module. */

export interface Params {
  markets: Market[];
}
/** Params defines the parameters for the pricefeed module. */

export interface ParamsSDKType {
  markets: MarketSDKType[];
}
/** Market defines an asset in the pricefeed. */

export interface Market {
  marketId: string;
  baseAsset: string;
  quoteAsset: string;
  oracles: Uint8Array[];
  active: boolean;
}
/** Market defines an asset in the pricefeed. */

export interface MarketSDKType {
  market_id: string;
  base_asset: string;
  quote_asset: string;
  oracles: Uint8Array[];
  active: boolean;
}
/** PostedPrice defines a price for market posted by a specific oracle. */

export interface PostedPrice {
  marketId: string;
  oracleAddress: Uint8Array;
  price: string;
  expiry?: Timestamp;
}
/** PostedPrice defines a price for market posted by a specific oracle. */

export interface PostedPriceSDKType {
  market_id: string;
  oracle_address: Uint8Array;
  price: string;
  expiry?: TimestampSDKType;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */

export interface CurrentPrice {
  marketId: string;
  price: string;
}
/**
 * CurrentPrice defines a current price for a particular market in the pricefeed
 * module.
 */

export interface CurrentPriceSDKType {
  market_id: string;
  price: string;
}

function createBaseParams(): Params {
  return {
    markets: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => Market.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.markets) {
      obj.markets = message.markets.map(e => e ? Market.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.markets = object.markets?.map(e => Market.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMarket(): Market {
  return {
    marketId: "",
    baseAsset: "",
    quoteAsset: "",
    oracles: [],
    active: false
  };
}

export const Market = {
  encode(message: Market, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }

    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }

    for (const v of message.oracles) {
      writer.uint32(34).bytes(v!);
    }

    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.baseAsset = reader.string();
          break;

        case 3:
          message.quoteAsset = reader.string();
          break;

        case 4:
          message.oracles.push(reader.bytes());
          break;

        case 5:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Market {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => bytesFromBase64(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);

    if (message.oracles) {
      obj.oracles = message.oracles.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oracles = [];
    }

    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: Partial<Market>): Market {
    const message = createBaseMarket();
    message.marketId = object.marketId ?? "";
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.oracles = object.oracles?.map(e => e) || [];
    message.active = object.active ?? false;
    return message;
  }

};

function createBasePostedPrice(): PostedPrice {
  return {
    marketId: "",
    oracleAddress: new Uint8Array(),
    price: "",
    expiry: undefined
  };
}

export const PostedPrice = {
  encode(message: PostedPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.oracleAddress.length !== 0) {
      writer.uint32(18).bytes(message.oracleAddress);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostedPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostedPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.oracleAddress = reader.bytes();
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

  fromJSON(object: any): PostedPrice {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      oracleAddress: isSet(object.oracleAddress) ? bytesFromBase64(object.oracleAddress) : new Uint8Array(),
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },

  toJSON(message: PostedPrice): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.oracleAddress !== undefined && (obj.oracleAddress = base64FromBytes(message.oracleAddress !== undefined ? message.oracleAddress : new Uint8Array()));
    message.price !== undefined && (obj.price = message.price);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    return obj;
  },

  fromPartial(object: Partial<PostedPrice>): PostedPrice {
    const message = createBasePostedPrice();
    message.marketId = object.marketId ?? "";
    message.oracleAddress = object.oracleAddress ?? new Uint8Array();
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  }

};

function createBaseCurrentPrice(): CurrentPrice {
  return {
    marketId: "",
    price: ""
  };
}

export const CurrentPrice = {
  encode(message: CurrentPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPrice();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CurrentPrice {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },

  toJSON(message: CurrentPrice): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: Partial<CurrentPrice>): CurrentPrice {
    const message = createBaseCurrentPrice();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    return message;
  }

};