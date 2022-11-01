import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBid {
    auctionId: Long;
    bidder: string;
    amount?: Coin;
}
/** MsgPlaceBid represents a message used by bidders to place bids on auctions */
export interface MsgPlaceBidSDKType {
    auction_id: Long;
    bidder: string;
    amount?: CoinSDKType;
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponse {
}
/** MsgPlaceBidResponse defines the Msg/PlaceBid response type. */
export interface MsgPlaceBidResponseSDKType {
}
export declare const MsgPlaceBid: {
    encode(message: MsgPlaceBid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid;
    fromJSON(object: any): MsgPlaceBid;
    toJSON(message: MsgPlaceBid): unknown;
    fromPartial(object: Partial<MsgPlaceBid>): MsgPlaceBid;
};
export declare const MsgPlaceBidResponse: {
    encode(_: MsgPlaceBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse;
    fromJSON(_: any): MsgPlaceBidResponse;
    toJSON(_: MsgPlaceBidResponse): unknown;
    fromPartial(_: Partial<MsgPlaceBidResponse>): MsgPlaceBidResponse;
};
