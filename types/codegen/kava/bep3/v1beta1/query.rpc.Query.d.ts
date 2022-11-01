import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAssetSupplyRequest, QueryAssetSupplyResponse, QueryAssetSuppliesRequest, QueryAssetSuppliesResponse, QueryAtomicSwapRequest, QueryAtomicSwapResponse, QueryAtomicSwapsRequest, QueryAtomicSwapsResponse } from "./query";
/** Query defines the gRPC querier service for bep3 module */
export interface Query {
    /** Params queries module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** AssetSupply queries info about an asset's supply */
    assetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse>;
    /** AssetSupplies queries a list of asset supplies */
    assetSupplies(request?: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse>;
    /** AtomicSwap queries info about an atomic swap */
    atomicSwap(request: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponse>;
    /** AtomicSwaps queries a list of atomic swaps */
    atomicSwaps(request: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    assetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse>;
    assetSupplies(request?: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse>;
    atomicSwap(request: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponse>;
    atomicSwaps(request: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    assetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse>;
    assetSupplies(request?: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse>;
    atomicSwap(request: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponse>;
    atomicSwaps(request: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponse>;
};
