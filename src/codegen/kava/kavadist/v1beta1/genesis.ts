import { Params, ParamsSDKType } from "./params";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState defines the kavadist module's genesis state. */

export interface GenesisState {
  params?: Params;
  previousBlockTime?: Timestamp;
}
/** GenesisState defines the kavadist module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  previous_block_time?: TimestampSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    previousBlockTime: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(message.previousBlockTime, writer.uint32(18).fork()).ldelim();
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
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.previousBlockTime !== undefined && (obj.previousBlockTime = fromTimestamp(message.previousBlockTime).toISOString());
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.previousBlockTime = object.previousBlockTime !== undefined && object.previousBlockTime !== null ? Timestamp.fromPartial(object.previousBlockTime) : undefined;
    return message;
  }

};