import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgEthereumTx } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ethermint.evm.v1.MsgEthereumTx", MsgEthereumTx]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value
      };
    }

  },
  toJSON: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.toJSON(value)
      };
    }

  },
  fromJSON: {
    ethereumTx(value: any) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.fromJSON(value)
      };
    }

  },
  fromPartial: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
        value: MsgEthereumTx.fromPartial(value)
      };
    }

  }
};