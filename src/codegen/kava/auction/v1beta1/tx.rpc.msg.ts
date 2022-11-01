import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgPlaceBid, MsgPlaceBidResponse } from "./tx";
/** Msg defines the auction Msg service. */

export interface Msg {
  /** PlaceBid message type used by bidders to place bids on auctions */
  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.placeBid = this.placeBid.bind(this);
  }

  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("kava.auction.v1beta1.Msg", "PlaceBid", data);
    return promise.then(data => MsgPlaceBidResponse.decode(new _m0.Reader(data)));
  }

}