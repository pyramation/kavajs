import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    issueTokens(request: MsgIssueTokens): Promise<MsgIssueTokensResponse>;
    redeemTokens(request: MsgRedeemTokens): Promise<MsgRedeemTokensResponse>;
    blockAddress(request: MsgBlockAddress): Promise<MsgBlockAddressResponse>;
    unblockAddress(request: MsgUnblockAddress): Promise<MsgUnblockAddressResponse>;
    setPauseStatus(request: MsgSetPauseStatus): Promise<MsgSetPauseStatusResponse>;
}
