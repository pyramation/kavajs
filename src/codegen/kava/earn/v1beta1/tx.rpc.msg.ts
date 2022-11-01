import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse } from "./tx";
/** Msg defines the earn Msg service. */

export interface Msg {
  /** Deposit defines a method for depositing assets into a vault */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method for withdrawing assets into a vault */

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("kava.earn.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

}