import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./swap";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/swap parameters. */

export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/swap parameters. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */

export interface QueryParamsResponse {
  /** params represents the swap module parameters */
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */

export interface QueryParamsResponseSDKType {
  /** params represents the swap module parameters */
  params?: ParamsSDKType;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */

export interface QueryPoolsRequest {
  /** pool_id filters pools by id */
  poolId: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */

export interface QueryPoolsRequestSDKType {
  /** pool_id filters pools by id */
  pool_id: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */

export interface QueryPoolsResponse {
  /** pools represents returned pools */
  pools: PoolResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */

export interface QueryPoolsResponseSDKType {
  /** pools represents returned pools */
  pools: PoolResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** Pool represents the state of a single pool */

export interface PoolResponse {
  /** name represents the name of the pool */
  name: string;
  /** coins represents the total reserves of the pool */

  coins: Coin[];
  /** total_shares represents the total shares of the pool */

  totalShares: string;
}
/** Pool represents the state of a single pool */

export interface PoolResponseSDKType {
  /** name represents the name of the pool */
  name: string;
  /** coins represents the total reserves of the pool */

  coins: CoinSDKType[];
  /** total_shares represents the total shares of the pool */

  total_shares: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequest {
  /** owner optionally filters deposits by owner */
  owner: string;
  /** pool_id optionally fitlers deposits by pool id */

  poolId: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequestSDKType {
  /** owner optionally filters deposits by owner */
  owner: string;
  /** pool_id optionally fitlers deposits by pool id */

  pool_id: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponse {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponse[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponseSDKType {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponseSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** DepositResponse defines a single deposit query response type. */

export interface DepositResponse {
  /** depositor represents the owner of the deposit */
  depositor: string;
  /** pool_id represents the pool the deposit is for */

  poolId: string;
  /** shares_owned presents the shares owned by the depositor for the pool */

  sharesOwned: string;
  /** shares_value represents the coin value of the shares_owned */

  sharesValue: Coin[];
}
/** DepositResponse defines a single deposit query response type. */

export interface DepositResponseSDKType {
  /** depositor represents the owner of the deposit */
  depositor: string;
  /** pool_id represents the pool the deposit is for */

  pool_id: string;
  /** shares_owned presents the shares owned by the depositor for the pool */

  shares_owned: string;
  /** shares_value represents the coin value of the shares_owned */

  shares_value: CoinSDKType[];
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

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    poolId: "",
    pagination: undefined
  };
}

export const QueryPoolsRequest = {
  encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolId !== "") {
      writer.uint32(10).string(message.poolId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.poolId = object.poolId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}

export const QueryPoolsResponse = {
  encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => PoolResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? PoolResponse.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => PoolResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBasePoolResponse(): PoolResponse {
  return {
    name: "",
    coins: [],
    totalShares: ""
  };
}

export const PoolResponse = {
  encode(message: PoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalShares !== "") {
      writer.uint32(26).string(message.totalShares);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalShares = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },

  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    return obj;
  },

  fromPartial(object: Partial<PoolResponse>): PoolResponse {
    const message = createBasePoolResponse();
    message.name = object.name ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.totalShares = object.totalShares ?? "";
    return message;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    owner: "",
    poolId: "",
    pagination: undefined
  };
}

export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.poolId = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.owner = object.owner ?? "";
    message.poolId = object.poolId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}

export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposits.push(DepositResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositResponse.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseDepositResponse(): DepositResponse {
  return {
    depositor: "",
    poolId: "",
    sharesOwned: "",
    sharesValue: []
  };
}

export const DepositResponse = {
  encode(message: DepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.poolId !== "") {
      writer.uint32(18).string(message.poolId);
    }

    if (message.sharesOwned !== "") {
      writer.uint32(26).string(message.sharesOwned);
    }

    for (const v of message.sharesValue) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.poolId = reader.string();
          break;

        case 3:
          message.sharesOwned = reader.string();
          break;

        case 4:
          message.sharesValue.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositResponse {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      poolId: isSet(object.poolId) ? String(object.poolId) : "",
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      sharesValue: Array.isArray(object?.sharesValue) ? object.sharesValue.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: DepositResponse): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.poolId !== undefined && (obj.poolId = message.poolId);
    message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);

    if (message.sharesValue) {
      obj.sharesValue = message.sharesValue.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.sharesValue = [];
    }

    return obj;
  },

  fromPartial(object: Partial<DepositResponse>): DepositResponse {
    const message = createBaseDepositResponse();
    message.depositor = object.depositor ?? "";
    message.poolId = object.poolId ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    message.sharesValue = object.sharesValue?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};