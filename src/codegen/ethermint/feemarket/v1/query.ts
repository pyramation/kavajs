import { Params, ParamsSDKType } from "./feemarket";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/evm parameters. */

export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */

export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */

export interface QueryParamsResponseSDKType {
  /** params define the evm module parameters. */
  params?: ParamsSDKType;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */

export interface QueryBaseFeeRequest {}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */

export interface QueryBaseFeeRequestSDKType {}
/** BaseFeeResponse returns the EIP1559 base fee. */

export interface QueryBaseFeeResponse {
  baseFee: string;
}
/** BaseFeeResponse returns the EIP1559 base fee. */

export interface QueryBaseFeeResponseSDKType {
  base_fee: string;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */

export interface QueryBlockGasRequest {}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 */

export interface QueryBlockGasRequestSDKType {}
/** QueryBlockGasResponse returns block gas used for a given height. */

export interface QueryBlockGasResponse {
  /** QueryBlockGasResponse returns block gas used for a given height. */
  gas: Long;
}
/** QueryBlockGasResponse returns block gas used for a given height. */

export interface QueryBlockGasResponseSDKType {
  /** QueryBlockGasResponse returns block gas used for a given height. */
  gas: Long;
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

function createBaseQueryBaseFeeRequest(): QueryBaseFeeRequest {
  return {};
}

export const QueryBaseFeeRequest = {
  encode(_: QueryBaseFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeRequest();

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

  fromJSON(_: any): QueryBaseFeeRequest {
    return {};
  },

  toJSON(_: QueryBaseFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryBaseFeeRequest>): QueryBaseFeeRequest {
    const message = createBaseQueryBaseFeeRequest();
    return message;
  }

};

function createBaseQueryBaseFeeResponse(): QueryBaseFeeResponse {
  return {
    baseFee: ""
  };
}

export const QueryBaseFeeResponse = {
  encode(message: QueryBaseFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseFee !== "") {
      writer.uint32(10).string(message.baseFee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBaseFeeResponse {
    return {
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : ""
    };
  },

  toJSON(message: QueryBaseFeeResponse): unknown {
    const obj: any = {};
    message.baseFee !== undefined && (obj.baseFee = message.baseFee);
    return obj;
  },

  fromPartial(object: Partial<QueryBaseFeeResponse>): QueryBaseFeeResponse {
    const message = createBaseQueryBaseFeeResponse();
    message.baseFee = object.baseFee ?? "";
    return message;
  }

};

function createBaseQueryBlockGasRequest(): QueryBlockGasRequest {
  return {};
}

export const QueryBlockGasRequest = {
  encode(_: QueryBlockGasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasRequest();

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

  fromJSON(_: any): QueryBlockGasRequest {
    return {};
  },

  toJSON(_: QueryBlockGasRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryBlockGasRequest>): QueryBlockGasRequest {
    const message = createBaseQueryBlockGasRequest();
    return message;
  }

};

function createBaseQueryBlockGasResponse(): QueryBlockGasResponse {
  return {
    gas: Long.ZERO
  };
}

export const QueryBlockGasResponse = {
  encode(message: QueryBlockGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gas.isZero()) {
      writer.uint32(8).int64(message.gas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gas = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBlockGasResponse {
    return {
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.ZERO
    };
  },

  toJSON(message: QueryBlockGasResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = (message.gas || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryBlockGasResponse>): QueryBlockGasResponse {
    const message = createBaseQueryBlockGasResponse();
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.ZERO;
    return message;
  }

};