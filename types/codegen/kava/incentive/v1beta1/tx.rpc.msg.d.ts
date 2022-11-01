import { Rpc } from "../../../helpers";
import { MsgClaimUSDXMintingReward, MsgClaimUSDXMintingRewardResponse, MsgClaimHardReward, MsgClaimHardRewardResponse, MsgClaimDelegatorReward, MsgClaimDelegatorRewardResponse, MsgClaimSwapReward, MsgClaimSwapRewardResponse, MsgClaimSavingsReward, MsgClaimSavingsRewardResponse, MsgClaimEarnReward, MsgClaimEarnRewardResponse } from "./tx";
/** Msg defines the incentive Msg service. */
export interface Msg {
    /** ClaimUSDXMintingReward is a message type used to claim USDX minting rewards */
    claimUSDXMintingReward(request: MsgClaimUSDXMintingReward): Promise<MsgClaimUSDXMintingRewardResponse>;
    /** ClaimHardReward is a message type used to claim Hard liquidity provider rewards */
    claimHardReward(request: MsgClaimHardReward): Promise<MsgClaimHardRewardResponse>;
    /** ClaimDelegatorReward is a message type used to claim delegator rewards */
    claimDelegatorReward(request: MsgClaimDelegatorReward): Promise<MsgClaimDelegatorRewardResponse>;
    /** ClaimSwapReward is a message type used to claim swap rewards */
    claimSwapReward(request: MsgClaimSwapReward): Promise<MsgClaimSwapRewardResponse>;
    /** ClaimSavingsReward is a message type used to claim savings rewards */
    claimSavingsReward(request: MsgClaimSavingsReward): Promise<MsgClaimSavingsRewardResponse>;
    /** ClaimEarnReward is a message type used to claim earn rewards */
    claimEarnReward(request: MsgClaimEarnReward): Promise<MsgClaimEarnRewardResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimUSDXMintingReward(request: MsgClaimUSDXMintingReward): Promise<MsgClaimUSDXMintingRewardResponse>;
    claimHardReward(request: MsgClaimHardReward): Promise<MsgClaimHardRewardResponse>;
    claimDelegatorReward(request: MsgClaimDelegatorReward): Promise<MsgClaimDelegatorRewardResponse>;
    claimSwapReward(request: MsgClaimSwapReward): Promise<MsgClaimSwapRewardResponse>;
    claimSavingsReward(request: MsgClaimSavingsReward): Promise<MsgClaimSavingsRewardResponse>;
    claimEarnReward(request: MsgClaimEarnReward): Promise<MsgClaimEarnRewardResponse>;
}
