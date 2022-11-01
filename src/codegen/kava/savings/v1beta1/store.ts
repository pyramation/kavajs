import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the savings module. */

export interface Params {
  supportedDenoms: string[];
}
/** Params defines the parameters for the savings module. */

export interface ParamsSDKType {
  supported_denoms: string[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */

export interface Deposit {
  depositor: string;
  amount: Coin[];
}
/** Deposit defines an amount of coins deposited into a savings module account. */

export interface DepositSDKType {
  depositor: string;
  amount: CoinSDKType[];
}

function createBaseParams(): Params {
  return {
    supportedDenoms: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supportedDenoms) {
      writer.uint32(10).string(v!);
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
          message.supportedDenoms.push(reader.string());
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
      supportedDenoms: Array.isArray(object?.supportedDenoms) ? object.supportedDenoms.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.supportedDenoms) {
      obj.supportedDenoms = message.supportedDenoms.map(e => e);
    } else {
      obj.supportedDenoms = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.supportedDenoms = object.supportedDenoms?.map(e => e) || [];
    return message;
  }

};

function createBaseDeposit(): Deposit {
  return {
    depositor: "",
    amount: []
  };
}

export const Deposit = {
  encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Deposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};