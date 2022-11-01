import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryVaultsRequest, QueryVaultsResponse, QueryVaultRequest, QueryVaultResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for earn module */
export interface Query {
    /** Params queries all parameters of the earn module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Vaults queries all vaults */
    vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse>;
    /** Vault queries a single vault based on the vault denom */
    vault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    /** Deposits queries deposit details based on depositor address and vault */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse>;
    vault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    vaults(request?: QueryVaultsRequest): Promise<QueryVaultsResponse>;
    vault(request: QueryVaultRequest): Promise<QueryVaultResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
};
