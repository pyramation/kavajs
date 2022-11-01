import { AllowedVault, AllowedVaultSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the earn module. */

export interface Params {
  allowedVaults: AllowedVault[];
}
/** Params defines the parameters of the earn module. */

export interface ParamsSDKType {
  allowed_vaults: AllowedVaultSDKType[];
}

function createBaseParams(): Params {
  return {
    allowedVaults: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedVaults) {
      AllowedVault.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.allowedVaults.push(AllowedVault.decode(reader, reader.uint32()));
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
      allowedVaults: Array.isArray(object?.allowedVaults) ? object.allowedVaults.map((e: any) => AllowedVault.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.allowedVaults) {
      obj.allowedVaults = message.allowedVaults.map(e => e ? AllowedVault.toJSON(e) : undefined);
    } else {
      obj.allowedVaults = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedVaults = object.allowedVaults?.map(e => AllowedVault.fromPartial(e)) || [];
    return message;
  }

};