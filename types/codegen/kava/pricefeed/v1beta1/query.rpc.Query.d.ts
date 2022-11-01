import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPriceRequest, QueryPriceResponse, QueryPricesRequest, QueryPricesResponse, QueryRawPricesRequest, QueryRawPricesResponse, QueryOraclesRequest, QueryOraclesResponse, QueryMarketsRequest, QueryMarketsResponse } from "./query";
/** Query defines the gRPC querier service for pricefeed module */
export interface Query {
    /** Params queries all parameters of the pricefeed module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Price queries price details based on a market */
    price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
    /** Prices queries all prices */
    prices(request?: QueryPricesRequest): Promise<QueryPricesResponse>;
    /** RawPrices queries all raw prices based on a market */
    rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse>;
    /** Oracles queries all oracles based on a market */
    oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
    /** Markets queries all markets */
    markets(request?: QueryMarketsRequest): Promise<QueryMarketsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
    prices(request?: QueryPricesRequest): Promise<QueryPricesResponse>;
    rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse>;
    oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
    markets(request?: QueryMarketsRequest): Promise<QueryMarketsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
    prices(request?: QueryPricesRequest): Promise<QueryPricesResponse>;
    rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse>;
    oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
    markets(request?: QueryMarketsRequest): Promise<QueryMarketsResponse>;
};
