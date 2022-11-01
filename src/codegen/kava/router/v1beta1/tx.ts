import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */

export interface MsgMintDeposit {
  /** depositor represents the owner of the delegation to convert */
  depositor: string;
  /** validator is the validator for the depositor's delegation */

  validator: string;
  /** amount is the delegation balance to convert */

  amount?: Coin;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */

export interface MsgMintDepositSDKType {
  /** depositor represents the owner of the delegation to convert */
  depositor: string;
  /** validator is the validator for the depositor's delegation */

  validator: string;
  /** amount is the delegation balance to convert */

  amount?: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */

export interface MsgMintDepositResponse {}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */

export interface MsgMintDepositResponseSDKType {}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */

export interface MsgDelegateMintDeposit {
  /** depositor represents the owner of the tokens to delegate */
  depositor: string;
  /** validator is the address of the validator to delegate to */

  validator: string;
  /** amount is the tokens to delegate */

  amount?: Coin;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */

export interface MsgDelegateMintDepositSDKType {
  /** depositor represents the owner of the tokens to delegate */
  depositor: string;
  /** validator is the address of the validator to delegate to */

  validator: string;
  /** amount is the tokens to delegate */

  amount?: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */

export interface MsgDelegateMintDepositResponse {}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */

export interface MsgDelegateMintDepositResponseSDKType {}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */

export interface MsgWithdrawBurn {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */

  validator: string;
  /** amount is the staked token equivalent to withdraw */

  amount?: Coin;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */

export interface MsgWithdrawBurnSDKType {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */

  validator: string;
  /** amount is the staked token equivalent to withdraw */

  amount?: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */

export interface MsgWithdrawBurnResponse {}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */

export interface MsgWithdrawBurnResponseSDKType {}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */

export interface MsgWithdrawBurnUndelegate {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */

  validator: string;
  /** amount is the staked token equivalent to withdraw */

  amount?: Coin;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */

export interface MsgWithdrawBurnUndelegateSDKType {
  /** from is the owner of the earn vault to withdraw from */
  from: string;
  /** validator is the address to select the derivative denom to withdraw */

  validator: string;
  /** amount is the staked token equivalent to withdraw */

  amount?: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */

export interface MsgWithdrawBurnUndelegateResponse {}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */

export interface MsgWithdrawBurnUndelegateResponseSDKType {}

function createBaseMsgMintDeposit(): MsgMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: undefined
  };
}

export const MsgMintDeposit = {
  encode(message: MsgMintDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
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

  fromJSON(object: any): MsgMintDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgMintDeposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgMintDeposit>): MsgMintDeposit {
    const message = createBaseMsgMintDeposit();
    message.depositor = object.depositor ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgMintDepositResponse(): MsgMintDepositResponse {
  return {};
}

export const MsgMintDepositResponse = {
  encode(_: MsgMintDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintDepositResponse();

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

  fromJSON(_: any): MsgMintDepositResponse {
    return {};
  },

  toJSON(_: MsgMintDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse {
    const message = createBaseMsgMintDepositResponse();
    return message;
  }

};

function createBaseMsgDelegateMintDeposit(): MsgDelegateMintDeposit {
  return {
    depositor: "",
    validator: "",
    amount: undefined
  };
}

export const MsgDelegateMintDeposit = {
  encode(message: MsgDelegateMintDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateMintDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateMintDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
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

  fromJSON(object: any): MsgDelegateMintDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgDelegateMintDeposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgDelegateMintDeposit>): MsgDelegateMintDeposit {
    const message = createBaseMsgDelegateMintDeposit();
    message.depositor = object.depositor ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgDelegateMintDepositResponse(): MsgDelegateMintDepositResponse {
  return {};
}

export const MsgDelegateMintDepositResponse = {
  encode(_: MsgDelegateMintDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateMintDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateMintDepositResponse();

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

  fromJSON(_: any): MsgDelegateMintDepositResponse {
    return {};
  },

  toJSON(_: MsgDelegateMintDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse {
    const message = createBaseMsgDelegateMintDepositResponse();
    return message;
  }

};

function createBaseMsgWithdrawBurn(): MsgWithdrawBurn {
  return {
    from: "",
    validator: "",
    amount: undefined
  };
}

export const MsgWithdrawBurn = {
  encode(message: MsgWithdrawBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
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

  fromJSON(object: any): MsgWithdrawBurn {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgWithdrawBurn): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawBurn>): MsgWithdrawBurn {
    const message = createBaseMsgWithdrawBurn();
    message.from = object.from ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawBurnResponse(): MsgWithdrawBurnResponse {
  return {};
}

export const MsgWithdrawBurnResponse = {
  encode(_: MsgWithdrawBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBurnResponse();

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

  fromJSON(_: any): MsgWithdrawBurnResponse {
    return {};
  },

  toJSON(_: MsgWithdrawBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse {
    const message = createBaseMsgWithdrawBurnResponse();
    return message;
  }

};

function createBaseMsgWithdrawBurnUndelegate(): MsgWithdrawBurnUndelegate {
  return {
    from: "",
    validator: "",
    amount: undefined
  };
}

export const MsgWithdrawBurnUndelegate = {
  encode(message: MsgWithdrawBurnUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBurnUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
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

  fromJSON(object: any): MsgWithdrawBurnUndelegate {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgWithdrawBurnUndelegate): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgWithdrawBurnUndelegate>): MsgWithdrawBurnUndelegate {
    const message = createBaseMsgWithdrawBurnUndelegate();
    message.from = object.from ?? "";
    message.validator = object.validator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgWithdrawBurnUndelegateResponse(): MsgWithdrawBurnUndelegateResponse {
  return {};
}

export const MsgWithdrawBurnUndelegateResponse = {
  encode(_: MsgWithdrawBurnUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBurnUndelegateResponse();

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

  fromJSON(_: any): MsgWithdrawBurnUndelegateResponse {
    return {};
  },

  toJSON(_: MsgWithdrawBurnUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse {
    const message = createBaseMsgWithdrawBurnUndelegateResponse();
    return message;
  }

};