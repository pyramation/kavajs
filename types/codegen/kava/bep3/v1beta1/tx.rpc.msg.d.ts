import { Rpc } from "../../../helpers";
import { MsgCreateAtomicSwap, MsgCreateAtomicSwapResponse, MsgClaimAtomicSwap, MsgClaimAtomicSwapResponse, MsgRefundAtomicSwap, MsgRefundAtomicSwapResponse } from "./tx";
/** Msg defines the bep3 Msg service. */
export interface Msg {
    /** CreateAtomicSwap defines a method for creating an atomic swap */
    createAtomicSwap(request: MsgCreateAtomicSwap): Promise<MsgCreateAtomicSwapResponse>;
    /** ClaimAtomicSwap defines a method for claiming an atomic swap */
    claimAtomicSwap(request: MsgClaimAtomicSwap): Promise<MsgClaimAtomicSwapResponse>;
    /** RefundAtomicSwap defines a method for refunding an atomic swap */
    refundAtomicSwap(request: MsgRefundAtomicSwap): Promise<MsgRefundAtomicSwapResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createAtomicSwap(request: MsgCreateAtomicSwap): Promise<MsgCreateAtomicSwapResponse>;
    claimAtomicSwap(request: MsgClaimAtomicSwap): Promise<MsgClaimAtomicSwapResponse>;
    refundAtomicSwap(request: MsgRefundAtomicSwap): Promise<MsgRefundAtomicSwapResponse>;
}
