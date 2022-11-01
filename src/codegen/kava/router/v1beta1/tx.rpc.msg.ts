import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.mintDeposit = this.mintDeposit.bind(this);
    this.delegateMintDeposit = this.delegateMintDeposit.bind(this);
    this.withdrawBurn = this.withdrawBurn.bind(this);
    this.withdrawBurnUndelegate = this.withdrawBurnUndelegate.bind(this);
  }

  mintDeposit(request: MsgMintDeposit): Promise<MsgMintDepositResponse> {
    const data = MsgMintDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.router.v1beta1.Msg", "MintDeposit", data);
    return promise.then(data => MsgMintDepositResponse.decode(new _m0.Reader(data)));
  }

  delegateMintDeposit(request: MsgDelegateMintDeposit): Promise<MsgDelegateMintDepositResponse> {
    const data = MsgDelegateMintDeposit.encode(request).finish();
    const promise = this.rpc.request("kava.router.v1beta1.Msg", "DelegateMintDeposit", data);
    return promise.then(data => MsgDelegateMintDepositResponse.decode(new _m0.Reader(data)));
  }

  withdrawBurn(request: MsgWithdrawBurn): Promise<MsgWithdrawBurnResponse> {
    const data = MsgWithdrawBurn.encode(request).finish();
    const promise = this.rpc.request("kava.router.v1beta1.Msg", "WithdrawBurn", data);
    return promise.then(data => MsgWithdrawBurnResponse.decode(new _m0.Reader(data)));
  }

  withdrawBurnUndelegate(request: MsgWithdrawBurnUndelegate): Promise<MsgWithdrawBurnUndelegateResponse> {
    const data = MsgWithdrawBurnUndelegate.encode(request).finish();
    const promise = this.rpc.request("kava.router.v1beta1.Msg", "WithdrawBurnUndelegate", data);
    return promise.then(data => MsgWithdrawBurnUndelegateResponse.decode(new _m0.Reader(data)));
  }

}