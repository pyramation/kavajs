import { Params, ParamsSDKType, Deposit, DepositSDKType } from "./store";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the savings module's genesis state. */

export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  deposits: Deposit[];
}
/** GenesisState defines the savings module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the parameters of the module. */
  params?: ParamsSDKType;
  deposits: DepositSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    deposits: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
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
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    return message;
  }

};