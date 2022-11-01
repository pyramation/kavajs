import { Params, ParamsSDKType, AtomicSwap, AtomicSwapSDKType, AssetSupply, AssetSupplySDKType } from "./bep3";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState defines the pricefeed module's genesis state. */

export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** atomic_swaps represents the state of stored atomic swaps */

  atomicSwaps: AtomicSwap[];
  /** supplies represents the supply information of each atomic swap */

  supplies: AssetSupply[];
  /** previous_block_time represents the time of the previous block */

  previousBlockTime?: Timestamp;
}
/** GenesisState defines the pricefeed module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the paramaters of the module. */
  params?: ParamsSDKType;
  /** atomic_swaps represents the state of stored atomic swaps */

  atomic_swaps: AtomicSwapSDKType[];
  /** supplies represents the supply information of each atomic swap */

  supplies: AssetSupplySDKType[];
  /** previous_block_time represents the time of the previous block */

  previous_block_time?: TimestampSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    atomicSwaps: [],
    supplies: [],
    previousBlockTime: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.atomicSwaps) {
      AtomicSwap.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(message.previousBlockTime, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.atomicSwaps.push(AtomicSwap.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supplies.push(AssetSupply.decode(reader, reader.uint32()));
          break;

        case 4:
          message.previousBlockTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      atomicSwaps: Array.isArray(object?.atomicSwaps) ? object.atomicSwaps.map((e: any) => AtomicSwap.fromJSON(e)) : [],
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromJSON(e)) : [],
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.atomicSwaps) {
      obj.atomicSwaps = message.atomicSwaps.map(e => e ? AtomicSwap.toJSON(e) : undefined);
    } else {
      obj.atomicSwaps = [];
    }

    if (message.supplies) {
      obj.supplies = message.supplies.map(e => e ? AssetSupply.toJSON(e) : undefined);
    } else {
      obj.supplies = [];
    }

    message.previousBlockTime !== undefined && (obj.previousBlockTime = fromTimestamp(message.previousBlockTime).toISOString());
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.atomicSwaps = object.atomicSwaps?.map(e => AtomicSwap.fromPartial(e)) || [];
    message.supplies = object.supplies?.map(e => AssetSupply.fromPartial(e)) || [];
    message.previousBlockTime = object.previousBlockTime !== undefined && object.previousBlockTime !== null ? Timestamp.fromPartial(object.previousBlockTime) : undefined;
    return message;
  }

};