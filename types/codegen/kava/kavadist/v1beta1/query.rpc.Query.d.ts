import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBalanceRequest, QueryBalanceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/kavadist module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Balance queries the balance of all coins of x/kavadist module. */
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
};
