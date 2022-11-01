import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20. */

export interface MsgConvertCoinToERC20 {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */

  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */

  amount?: Coin;
}
/** MsgConvertCoinToERC20 defines a conversion from sdk.Coin to Kava ERC20. */

export interface MsgConvertCoinToERC20SDKType {
  /** Kava bech32 address initiating the conversion. */
  initiator: string;
  /** EVM 0x hex address that will receive the converted Kava ERC20 tokens. */

  receiver: string;
  /** Amount is the sdk.Coin amount to convert. */

  amount?: CoinSDKType;
}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */

export interface MsgConvertCoinToERC20Response {}
/** MsgConvertCoinToERC20Response defines the response value from Msg/ConvertCoinToERC20. */

export interface MsgConvertCoinToERC20ResponseSDKType {}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin. */

export interface MsgConvertERC20ToCoin {
  /** EVM 0x hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */

  receiver: string;
  /** EVM 0x hex address of the ERC20 contract. */

  kavaErc20Address: string;
  /** ERC20 token amount to convert. */

  amount: string;
}
/** MsgConvertERC20ToCoin defines a conversion from Kava ERC20 to sdk.Coin. */

export interface MsgConvertERC20ToCoinSDKType {
  /** EVM 0x hex address initiating the conversion. */
  initiator: string;
  /** Kava bech32 address that will receive the converted sdk.Coin. */

  receiver: string;
  /** EVM 0x hex address of the ERC20 contract. */

  kava_erc20_address: string;
  /** ERC20 token amount to convert. */

  amount: string;
}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */

export interface MsgConvertERC20ToCoinResponse {}
/**
 * MsgConvertERC20ToCoinResponse defines the response value from
 * Msg/MsgConvertERC20ToCoin.
 */

export interface MsgConvertERC20ToCoinResponseSDKType {}

function createBaseMsgConvertCoinToERC20(): MsgConvertCoinToERC20 {
  return {
    initiator: "",
    receiver: "",
    amount: undefined
  };
}

export const MsgConvertCoinToERC20 = {
  encode(message: MsgConvertCoinToERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToERC20();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConvertCoinToERC20 {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgConvertCoinToERC20): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgConvertCoinToERC20>): MsgConvertCoinToERC20 {
    const message = createBaseMsgConvertCoinToERC20();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgConvertCoinToERC20Response(): MsgConvertCoinToERC20Response {
  return {};
}

export const MsgConvertCoinToERC20Response = {
  encode(_: MsgConvertCoinToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertCoinToERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinToERC20Response();

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

  fromJSON(_: any): MsgConvertCoinToERC20Response {
    return {};
  },

  toJSON(_: MsgConvertCoinToERC20Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgConvertCoinToERC20Response>): MsgConvertCoinToERC20Response {
    const message = createBaseMsgConvertCoinToERC20Response();
    return message;
  }

};

function createBaseMsgConvertERC20ToCoin(): MsgConvertERC20ToCoin {
  return {
    initiator: "",
    receiver: "",
    kavaErc20Address: "",
    amount: ""
  };
}

export const MsgConvertERC20ToCoin = {
  encode(message: MsgConvertERC20ToCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.kavaErc20Address !== "") {
      writer.uint32(26).string(message.kavaErc20Address);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20ToCoin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.kavaErc20Address = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgConvertERC20ToCoin {
    return {
      initiator: isSet(object.initiator) ? String(object.initiator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      kavaErc20Address: isSet(object.kavaErc20Address) ? String(object.kavaErc20Address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgConvertERC20ToCoin): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.kavaErc20Address !== undefined && (obj.kavaErc20Address = message.kavaErc20Address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: Partial<MsgConvertERC20ToCoin>): MsgConvertERC20ToCoin {
    const message = createBaseMsgConvertERC20ToCoin();
    message.initiator = object.initiator ?? "";
    message.receiver = object.receiver ?? "";
    message.kavaErc20Address = object.kavaErc20Address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgConvertERC20ToCoinResponse(): MsgConvertERC20ToCoinResponse {
  return {};
}

export const MsgConvertERC20ToCoinResponse = {
  encode(_: MsgConvertERC20ToCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertERC20ToCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20ToCoinResponse();

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

  fromJSON(_: any): MsgConvertERC20ToCoinResponse {
    return {};
  },

  toJSON(_: MsgConvertERC20ToCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgConvertERC20ToCoinResponse>): MsgConvertERC20ToCoinResponse {
    const message = createBaseMsgConvertERC20ToCoinResponse();
    return message;
  }

};