import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConvertCoinToERC20, MsgConvertERC20ToCoin } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.evmutil.v1beta1.MsgConvertCoinToERC20", MsgConvertCoinToERC20], ["/kava.evmutil.v1beta1.MsgConvertERC20ToCoin", MsgConvertERC20ToCoin]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.encode(value).finish()
      };
    },

    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value
      };
    },

    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value
      };
    }

  },
  toJSON: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.toJSON(value)
      };
    },

    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.toJSON(value)
      };
    }

  },
  fromJSON: {
    convertCoinToERC20(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.fromJSON(value)
      };
    },

    convertERC20ToCoin(value: any) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.fromJSON(value)
      };
    }

  },
  fromPartial: {
    convertCoinToERC20(value: MsgConvertCoinToERC20) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertCoinToERC20",
        value: MsgConvertCoinToERC20.fromPartial(value)
      };
    },

    convertERC20ToCoin(value: MsgConvertERC20ToCoin) {
      return {
        typeUrl: "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin",
        value: MsgConvertERC20ToCoin.fromPartial(value)
      };
    }

  }
};