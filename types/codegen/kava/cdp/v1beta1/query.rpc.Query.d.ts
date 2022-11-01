import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAccountsRequest, QueryAccountsResponse, QueryTotalPrincipalRequest, QueryTotalPrincipalResponse, QueryTotalCollateralRequest, QueryTotalCollateralResponse, QueryCdpsRequest, QueryCdpsResponse, QueryCdpRequest, QueryCdpResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for cdp module */
export interface Query {
    /** Params queries all parameters of the cdp module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Accounts queries the CDP module accounts. */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** TotalPrincipal queries the total principal of a given collateral type. */
    totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse>;
    /** TotalCollateral queries the total collateral of a given collateral type. */
    totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
    /** Cdps queries all active CDPs. */
    cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse>;
    /** Cdp queries a CDP with the input owner address and collateral type. */
    cdp(request: QueryCdpRequest): Promise<QueryCdpResponse>;
    /** Deposits queries deposits associated with the CDP owned by an address for a collateral type. */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse>;
    totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
    cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse>;
    cdp(request: QueryCdpRequest): Promise<QueryCdpResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse>;
    totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
    cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse>;
    cdp(request: QueryCdpRequest): Promise<QueryCdpResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
};
