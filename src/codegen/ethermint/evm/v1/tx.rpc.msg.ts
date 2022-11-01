import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgEthereumTx, MsgEthereumTxResponse } from "./tx";
/** Msg defines the evm Msg service. */

export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ethereumTx = this.ethereumTx.bind(this);
  }

  ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse> {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
    return promise.then(data => MsgEthereumTxResponse.decode(new _m0.Reader(data)));
  }

}