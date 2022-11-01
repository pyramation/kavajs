import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPostPrice } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.pricefeed.v1beta1.MsgPostPrice", MsgPostPrice]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    postPrice(value: MsgPostPrice) {
      return {
        typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
        value: MsgPostPrice.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    postPrice(value: MsgPostPrice) {
      return {
        typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
        value
      };
    }

  },
  toJSON: {
    postPrice(value: MsgPostPrice) {
      return {
        typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
        value: MsgPostPrice.toJSON(value)
      };
    }

  },
  fromJSON: {
    postPrice(value: any) {
      return {
        typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
        value: MsgPostPrice.fromJSON(value)
      };
    }

  },
  fromPartial: {
    postPrice(value: MsgPostPrice) {
      return {
        typeUrl: "/kava.pricefeed.v1beta1.MsgPostPrice",
        value: MsgPostPrice.fromPartial(value)
      };
    }

  }
};