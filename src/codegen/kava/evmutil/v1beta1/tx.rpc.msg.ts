import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgConvertCoinToERC20, MsgConvertCoinToERC20Response, MsgConvertERC20ToCoin, MsgConvertERC20ToCoinResponse } from "./tx";
/** Msg defines the evmutil Msg service. */

export interface Msg {
  /** ConvertCoinToERC20 defines a method for converting sdk.Coin to Kava ERC20. */
  convertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
  /** ConvertERC20ToCoin defines a method for converting Kava ERC20 to sdk.Coin. */

  convertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.convertCoinToERC20 = this.convertCoinToERC20.bind(this);
    this.convertERC20ToCoin = this.convertERC20ToCoin.bind(this);
  }

  convertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response> {
    const data = MsgConvertCoinToERC20.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertCoinToERC20", data);
    return promise.then(data => MsgConvertCoinToERC20Response.decode(new _m0.Reader(data)));
  }

  convertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse> {
    const data = MsgConvertERC20ToCoin.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Msg", "ConvertERC20ToCoin", data);
    return promise.then(data => MsgConvertERC20ToCoinResponse.decode(new _m0.Reader(data)));
  }

}