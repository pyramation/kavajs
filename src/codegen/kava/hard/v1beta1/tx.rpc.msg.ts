import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgBorrow, MsgBorrowResponse, MsgRepay, MsgRepayResponse, MsgLiquidate, MsgLiquidateResponse } from "./tx";
/** Msg defines the hard Msg service. */

export interface Msg {
  /** Deposit defines a method for depositing funds to hard liquidity pool. */
  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method for withdrawing funds from hard liquidity pool. */

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** Borrow defines a method for borrowing funds from hard liquidity pool. */

  borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
  /** Repay defines a method for repaying funds borrowed from hard liquidity pool. */

  repay(request: MsgRepay): Promise<MsgRepayResponse>;
  /** Liquidate defines a method for attempting to liquidate a borrower that is over their loan-to-value. */

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.borrow = this.borrow.bind(this);
    this.repay = this.repay.bind(this);
    this.liquidate = this.liquidate.bind(this);
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  borrow(request: MsgBorrow): Promise<MsgBorrowResponse> {
    const data = MsgBorrow.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Msg", "Borrow", data);
    return promise.then(data => MsgBorrowResponse.decode(new _m0.Reader(data)));
  }

  repay(request: MsgRepay): Promise<MsgRepayResponse> {
    const data = MsgRepay.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Msg", "Repay", data);
    return promise.then(data => MsgRepayResponse.decode(new _m0.Reader(data)));
  }

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Msg", "Liquidate", data);
    return promise.then(data => MsgLiquidateResponse.decode(new _m0.Reader(data)));
  }

}