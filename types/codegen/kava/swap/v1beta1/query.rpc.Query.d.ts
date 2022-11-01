import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for swap module */
export interface Query {
    /** Params queries all parameters of the swap module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Pools queries pools based on pool ID */
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** Deposits queries deposit details based on owner address and pool */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
};
