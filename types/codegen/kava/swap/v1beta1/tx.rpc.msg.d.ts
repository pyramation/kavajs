import { Rpc } from "../../../helpers";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgSwapExactForTokens, MsgSwapExactForTokensResponse, MsgSwapForExactTokens, MsgSwapForExactTokensResponse } from "./tx";
/** Msg defines the swap Msg service. */
export interface Msg {
    /** Deposit defines a method for depositing liquidity into a pool */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    /** Withdraw defines a method for withdrawing liquidity into a pool */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /** SwapExactForTokens represents a message for trading exact coinA for coinB */
    swapExactForTokens(request: MsgSwapExactForTokens): Promise<MsgSwapExactForTokensResponse>;
    /** SwapForExactTokens represents a message for trading coinA for an exact coinB */
    swapForExactTokens(request: MsgSwapForExactTokens): Promise<MsgSwapForExactTokensResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    swapExactForTokens(request: MsgSwapExactForTokens): Promise<MsgSwapExactForTokensResponse>;
    swapForExactTokens(request: MsgSwapForExactTokens): Promise<MsgSwapForExactTokensResponse>;
}
