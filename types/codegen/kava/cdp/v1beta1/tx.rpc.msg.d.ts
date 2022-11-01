import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCDP(request: MsgCreateCDP): Promise<MsgCreateCDPResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    drawDebt(request: MsgDrawDebt): Promise<MsgDrawDebtResponse>;
    repayDebt(request: MsgRepayDebt): Promise<MsgRepayDebtResponse>;
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
