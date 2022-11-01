import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.router.v1beta1.MsgMintDeposit", MsgMintDeposit], ["/kava.router.v1beta1.MsgDelegateMintDeposit", MsgDelegateMintDeposit], ["/kava.router.v1beta1.MsgWithdrawBurn", MsgWithdrawBurn], ["/kava.router.v1beta1.MsgWithdrawBurnUndelegate", MsgWithdrawBurnUndelegate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintDeposit(value: MsgMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
        value: MsgMintDeposit.encode(value).finish()
      };
    },

    delegateMintDeposit(value: MsgDelegateMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
        value: MsgDelegateMintDeposit.encode(value).finish()
      };
    },

    withdrawBurn(value: MsgWithdrawBurn) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
        value: MsgWithdrawBurn.encode(value).finish()
      };
    },

    withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
        value: MsgWithdrawBurnUndelegate.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    mintDeposit(value: MsgMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
        value
      };
    },

    delegateMintDeposit(value: MsgDelegateMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
        value
      };
    },

    withdrawBurn(value: MsgWithdrawBurn) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
        value
      };
    },

    withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
        value
      };
    }

  },
  toJSON: {
    mintDeposit(value: MsgMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
        value: MsgMintDeposit.toJSON(value)
      };
    },

    delegateMintDeposit(value: MsgDelegateMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
        value: MsgDelegateMintDeposit.toJSON(value)
      };
    },

    withdrawBurn(value: MsgWithdrawBurn) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
        value: MsgWithdrawBurn.toJSON(value)
      };
    },

    withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
        value: MsgWithdrawBurnUndelegate.toJSON(value)
      };
    }

  },
  fromJSON: {
    mintDeposit(value: any) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
        value: MsgMintDeposit.fromJSON(value)
      };
    },

    delegateMintDeposit(value: any) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
        value: MsgDelegateMintDeposit.fromJSON(value)
      };
    },

    withdrawBurn(value: any) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
        value: MsgWithdrawBurn.fromJSON(value)
      };
    },

    withdrawBurnUndelegate(value: any) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
        value: MsgWithdrawBurnUndelegate.fromJSON(value)
      };
    }

  },
  fromPartial: {
    mintDeposit(value: MsgMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgMintDeposit",
        value: MsgMintDeposit.fromPartial(value)
      };
    },

    delegateMintDeposit(value: MsgDelegateMintDeposit) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgDelegateMintDeposit",
        value: MsgDelegateMintDeposit.fromPartial(value)
      };
    },

    withdrawBurn(value: MsgWithdrawBurn) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurn",
        value: MsgWithdrawBurn.fromPartial(value)
      };
    },

    withdrawBurnUndelegate(value: MsgWithdrawBurnUndelegate) {
      return {
        typeUrl: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
        value: MsgWithdrawBurnUndelegate.fromPartial(value)
      };
    }

  }
};