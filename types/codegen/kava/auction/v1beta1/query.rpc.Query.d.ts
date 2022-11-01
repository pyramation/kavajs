import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsRequest, QueryAuctionsResponse, QueryNextAuctionIDRequest, QueryNextAuctionIDResponse } from "./query";
/** Query defines the gRPC querier service for auction module */
export interface Query {
    /** Params queries all parameters of the auction module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Auction queries an individual Auction by auction ID */
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    /** Auctions queries auctions filtered by asset denom, owner address, phase, and auction type */
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    /** NextAuctionID queries the next auction ID */
    nextAuctionID(request?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    nextAuctionID(request?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
    auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
    nextAuctionID(request?: QueryNextAuctionIDRequest): Promise<QueryNextAuctionIDResponse>;
};
