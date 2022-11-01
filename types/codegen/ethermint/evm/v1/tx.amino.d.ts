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
export declare const AminoConverter: {
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: ({ data, size, hash, from }: MsgEthereumTx) => AminoMsgEthereumTx["value"];
        fromAmino: ({ data, size, hash, from }: AminoMsgEthereumTx["value"]) => MsgEthereumTx;
    };
};
