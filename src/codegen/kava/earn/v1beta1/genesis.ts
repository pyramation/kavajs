import { Params, ParamsSDKType } from "./params";
import { VaultRecord, VaultRecordSDKType, VaultShareRecord, VaultShareRecordSDKType } from "./vault";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the earn module's genesis state. */

export interface GenesisState {
  /** params defines all the paramaters related to earn */
  params?: Params;
  /** vault_records defines the available vaults */

  vaultRecords: VaultRecord[];
  /** share_records defines the owned shares of each vault */

  vaultShareRecords: VaultShareRecord[];
}
/** GenesisState defines the earn module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the paramaters related to earn */
  params?: ParamsSDKType;
  /** vault_records defines the available vaults */

  vault_records: VaultRecordSDKType[];
  /** share_records defines the owned shares of each vault */

  vault_share_records: VaultShareRecordSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    vaultRecords: [],
    vaultShareRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.vaultRecords) {
      VaultRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.vaultShareRecords) {
      VaultShareRecord.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.vaultRecords.push(VaultRecord.decode(reader, reader.uint32()));
          break;

        case 3:
          message.vaultShareRecords.push(VaultShareRecord.decode(reader, reader.uint32()));
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
      vaultRecords: Array.isArray(object?.vaultRecords) ? object.vaultRecords.map((e: any) => VaultRecord.fromJSON(e)) : [],
      vaultShareRecords: Array.isArray(object?.vaultShareRecords) ? object.vaultShareRecords.map((e: any) => VaultShareRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.vaultRecords) {
      obj.vaultRecords = message.vaultRecords.map(e => e ? VaultRecord.toJSON(e) : undefined);
    } else {
      obj.vaultRecords = [];
    }

    if (message.vaultShareRecords) {
      obj.vaultShareRecords = message.vaultShareRecords.map(e => e ? VaultShareRecord.toJSON(e) : undefined);
    } else {
      obj.vaultShareRecords = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.vaultRecords = object.vaultRecords?.map(e => VaultRecord.fromPartial(e)) || [];
    message.vaultShareRecords = object.vaultShareRecords?.map(e => VaultShareRecord.fromPartial(e)) || [];
    return message;
  }

};