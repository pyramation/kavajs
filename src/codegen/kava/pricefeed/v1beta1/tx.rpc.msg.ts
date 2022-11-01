import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgPostPrice, MsgPostPriceResponse } from "./tx";
/** Msg defines the pricefeed Msg service. */

export interface Msg {
  /** PostPrice defines a method for creating a new post price */
  postPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.postPrice = this.postPrice.bind(this);
  }

  postPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse> {
    const data = MsgPostPrice.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Msg", "PostPrice", data);
    return promise.then(data => MsgPostPriceResponse.decode(new _m0.Reader(data)));
  }

}