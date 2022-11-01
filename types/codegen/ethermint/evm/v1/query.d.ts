import { MsgEthereumTx, MsgEthereumTxSDKType } from "./tx";
import { TraceConfig, TraceConfigSDKType, Log, LogSDKType, Params, ParamsSDKType } from "./evm";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code hash is the hex-formatted code bytes from the EOA. */
    codeHash: string;
    /** nonce is the account's sequence number. */
    nonce: Long;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code hash is the hex-formatted code bytes from the EOA. */
    code_hash: string;
    /** nonce is the account's sequence number. */
    nonce: Long;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestSDKType {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
    /** cosmos_address is the cosmos address of the account. */
    cosmosAddress: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account numbert */
    accountNumber: Long;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseSDKType {
    /** cosmos_address is the cosmos address of the account. */
    cosmos_address: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account numbert */
    account_number: Long;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
    /** cons_address is the validator cons address to query the account for. */
    consAddress: string;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestSDKType {
    /** cons_address is the validator cons address to query the account for. */
    cons_address: string;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
    /** account_address is the cosmos address of the account in bech32 format. */
    accountAddress: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account number */
    accountNumber: Long;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseSDKType {
    /** account_address is the cosmos address of the account in bech32 format. */
    account_address: string;
    /** sequence is the account's sequence number. */
    sequence: Long;
    /** account_number is the account number */
    account_number: Long;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestSDKType {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
    /** key defines the storage state value hash associated with the given key. */
    value: string;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseSDKType {
    /** key defines the storage state value hash associated with the given key. */
    value: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestSDKType {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
    /** code represents the code bytes from an ethereum address. */
    code: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseSDKType {
    /** code represents the code bytes from an ethereum address. */
    code: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestSDKType {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: Log[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseSDKType {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: LogSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params?: Params;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseSDKType {
    /** params define the evm module parameters. */
    params?: ParamsSDKType;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
    /** same json format as the json rpc api. */
    args: Uint8Array;
    /** the default gas cap to be used */
    gasCap: Long;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestSDKType {
    /** same json format as the json rpc api. */
    args: Uint8Array;
    /** the default gas cap to be used */
    gas_cap: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
    /** the estimated gas */
    gas: Long;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseSDKType {
    /** the estimated gas */
    gas: Long;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
    /** msgEthereumTx for the requested transaction */
    msg?: MsgEthereumTx;
    /** TraceConfig holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /**
     * the predecessor transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTx[];
    /** block number of requested transaction */
    blockNumber: Long;
    /** block hex hash of requested transaction */
    blockHash: string;
    /** block time of requested transaction */
    blockTime?: Timestamp;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestSDKType {
    /** msgEthereumTx for the requested transaction */
    msg?: MsgEthereumTxSDKType;
    /** TraceConfig holds extra parameters to trace functions. */
    trace_config?: TraceConfigSDKType;
    /**
     * the predecessor transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTxSDKType[];
    /** block number of requested transaction */
    block_number: Long;
    /** block hex hash of requested transaction */
    block_hash: string;
    /** block time of requested transaction */
    block_time?: TimestampSDKType;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
    /** response serialized in bytes */
    data: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseSDKType {
    /** response serialized in bytes */
    data: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
    /** txs messages in the block */
    txs: MsgEthereumTx[];
    /** TraceConfig holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /** block number */
    blockNumber: Long;
    /** block hex hash */
    blockHash: string;
    /** block time */
    blockTime?: Timestamp;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestSDKType {
    /** txs messages in the block */
    txs: MsgEthereumTxSDKType[];
    /** TraceConfig holds extra parameters to trace functions. */
    trace_config?: TraceConfigSDKType;
    /** block number */
    block_number: Long;
    /** block hex hash */
    block_hash: string;
    /** block time */
    block_time?: TimestampSDKType;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
    data: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseSDKType {
    data: Uint8Array;
}
export declare const QueryAccountRequest: {
    encode(message: QueryAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest;
    fromJSON(object: any): QueryAccountRequest;
    toJSON(message: QueryAccountRequest): unknown;
    fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryCosmosAccountRequest: {
    encode(message: QueryCosmosAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountRequest;
    fromJSON(object: any): QueryCosmosAccountRequest;
    toJSON(message: QueryCosmosAccountRequest): unknown;
    fromPartial(object: Partial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest;
};
export declare const QueryCosmosAccountResponse: {
    encode(message: QueryCosmosAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountResponse;
    fromJSON(object: any): QueryCosmosAccountResponse;
    toJSON(message: QueryCosmosAccountResponse): unknown;
    fromPartial(object: Partial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse;
};
export declare const QueryValidatorAccountRequest: {
    encode(message: QueryValidatorAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountRequest;
    fromJSON(object: any): QueryValidatorAccountRequest;
    toJSON(message: QueryValidatorAccountRequest): unknown;
    fromPartial(object: Partial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest;
};
export declare const QueryValidatorAccountResponse: {
    encode(message: QueryValidatorAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountResponse;
    fromJSON(object: any): QueryValidatorAccountResponse;
    toJSON(message: QueryValidatorAccountResponse): unknown;
    fromPartial(object: Partial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse;
};
export declare const QueryBalanceRequest: {
    encode(message: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryStorageRequest: {
    encode(message: QueryStorageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageRequest;
    fromJSON(object: any): QueryStorageRequest;
    toJSON(message: QueryStorageRequest): unknown;
    fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest;
};
export declare const QueryStorageResponse: {
    encode(message: QueryStorageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageResponse;
    fromJSON(object: any): QueryStorageResponse;
    toJSON(message: QueryStorageResponse): unknown;
    fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
};
export declare const QueryTxLogsRequest: {
    encode(message: QueryTxLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsRequest;
    fromJSON(object: any): QueryTxLogsRequest;
    toJSON(message: QueryTxLogsRequest): unknown;
    fromPartial(object: Partial<QueryTxLogsRequest>): QueryTxLogsRequest;
};
export declare const QueryTxLogsResponse: {
    encode(message: QueryTxLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsResponse;
    fromJSON(object: any): QueryTxLogsResponse;
    toJSON(message: QueryTxLogsResponse): unknown;
    fromPartial(object: Partial<QueryTxLogsResponse>): QueryTxLogsResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const EthCallRequest: {
    encode(message: EthCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EthCallRequest;
    fromJSON(object: any): EthCallRequest;
    toJSON(message: EthCallRequest): unknown;
    fromPartial(object: Partial<EthCallRequest>): EthCallRequest;
};
export declare const EstimateGasResponse: {
    encode(message: EstimateGasResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EstimateGasResponse;
    fromJSON(object: any): EstimateGasResponse;
    toJSON(message: EstimateGasResponse): unknown;
    fromPartial(object: Partial<EstimateGasResponse>): EstimateGasResponse;
};
export declare const QueryTraceTxRequest: {
    encode(message: QueryTraceTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxRequest;
    fromJSON(object: any): QueryTraceTxRequest;
    toJSON(message: QueryTraceTxRequest): unknown;
    fromPartial(object: Partial<QueryTraceTxRequest>): QueryTraceTxRequest;
};
export declare const QueryTraceTxResponse: {
    encode(message: QueryTraceTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxResponse;
    fromJSON(object: any): QueryTraceTxResponse;
    toJSON(message: QueryTraceTxResponse): unknown;
    fromPartial(object: Partial<QueryTraceTxResponse>): QueryTraceTxResponse;
};
export declare const QueryTraceBlockRequest: {
    encode(message: QueryTraceBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockRequest;
    fromJSON(object: any): QueryTraceBlockRequest;
    toJSON(message: QueryTraceBlockRequest): unknown;
    fromPartial(object: Partial<QueryTraceBlockRequest>): QueryTraceBlockRequest;
};
export declare const QueryTraceBlockResponse: {
    encode(message: QueryTraceBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockResponse;
    fromJSON(object: any): QueryTraceBlockResponse;
    toJSON(message: QueryTraceBlockResponse): unknown;
    fromPartial(object: Partial<QueryTraceBlockResponse>): QueryTraceBlockResponse;
};
