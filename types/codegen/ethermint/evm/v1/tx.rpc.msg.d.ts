import { Rpc } from "../../../helpers";
import { MsgEthereumTx, MsgEthereumTxResponse } from "./tx";
/** Msg defines the evm Msg service. */
export interface Msg {
    /** EthereumTx defines a method submitting Ethereum transactions. */
    ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
