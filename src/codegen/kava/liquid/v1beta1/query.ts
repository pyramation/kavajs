import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */

export interface QueryDelegatedBalanceRequest {
  /** delegator is the address of the account to query */
  delegator: string;
}
/** QueryDelegatedBalanceRequest defines the request type for Query/DelegatedBalance method. */

export interface QueryDelegatedBalanceRequestSDKType {
  /** delegator is the address of the account to query */
  delegator: string;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */

export interface QueryDelegatedBalanceResponse {
  /** vested is the amount of all delegated coins that have vested (ie not locked) */
  vested?: Coin;
  /** vesting is the amount of all delegated coins that are still vesting (ie locked) */

  vesting?: Coin;
}
/** DelegatedBalanceResponse defines the response type for the Query/DelegatedBalance method. */

export interface QueryDelegatedBalanceResponseSDKType {
  /** vested is the amount of all delegated coins that have vested (ie not locked) */
  vested?: CoinSDKType;
  /** vesting is the amount of all delegated coins that are still vesting (ie locked) */

  vesting?: CoinSDKType;
}

function createBaseQueryDelegatedBalanceRequest(): QueryDelegatedBalanceRequest {
  return {
    delegator: ""
  };
}

export const QueryDelegatedBalanceRequest = {
  encode(message: QueryDelegatedBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatedBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatedBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatedBalanceRequest {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },

  toJSON(message: QueryDelegatedBalanceRequest): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial(object: Partial<QueryDelegatedBalanceRequest>): QueryDelegatedBalanceRequest {
    const message = createBaseQueryDelegatedBalanceRequest();
    message.delegator = object.delegator ?? "";
    return message;
  }

};

function createBaseQueryDelegatedBalanceResponse(): QueryDelegatedBalanceResponse {
  return {
    vested: undefined,
    vesting: undefined
  };
}

export const QueryDelegatedBalanceResponse = {
  encode(message: QueryDelegatedBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vested !== undefined) {
      Coin.encode(message.vested, writer.uint32(10).fork()).ldelim();
    }

    if (message.vesting !== undefined) {
      Coin.encode(message.vesting, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatedBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatedBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vested = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.vesting = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDelegatedBalanceResponse {
    return {
      vested: isSet(object.vested) ? Coin.fromJSON(object.vested) : undefined,
      vesting: isSet(object.vesting) ? Coin.fromJSON(object.vesting) : undefined
    };
  },

  toJSON(message: QueryDelegatedBalanceResponse): unknown {
    const obj: any = {};
    message.vested !== undefined && (obj.vested = message.vested ? Coin.toJSON(message.vested) : undefined);
    message.vesting !== undefined && (obj.vesting = message.vesting ? Coin.toJSON(message.vesting) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryDelegatedBalanceResponse>): QueryDelegatedBalanceResponse {
    const message = createBaseQueryDelegatedBalanceResponse();
    message.vested = object.vested !== undefined && object.vested !== null ? Coin.fromPartial(object.vested) : undefined;
    message.vesting = object.vesting !== undefined && object.vesting !== null ? Coin.fromPartial(object.vesting) : undefined;
    return message;
  }

};