import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgMintDerivative, MsgMintDerivativeResponse, MsgBurnDerivative, MsgBurnDerivativeResponse } from "./tx";
/** Msg defines the liquid Msg service. */

export interface Msg {
  /** MintDerivative defines a method for converting a delegation into staking deriviatives. */
  mintDerivative(request: MsgMintDerivative): Promise<MsgMintDerivativeResponse>;
  /** BurnDerivative defines a method for converting staking deriviatives into a delegation. */

  burnDerivative(request: MsgBurnDerivative): Promise<MsgBurnDerivativeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.mintDerivative = this.mintDerivative.bind(this);
    this.burnDerivative = this.burnDerivative.bind(this);
  }

  mintDerivative(request: MsgMintDerivative): Promise<MsgMintDerivativeResponse> {
    const data = MsgMintDerivative.encode(request).finish();
    const promise = this.rpc.request("kava.liquid.v1beta1.Msg", "MintDerivative", data);
    return promise.then(data => MsgMintDerivativeResponse.decode(new _m0.Reader(data)));
  }

  burnDerivative(request: MsgBurnDerivative): Promise<MsgBurnDerivativeResponse> {
    const data = MsgBurnDerivative.encode(request).finish();
    const promise = this.rpc.request("kava.liquid.v1beta1.Msg", "BurnDerivative", data);
    return promise.then(data => MsgBurnDerivativeResponse.decode(new _m0.Reader(data)));
  }

}