import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
    /**
     * evm denom represents the token denomination used to run the EVM state
     * transitions.
     */
    evmDenom: string;
    /** enable create toggles state transitions that use the vm.Create function */
    enableCreate: boolean;
    /** enable call toggles state transitions that use the vm.Call function */
    enableCall: boolean;
    /** extra eips defines the additional EIPs for the vm.Config */
    extraEips: Long[];
    /** chain config defines the EVM chain configuration parameters */
    chainConfig?: ChainConfig;
    /** list of allowed eip712 msgs and their types */
    eip712AllowedMsgs: EIP712AllowedMsg[];
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
    /**
     * evm denom represents the token denomination used to run the EVM state
     * transitions.
     */
    evm_denom: string;
    /** enable create toggles state transitions that use the vm.Create function */
    enable_create: boolean;
    /** enable call toggles state transitions that use the vm.Call function */
    enable_call: boolean;
    /** extra eips defines the additional EIPs for the vm.Config */
    extra_eips: Long[];
    /** chain config defines the EVM chain configuration parameters */
    chain_config?: ChainConfigSDKType;
    /** list of allowed eip712 msgs and their types */
    eip712_allowed_msgs: EIP712AllowedMsgSDKType[];
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
    /** Homestead switch block (nil no fork, 0 = already homestead) */
    homesteadBlock: string;
    /** TheDAO hard-fork switch block (nil no fork) */
    daoForkBlock: string;
    /** Whether the nodes supports or opposes the DAO hard-fork */
    daoForkSupport: boolean;
    /**
     * EIP150 implements the Gas price changes
     * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
     */
    eip150Block: string;
    /** EIP150 HF hash (needed for header only clients as only gas pricing changed) */
    eip150Hash: string;
    /** EIP155Block HF block */
    eip155Block: string;
    /** EIP158 HF block */
    eip158Block: string;
    /** Byzantium switch block (nil no fork, 0 = already on byzantium) */
    byzantiumBlock: string;
    /** Constantinople switch block (nil no fork, 0 = already activated) */
    constantinopleBlock: string;
    /** Petersburg switch block (nil same as Constantinople) */
    petersburgBlock: string;
    /** Istanbul switch block (nil no fork, 0 = already on istanbul) */
    istanbulBlock: string;
    /** Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
    muirGlacierBlock: string;
    /** Berlin switch block (nil = no fork, 0 = already on berlin) */
    berlinBlock: string;
    /** London switch block (nil = no fork, 0 = already on london) */
    londonBlock: string;
    /** Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
    arrowGlacierBlock: string;
    /** EIP-3675 (TheMerge) switch block (nil = no fork, 0 = already in merge proceedings) */
    mergeForkBlock: string;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigSDKType {
    /** Homestead switch block (nil no fork, 0 = already homestead) */
    homestead_block: string;
    /** TheDAO hard-fork switch block (nil no fork) */
    dao_fork_block: string;
    /** Whether the nodes supports or opposes the DAO hard-fork */
    dao_fork_support: boolean;
    /**
     * EIP150 implements the Gas price changes
     * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
     */
    eip150_block: string;
    /** EIP150 HF hash (needed for header only clients as only gas pricing changed) */
    eip150_hash: string;
    /** EIP155Block HF block */
    eip155_block: string;
    /** EIP158 HF block */
    eip158_block: string;
    /** Byzantium switch block (nil no fork, 0 = already on byzantium) */
    byzantium_block: string;
    /** Constantinople switch block (nil no fork, 0 = already activated) */
    constantinople_block: string;
    /** Petersburg switch block (nil same as Constantinople) */
    petersburg_block: string;
    /** Istanbul switch block (nil no fork, 0 = already on istanbul) */
    istanbul_block: string;
    /** Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
    muir_glacier_block: string;
    /** Berlin switch block (nil = no fork, 0 = already on berlin) */
    berlin_block: string;
    /** London switch block (nil = no fork, 0 = already on london) */
    london_block: string;
    /** Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
    arrow_glacier_block: string;
    /** EIP-3675 (TheMerge) switch block (nil = no fork, 0 = already in merge proceedings) */
    merge_fork_block: string;
}
/** State represents a single Storage key value pair item. */
export interface State {
    key: string;
    value: string;
}
/** State represents a single Storage key value pair item. */
export interface StateSDKType {
    key: string;
    value: string;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
    hash: string;
    logs: Log[];
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsSDKType {
    hash: string;
    logs: LogSDKType[];
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 */
export interface Log {
    /** address of the contract that generated the event */
    address: string;
    /** list of topics provided by the contract. */
    topics: string[];
    /** supplied by the contract, usually ABI-encoded */
    data: Uint8Array;
    /** block in which the transaction was included */
    blockNumber: Long;
    /** hash of the transaction */
    txHash: string;
    /** index of the transaction in the block */
    txIndex: Long;
    /** hash of the block in which the transaction was included */
    blockHash: string;
    /** index of the log in the block */
    index: Long;
    /**
     * The Removed field is true if this log was reverted due to a chain
     * reorganisation. You must pay attention to this field if you receive logs
     * through a filter query.
     */
    removed: boolean;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 */
export interface LogSDKType {
    /** address of the contract that generated the event */
    address: string;
    /** list of topics provided by the contract. */
    topics: string[];
    /** supplied by the contract, usually ABI-encoded */
    data: Uint8Array;
    /** block in which the transaction was included */
    block_number: Long;
    /** hash of the transaction */
    tx_hash: string;
    /** index of the transaction in the block */
    tx_index: Long;
    /** hash of the block in which the transaction was included */
    block_hash: string;
    /** index of the log in the block */
    index: Long;
    /**
     * The Removed field is true if this log was reverted due to a chain
     * reorganisation. You must pay attention to this field if you receive logs
     * through a filter query.
     */
    removed: boolean;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
    /**
     * contract_address contains the ethereum address of the created contract (if
     * any). If the state transition is an evm.Call, the contract address will be
     * empty.
     */
    contractAddress: string;
    /** bloom represents the bloom filter bytes */
    bloom: Uint8Array;
    /**
     * tx_logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    txLogs?: TransactionLogs;
    /** ret defines the bytes from the execution. */
    ret: Uint8Array;
    /** reverted flag is set to true when the call has been reverted */
    reverted: boolean;
    /** gas_used notes the amount of gas consumed while execution */
    gasUsed: Long;
}
/** TxResult stores results of Tx execution. */
export interface TxResultSDKType {
    /**
     * contract_address contains the ethereum address of the created contract (if
     * any). If the state transition is an evm.Call, the contract address will be
     * empty.
     */
    contract_address: string;
    /** bloom represents the bloom filter bytes */
    bloom: Uint8Array;
    /**
     * tx_logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    tx_logs?: TransactionLogsSDKType;
    /** ret defines the bytes from the execution. */
    ret: Uint8Array;
    /** reverted flag is set to true when the call has been reverted */
    reverted: boolean;
    /** gas_used notes the amount of gas consumed while execution */
    gas_used: Long;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
    /** hex formatted ethereum address */
    address: string;
    /** hex formatted hashes of the storage keys */
    storageKeys: string[];
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleSDKType {
    /** hex formatted ethereum address */
    address: string;
    /** hex formatted hashes of the storage keys */
    storage_keys: string[];
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
    /** custom javascript tracer */
    tracer: string;
    /**
     * overrides the default timeout of 5 seconds for JavaScript-based tracing
     * calls
     */
    timeout: string;
    /** number of blocks the tracer is willing to go back */
    reexec: Long;
    /** disable stack capture */
    disableStack: boolean;
    /** disable storage capture */
    disableStorage: boolean;
    /** print output during capture end */
    debug: boolean;
    /** maximum length of output, but zero means unlimited */
    limit: number;
    /** Chain overrides, can be used to execute a trace using future fork rules */
    overrides?: ChainConfig;
    /** enable memory capture */
    enableMemory: boolean;
    /** enable return data capture */
    enableReturnData: boolean;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigSDKType {
    /** custom javascript tracer */
    tracer: string;
    /**
     * overrides the default timeout of 5 seconds for JavaScript-based tracing
     * calls
     */
    timeout: string;
    /** number of blocks the tracer is willing to go back */
    reexec: Long;
    /** disable stack capture */
    disable_stack: boolean;
    /** disable storage capture */
    disable_storage: boolean;
    /** print output during capture end */
    debug: boolean;
    /** maximum length of output, but zero means unlimited */
    limit: number;
    /** Chain overrides, can be used to execute a trace using future fork rules */
    overrides?: ChainConfigSDKType;
    /** enable memory capture */
    enable_memory: boolean;
    /** enable return data capture */
    enable_return_data: boolean;
}
/** EIP712AllowedMsg stores an allowed legacy msg and its eip712 type. */
export interface EIP712AllowedMsg {
    /** msg's proto type name. ie "/cosmos.bank.v1beta1.MsgSend" */
    msgTypeUrl: string;
    /** name of the eip712 value type. ie "MsgValueSend" */
    msgValueTypeName: string;
    /** types of the msg value */
    valueTypes: EIP712MsgAttrType[];
    /** nested types of the msg value */
    nestedTypes: EIP712NestedMsgType[];
}
/** EIP712AllowedMsg stores an allowed legacy msg and its eip712 type. */
export interface EIP712AllowedMsgSDKType {
    /** msg's proto type name. ie "/cosmos.bank.v1beta1.MsgSend" */
    msg_type_url: string;
    /** name of the eip712 value type. ie "MsgValueSend" */
    msg_value_type_name: string;
    /** types of the msg value */
    value_types: EIP712MsgAttrTypeSDKType[];
    /** nested types of the msg value */
    nested_types: EIP712NestedMsgTypeSDKType[];
}
/** EIP712MsgType is the eip712 type of a single message. */
export interface EIP712NestedMsgType {
    /** name of the nested type. ie "Fee", "Coin" */
    name: string;
    /** attrs of the nested type */
    attrs: EIP712MsgAttrType[];
}
/** EIP712MsgType is the eip712 type of a single message. */
export interface EIP712NestedMsgTypeSDKType {
    /** name of the nested type. ie "Fee", "Coin" */
    name: string;
    /** attrs of the nested type */
    attrs: EIP712MsgAttrTypeSDKType[];
}
/** EIP712MsgAttrType is the eip712 type of a single message attribute. */
export interface EIP712MsgAttrType {
    name: string;
    type: string;
}
/** EIP712MsgAttrType is the eip712 type of a single message attribute. */
export interface EIP712MsgAttrTypeSDKType {
    name: string;
    type: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const ChainConfig: {
    encode(message: ChainConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainConfig;
    fromJSON(object: any): ChainConfig;
    toJSON(message: ChainConfig): unknown;
    fromPartial(object: Partial<ChainConfig>): ChainConfig;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial(object: Partial<State>): State;
};
export declare const TransactionLogs: {
    encode(message: TransactionLogs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionLogs;
    fromJSON(object: any): TransactionLogs;
    toJSON(message: TransactionLogs): unknown;
    fromPartial(object: Partial<TransactionLogs>): TransactionLogs;
};
export declare const Log: {
    encode(message: Log, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Log;
    fromJSON(object: any): Log;
    toJSON(message: Log): unknown;
    fromPartial(object: Partial<Log>): Log;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial(object: Partial<TxResult>): TxResult;
};
export declare const AccessTuple: {
    encode(message: AccessTuple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTuple;
    fromJSON(object: any): AccessTuple;
    toJSON(message: AccessTuple): unknown;
    fromPartial(object: Partial<AccessTuple>): AccessTuple;
};
export declare const TraceConfig: {
    encode(message: TraceConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TraceConfig;
    fromJSON(object: any): TraceConfig;
    toJSON(message: TraceConfig): unknown;
    fromPartial(object: Partial<TraceConfig>): TraceConfig;
};
export declare const EIP712AllowedMsg: {
    encode(message: EIP712AllowedMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EIP712AllowedMsg;
    fromJSON(object: any): EIP712AllowedMsg;
    toJSON(message: EIP712AllowedMsg): unknown;
    fromPartial(object: Partial<EIP712AllowedMsg>): EIP712AllowedMsg;
};
export declare const EIP712NestedMsgType: {
    encode(message: EIP712NestedMsgType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EIP712NestedMsgType;
    fromJSON(object: any): EIP712NestedMsgType;
    toJSON(message: EIP712NestedMsgType): unknown;
    fromPartial(object: Partial<EIP712NestedMsgType>): EIP712NestedMsgType;
};
export declare const EIP712MsgAttrType: {
    encode(message: EIP712MsgAttrType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EIP712MsgAttrType;
    fromJSON(object: any): EIP712MsgAttrType;
    toJSON(message: EIP712MsgAttrType): unknown;
    fromPartial(object: Partial<EIP712MsgAttrType>): EIP712MsgAttrType;
};
