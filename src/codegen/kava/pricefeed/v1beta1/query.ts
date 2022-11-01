import { Params, ParamsSDKType } from "./store";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */

export interface QueryParamsRequest {}
/**
 * QueryParamsRequest defines the request type for querying x/pricefeed
 * parameters.
 */

export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */

export interface QueryParamsResponse {
  params?: Params;
}
/**
 * QueryParamsResponse defines the response type for querying x/pricefeed
 * parameters.
 */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */

export interface QueryPriceRequest {
  marketId: string;
}
/** QueryPriceRequest is the request type for the Query/PriceRequest RPC method. */

export interface QueryPriceRequestSDKType {
  market_id: string;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */

export interface QueryPriceResponse {
  price?: CurrentPriceResponse;
}
/** QueryPriceResponse is the response type for the Query/Prices RPC method. */

export interface QueryPriceResponseSDKType {
  price?: CurrentPriceResponseSDKType;
}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */

export interface QueryPricesRequest {}
/** QueryPricesRequest is the request type for the Query/Prices RPC method. */

export interface QueryPricesRequestSDKType {}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */

export interface QueryPricesResponse {
  prices: CurrentPriceResponse[];
}
/** QueryPricesResponse is the response type for the Query/Prices RPC method. */

export interface QueryPricesResponseSDKType {
  prices: CurrentPriceResponseSDKType[];
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */

export interface QueryRawPricesRequest {
  marketId: string;
}
/** QueryRawPricesRequest is the request type for the Query/RawPrices RPC method. */

export interface QueryRawPricesRequestSDKType {
  market_id: string;
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */

export interface QueryRawPricesResponse {
  rawPrices: PostedPriceResponse[];
}
/**
 * QueryRawPricesResponse is the response type for the Query/RawPrices RPC
 * method.
 */

export interface QueryRawPricesResponseSDKType {
  raw_prices: PostedPriceResponseSDKType[];
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */

export interface QueryOraclesRequest {
  marketId: string;
}
/** QueryOraclesRequest is the request type for the Query/Oracles RPC method. */

export interface QueryOraclesRequestSDKType {
  market_id: string;
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */

export interface QueryOraclesResponse {
  /** List of oracle addresses */
  oracles: string[];
}
/** QueryOraclesResponse is the response type for the Query/Oracles RPC method. */

export interface QueryOraclesResponseSDKType {
  /** List of oracle addresses */
  oracles: string[];
}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */

export interface QueryMarketsRequest {}
/** QueryMarketsRequest is the request type for the Query/Markets RPC method. */

export interface QueryMarketsRequestSDKType {}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */

export interface QueryMarketsResponse {
  /** List of markets */
  markets: MarketResponse[];
}
/** QueryMarketsResponse is the response type for the Query/Markets RPC method. */

export interface QueryMarketsResponseSDKType {
  /** List of markets */
  markets: MarketResponseSDKType[];
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */

export interface PostedPriceResponse {
  marketId: string;
  oracleAddress: string;
  price: string;
  expiry?: Timestamp;
}
/** PostedPriceResponse defines a price for market posted by a specific oracle. */

export interface PostedPriceResponseSDKType {
  market_id: string;
  oracle_address: string;
  price: string;
  expiry?: TimestampSDKType;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */

export interface CurrentPriceResponse {
  marketId: string;
  price: string;
}
/**
 * CurrentPriceResponse defines a current price for a particular market in the pricefeed
 * module.
 */

export interface CurrentPriceResponseSDKType {
  market_id: string;
  price: string;
}
/** MarketResponse defines an asset in the pricefeed. */

export interface MarketResponse {
  marketId: string;
  baseAsset: string;
  quoteAsset: string;
  oracles: string[];
  active: boolean;
}
/** MarketResponse defines an asset in the pricefeed. */

export interface MarketResponseSDKType {
  market_id: string;
  base_asset: string;
  quote_asset: string;
  oracles: string[];
  active: boolean;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {
    marketId: ""
  };
}

export const QueryPriceRequest = {
  encode(message: QueryPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPriceRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },

  toJSON(message: QueryPriceRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: undefined
  };
}

export const QueryPriceResponse = {
  encode(message: QueryPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      CurrentPriceResponse.encode(message.price, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = CurrentPriceResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPriceResponse {
    return {
      price: isSet(object.price) ? CurrentPriceResponse.fromJSON(object.price) : undefined
    };
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? CurrentPriceResponse.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? CurrentPriceResponse.fromPartial(object.price) : undefined;
    return message;
  }

};

function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {};
}

export const QueryPricesRequest = {
  encode(_: QueryPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();

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

  fromJSON(_: any): QueryPricesRequest {
    return {};
  },

  toJSON(_: QueryPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryPricesRequest>): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    return message;
  }

};

function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: []
  };
}

export const QueryPricesResponse = {
  encode(message: QueryPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      CurrentPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.prices.push(CurrentPriceResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CurrentPriceResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryPricesResponse): unknown {
    const obj: any = {};

    if (message.prices) {
      obj.prices = message.prices.map(e => e ? CurrentPriceResponse.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryPricesResponse>): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = object.prices?.map(e => CurrentPriceResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryRawPricesRequest(): QueryRawPricesRequest {
  return {
    marketId: ""
  };
}

export const QueryRawPricesRequest = {
  encode(message: QueryRawPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRawPricesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },

  toJSON(message: QueryRawPricesRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: Partial<QueryRawPricesRequest>): QueryRawPricesRequest {
    const message = createBaseQueryRawPricesRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryRawPricesResponse(): QueryRawPricesResponse {
  return {
    rawPrices: []
  };
}

export const QueryRawPricesResponse = {
  encode(message: QueryRawPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rawPrices) {
      PostedPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rawPrices.push(PostedPriceResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRawPricesResponse {
    return {
      rawPrices: Array.isArray(object?.rawPrices) ? object.rawPrices.map((e: any) => PostedPriceResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryRawPricesResponse): unknown {
    const obj: any = {};

    if (message.rawPrices) {
      obj.rawPrices = message.rawPrices.map(e => e ? PostedPriceResponse.toJSON(e) : undefined);
    } else {
      obj.rawPrices = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryRawPricesResponse>): QueryRawPricesResponse {
    const message = createBaseQueryRawPricesResponse();
    message.rawPrices = object.rawPrices?.map(e => PostedPriceResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryOraclesRequest(): QueryOraclesRequest {
  return {
    marketId: ""
  };
}

export const QueryOraclesRequest = {
  encode(message: QueryOraclesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOraclesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : ""
    };
  },

  toJSON(message: QueryOraclesRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial(object: Partial<QueryOraclesRequest>): QueryOraclesRequest {
    const message = createBaseQueryOraclesRequest();
    message.marketId = object.marketId ?? "";
    return message;
  }

};

function createBaseQueryOraclesResponse(): QueryOraclesResponse {
  return {
    oracles: []
  };
}

export const QueryOraclesResponse = {
  encode(message: QueryOraclesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOraclesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oracles.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOraclesResponse {
    return {
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryOraclesResponse): unknown {
    const obj: any = {};

    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e);
    } else {
      obj.oracles = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryOraclesResponse>): QueryOraclesResponse {
    const message = createBaseQueryOraclesResponse();
    message.oracles = object.oracles?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryMarketsRequest(): QueryMarketsRequest {
  return {};
}

export const QueryMarketsRequest = {
  encode(_: QueryMarketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsRequest();

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

  fromJSON(_: any): QueryMarketsRequest {
    return {};
  },

  toJSON(_: QueryMarketsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryMarketsRequest>): QueryMarketsRequest {
    const message = createBaseQueryMarketsRequest();
    return message;
  }

};

function createBaseQueryMarketsResponse(): QueryMarketsResponse {
  return {
    markets: []
  };
}

export const QueryMarketsResponse = {
  encode(message: QueryMarketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.markets) {
      MarketResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.markets.push(MarketResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMarketsResponse {
    return {
      markets: Array.isArray(object?.markets) ? object.markets.map((e: any) => MarketResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryMarketsResponse): unknown {
    const obj: any = {};

    if (message.markets) {
      obj.markets = message.markets.map(e => e ? MarketResponse.toJSON(e) : undefined);
    } else {
      obj.markets = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryMarketsResponse>): QueryMarketsResponse {
    const message = createBaseQueryMarketsResponse();
    message.markets = object.markets?.map(e => MarketResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBasePostedPriceResponse(): PostedPriceResponse {
  return {
    marketId: "",
    oracleAddress: "",
    price: "",
    expiry: undefined
  };
}

export const PostedPriceResponse = {
  encode(message: PostedPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.oracleAddress !== "") {
      writer.uint32(18).string(message.oracleAddress);
    }

    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }

    if (message.expiry !== undefined) {
      Timestamp.encode(message.expiry, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostedPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostedPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;

        case 2:
          message.oracleAddress = reader.string();
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

  fromJSON(object: any): PostedPriceResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
      price: isSet(object.price) ? String(object.price) : "",
      expiry: isSet(object.expiry) ? fromJsonTimestamp(object.expiry) : undefined
    };
  },

  toJSON(message: PostedPriceResponse): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    message.price !== undefined && (obj.price = message.price);
    message.expiry !== undefined && (obj.expiry = fromTimestamp(message.expiry).toISOString());
    return obj;
  },

  fromPartial(object: Partial<PostedPriceResponse>): PostedPriceResponse {
    const message = createBasePostedPriceResponse();
    message.marketId = object.marketId ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    message.price = object.price ?? "";
    message.expiry = object.expiry !== undefined && object.expiry !== null ? Timestamp.fromPartial(object.expiry) : undefined;
    return message;
  }

};

function createBaseCurrentPriceResponse(): CurrentPriceResponse {
  return {
    marketId: "",
    price: ""
  };
}

export const CurrentPriceResponse = {
  encode(message: CurrentPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }

    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPriceResponse();

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

  fromJSON(object: any): CurrentPriceResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },

  toJSON(message: CurrentPriceResponse): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: Partial<CurrentPriceResponse>): CurrentPriceResponse {
    const message = createBaseCurrentPriceResponse();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    return message;
  }

};

function createBaseMarketResponse(): MarketResponse {
  return {
    marketId: "",
    baseAsset: "",
    quoteAsset: "",
    oracles: [],
    active: false
  };
}

export const MarketResponse = {
  encode(message: MarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
    }

    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketResponse();

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
          message.oracles.push(reader.string());
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

  fromJSON(object: any): MarketResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => String(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },

  toJSON(message: MarketResponse): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);

    if (message.oracles) {
      obj.oracles = message.oracles.map(e => e);
    } else {
      obj.oracles = [];
    }

    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: Partial<MarketResponse>): MarketResponse {
    const message = createBaseMarketResponse();
    message.marketId = object.marketId ?? "";
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.oracles = object.oracles?.map(e => e) || [];
    message.active = object.active ?? false;
    return message;
  }

};