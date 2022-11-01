import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateAtomicSwap, MsgClaimAtomicSwap, MsgRefundAtomicSwap } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.bep3.v1beta1.MsgCreateAtomicSwap", MsgCreateAtomicSwap], ["/kava.bep3.v1beta1.MsgClaimAtomicSwap", MsgClaimAtomicSwap], ["/kava.bep3.v1beta1.MsgRefundAtomicSwap", MsgRefundAtomicSwap]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createAtomicSwap(value: MsgCreateAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
        value: MsgCreateAtomicSwap.encode(value).finish()
      };
    },

    claimAtomicSwap(value: MsgClaimAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
        value: MsgClaimAtomicSwap.encode(value).finish()
      };
    },

    refundAtomicSwap(value: MsgRefundAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
        value: MsgRefundAtomicSwap.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createAtomicSwap(value: MsgCreateAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
        value
      };
    },

    claimAtomicSwap(value: MsgClaimAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
        value
      };
    },

    refundAtomicSwap(value: MsgRefundAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
        value
      };
    }

  },
  toJSON: {
    createAtomicSwap(value: MsgCreateAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
        value: MsgCreateAtomicSwap.toJSON(value)
      };
    },

    claimAtomicSwap(value: MsgClaimAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
        value: MsgClaimAtomicSwap.toJSON(value)
      };
    },

    refundAtomicSwap(value: MsgRefundAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
        value: MsgRefundAtomicSwap.toJSON(value)
      };
    }

  },
  fromJSON: {
    createAtomicSwap(value: any) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
        value: MsgCreateAtomicSwap.fromJSON(value)
      };
    },

    claimAtomicSwap(value: any) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
        value: MsgClaimAtomicSwap.fromJSON(value)
      };
    },

    refundAtomicSwap(value: any) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
        value: MsgRefundAtomicSwap.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createAtomicSwap(value: MsgCreateAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
        value: MsgCreateAtomicSwap.fromPartial(value)
      };
    },

    claimAtomicSwap(value: MsgClaimAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
        value: MsgClaimAtomicSwap.fromPartial(value)
      };
    },

    refundAtomicSwap(value: MsgRefundAtomicSwap) {
      return {
        typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
        value: MsgRefundAtomicSwap.fromPartial(value)
      };
    }

  }
};