import { Rpc } from "../../../helpers";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse } from "./tx";
/** Msg defines the earn Msg service. */
export interface Msg {
    /** Deposit defines a method for depositing assets into a vault */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    /** Withdraw defines a method for withdrawing assets into a vault */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}
