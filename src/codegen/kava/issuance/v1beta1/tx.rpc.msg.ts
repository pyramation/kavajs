import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgIssueTokens, MsgIssueTokensResponse, MsgRedeemTokens, MsgRedeemTokensResponse, MsgBlockAddress, MsgBlockAddressResponse, MsgUnblockAddress, MsgUnblockAddressResponse, MsgSetPauseStatus, MsgSetPauseStatusResponse } from "./tx";
/** Msg defines the issuance Msg service. */

export interface Msg {
  /** IssueTokens message type used by the issuer to issue new tokens */
  issueTokens(request: MsgIssueTokens): Promise<MsgIssueTokensResponse>;
  /** RedeemTokens message type used by the issuer to redeem (burn) tokens */

  redeemTokens(request: MsgRedeemTokens): Promise<MsgRedeemTokensResponse>;
  /** BlockAddress message type used by the issuer to block an address from holding or transferring tokens */

  blockAddress(request: MsgBlockAddress): Promise<MsgBlockAddressResponse>;
  /** UnblockAddress message type used by the issuer to unblock an address from holding or transferring tokens */

  unblockAddress(request: MsgUnblockAddress): Promise<MsgUnblockAddressResponse>;
  /** SetPauseStatus message type used to pause or unpause status */

  setPauseStatus(request: MsgSetPauseStatus): Promise<MsgSetPauseStatusResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueTokens = this.issueTokens.bind(this);
    this.redeemTokens = this.redeemTokens.bind(this);
    this.blockAddress = this.blockAddress.bind(this);
    this.unblockAddress = this.unblockAddress.bind(this);
    this.setPauseStatus = this.setPauseStatus.bind(this);
  }

  issueTokens(request: MsgIssueTokens): Promise<MsgIssueTokensResponse> {
    const data = MsgIssueTokens.encode(request).finish();
    const promise = this.rpc.request("kava.issuance.v1beta1.Msg", "IssueTokens", data);
    return promise.then(data => MsgIssueTokensResponse.decode(new _m0.Reader(data)));
  }

  redeemTokens(request: MsgRedeemTokens): Promise<MsgRedeemTokensResponse> {
    const data = MsgRedeemTokens.encode(request).finish();
    const promise = this.rpc.request("kava.issuance.v1beta1.Msg", "RedeemTokens", data);
    return promise.then(data => MsgRedeemTokensResponse.decode(new _m0.Reader(data)));
  }

  blockAddress(request: MsgBlockAddress): Promise<MsgBlockAddressResponse> {
    const data = MsgBlockAddress.encode(request).finish();
    const promise = this.rpc.request("kava.issuance.v1beta1.Msg", "BlockAddress", data);
    return promise.then(data => MsgBlockAddressResponse.decode(new _m0.Reader(data)));
  }

  unblockAddress(request: MsgUnblockAddress): Promise<MsgUnblockAddressResponse> {
    const data = MsgUnblockAddress.encode(request).finish();
    const promise = this.rpc.request("kava.issuance.v1beta1.Msg", "UnblockAddress", data);
    return promise.then(data => MsgUnblockAddressResponse.decode(new _m0.Reader(data)));
  }

  setPauseStatus(request: MsgSetPauseStatus): Promise<MsgSetPauseStatusResponse> {
    const data = MsgSetPauseStatus.encode(request).finish();
    const promise = this.rpc.request("kava.issuance.v1beta1.Msg", "SetPauseStatus", data);
    return promise.then(data => MsgSetPauseStatusResponse.decode(new _m0.Reader(data)));
  }

}