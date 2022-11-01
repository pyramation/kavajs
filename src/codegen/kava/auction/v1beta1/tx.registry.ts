import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceBid } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.auction.v1beta1.MsgPlaceBid", MsgPlaceBid]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
        value
      };
    }

  },
  toJSON: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.toJSON(value)
      };
    }

  },
  fromJSON: {
    placeBid(value: any) {
      return {
        typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.fromJSON(value)
      };
    }

  },
  fromPartial: {
    placeBid(value: MsgPlaceBid) {
      return {
        typeUrl: "/kava.auction.v1beta1.MsgPlaceBid",
        value: MsgPlaceBid.fromPartial(value)
      };
    }

  }
};