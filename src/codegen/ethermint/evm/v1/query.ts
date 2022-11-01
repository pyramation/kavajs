import { MsgEthereumTx, MsgEthereumTxSDKType } from "./tx";
import { TraceConfig, TraceConfigSDKType, Log, LogSDKType, Params, ParamsSDKType } from "./evm";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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

export interface QueryParamsRequest {}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */

export interface QueryParamsRequestSDKType {}
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

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}

export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    balance: "",
    codeHash: "",
    nonce: Long.UZERO
  };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }

    if (message.codeHash !== "") {
      writer.uint32(18).string(message.codeHash);
    }

    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;

        case 2:
          message.codeHash = reader.string();
          break;

        case 3:
          message.nonce = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : "",
      codeHash: isSet(object.codeHash) ? String(object.codeHash) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.balance = object.balance ?? "";
    message.codeHash = object.codeHash ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }

};

function createBaseQueryCosmosAccountRequest(): QueryCosmosAccountRequest {
  return {
    address: ""
  };
}

export const QueryCosmosAccountRequest = {
  encode(message: QueryCosmosAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCosmosAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryCosmosAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest {
    const message = createBaseQueryCosmosAccountRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryCosmosAccountResponse(): QueryCosmosAccountResponse {
  return {
    cosmosAddress: "",
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}

export const QueryCosmosAccountResponse = {
  encode(message: QueryCosmosAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cosmosAddress !== "") {
      writer.uint32(10).string(message.cosmosAddress);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCosmosAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCosmosAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cosmosAddress = reader.string();
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.accountNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCosmosAccountResponse {
    return {
      cosmosAddress: isSet(object.cosmosAddress) ? String(object.cosmosAddress) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },

  toJSON(message: QueryCosmosAccountResponse): unknown {
    const obj: any = {};
    message.cosmosAddress !== undefined && (obj.cosmosAddress = message.cosmosAddress);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse {
    const message = createBaseQueryCosmosAccountResponse();
    message.cosmosAddress = object.cosmosAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }

};

function createBaseQueryValidatorAccountRequest(): QueryValidatorAccountRequest {
  return {
    consAddress: ""
  };
}

export const QueryValidatorAccountRequest = {
  encode(message: QueryValidatorAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorAccountRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },

  toJSON(message: QueryValidatorAccountRequest): unknown {
    const obj: any = {};
    message.consAddress !== undefined && (obj.consAddress = message.consAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest {
    const message = createBaseQueryValidatorAccountRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  }

};

function createBaseQueryValidatorAccountResponse(): QueryValidatorAccountResponse {
  return {
    accountAddress: "",
    sequence: Long.UZERO,
    accountNumber: Long.UZERO
  };
}

export const QueryValidatorAccountResponse = {
  encode(message: QueryValidatorAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }

    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;

        case 2:
          message.sequence = (reader.uint64() as Long);
          break;

        case 3:
          message.accountNumber = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryValidatorAccountResponse {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO
    };
  },

  toJSON(message: QueryValidatorAccountResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse {
    const message = createBaseQueryValidatorAccountResponse();
    message.accountAddress = object.accountAddress ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    return message;
  }

};

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: ""
  };
}

export const QueryBalanceRequest = {
  encode(message: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: ""
  };
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : ""
    };
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance ?? "";
    return message;
  }

};

function createBaseQueryStorageRequest(): QueryStorageRequest {
  return {
    address: "",
    key: ""
  };
}

export const QueryStorageRequest = {
  encode(message: QueryStorageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.key = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      key: isSet(object.key) ? String(object.key) : ""
    };
  },

  toJSON(message: QueryStorageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: Partial<QueryStorageRequest>): QueryStorageRequest {
    const message = createBaseQueryStorageRequest();
    message.address = object.address ?? "";
    message.key = object.key ?? "";
    return message;
  }

};

function createBaseQueryStorageResponse(): QueryStorageResponse {
  return {
    value: ""
  };
}

export const QueryStorageResponse = {
  encode(message: QueryStorageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStorageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryStorageResponse {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: QueryStorageResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<QueryStorageResponse>): QueryStorageResponse {
    const message = createBaseQueryStorageResponse();
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    address: ""
  };
}

export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    code: new Uint8Array()
  };
}

export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeResponse {
    return {
      code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array()
    };
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.code = object.code ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryTxLogsRequest(): QueryTxLogsRequest {
  return {
    hash: "",
    pagination: undefined
  };
}

export const QueryTxLogsRequest = {
  encode(message: QueryTxLogsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTxLogsRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryTxLogsRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = createBaseQueryTxLogsRequest();
    message.hash = object.hash ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryTxLogsResponse(): QueryTxLogsResponse {
  return {
    logs: [],
    pagination: undefined
  };
}

export const QueryTxLogsResponse = {
  encode(message: QueryTxLogsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxLogsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTxLogsResponse {
    return {
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryTxLogsResponse): unknown {
    const obj: any = {};

    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = createBaseQueryTxLogsResponse();
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseEthCallRequest(): EthCallRequest {
  return {
    args: new Uint8Array(),
    gasCap: Long.UZERO
  };
}

export const EthCallRequest = {
  encode(message: EthCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.args.length !== 0) {
      writer.uint32(10).bytes(message.args);
    }

    if (!message.gasCap.isZero()) {
      writer.uint32(16).uint64(message.gasCap);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthCallRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.args = reader.bytes();
          break;

        case 2:
          message.gasCap = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EthCallRequest {
    return {
      args: isSet(object.args) ? bytesFromBase64(object.args) : new Uint8Array(),
      gasCap: isSet(object.gasCap) ? Long.fromValue(object.gasCap) : Long.UZERO
    };
  },

  toJSON(message: EthCallRequest): unknown {
    const obj: any = {};
    message.args !== undefined && (obj.args = base64FromBytes(message.args !== undefined ? message.args : new Uint8Array()));
    message.gasCap !== undefined && (obj.gasCap = (message.gasCap || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EthCallRequest>): EthCallRequest {
    const message = createBaseEthCallRequest();
    message.args = object.args ?? new Uint8Array();
    message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? Long.fromValue(object.gasCap) : Long.UZERO;
    return message;
  }

};

function createBaseEstimateGasResponse(): EstimateGasResponse {
  return {
    gas: Long.UZERO
  };
}

export const EstimateGasResponse = {
  encode(message: EstimateGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gas.isZero()) {
      writer.uint32(8).uint64(message.gas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateGasResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EstimateGasResponse {
    return {
      gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.UZERO
    };
  },

  toJSON(message: EstimateGasResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = (message.gas || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<EstimateGasResponse>): EstimateGasResponse {
    const message = createBaseEstimateGasResponse();
    message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTraceTxRequest(): QueryTraceTxRequest {
  return {
    msg: undefined,
    traceConfig: undefined,
    predecessors: [],
    blockNumber: Long.ZERO,
    blockHash: "",
    blockTime: undefined
  };
}

export const QueryTraceTxRequest = {
  encode(message: QueryTraceTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }

    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.predecessors) {
      MsgEthereumTx.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }

    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }

    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.msg = MsgEthereumTx.decode(reader, reader.uint32());
          break;

        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;

        case 4:
          message.predecessors.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;

        case 5:
          message.blockNumber = (reader.int64() as Long);
          break;

        case 6:
          message.blockHash = reader.string();
          break;

        case 7:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTraceTxRequest {
    return {
      msg: isSet(object.msg) ? MsgEthereumTx.fromJSON(object.msg) : undefined,
      traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
      predecessors: Array.isArray(object?.predecessors) ? object.predecessors.map((e: any) => MsgEthereumTx.fromJSON(e)) : [],
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },

  toJSON(message: QueryTraceTxRequest): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? MsgEthereumTx.toJSON(message.msg) : undefined);
    message.traceConfig !== undefined && (obj.traceConfig = message.traceConfig ? TraceConfig.toJSON(message.traceConfig) : undefined);

    if (message.predecessors) {
      obj.predecessors = message.predecessors.map(e => e ? MsgEthereumTx.toJSON(e) : undefined);
    } else {
      obj.predecessors = [];
    }

    message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },

  fromPartial(object: Partial<QueryTraceTxRequest>): QueryTraceTxRequest {
    const message = createBaseQueryTraceTxRequest();
    message.msg = object.msg !== undefined && object.msg !== null ? MsgEthereumTx.fromPartial(object.msg) : undefined;
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.predecessors = object.predecessors?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  }

};

function createBaseQueryTraceTxResponse(): QueryTraceTxResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryTraceTxResponse = {
  encode(message: QueryTraceTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTraceTxResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryTraceTxResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryTraceTxResponse>): QueryTraceTxResponse {
    const message = createBaseQueryTraceTxResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryTraceBlockRequest(): QueryTraceBlockRequest {
  return {
    txs: [],
    traceConfig: undefined,
    blockNumber: Long.ZERO,
    blockHash: "",
    blockTime: undefined
  };
}

export const QueryTraceBlockRequest = {
  encode(message: QueryTraceBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      MsgEthereumTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.traceConfig !== undefined) {
      TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
    }

    if (!message.blockNumber.isZero()) {
      writer.uint32(40).int64(message.blockNumber);
    }

    if (message.blockHash !== "") {
      writer.uint32(50).string(message.blockHash);
    }

    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(MsgEthereumTx.decode(reader, reader.uint32()));
          break;

        case 3:
          message.traceConfig = TraceConfig.decode(reader, reader.uint32());
          break;

        case 5:
          message.blockNumber = (reader.int64() as Long);
          break;

        case 6:
          message.blockHash = reader.string();
          break;

        case 7:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTraceBlockRequest {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => MsgEthereumTx.fromJSON(e)) : [],
      traceConfig: isSet(object.traceConfig) ? TraceConfig.fromJSON(object.traceConfig) : undefined,
      blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.ZERO,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },

  toJSON(message: QueryTraceBlockRequest): unknown {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => e ? MsgEthereumTx.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }

    message.traceConfig !== undefined && (obj.traceConfig = message.traceConfig ? TraceConfig.toJSON(message.traceConfig) : undefined);
    message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.ZERO).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },

  fromPartial(object: Partial<QueryTraceBlockRequest>): QueryTraceBlockRequest {
    const message = createBaseQueryTraceBlockRequest();
    message.txs = object.txs?.map(e => MsgEthereumTx.fromPartial(e)) || [];
    message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? TraceConfig.fromPartial(object.traceConfig) : undefined;
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.ZERO;
    message.blockHash = object.blockHash ?? "";
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  }

};

function createBaseQueryTraceBlockResponse(): QueryTraceBlockResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryTraceBlockResponse = {
  encode(message: QueryTraceBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTraceBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTraceBlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTraceBlockResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryTraceBlockResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryTraceBlockResponse>): QueryTraceBlockResponse {
    const message = createBaseQueryTraceBlockResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};