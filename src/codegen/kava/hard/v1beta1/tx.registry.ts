import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgWithdraw, MsgBorrow, MsgRepay, MsgLiquidate } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.hard.v1beta1.MsgDeposit", MsgDeposit], ["/kava.hard.v1beta1.MsgWithdraw", MsgWithdraw], ["/kava.hard.v1beta1.MsgBorrow", MsgBorrow], ["/kava.hard.v1beta1.MsgRepay", MsgRepay], ["/kava.hard.v1beta1.MsgLiquidate", MsgLiquidate]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgBorrow",
        value: MsgBorrow.encode(value).finish()
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgRepay",
        value: MsgRepay.encode(value).finish()
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
        value: MsgLiquidate.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgDeposit",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
        value
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgBorrow",
        value
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgRepay",
        value
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
        value
      };
    }

  },
  toJSON: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgBorrow",
        value: MsgBorrow.toJSON(value)
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgRepay",
        value: MsgRepay.toJSON(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
        value: MsgLiquidate.toJSON(value)
      };
    }

  },
  fromJSON: {
    deposit(value: any) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },

    withdraw(value: any) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },

    borrow(value: any) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgBorrow",
        value: MsgBorrow.fromJSON(value)
      };
    },

    repay(value: any) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgRepay",
        value: MsgRepay.fromJSON(value)
      };
    },

    liquidate(value: any) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
        value: MsgLiquidate.fromJSON(value)
      };
    }

  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    borrow(value: MsgBorrow) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgBorrow",
        value: MsgBorrow.fromPartial(value)
      };
    },

    repay(value: MsgRepay) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgRepay",
        value: MsgRepay.fromPartial(value)
      };
    },

    liquidate(value: MsgLiquidate) {
      return {
        typeUrl: "/kava.hard.v1beta1.MsgLiquidate",
        value: MsgLiquidate.fromPartial(value)
      };
    }

  }
};