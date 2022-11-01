import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgDeposit defines the Msg/Deposit request type. */

export interface MsgDeposit {
  depositor: string;
  amount: Coin[];
}
/** MsgDeposit defines the Msg/Deposit request type. */

export interface MsgDepositSDKType {
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponse {}
/** MsgDepositResponse defines the Msg/Deposit response type. */

export interface MsgDepositResponseSDKType {}
/** MsgWithdraw defines the Msg/Withdraw request type. */

export interface MsgWithdraw {
  depositor: string;
  amount: Coin[];
}
/** MsgWithdraw defines the Msg/Withdraw request type. */

export interface MsgWithdrawSDKType {
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponse {}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */

export interface MsgWithdrawResponseSDKType {}
/** MsgBorrow defines the Msg/Borrow request type. */

export interface MsgBorrow {
  borrower: string;
  amount: Coin[];
}
/** MsgBorrow defines the Msg/Borrow request type. */

export interface MsgBorrowSDKType {
  borrower: string;
  amount: CoinSDKType[];
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */

export interface MsgBorrowResponse {}
/** MsgBorrowResponse defines the Msg/Borrow response type. */

export interface MsgBorrowResponseSDKType {}
/** MsgRepay defines the Msg/Repay request type. */

export interface MsgRepay {
  sender: string;
  owner: string;
  amount: Coin[];
}
/** MsgRepay defines the Msg/Repay request type. */

export interface MsgRepaySDKType {
  sender: string;
  owner: string;
  amount: CoinSDKType[];
}
/** MsgRepayResponse defines the Msg/Repay response type. */

export interface MsgRepayResponse {}
/** MsgRepayResponse defines the Msg/Repay response type. */

export interface MsgRepayResponseSDKType {}
/** MsgLiquidate defines the Msg/Liquidate request type. */

export interface MsgLiquidate {
  keeper: string;
  borrower: string;
}
/** MsgLiquidate defines the Msg/Liquidate request type. */

export interface MsgLiquidateSDKType {
  keeper: string;
  borrower: string;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */

export interface MsgLiquidateResponse {}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */

export interface MsgLiquidateResponseSDKType {}

function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    amount: []
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

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

  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

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

  fromJSON(_: any): MsgDepositResponse {
    return {};
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    depositor: "",
    amount: []
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

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

  fromJSON(object: any): MsgWithdraw {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

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

  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  }

};

function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    amount: []
  };
}

export const MsgBorrow = {
  encode(message: MsgBorrow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrow();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
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

  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgBorrow): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgBorrow>): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}

export const MsgBorrowResponse = {
  encode(_: MsgBorrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowResponse();

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

  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },

  toJSON(_: MsgBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  }

};

function createBaseMsgRepay(): MsgRepay {
  return {
    sender: "",
    owner: "",
    amount: []
  };
}

export const MsgRepay = {
  encode(message: MsgRepay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepay();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRepay {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgRepay): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.owner !== undefined && (obj.owner = message.owner);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgRepay>): MsgRepay {
    const message = createBaseMsgRepay();
    message.sender = object.sender ?? "";
    message.owner = object.owner ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {};
}

export const MsgRepayResponse = {
  encode(_: MsgRepayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayResponse();

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

  fromJSON(_: any): MsgRepayResponse {
    return {};
  },

  toJSON(_: MsgRepayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRepayResponse>): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  }

};

function createBaseMsgLiquidate(): MsgLiquidate {
  return {
    keeper: "",
    borrower: ""
  };
}

export const MsgLiquidate = {
  encode(message: MsgLiquidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keeper !== "") {
      writer.uint32(10).string(message.keeper);
    }

    if (message.borrower !== "") {
      writer.uint32(18).string(message.borrower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keeper = reader.string();
          break;

        case 2:
          message.borrower = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgLiquidate {
    return {
      keeper: isSet(object.keeper) ? String(object.keeper) : "",
      borrower: isSet(object.borrower) ? String(object.borrower) : ""
    };
  },

  toJSON(message: MsgLiquidate): unknown {
    const obj: any = {};
    message.keeper !== undefined && (obj.keeper = message.keeper);
    message.borrower !== undefined && (obj.borrower = message.borrower);
    return obj;
  },

  fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate {
    const message = createBaseMsgLiquidate();
    message.keeper = object.keeper ?? "";
    message.borrower = object.borrower ?? "";
    return message;
  }

};

function createBaseMsgLiquidateResponse(): MsgLiquidateResponse {
  return {};
}

export const MsgLiquidateResponse = {
  encode(_: MsgLiquidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateResponse();

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

  fromJSON(_: any): MsgLiquidateResponse {
    return {};
  },

  toJSON(_: MsgLiquidateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgLiquidateResponse>): MsgLiquidateResponse {
    const message = createBaseMsgLiquidateResponse();
    return message;
  }

};