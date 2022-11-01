import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimUSDXMintingReward, MsgClaimHardReward, MsgClaimDelegatorReward, MsgClaimSwapReward, MsgClaimSavingsReward, MsgClaimEarnReward } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.incentive.v1beta1.MsgClaimUSDXMintingReward", MsgClaimUSDXMintingReward], ["/kava.incentive.v1beta1.MsgClaimHardReward", MsgClaimHardReward], ["/kava.incentive.v1beta1.MsgClaimDelegatorReward", MsgClaimDelegatorReward], ["/kava.incentive.v1beta1.MsgClaimSwapReward", MsgClaimSwapReward], ["/kava.incentive.v1beta1.MsgClaimSavingsReward", MsgClaimSavingsReward], ["/kava.incentive.v1beta1.MsgClaimEarnReward", MsgClaimEarnReward]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimUSDXMintingReward(value: MsgClaimUSDXMintingReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
        value: MsgClaimUSDXMintingReward.encode(value).finish()
      };
    },

    claimHardReward(value: MsgClaimHardReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
        value: MsgClaimHardReward.encode(value).finish()
      };
    },

    claimDelegatorReward(value: MsgClaimDelegatorReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
        value: MsgClaimDelegatorReward.encode(value).finish()
      };
    },

    claimSwapReward(value: MsgClaimSwapReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
        value: MsgClaimSwapReward.encode(value).finish()
      };
    },

    claimSavingsReward(value: MsgClaimSavingsReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
        value: MsgClaimSavingsReward.encode(value).finish()
      };
    },

    claimEarnReward(value: MsgClaimEarnReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
        value: MsgClaimEarnReward.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    claimUSDXMintingReward(value: MsgClaimUSDXMintingReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
        value
      };
    },

    claimHardReward(value: MsgClaimHardReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
        value
      };
    },

    claimDelegatorReward(value: MsgClaimDelegatorReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
        value
      };
    },

    claimSwapReward(value: MsgClaimSwapReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
        value
      };
    },

    claimSavingsReward(value: MsgClaimSavingsReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
        value
      };
    },

    claimEarnReward(value: MsgClaimEarnReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
        value
      };
    }

  },
  toJSON: {
    claimUSDXMintingReward(value: MsgClaimUSDXMintingReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
        value: MsgClaimUSDXMintingReward.toJSON(value)
      };
    },

    claimHardReward(value: MsgClaimHardReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
        value: MsgClaimHardReward.toJSON(value)
      };
    },

    claimDelegatorReward(value: MsgClaimDelegatorReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
        value: MsgClaimDelegatorReward.toJSON(value)
      };
    },

    claimSwapReward(value: MsgClaimSwapReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
        value: MsgClaimSwapReward.toJSON(value)
      };
    },

    claimSavingsReward(value: MsgClaimSavingsReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
        value: MsgClaimSavingsReward.toJSON(value)
      };
    },

    claimEarnReward(value: MsgClaimEarnReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
        value: MsgClaimEarnReward.toJSON(value)
      };
    }

  },
  fromJSON: {
    claimUSDXMintingReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
        value: MsgClaimUSDXMintingReward.fromJSON(value)
      };
    },

    claimHardReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
        value: MsgClaimHardReward.fromJSON(value)
      };
    },

    claimDelegatorReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
        value: MsgClaimDelegatorReward.fromJSON(value)
      };
    },

    claimSwapReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
        value: MsgClaimSwapReward.fromJSON(value)
      };
    },

    claimSavingsReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
        value: MsgClaimSavingsReward.fromJSON(value)
      };
    },

    claimEarnReward(value: any) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
        value: MsgClaimEarnReward.fromJSON(value)
      };
    }

  },
  fromPartial: {
    claimUSDXMintingReward(value: MsgClaimUSDXMintingReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward",
        value: MsgClaimUSDXMintingReward.fromPartial(value)
      };
    },

    claimHardReward(value: MsgClaimHardReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward",
        value: MsgClaimHardReward.fromPartial(value)
      };
    },

    claimDelegatorReward(value: MsgClaimDelegatorReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward",
        value: MsgClaimDelegatorReward.fromPartial(value)
      };
    },

    claimSwapReward(value: MsgClaimSwapReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward",
        value: MsgClaimSwapReward.fromPartial(value)
      };
    },

    claimSavingsReward(value: MsgClaimSavingsReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward",
        value: MsgClaimSavingsReward.fromPartial(value)
      };
    },

    claimEarnReward(value: MsgClaimEarnReward) {
      return {
        typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward",
        value: MsgClaimEarnReward.fromPartial(value)
      };
    }

  }
};