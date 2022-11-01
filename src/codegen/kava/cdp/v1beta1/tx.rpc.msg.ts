import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCDP, MsgCreateCDPResponse, MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgDrawDebt, MsgDrawDebtResponse, MsgRepayDebt, MsgRepayDebtResponse, MsgLiquidate, MsgLiquidateResponse } from "./tx";
/** Msg defines the cdp Msg service. */

export interface Msg {
  /** CreateCDP defines a method to create a new CDP. */
  createCDP(request: MsgCreateCDP): Promise<MsgCreateCDPResponse>;
  /** Deposit defines a method to deposit to a CDP. */

  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method to withdraw collateral from a CDP. */

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** DrawDebt defines a method to draw debt from a CDP. */

  drawDebt(request: MsgDrawDebt): Promise<MsgDrawDebtResponse>;
  /** RepayDebt defines a method to repay debt from a CDP. */

  repayDebt(request: MsgRepayDebt): Promise<MsgRepayDebtResponse>;
  /**
   * Liquidate defines a method to attempt to liquidate a CDP whos
   * collateralization ratio is under its liquidation ratio.
   */

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCDP = this.createCDP.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.drawDebt = this.drawDebt.bind(this);
    this.repayDebt = this.repayDebt.bind(this);
    this.liquidate = this.liquidate.bind(this);
  }

  createCDP(request: MsgCreateCDP): Promise<MsgCreateCDPResponse> {
    const data = MsgCreateCDP.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "CreateCDP", data);
    return promise.then(data => MsgCreateCDPResponse.decode(new _m0.Reader(data)));
  }

  deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  drawDebt(request: MsgDrawDebt): Promise<MsgDrawDebtResponse> {
    const data = MsgDrawDebt.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "DrawDebt", data);
    return promise.then(data => MsgDrawDebtResponse.decode(new _m0.Reader(data)));
  }

  repayDebt(request: MsgRepayDebt): Promise<MsgRepayDebtResponse> {
    const data = MsgRepayDebt.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "RepayDebt", data);
    return promise.then(data => MsgRepayDebtResponse.decode(new _m0.Reader(data)));
  }

  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Msg", "Liquidate", data);
    return promise.then(data => MsgLiquidateResponse.decode(new _m0.Reader(data)));
  }

}