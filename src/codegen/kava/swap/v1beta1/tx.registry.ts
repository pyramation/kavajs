import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgSwapExactForTokens, MsgSwapForExactTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.swap.v1beta1.MsgDeposit", MsgDeposit], ["/kava.swap.v1beta1.MsgWithdraw", MsgWithdraw], ["/kava.swap.v1beta1.MsgSwapExactForTokens", MsgSwapExactForTokens], ["/kava.swap.v1beta1.MsgSwapForExactTokens", MsgSwapForExactTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    swapExactForTokens(value: MsgSwapExactForTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens",
        value: MsgSwapExactForTokens.encode(value).finish()
      };
    },

    swapForExactTokens(value: MsgSwapForExactTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens",
        value: MsgSwapForExactTokens.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgWithdraw",
        value
      };
    },

    swapExactForTokens(value: MsgSwapExactForTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens",
        value
      };
    },

    swapForExactTokens(value: MsgSwapForExactTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens",
        value
      };
    }

  },
  toJSON: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },

    swapExactForTokens(value: MsgSwapExactForTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens",
        value: MsgSwapExactForTokens.toJSON(value)
      };
    },

    swapForExactTokens(value: MsgSwapForExactTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens",
        value: MsgSwapForExactTokens.toJSON(value)
      };
    }

  },
  fromJSON: {
    deposit(value: any) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },

    withdraw(value: any) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },

    swapExactForTokens(value: any) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens",
        value: MsgSwapExactForTokens.fromJSON(value)
      };
    },

    swapForExactTokens(value: any) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens",
        value: MsgSwapForExactTokens.fromJSON(value)
      };
    }

  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    swapExactForTokens(value: MsgSwapExactForTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapExactForTokens",
        value: MsgSwapExactForTokens.fromPartial(value)
      };
    },

    swapForExactTokens(value: MsgSwapForExactTokens) {
      return {
        typeUrl: "/kava.swap.v1beta1.MsgSwapForExactTokens",
        value: MsgSwapForExactTokens.fromPartial(value)
      };
    }

  }
};