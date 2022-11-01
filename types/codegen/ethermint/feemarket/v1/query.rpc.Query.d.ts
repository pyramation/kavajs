import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params queries the parameters of x/feemarket module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** BaseFee queries the base fee of the parent block of the current block. */
    baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    /** BlockGas queries the gas used at a given block height */
    blockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    blockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
    blockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
};
