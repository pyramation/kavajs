import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
    repay(request: MsgRepay): Promise<MsgRepayResponse>;
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
