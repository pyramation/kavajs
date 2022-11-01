import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.liquid.v1beta1.MsgMintDerivative", MsgMintDerivative], ["/kava.liquid.v1beta1.MsgBurnDerivative", MsgBurnDerivative]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintDerivative(value: MsgMintDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
        value: MsgMintDerivative.encode(value).finish()
      };
    },

    burnDerivative(value: MsgBurnDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
        value: MsgBurnDerivative.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    mintDerivative(value: MsgMintDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
        value
      };
    },

    burnDerivative(value: MsgBurnDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
        value
      };
    }

  },
  toJSON: {
    mintDerivative(value: MsgMintDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
        value: MsgMintDerivative.toJSON(value)
      };
    },

    burnDerivative(value: MsgBurnDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
        value: MsgBurnDerivative.toJSON(value)
      };
    }

  },
  fromJSON: {
    mintDerivative(value: any) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
        value: MsgMintDerivative.fromJSON(value)
      };
    },

    burnDerivative(value: any) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
        value: MsgBurnDerivative.fromJSON(value)
      };
    }

  },
  fromPartial: {
    mintDerivative(value: MsgMintDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgMintDerivative",
        value: MsgMintDerivative.fromPartial(value)
      };
    },

    burnDerivative(value: MsgBurnDerivative) {
      return {
        typeUrl: "/kava.liquid.v1beta1.MsgBurnDerivative",
        value: MsgBurnDerivative.fromPartial(value)
      };
    }

  }
};