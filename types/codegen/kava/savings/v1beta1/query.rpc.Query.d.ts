import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for savings module */
export interface Query {
    /** Params queries all parameters of the savings module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Deposits queries savings deposits. */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
};
