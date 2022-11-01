import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */

export interface ConversionPair {
  /** ERC20 address of the token on the Kava EVM */
  kavaErc20Address: Uint8Array;
  /** Denom of the corresponding sdk.Coin */

  denom: string;
}
/**
 * ConversionPair defines a Kava ERC20 address and corresponding denom that is
 * allowed to be converted between ERC20 and sdk.Coin
 */

export interface ConversionPairSDKType {
  /** ERC20 address of the token on the Kava EVM */
  kava_erc20_address: Uint8Array;
  /** Denom of the corresponding sdk.Coin */

  denom: string;
}

function createBaseConversionPair(): ConversionPair {
  return {
    kavaErc20Address: new Uint8Array(),
    denom: ""
  };
}

export const ConversionPair = {
  encode(message: ConversionPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kavaErc20Address.length !== 0) {
      writer.uint32(10).bytes(message.kavaErc20Address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversionPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversionPair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kavaErc20Address = reader.bytes();
          break;

        case 2:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ConversionPair {
    return {
      kavaErc20Address: isSet(object.kavaErc20Address) ? bytesFromBase64(object.kavaErc20Address) : new Uint8Array(),
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: ConversionPair): unknown {
    const obj: any = {};
    message.kavaErc20Address !== undefined && (obj.kavaErc20Address = base64FromBytes(message.kavaErc20Address !== undefined ? message.kavaErc20Address : new Uint8Array()));
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: Partial<ConversionPair>): ConversionPair {
    const message = createBaseConversionPair();
    message.kavaErc20Address = object.kavaErc20Address ?? new Uint8Array();
    message.denom = object.denom ?? "";
    return message;
  }

};