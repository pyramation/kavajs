import { Rpc } from "../../../helpers";
import { MsgMintDeposit, MsgMintDepositResponse, MsgDelegateMintDeposit, MsgDelegateMintDepositResponse, MsgWithdrawBurn, MsgWithdrawBurnResponse, MsgWithdrawBurnUndelegate, MsgWithdrawBurnUndelegateResponse } from "./tx";
/** Msg defines the router Msg service. */
export interface Msg {
    /** MintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
    mintDeposit(request: MsgMintDeposit): Promise<MsgMintDepositResponse>;
    /**
     * DelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
     * then deposits to an earn vault.
     */
    delegateMintDeposit(request: MsgDelegateMintDeposit): Promise<MsgDelegateMintDepositResponse>;
    /** WithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
    withdrawBurn(request: MsgWithdrawBurn): Promise<MsgWithdrawBurnResponse>;
    /**
     * WithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
     * then undelegates them from their validator.
     */
    withdrawBurnUndelegate(request: MsgWithdrawBurnUndelegate): Promise<MsgWithdrawBurnUndelegateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    mintDeposit(request: MsgMintDeposit): Promise<MsgMintDepositResponse>;
    delegateMintDeposit(request: MsgDelegateMintDeposit): Promise<MsgDelegateMintDepositResponse>;
    withdrawBurn(request: MsgWithdrawBurn): Promise<MsgWithdrawBurnResponse>;
    withdrawBurnUndelegate(request: MsgWithdrawBurnUndelegate): Promise<MsgWithdrawBurnUndelegateResponse>;
}
