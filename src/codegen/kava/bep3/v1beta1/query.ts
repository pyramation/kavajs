import { SwapStatus, SwapStatusSDKType, SwapDirection, SwapDirectionSDKType, Params, ParamsSDKType, swapStatusFromJSON, swapDirectionFromJSON, swapStatusToJSON, swapDirectionToJSON } from "./bep3";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */

export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/bep3 parameters. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */

export interface QueryParamsResponse {
  /** params represents the parameters of the module */
  params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/bep3 parameters. */

export interface QueryParamsResponseSDKType {
  /** params represents the parameters of the module */
  params?: ParamsSDKType;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */

export interface QueryAssetSupplyRequest {
  /** denom filters the asset response for the specified denom */
  denom: string;
}
/** QueryAssetSupplyRequest is the request type for the Query/AssetSupply RPC method. */

export interface QueryAssetSupplyRequestSDKType {
  /** denom filters the asset response for the specified denom */
  denom: string;
}
/** AssetSupplyResponse defines information about an asset's supply. */

export interface AssetSupplyResponse {
  /** incoming_supply represents the incoming supply of an asset */
  incomingSupply?: Coin;
  /** outgoing_supply represents the outgoing supply of an asset */

  outgoingSupply?: Coin;
  /** current_supply represents the current on-chain supply of an asset */

  currentSupply?: Coin;
  /** time_limited_current_supply represents the time limited current supply of an asset */

  timeLimitedCurrentSupply?: Coin;
  /** time_elapsed represents the time elapsed */

  timeElapsed?: Duration;
}
/** AssetSupplyResponse defines information about an asset's supply. */

export interface AssetSupplyResponseSDKType {
  /** incoming_supply represents the incoming supply of an asset */
  incoming_supply?: CoinSDKType;
  /** outgoing_supply represents the outgoing supply of an asset */

  outgoing_supply?: CoinSDKType;
  /** current_supply represents the current on-chain supply of an asset */

  current_supply?: CoinSDKType;
  /** time_limited_current_supply represents the time limited current supply of an asset */

  time_limited_current_supply?: CoinSDKType;
  /** time_elapsed represents the time elapsed */

  time_elapsed?: DurationSDKType;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */

export interface QueryAssetSupplyResponse {
  /** asset_supply represents the supply of the asset */
  assetSupply?: AssetSupplyResponse;
}
/** QueryAssetSupplyResponse is the response type for the Query/AssetSupply RPC method. */

export interface QueryAssetSupplyResponseSDKType {
  /** asset_supply represents the supply of the asset */
  asset_supply?: AssetSupplyResponseSDKType;
}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */

export interface QueryAssetSuppliesRequest {}
/** QueryAssetSuppliesRequest is the request type for the Query/AssetSupplies RPC method. */

export interface QueryAssetSuppliesRequestSDKType {}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */

export interface QueryAssetSuppliesResponse {
  /** asset_supplies represents the supplies of returned assets */
  assetSupplies: AssetSupplyResponse[];
}
/** QueryAssetSuppliesResponse is the response type for the Query/AssetSupplies RPC method. */

export interface QueryAssetSuppliesResponseSDKType {
  /** asset_supplies represents the supplies of returned assets */
  asset_supplies: AssetSupplyResponseSDKType[];
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */

export interface QueryAtomicSwapRequest {
  /** swap_id represents the id of the swap to query */
  swapId: string;
}
/** QueryAtomicSwapRequest is the request type for the Query/AtomicSwap RPC method. */

export interface QueryAtomicSwapRequestSDKType {
  /** swap_id represents the id of the swap to query */
  swap_id: string;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */

export interface QueryAtomicSwapResponse {
  atomicSwap?: AtomicSwapResponse;
}
/** QueryAtomicSwapResponse is the response type for the Query/AtomicSwap RPC method. */

export interface QueryAtomicSwapResponseSDKType {
  atomic_swap?: AtomicSwapResponseSDKType;
}
/** AtomicSwapResponse represents the returned atomic swap properties */

export interface AtomicSwapResponse {
  /** id represents the id of the atomic swap */
  id: string;
  /** amount represents the amount being swapped */

  amount: Coin[];
  /** random_number_hash represents the hash of the random number */

  randomNumberHash: string;
  /** expire_height represents the height when the swap expires */

  expireHeight: Long;
  /** timestamp represents the timestamp of the swap */

  timestamp: Long;
  /** sender is the kava chain sender of the swap */

  sender: string;
  /** recipient is the kava chain recipient of the swap */

  recipient: string;
  /** sender_other_chain is the sender on the other chain */

  senderOtherChain: string;
  /** recipient_other_chain is the recipient on the other chain */

  recipientOtherChain: string;
  /** closed_block is the block when the swap is closed */

  closedBlock: Long;
  /** status represents the current status of the swap */

  status: SwapStatus;
  /** cross_chain identifies whether the atomic swap is cross chain */

  crossChain: boolean;
  /** direction identifies if the swap is incoming or outgoing */

  direction: SwapDirection;
}
/** AtomicSwapResponse represents the returned atomic swap properties */

export interface AtomicSwapResponseSDKType {
  /** id represents the id of the atomic swap */
  id: string;
  /** amount represents the amount being swapped */

  amount: CoinSDKType[];
  /** random_number_hash represents the hash of the random number */

  random_number_hash: string;
  /** expire_height represents the height when the swap expires */

  expire_height: Long;
  /** timestamp represents the timestamp of the swap */

  timestamp: Long;
  /** sender is the kava chain sender of the swap */

  sender: string;
  /** recipient is the kava chain recipient of the swap */

  recipient: string;
  /** sender_other_chain is the sender on the other chain */

  sender_other_chain: string;
  /** recipient_other_chain is the recipient on the other chain */

  recipient_other_chain: string;
  /** closed_block is the block when the swap is closed */

  closed_block: Long;
  /** status represents the current status of the swap */

  status: SwapStatusSDKType;
  /** cross_chain identifies whether the atomic swap is cross chain */

  cross_chain: boolean;
  /** direction identifies if the swap is incoming or outgoing */

  direction: SwapDirectionSDKType;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */

export interface QueryAtomicSwapsRequest {
  /** involve filters by address */
  involve: string;
  /** expiration filters by expiration block height */

  expiration: Long;
  /** status filters by swap status */

  status: SwapStatus;
  /** direction fitlers by swap direction */

  direction: SwapDirection;
  pagination?: PageRequest;
}
/** QueryAtomicSwapsRequest is the request type for the Query/AtomicSwaps RPC method. */

export interface QueryAtomicSwapsRequestSDKType {
  /** involve filters by address */
  involve: string;
  /** expiration filters by expiration block height */

  expiration: Long;
  /** status filters by swap status */

  status: SwapStatusSDKType;
  /** direction fitlers by swap direction */

  direction: SwapDirectionSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */

export interface QueryAtomicSwapsResponse {
  /** atomic_swap represents the returned atomic swaps for the request */
  atomicSwaps: AtomicSwapResponse[];
  pagination?: PageResponse;
}
/** QueryAtomicSwapsResponse is the response type for the Query/AtomicSwaps RPC method. */

export interface QueryAtomicSwapsResponseSDKType {
  /** atomic_swap represents the returned atomic swaps for the request */
  atomic_swaps: AtomicSwapResponseSDKType[];
  pagination?: PageResponseSDKType;
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

function createBaseQueryAssetSupplyRequest(): QueryAssetSupplyRequest {
  return {
    denom: ""
  };
}

export const QueryAssetSupplyRequest = {
  encode(message: QueryAssetSupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSupplyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAssetSupplyRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: QueryAssetSupplyRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<QueryAssetSupplyRequest>): QueryAssetSupplyRequest {
    const message = createBaseQueryAssetSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseAssetSupplyResponse(): AssetSupplyResponse {
  return {
    incomingSupply: undefined,
    outgoingSupply: undefined,
    currentSupply: undefined,
    timeLimitedCurrentSupply: undefined,
    timeElapsed: undefined
  };
}

export const AssetSupplyResponse = {
  encode(message: AssetSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.incomingSupply !== undefined) {
      Coin.encode(message.incomingSupply, writer.uint32(10).fork()).ldelim();
    }

    if (message.outgoingSupply !== undefined) {
      Coin.encode(message.outgoingSupply, writer.uint32(18).fork()).ldelim();
    }

    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(26).fork()).ldelim();
    }

    if (message.timeLimitedCurrentSupply !== undefined) {
      Coin.encode(message.timeLimitedCurrentSupply, writer.uint32(34).fork()).ldelim();
    }

    if (message.timeElapsed !== undefined) {
      Duration.encode(message.timeElapsed, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.incomingSupply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.outgoingSupply = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.currentSupply = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.timeLimitedCurrentSupply = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.timeElapsed = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetSupplyResponse {
    return {
      incomingSupply: isSet(object.incomingSupply) ? Coin.fromJSON(object.incomingSupply) : undefined,
      outgoingSupply: isSet(object.outgoingSupply) ? Coin.fromJSON(object.outgoingSupply) : undefined,
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeLimitedCurrentSupply: isSet(object.timeLimitedCurrentSupply) ? Coin.fromJSON(object.timeLimitedCurrentSupply) : undefined,
      timeElapsed: isSet(object.timeElapsed) ? Duration.fromJSON(object.timeElapsed) : undefined
    };
  },

  toJSON(message: AssetSupplyResponse): unknown {
    const obj: any = {};
    message.incomingSupply !== undefined && (obj.incomingSupply = message.incomingSupply ? Coin.toJSON(message.incomingSupply) : undefined);
    message.outgoingSupply !== undefined && (obj.outgoingSupply = message.outgoingSupply ? Coin.toJSON(message.outgoingSupply) : undefined);
    message.currentSupply !== undefined && (obj.currentSupply = message.currentSupply ? Coin.toJSON(message.currentSupply) : undefined);
    message.timeLimitedCurrentSupply !== undefined && (obj.timeLimitedCurrentSupply = message.timeLimitedCurrentSupply ? Coin.toJSON(message.timeLimitedCurrentSupply) : undefined);
    message.timeElapsed !== undefined && (obj.timeElapsed = message.timeElapsed ? Duration.toJSON(message.timeElapsed) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AssetSupplyResponse>): AssetSupplyResponse {
    const message = createBaseAssetSupplyResponse();
    message.incomingSupply = object.incomingSupply !== undefined && object.incomingSupply !== null ? Coin.fromPartial(object.incomingSupply) : undefined;
    message.outgoingSupply = object.outgoingSupply !== undefined && object.outgoingSupply !== null ? Coin.fromPartial(object.outgoingSupply) : undefined;
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.timeLimitedCurrentSupply = object.timeLimitedCurrentSupply !== undefined && object.timeLimitedCurrentSupply !== null ? Coin.fromPartial(object.timeLimitedCurrentSupply) : undefined;
    message.timeElapsed = object.timeElapsed !== undefined && object.timeElapsed !== null ? Duration.fromPartial(object.timeElapsed) : undefined;
    return message;
  }

};

function createBaseQueryAssetSupplyResponse(): QueryAssetSupplyResponse {
  return {
    assetSupply: undefined
  };
}

export const QueryAssetSupplyResponse = {
  encode(message: QueryAssetSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetSupply !== undefined) {
      AssetSupplyResponse.encode(message.assetSupply, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetSupply = AssetSupplyResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAssetSupplyResponse {
    return {
      assetSupply: isSet(object.assetSupply) ? AssetSupplyResponse.fromJSON(object.assetSupply) : undefined
    };
  },

  toJSON(message: QueryAssetSupplyResponse): unknown {
    const obj: any = {};
    message.assetSupply !== undefined && (obj.assetSupply = message.assetSupply ? AssetSupplyResponse.toJSON(message.assetSupply) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAssetSupplyResponse>): QueryAssetSupplyResponse {
    const message = createBaseQueryAssetSupplyResponse();
    message.assetSupply = object.assetSupply !== undefined && object.assetSupply !== null ? AssetSupplyResponse.fromPartial(object.assetSupply) : undefined;
    return message;
  }

};

function createBaseQueryAssetSuppliesRequest(): QueryAssetSuppliesRequest {
  return {};
}

export const QueryAssetSuppliesRequest = {
  encode(_: QueryAssetSuppliesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSuppliesRequest();

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

  fromJSON(_: any): QueryAssetSuppliesRequest {
    return {};
  },

  toJSON(_: QueryAssetSuppliesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryAssetSuppliesRequest>): QueryAssetSuppliesRequest {
    const message = createBaseQueryAssetSuppliesRequest();
    return message;
  }

};

function createBaseQueryAssetSuppliesResponse(): QueryAssetSuppliesResponse {
  return {
    assetSupplies: []
  };
}

export const QueryAssetSuppliesResponse = {
  encode(message: QueryAssetSuppliesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetSupplies) {
      AssetSupplyResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetSuppliesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetSuppliesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetSupplies.push(AssetSupplyResponse.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAssetSuppliesResponse {
    return {
      assetSupplies: Array.isArray(object?.assetSupplies) ? object.assetSupplies.map((e: any) => AssetSupplyResponse.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryAssetSuppliesResponse): unknown {
    const obj: any = {};

    if (message.assetSupplies) {
      obj.assetSupplies = message.assetSupplies.map(e => e ? AssetSupplyResponse.toJSON(e) : undefined);
    } else {
      obj.assetSupplies = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryAssetSuppliesResponse>): QueryAssetSuppliesResponse {
    const message = createBaseQueryAssetSuppliesResponse();
    message.assetSupplies = object.assetSupplies?.map(e => AssetSupplyResponse.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAtomicSwapRequest(): QueryAtomicSwapRequest {
  return {
    swapId: ""
  };
}

export const QueryAtomicSwapRequest = {
  encode(message: QueryAtomicSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapId !== "") {
      writer.uint32(10).string(message.swapId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAtomicSwapRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.swapId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAtomicSwapRequest {
    return {
      swapId: isSet(object.swapId) ? String(object.swapId) : ""
    };
  },

  toJSON(message: QueryAtomicSwapRequest): unknown {
    const obj: any = {};
    message.swapId !== undefined && (obj.swapId = message.swapId);
    return obj;
  },

  fromPartial(object: Partial<QueryAtomicSwapRequest>): QueryAtomicSwapRequest {
    const message = createBaseQueryAtomicSwapRequest();
    message.swapId = object.swapId ?? "";
    return message;
  }

};

function createBaseQueryAtomicSwapResponse(): QueryAtomicSwapResponse {
  return {
    atomicSwap: undefined
  };
}

export const QueryAtomicSwapResponse = {
  encode(message: QueryAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.atomicSwap !== undefined) {
      AtomicSwapResponse.encode(message.atomicSwap, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAtomicSwapResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.atomicSwap = AtomicSwapResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAtomicSwapResponse {
    return {
      atomicSwap: isSet(object.atomicSwap) ? AtomicSwapResponse.fromJSON(object.atomicSwap) : undefined
    };
  },

  toJSON(message: QueryAtomicSwapResponse): unknown {
    const obj: any = {};
    message.atomicSwap !== undefined && (obj.atomicSwap = message.atomicSwap ? AtomicSwapResponse.toJSON(message.atomicSwap) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAtomicSwapResponse>): QueryAtomicSwapResponse {
    const message = createBaseQueryAtomicSwapResponse();
    message.atomicSwap = object.atomicSwap !== undefined && object.atomicSwap !== null ? AtomicSwapResponse.fromPartial(object.atomicSwap) : undefined;
    return message;
  }

};

function createBaseAtomicSwapResponse(): AtomicSwapResponse {
  return {
    id: "",
    amount: [],
    randomNumberHash: "",
    expireHeight: Long.UZERO,
    timestamp: Long.ZERO,
    sender: "",
    recipient: "",
    senderOtherChain: "",
    recipientOtherChain: "",
    closedBlock: Long.ZERO,
    status: 0,
    crossChain: false,
    direction: 0
  };
}

export const AtomicSwapResponse = {
  encode(message: AtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.randomNumberHash !== "") {
      writer.uint32(26).string(message.randomNumberHash);
    }

    if (!message.expireHeight.isZero()) {
      writer.uint32(32).uint64(message.expireHeight);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(40).int64(message.timestamp);
    }

    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }

    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }

    if (message.senderOtherChain !== "") {
      writer.uint32(66).string(message.senderOtherChain);
    }

    if (message.recipientOtherChain !== "") {
      writer.uint32(74).string(message.recipientOtherChain);
    }

    if (!message.closedBlock.isZero()) {
      writer.uint32(80).int64(message.closedBlock);
    }

    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }

    if (message.crossChain === true) {
      writer.uint32(96).bool(message.crossChain);
    }

    if (message.direction !== 0) {
      writer.uint32(104).int32(message.direction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAtomicSwapResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.randomNumberHash = reader.string();
          break;

        case 4:
          message.expireHeight = (reader.uint64() as Long);
          break;

        case 5:
          message.timestamp = (reader.int64() as Long);
          break;

        case 6:
          message.sender = reader.string();
          break;

        case 7:
          message.recipient = reader.string();
          break;

        case 8:
          message.senderOtherChain = reader.string();
          break;

        case 9:
          message.recipientOtherChain = reader.string();
          break;

        case 10:
          message.closedBlock = (reader.int64() as Long);
          break;

        case 11:
          message.status = (reader.int32() as any);
          break;

        case 12:
          message.crossChain = reader.bool();
          break;

        case 13:
          message.direction = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AtomicSwapResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      randomNumberHash: isSet(object.randomNumberHash) ? String(object.randomNumberHash) : "",
      expireHeight: isSet(object.expireHeight) ? Long.fromValue(object.expireHeight) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      closedBlock: isSet(object.closedBlock) ? Long.fromValue(object.closedBlock) : Long.ZERO,
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : 0,
      crossChain: isSet(object.crossChain) ? Boolean(object.crossChain) : false,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : 0
    };
  },

  toJSON(message: AtomicSwapResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    message.randomNumberHash !== undefined && (obj.randomNumberHash = message.randomNumberHash);
    message.expireHeight !== undefined && (obj.expireHeight = (message.expireHeight || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.ZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.senderOtherChain !== undefined && (obj.senderOtherChain = message.senderOtherChain);
    message.recipientOtherChain !== undefined && (obj.recipientOtherChain = message.recipientOtherChain);
    message.closedBlock !== undefined && (obj.closedBlock = (message.closedBlock || Long.ZERO).toString());
    message.status !== undefined && (obj.status = swapStatusToJSON(message.status));
    message.crossChain !== undefined && (obj.crossChain = message.crossChain);
    message.direction !== undefined && (obj.direction = swapDirectionToJSON(message.direction));
    return obj;
  },

  fromPartial(object: Partial<AtomicSwapResponse>): AtomicSwapResponse {
    const message = createBaseAtomicSwapResponse();
    message.id = object.id ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.expireHeight = object.expireHeight !== undefined && object.expireHeight !== null ? Long.fromValue(object.expireHeight) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.closedBlock = object.closedBlock !== undefined && object.closedBlock !== null ? Long.fromValue(object.closedBlock) : Long.ZERO;
    message.status = object.status ?? 0;
    message.crossChain = object.crossChain ?? false;
    message.direction = object.direction ?? 0;
    return message;
  }

};

function createBaseQueryAtomicSwapsRequest(): QueryAtomicSwapsRequest {
  return {
    involve: "",
    expiration: Long.UZERO,
    status: 0,
    direction: 0,
    pagination: undefined
  };
}

export const QueryAtomicSwapsRequest = {
  encode(message: QueryAtomicSwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.involve !== "") {
      writer.uint32(10).string(message.involve);
    }

    if (!message.expiration.isZero()) {
      writer.uint32(16).uint64(message.expiration);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAtomicSwapsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.involve = reader.string();
          break;

        case 2:
          message.expiration = (reader.uint64() as Long);
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.direction = (reader.int32() as any);
          break;

        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAtomicSwapsRequest {
    return {
      involve: isSet(object.involve) ? String(object.involve) : "",
      expiration: isSet(object.expiration) ? Long.fromValue(object.expiration) : Long.UZERO,
      status: isSet(object.status) ? swapStatusFromJSON(object.status) : 0,
      direction: isSet(object.direction) ? swapDirectionFromJSON(object.direction) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAtomicSwapsRequest): unknown {
    const obj: any = {};
    message.involve !== undefined && (obj.involve = message.involve);
    message.expiration !== undefined && (obj.expiration = (message.expiration || Long.UZERO).toString());
    message.status !== undefined && (obj.status = swapStatusToJSON(message.status));
    message.direction !== undefined && (obj.direction = swapDirectionToJSON(message.direction));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAtomicSwapsRequest>): QueryAtomicSwapsRequest {
    const message = createBaseQueryAtomicSwapsRequest();
    message.involve = object.involve ?? "";
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Long.fromValue(object.expiration) : Long.UZERO;
    message.status = object.status ?? 0;
    message.direction = object.direction ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAtomicSwapsResponse(): QueryAtomicSwapsResponse {
  return {
    atomicSwaps: [],
    pagination: undefined
  };
}

export const QueryAtomicSwapsResponse = {
  encode(message: QueryAtomicSwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.atomicSwaps) {
      AtomicSwapResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAtomicSwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAtomicSwapsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.atomicSwaps.push(AtomicSwapResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAtomicSwapsResponse {
    return {
      atomicSwaps: Array.isArray(object?.atomicSwaps) ? object.atomicSwaps.map((e: any) => AtomicSwapResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAtomicSwapsResponse): unknown {
    const obj: any = {};

    if (message.atomicSwaps) {
      obj.atomicSwaps = message.atomicSwaps.map(e => e ? AtomicSwapResponse.toJSON(e) : undefined);
    } else {
      obj.atomicSwaps = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAtomicSwapsResponse>): QueryAtomicSwapsResponse {
    const message = createBaseQueryAtomicSwapsResponse();
    message.atomicSwaps = object.atomicSwaps?.map(e => AtomicSwapResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};