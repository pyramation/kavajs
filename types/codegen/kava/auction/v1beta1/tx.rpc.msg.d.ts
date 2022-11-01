import { Rpc } from "../../../helpers";
import { MsgPlaceBid, MsgPlaceBidResponse } from "./tx";
/** Msg defines the auction Msg service. */
export interface Msg {
    /** PlaceBid message type used by bidders to place bids on auctions */
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
}
