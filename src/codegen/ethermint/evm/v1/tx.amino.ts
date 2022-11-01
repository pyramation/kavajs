import { AminoMsg } from "@cosmjs/amino";
import { MsgEthereumTx } from "./tx";
export interface AminoMsgEthereumTx extends AminoMsg {
  type: "/ethermint.evm.v1.MsgEthereumTx";
  value: {
    data: {
      type_url: string;
      value: Uint8Array;
    };
    size: number;
    hash: string;
    from: string;
  };
}
export const AminoConverter = {
  "/ethermint.evm.v1.MsgEthereumTx": {
    aminoType: "/ethermint.evm.v1.MsgEthereumTx",
    toAmino: ({
      data,
      size,
      hash,
      from
    }: MsgEthereumTx): AminoMsgEthereumTx["value"] => {
      return {
        data: {
          type_url: data.typeUrl,
          value: data.value
        },
        size,
        hash,
        from
      };
    },
    fromAmino: ({
      data,
      size,
      hash,
      from
    }: AminoMsgEthereumTx["value"]): MsgEthereumTx => {
      return {
        data: {
          typeUrl: data.type_url,
          value: data.value
        },
        size,
        hash,
        from
      };
    }
  }
};