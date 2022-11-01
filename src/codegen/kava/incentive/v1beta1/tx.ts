import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */

export interface Selection {
  denom: string;
  multiplierName: string;
}
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */

export interface SelectionSDKType {
  denom: string;
  multiplier_name: string;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */

export interface MsgClaimUSDXMintingReward {
  sender: string;
  multiplierName: string;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */

export interface MsgClaimUSDXMintingRewardSDKType {
  sender: string;
  multiplier_name: string;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */

export interface MsgClaimUSDXMintingRewardResponse {}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */

export interface MsgClaimUSDXMintingRewardResponseSDKType {}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */

export interface MsgClaimHardReward {
  sender: string;
  denomsToClaim: Selection[];
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */

export interface MsgClaimHardRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */

export interface MsgClaimHardRewardResponse {}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */

export interface MsgClaimHardRewardResponseSDKType {}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */

export interface MsgClaimDelegatorReward {
  sender: string;
  denomsToClaim: Selection[];
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */

export interface MsgClaimDelegatorRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */

export interface MsgClaimDelegatorRewardResponse {}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */

export interface MsgClaimDelegatorRewardResponseSDKType {}
/** MsgClaimSwapReward message type used to claim delegator rewards */

export interface MsgClaimSwapReward {
  sender: string;
  denomsToClaim: Selection[];
}
/** MsgClaimSwapReward message type used to claim delegator rewards */

export interface MsgClaimSwapRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */

export interface MsgClaimSwapRewardResponse {}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */

export interface MsgClaimSwapRewardResponseSDKType {}
/** MsgClaimSavingsReward message type used to claim savings rewards */

export interface MsgClaimSavingsReward {
  sender: string;
  denomsToClaim: Selection[];
}
/** MsgClaimSavingsReward message type used to claim savings rewards */

export interface MsgClaimSavingsRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */

export interface MsgClaimSavingsRewardResponse {}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */

export interface MsgClaimSavingsRewardResponseSDKType {}
/** MsgClaimEarnReward message type used to claim earn rewards */

export interface MsgClaimEarnReward {
  sender: string;
  denomsToClaim: Selection[];
}
/** MsgClaimEarnReward message type used to claim earn rewards */

export interface MsgClaimEarnRewardSDKType {
  sender: string;
  denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */

export interface MsgClaimEarnRewardResponse {}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */

export interface MsgClaimEarnRewardResponseSDKType {}

function createBaseSelection(): Selection {
  return {
    denom: "",
    multiplierName: ""
  };
}

export const Selection = {
  encode(message: Selection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.multiplierName !== "") {
      writer.uint32(18).string(message.multiplierName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Selection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelection();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.multiplierName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Selection {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplierName: isSet(object.multiplierName) ? String(object.multiplierName) : ""
    };
  },

  toJSON(message: Selection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplierName !== undefined && (obj.multiplierName = message.multiplierName);
    return obj;
  },

  fromPartial(object: Partial<Selection>): Selection {
    const message = createBaseSelection();
    message.denom = object.denom ?? "";
    message.multiplierName = object.multiplierName ?? "";
    return message;
  }

};

function createBaseMsgClaimUSDXMintingReward(): MsgClaimUSDXMintingReward {
  return {
    sender: "",
    multiplierName: ""
  };
}

export const MsgClaimUSDXMintingReward = {
  encode(message: MsgClaimUSDXMintingReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.multiplierName !== "") {
      writer.uint32(18).string(message.multiplierName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUSDXMintingReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUSDXMintingReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.multiplierName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimUSDXMintingReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      multiplierName: isSet(object.multiplierName) ? String(object.multiplierName) : ""
    };
  },

  toJSON(message: MsgClaimUSDXMintingReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.multiplierName !== undefined && (obj.multiplierName = message.multiplierName);
    return obj;
  },

  fromPartial(object: Partial<MsgClaimUSDXMintingReward>): MsgClaimUSDXMintingReward {
    const message = createBaseMsgClaimUSDXMintingReward();
    message.sender = object.sender ?? "";
    message.multiplierName = object.multiplierName ?? "";
    return message;
  }

};

function createBaseMsgClaimUSDXMintingRewardResponse(): MsgClaimUSDXMintingRewardResponse {
  return {};
}

export const MsgClaimUSDXMintingRewardResponse = {
  encode(_: MsgClaimUSDXMintingRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUSDXMintingRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUSDXMintingRewardResponse();

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

  fromJSON(_: any): MsgClaimUSDXMintingRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimUSDXMintingRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimUSDXMintingRewardResponse>): MsgClaimUSDXMintingRewardResponse {
    const message = createBaseMsgClaimUSDXMintingRewardResponse();
    return message;
  }

};

function createBaseMsgClaimHardReward(): MsgClaimHardReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}

export const MsgClaimHardReward = {
  encode(message: MsgClaimHardReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHardReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHardReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denomsToClaim.push(Selection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimHardReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimHardReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.denomsToClaim) {
      obj.denomsToClaim = message.denomsToClaim.map(e => e ? Selection.toJSON(e) : undefined);
    } else {
      obj.denomsToClaim = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgClaimHardReward>): MsgClaimHardReward {
    const message = createBaseMsgClaimHardReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimHardRewardResponse(): MsgClaimHardRewardResponse {
  return {};
}

export const MsgClaimHardRewardResponse = {
  encode(_: MsgClaimHardRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimHardRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHardRewardResponse();

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

  fromJSON(_: any): MsgClaimHardRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimHardRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimHardRewardResponse>): MsgClaimHardRewardResponse {
    const message = createBaseMsgClaimHardRewardResponse();
    return message;
  }

};

function createBaseMsgClaimDelegatorReward(): MsgClaimDelegatorReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}

export const MsgClaimDelegatorReward = {
  encode(message: MsgClaimDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDelegatorReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denomsToClaim.push(Selection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimDelegatorReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimDelegatorReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.denomsToClaim) {
      obj.denomsToClaim = message.denomsToClaim.map(e => e ? Selection.toJSON(e) : undefined);
    } else {
      obj.denomsToClaim = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgClaimDelegatorReward>): MsgClaimDelegatorReward {
    const message = createBaseMsgClaimDelegatorReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimDelegatorRewardResponse(): MsgClaimDelegatorRewardResponse {
  return {};
}

export const MsgClaimDelegatorRewardResponse = {
  encode(_: MsgClaimDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimDelegatorRewardResponse();

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

  fromJSON(_: any): MsgClaimDelegatorRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimDelegatorRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimDelegatorRewardResponse>): MsgClaimDelegatorRewardResponse {
    const message = createBaseMsgClaimDelegatorRewardResponse();
    return message;
  }

};

function createBaseMsgClaimSwapReward(): MsgClaimSwapReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}

export const MsgClaimSwapReward = {
  encode(message: MsgClaimSwapReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSwapReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSwapReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denomsToClaim.push(Selection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimSwapReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimSwapReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.denomsToClaim) {
      obj.denomsToClaim = message.denomsToClaim.map(e => e ? Selection.toJSON(e) : undefined);
    } else {
      obj.denomsToClaim = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgClaimSwapReward>): MsgClaimSwapReward {
    const message = createBaseMsgClaimSwapReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimSwapRewardResponse(): MsgClaimSwapRewardResponse {
  return {};
}

export const MsgClaimSwapRewardResponse = {
  encode(_: MsgClaimSwapRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSwapRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSwapRewardResponse();

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

  fromJSON(_: any): MsgClaimSwapRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimSwapRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimSwapRewardResponse>): MsgClaimSwapRewardResponse {
    const message = createBaseMsgClaimSwapRewardResponse();
    return message;
  }

};

function createBaseMsgClaimSavingsReward(): MsgClaimSavingsReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}

export const MsgClaimSavingsReward = {
  encode(message: MsgClaimSavingsReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSavingsReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSavingsReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denomsToClaim.push(Selection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimSavingsReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimSavingsReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.denomsToClaim) {
      obj.denomsToClaim = message.denomsToClaim.map(e => e ? Selection.toJSON(e) : undefined);
    } else {
      obj.denomsToClaim = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgClaimSavingsReward>): MsgClaimSavingsReward {
    const message = createBaseMsgClaimSavingsReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimSavingsRewardResponse(): MsgClaimSavingsRewardResponse {
  return {};
}

export const MsgClaimSavingsRewardResponse = {
  encode(_: MsgClaimSavingsRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSavingsRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSavingsRewardResponse();

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

  fromJSON(_: any): MsgClaimSavingsRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimSavingsRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimSavingsRewardResponse>): MsgClaimSavingsRewardResponse {
    const message = createBaseMsgClaimSavingsRewardResponse();
    return message;
  }

};

function createBaseMsgClaimEarnReward(): MsgClaimEarnReward {
  return {
    sender: "",
    denomsToClaim: []
  };
}

export const MsgClaimEarnReward = {
  encode(message: MsgClaimEarnReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    for (const v of message.denomsToClaim) {
      Selection.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarnReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarnReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.denomsToClaim.push(Selection.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimEarnReward {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denomsToClaim: Array.isArray(object?.denomsToClaim) ? object.denomsToClaim.map((e: any) => Selection.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgClaimEarnReward): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);

    if (message.denomsToClaim) {
      obj.denomsToClaim = message.denomsToClaim.map(e => e ? Selection.toJSON(e) : undefined);
    } else {
      obj.denomsToClaim = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgClaimEarnReward>): MsgClaimEarnReward {
    const message = createBaseMsgClaimEarnReward();
    message.sender = object.sender ?? "";
    message.denomsToClaim = object.denomsToClaim?.map(e => Selection.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgClaimEarnRewardResponse(): MsgClaimEarnRewardResponse {
  return {};
}

export const MsgClaimEarnRewardResponse = {
  encode(_: MsgClaimEarnRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimEarnRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimEarnRewardResponse();

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

  fromJSON(_: any): MsgClaimEarnRewardResponse {
    return {};
  },

  toJSON(_: MsgClaimEarnRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgClaimEarnRewardResponse>): MsgClaimEarnRewardResponse {
    const message = createBaseMsgClaimEarnRewardResponse();
    return message;
  }

};