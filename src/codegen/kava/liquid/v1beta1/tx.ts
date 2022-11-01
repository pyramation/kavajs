import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgMintDerivative defines the Msg/MintDerivative request type. */

export interface MsgMintDerivative {
  /** sender is the owner of the delegation to be converted */
  sender: string;
  /** validator is the validator of the delegation to be converted */

  validator: string;
  /** amount is the quantity of staked assets to be converted */

  amount?: Coin;
}
/** MsgMintDerivative defines the Msg/MintDerivative request type. */

export interface MsgMintDerivativeSDKType {
  /** sender is the owner of the delegation to be converted */
  sender: string;
  /** validator is the validator of the delegation to be converted */

  validator: string;
  /** amount is the quantity of staked assets to be converted */

  amount?: CoinSDKType;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */

export interface MsgMintDerivativeResponse {
  /** received is the amount of staking derivative minted and sent to the sender */
  received?: Coin;
}
/** MsgMintDerivativeResponse defines the Msg/MintDerivative response type. */

export interface MsgMintDerivativeResponseSDKType {
  /** received is the amount of staking derivative minted and sent to the sender */
  received?: CoinSDKType;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */

export interface MsgBurnDerivative {
  /** sender is the owner of the derivatives to be converted */
  sender: string;
  /** validator is the validator of the derivatives to be converted */

  validator: string;
  /** amount is the quantity of derivatives to be converted */

  amount?: Coin;
}
/** MsgBurnDerivative defines the Msg/BurnDerivative request type. */

export interface MsgBurnDerivativeSDKType {
  /** sender is the owner of the derivatives to be converted */
  sender: string;
  /** validator is the validator of the derivatives to be converted */

  validator: string;
  /** amount is the quantity of derivatives to be converted */

  amount?: CoinSDKType;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */

export interface MsgBurnDerivativeResponse {
  /** received is the number of delegation shares sent to the sender */
  received: string;
}
/** MsgBurnDerivativeResponse defines the Msg/BurnDerivative response type. */

export interface MsgBurnDerivativeResponseSDKType {
  /** received is the number of delegation shares sent to the sender */
  received: string;
}

function createBaseMsgMintDerivative(): MsgMintDerivative {
  return {
    sender: "",
    validator: "",
    amount: undefined
  };
}

export const MsgMintDerivative = {
  encode(message: MsgMintDerivative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDerivative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDerivative();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.validator = reader.string();
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

  fromJSON(object: any): MsgMintDerivative {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgMintDerivative): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgMintDerivative>): MsgMintDerivative {
    const message = createBaseMsgMintDerivative();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgMintDerivativeResponse(): MsgMintDerivativeResponse {
  return {
    received: undefined
  };
}

export const MsgMintDerivativeResponse = {
  encode(message: MsgMintDerivativeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received !== undefined) {
      Coin.encode(message.received, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDerivativeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDerivativeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.received = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMintDerivativeResponse {
    return {
      received: isSet(object.received) ? Coin.fromJSON(object.received) : undefined
    };
  },

  toJSON(message: MsgMintDerivativeResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received ? Coin.toJSON(message.received) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgMintDerivativeResponse>): MsgMintDerivativeResponse {
    const message = createBaseMsgMintDerivativeResponse();
    message.received = object.received !== undefined && object.received !== null ? Coin.fromPartial(object.received) : undefined;
    return message;
  }

};

function createBaseMsgBurnDerivative(): MsgBurnDerivative {
  return {
    sender: "",
    validator: "",
    amount: undefined
  };
}

export const MsgBurnDerivative = {
  encode(message: MsgBurnDerivative, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDerivative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDerivative();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.validator = reader.string();
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

  fromJSON(object: any): MsgBurnDerivative {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgBurnDerivative): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgBurnDerivative>): MsgBurnDerivative {
    const message = createBaseMsgBurnDerivative();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgBurnDerivativeResponse(): MsgBurnDerivativeResponse {
  return {
    received: ""
  };
}

export const MsgBurnDerivativeResponse = {
  encode(message: MsgBurnDerivativeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received !== "") {
      writer.uint32(10).string(message.received);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDerivativeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDerivativeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.received = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBurnDerivativeResponse {
    return {
      received: isSet(object.received) ? String(object.received) : ""
    };
  },

  toJSON(message: MsgBurnDerivativeResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    return obj;
  },

  fromPartial(object: Partial<MsgBurnDerivativeResponse>): MsgBurnDerivativeResponse {
    const message = createBaseMsgBurnDerivativeResponse();
    message.received = object.received ?? "";
    return message;
  }

};