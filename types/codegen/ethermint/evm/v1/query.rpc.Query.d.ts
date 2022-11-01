import { MsgEthereumTxResponse } from "./tx";
import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Account queries an Ethereum account. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** CosmosAccount queries an Ethereum account's Cosmos Address. */
    cosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
    /**
     * ValidatorAccount queries an Ethereum account's from a validator consensus
     * Address.
     */
    validatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
    /**
     * Balance queries the balance of a the EVM denomination for a single
     * EthAccount.
     */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Storage queries the balance of all coins for a single account. */
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    /** Code queries the balance of all coins for a single account. */
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** Params queries the parameters of x/evm module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EthCall implements the `eth_call` rpc api */
    ethCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
    /** EstimateGas implements the `eth_estimateGas` rpc api */
    estimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
    /** TraceTx implements the `debug_traceTransaction` rpc api */
    traceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
    /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
    traceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    cosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
    validatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    ethCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
    estimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
    traceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
    traceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    cosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
    validatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    ethCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
    estimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
    traceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
    traceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
};
