import { ConversionPair, ConversionPairSDKType } from "./conversion_pair";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState defines the evmutil module's genesis state. */

export interface GenesisState {
  accounts: Account[];
  /** params defines all the parameters of the module. */

  params?: Params;
}
/** GenesisState defines the evmutil module's genesis state. */

export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  /** params defines all the parameters of the module. */

  params?: ParamsSDKType;
}
/** BalanceAccount defines an account in the evmutil module. */

export interface Account {
  address: Uint8Array;
  /** balance indicates the amount of akava owned by the address. */

  balance: string;
}
/** BalanceAccount defines an account in the evmutil module. */

export interface AccountSDKType {
  address: Uint8Array;
  /** balance indicates the amount of akava owned by the address. */

  balance: string;
}
/** Params defines the evmutil module params */

export interface Params {
  /**
   * enabled_conversion_pairs defines the list of conversion pairs allowed to be
   * converted between Kava ERC20 and sdk.Coin
   */
  enabledConversionPairs: ConversionPair[];
}
/** Params defines the evmutil module params */

export interface ParamsSDKType {
  /**
   * enabled_conversion_pairs defines the list of conversion pairs allowed to be
   * converted between Kava ERC20 and sdk.Coin
   */
  enabled_conversion_pairs: ConversionPairSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;

        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseAccount(): Account {
  return {
    address: new Uint8Array(),
    balance: ""
  };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Account {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: Partial<Account>): Account {
    const message = createBaseAccount();
    message.address = object.address ?? new Uint8Array();
    message.balance = object.balance ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    enabledConversionPairs: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.enabledConversionPairs) {
      ConversionPair.encode(v!, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.enabledConversionPairs.push(ConversionPair.decode(reader, reader.uint32()));
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
      enabledConversionPairs: Array.isArray(object?.enabledConversionPairs) ? object.enabledConversionPairs.map((e: any) => ConversionPair.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.enabledConversionPairs) {
      obj.enabledConversionPairs = message.enabledConversionPairs.map(e => e ? ConversionPair.toJSON(e) : undefined);
    } else {
      obj.enabledConversionPairs = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enabledConversionPairs = object.enabledConversionPairs?.map(e => ConversionPair.fromPartial(e)) || [];
    return message;
  }

};