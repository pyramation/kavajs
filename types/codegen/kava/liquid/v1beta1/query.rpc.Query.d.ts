import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryDelegatedBalanceRequest, QueryDelegatedBalanceResponse } from "./query";
/** Query defines the gRPC querier service for liquid module */
export interface Query {
    /**
     * DelegatedBalance returns an account's vesting and vested coins currently delegated to validators.
     * It ignores coins in unbonding delegations.
     */
    delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse>;
};
