import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCDP, MsgDeposit, MsgWithdraw, MsgDrawDebt, MsgRepayDebt, MsgLiquidate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.cdp.v1beta1.MsgCreateCDP", MsgCreateCDP], ["/kava.cdp.v1beta1.MsgDeposit", MsgDeposit], ["/kava.cdp.v1beta1.MsgWithdraw", MsgWithdraw], ["/kava.cdp.v1beta1.MsgDrawDebt", MsgDrawDebt], ["/kava.cdp.v1beta1.MsgRepayDebt", MsgRepayDebt], ["/kava.cdp.v1beta1.MsgLiquidate", MsgLiquidate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createCDP(value: MsgCreateCDP) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
        value: MsgCreateCDP.encode(value).finish()
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    drawDebt(value: MsgDrawDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
        value: MsgDrawDebt.encode(value).finish()
      };
    },

    repayDebt(value: MsgRepayDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
        value: MsgRepayDebt.encode(value).finish()
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
        value: MsgLiquidate.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createCDP(value: MsgCreateCDP) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
        value
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
        value
      };
    },

    drawDebt(value: MsgDrawDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
        value
      };
    },

    repayDebt(value: MsgRepayDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
        value
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
        value
      };
    }

  },
  toJSON: {
    createCDP(value: MsgCreateCDP) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
        value: MsgCreateCDP.toJSON(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },

    drawDebt(value: MsgDrawDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
        value: MsgDrawDebt.toJSON(value)
      };
    },

    repayDebt(value: MsgRepayDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
        value: MsgRepayDebt.toJSON(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
        value: MsgLiquidate.toJSON(value)
      };
    }

  },
  fromJSON: {
    createCDP(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
        value: MsgCreateCDP.fromJSON(value)
      };
    },

    deposit(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },

    withdraw(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },

    drawDebt(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
        value: MsgDrawDebt.fromJSON(value)
      };
    },

    repayDebt(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
        value: MsgRepayDebt.fromJSON(value)
      };
    },

    liquidate(value: any) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
        value: MsgLiquidate.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createCDP(value: MsgCreateCDP) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgCreateCDP",
        value: MsgCreateCDP.fromPartial(value)
      };
    },

    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    drawDebt(value: MsgDrawDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgDrawDebt",
        value: MsgDrawDebt.fromPartial(value)
      };
    },

    repayDebt(value: MsgRepayDebt) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgRepayDebt",
        value: MsgRepayDebt.fromPartial(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.cdp.v1beta1.MsgLiquidate",
        value: MsgLiquidate.fromPartial(value)
      };
    }

  }
};