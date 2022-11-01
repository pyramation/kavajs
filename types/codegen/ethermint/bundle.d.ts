import * as _72 from "./crypto/v1/ethsecp256k1/keys";
import * as _73 from "./evm/v1/evm";
import * as _74 from "./evm/v1/genesis";
import * as _75 from "./evm/v1/query";
import * as _76 from "./evm/v1/tx";
import * as _77 from "./feemarket/v1/feemarket";
import * as _78 from "./feemarket/v1/genesis";
import * as _79 from "./feemarket/v1/query";
import * as _80 from "./types/v1/account";
import * as _81 from "./types/v1/web3";
import * as _250 from "./evm/v1/query.rpc.Query";
import * as _251 from "./feemarket/v1/query.rpc.Query";
import * as _252 from "./evm/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _72.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PubKey;
                    fromJSON(object: any): _72.PubKey;
                    toJSON(message: _72.PubKey): unknown;
                    fromPartial(object: Partial<_72.PubKey>): _72.PubKey;
                };
                PrivKey: {
                    encode(message: _72.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.PrivKey;
                    fromJSON(object: any): _72.PrivKey;
                    toJSON(message: _72.PrivKey): unknown;
                    fromPartial(object: Partial<_72.PrivKey>): _72.PrivKey;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _75.QueryAccountRequest): Promise<_75.QueryAccountResponse>;
                cosmosAccount(request: _75.QueryCosmosAccountRequest): Promise<_75.QueryCosmosAccountResponse>;
                validatorAccount(request: _75.QueryValidatorAccountRequest): Promise<_75.QueryValidatorAccountResponse>;
                balance(request: _75.QueryBalanceRequest): Promise<_75.QueryBalanceResponse>;
                storage(request: _75.QueryStorageRequest): Promise<_75.QueryStorageResponse>;
                code(request: _75.QueryCodeRequest): Promise<_75.QueryCodeResponse>;
                params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                ethCall(request: _75.EthCallRequest): Promise<_76.MsgEthereumTxResponse>;
                estimateGas(request: _75.EthCallRequest): Promise<_75.EstimateGasResponse>;
                traceTx(request: _75.QueryTraceTxRequest): Promise<_75.QueryTraceTxResponse>;
                traceBlock(request: _75.QueryTraceBlockRequest): Promise<_75.QueryTraceBlockResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _76.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _76.MsgEthereumTx): {
                        typeUrl: string;
                        value: _76.MsgEthereumTx;
                    };
                };
                toJSON: {
                    ethereumTx(value: _76.MsgEthereumTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    ethereumTx(value: any): {
                        typeUrl: string;
                        value: _76.MsgEthereumTx;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _76.MsgEthereumTx): {
                        typeUrl: string;
                        value: _76.MsgEthereumTx;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: ({ data, size, hash, from }: _76.MsgEthereumTx) => {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    };
                    fromAmino: ({ data, size, hash, from }: {
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    }) => _76.MsgEthereumTx;
                };
            };
            MsgEthereumTx: {
                encode(message: _76.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgEthereumTx;
                fromJSON(object: any): _76.MsgEthereumTx;
                toJSON(message: _76.MsgEthereumTx): unknown;
                fromPartial(object: Partial<_76.MsgEthereumTx>): _76.MsgEthereumTx;
            };
            LegacyTx: {
                encode(message: _76.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.LegacyTx;
                fromJSON(object: any): _76.LegacyTx;
                toJSON(message: _76.LegacyTx): unknown;
                fromPartial(object: Partial<_76.LegacyTx>): _76.LegacyTx;
            };
            AccessListTx: {
                encode(message: _76.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.AccessListTx;
                fromJSON(object: any): _76.AccessListTx;
                toJSON(message: _76.AccessListTx): unknown;
                fromPartial(object: Partial<_76.AccessListTx>): _76.AccessListTx;
            };
            DynamicFeeTx: {
                encode(message: _76.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DynamicFeeTx;
                fromJSON(object: any): _76.DynamicFeeTx;
                toJSON(message: _76.DynamicFeeTx): unknown;
                fromPartial(object: Partial<_76.DynamicFeeTx>): _76.DynamicFeeTx;
            };
            ExtensionOptionsEthereumTx: {
                encode(_: _76.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ExtensionOptionsEthereumTx;
                fromJSON(_: any): _76.ExtensionOptionsEthereumTx;
                toJSON(_: _76.ExtensionOptionsEthereumTx): unknown;
                fromPartial(_: Partial<_76.ExtensionOptionsEthereumTx>): _76.ExtensionOptionsEthereumTx;
            };
            MsgEthereumTxResponse: {
                encode(message: _76.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgEthereumTxResponse;
                fromJSON(object: any): _76.MsgEthereumTxResponse;
                toJSON(message: _76.MsgEthereumTxResponse): unknown;
                fromPartial(object: Partial<_76.MsgEthereumTxResponse>): _76.MsgEthereumTxResponse;
            };
            QueryAccountRequest: {
                encode(message: _75.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryAccountRequest;
                fromJSON(object: any): _75.QueryAccountRequest;
                toJSON(message: _75.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_75.QueryAccountRequest>): _75.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _75.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryAccountResponse;
                fromJSON(object: any): _75.QueryAccountResponse;
                toJSON(message: _75.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_75.QueryAccountResponse>): _75.QueryAccountResponse;
            };
            QueryCosmosAccountRequest: {
                encode(message: _75.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryCosmosAccountRequest;
                fromJSON(object: any): _75.QueryCosmosAccountRequest;
                toJSON(message: _75.QueryCosmosAccountRequest): unknown;
                fromPartial(object: Partial<_75.QueryCosmosAccountRequest>): _75.QueryCosmosAccountRequest;
            };
            QueryCosmosAccountResponse: {
                encode(message: _75.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryCosmosAccountResponse;
                fromJSON(object: any): _75.QueryCosmosAccountResponse;
                toJSON(message: _75.QueryCosmosAccountResponse): unknown;
                fromPartial(object: Partial<_75.QueryCosmosAccountResponse>): _75.QueryCosmosAccountResponse;
            };
            QueryValidatorAccountRequest: {
                encode(message: _75.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryValidatorAccountRequest;
                fromJSON(object: any): _75.QueryValidatorAccountRequest;
                toJSON(message: _75.QueryValidatorAccountRequest): unknown;
                fromPartial(object: Partial<_75.QueryValidatorAccountRequest>): _75.QueryValidatorAccountRequest;
            };
            QueryValidatorAccountResponse: {
                encode(message: _75.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryValidatorAccountResponse;
                fromJSON(object: any): _75.QueryValidatorAccountResponse;
                toJSON(message: _75.QueryValidatorAccountResponse): unknown;
                fromPartial(object: Partial<_75.QueryValidatorAccountResponse>): _75.QueryValidatorAccountResponse;
            };
            QueryBalanceRequest: {
                encode(message: _75.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryBalanceRequest;
                fromJSON(object: any): _75.QueryBalanceRequest;
                toJSON(message: _75.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_75.QueryBalanceRequest>): _75.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _75.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryBalanceResponse;
                fromJSON(object: any): _75.QueryBalanceResponse;
                toJSON(message: _75.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_75.QueryBalanceResponse>): _75.QueryBalanceResponse;
            };
            QueryStorageRequest: {
                encode(message: _75.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryStorageRequest;
                fromJSON(object: any): _75.QueryStorageRequest;
                toJSON(message: _75.QueryStorageRequest): unknown;
                fromPartial(object: Partial<_75.QueryStorageRequest>): _75.QueryStorageRequest;
            };
            QueryStorageResponse: {
                encode(message: _75.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryStorageResponse;
                fromJSON(object: any): _75.QueryStorageResponse;
                toJSON(message: _75.QueryStorageResponse): unknown;
                fromPartial(object: Partial<_75.QueryStorageResponse>): _75.QueryStorageResponse;
            };
            QueryCodeRequest: {
                encode(message: _75.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryCodeRequest;
                fromJSON(object: any): _75.QueryCodeRequest;
                toJSON(message: _75.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_75.QueryCodeRequest>): _75.QueryCodeRequest;
            };
            QueryCodeResponse: {
                encode(message: _75.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryCodeResponse;
                fromJSON(object: any): _75.QueryCodeResponse;
                toJSON(message: _75.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_75.QueryCodeResponse>): _75.QueryCodeResponse;
            };
            QueryTxLogsRequest: {
                encode(message: _75.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTxLogsRequest;
                fromJSON(object: any): _75.QueryTxLogsRequest;
                toJSON(message: _75.QueryTxLogsRequest): unknown;
                fromPartial(object: Partial<_75.QueryTxLogsRequest>): _75.QueryTxLogsRequest;
            };
            QueryTxLogsResponse: {
                encode(message: _75.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTxLogsResponse;
                fromJSON(object: any): _75.QueryTxLogsResponse;
                toJSON(message: _75.QueryTxLogsResponse): unknown;
                fromPartial(object: Partial<_75.QueryTxLogsResponse>): _75.QueryTxLogsResponse;
            };
            QueryParamsRequest: {
                encode(_: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsRequest;
                fromJSON(_: any): _75.QueryParamsRequest;
                toJSON(_: _75.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsResponse;
                fromJSON(object: any): _75.QueryParamsResponse;
                toJSON(message: _75.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
            };
            EthCallRequest: {
                encode(message: _75.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.EthCallRequest;
                fromJSON(object: any): _75.EthCallRequest;
                toJSON(message: _75.EthCallRequest): unknown;
                fromPartial(object: Partial<_75.EthCallRequest>): _75.EthCallRequest;
            };
            EstimateGasResponse: {
                encode(message: _75.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.EstimateGasResponse;
                fromJSON(object: any): _75.EstimateGasResponse;
                toJSON(message: _75.EstimateGasResponse): unknown;
                fromPartial(object: Partial<_75.EstimateGasResponse>): _75.EstimateGasResponse;
            };
            QueryTraceTxRequest: {
                encode(message: _75.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTraceTxRequest;
                fromJSON(object: any): _75.QueryTraceTxRequest;
                toJSON(message: _75.QueryTraceTxRequest): unknown;
                fromPartial(object: Partial<_75.QueryTraceTxRequest>): _75.QueryTraceTxRequest;
            };
            QueryTraceTxResponse: {
                encode(message: _75.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTraceTxResponse;
                fromJSON(object: any): _75.QueryTraceTxResponse;
                toJSON(message: _75.QueryTraceTxResponse): unknown;
                fromPartial(object: Partial<_75.QueryTraceTxResponse>): _75.QueryTraceTxResponse;
            };
            QueryTraceBlockRequest: {
                encode(message: _75.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTraceBlockRequest;
                fromJSON(object: any): _75.QueryTraceBlockRequest;
                toJSON(message: _75.QueryTraceBlockRequest): unknown;
                fromPartial(object: Partial<_75.QueryTraceBlockRequest>): _75.QueryTraceBlockRequest;
            };
            QueryTraceBlockResponse: {
                encode(message: _75.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryTraceBlockResponse;
                fromJSON(object: any): _75.QueryTraceBlockResponse;
                toJSON(message: _75.QueryTraceBlockResponse): unknown;
                fromPartial(object: Partial<_75.QueryTraceBlockResponse>): _75.QueryTraceBlockResponse;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
                fromJSON(object: any): _74.GenesisState;
                toJSON(message: _74.GenesisState): unknown;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
            };
            GenesisAccount: {
                encode(message: _74.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisAccount;
                fromJSON(object: any): _74.GenesisAccount;
                toJSON(message: _74.GenesisAccount): unknown;
                fromPartial(object: Partial<_74.GenesisAccount>): _74.GenesisAccount;
            };
            Params: {
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Params;
                fromJSON(object: any): _73.Params;
                toJSON(message: _73.Params): unknown;
                fromPartial(object: Partial<_73.Params>): _73.Params;
            };
            ChainConfig: {
                encode(message: _73.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ChainConfig;
                fromJSON(object: any): _73.ChainConfig;
                toJSON(message: _73.ChainConfig): unknown;
                fromPartial(object: Partial<_73.ChainConfig>): _73.ChainConfig;
            };
            State: {
                encode(message: _73.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.State;
                fromJSON(object: any): _73.State;
                toJSON(message: _73.State): unknown;
                fromPartial(object: Partial<_73.State>): _73.State;
            };
            TransactionLogs: {
                encode(message: _73.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TransactionLogs;
                fromJSON(object: any): _73.TransactionLogs;
                toJSON(message: _73.TransactionLogs): unknown;
                fromPartial(object: Partial<_73.TransactionLogs>): _73.TransactionLogs;
            };
            Log: {
                encode(message: _73.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Log;
                fromJSON(object: any): _73.Log;
                toJSON(message: _73.Log): unknown;
                fromPartial(object: Partial<_73.Log>): _73.Log;
            };
            TxResult: {
                encode(message: _73.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TxResult;
                fromJSON(object: any): _73.TxResult;
                toJSON(message: _73.TxResult): unknown;
                fromPartial(object: Partial<_73.TxResult>): _73.TxResult;
            };
            AccessTuple: {
                encode(message: _73.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.AccessTuple;
                fromJSON(object: any): _73.AccessTuple;
                toJSON(message: _73.AccessTuple): unknown;
                fromPartial(object: Partial<_73.AccessTuple>): _73.AccessTuple;
            };
            TraceConfig: {
                encode(message: _73.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.TraceConfig;
                fromJSON(object: any): _73.TraceConfig;
                toJSON(message: _73.TraceConfig): unknown;
                fromPartial(object: Partial<_73.TraceConfig>): _73.TraceConfig;
            };
            EIP712AllowedMsg: {
                encode(message: _73.EIP712AllowedMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.EIP712AllowedMsg;
                fromJSON(object: any): _73.EIP712AllowedMsg;
                toJSON(message: _73.EIP712AllowedMsg): unknown;
                fromPartial(object: Partial<_73.EIP712AllowedMsg>): _73.EIP712AllowedMsg;
            };
            EIP712NestedMsgType: {
                encode(message: _73.EIP712NestedMsgType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.EIP712NestedMsgType;
                fromJSON(object: any): _73.EIP712NestedMsgType;
                toJSON(message: _73.EIP712NestedMsgType): unknown;
                fromPartial(object: Partial<_73.EIP712NestedMsgType>): _73.EIP712NestedMsgType;
            };
            EIP712MsgAttrType: {
                encode(message: _73.EIP712MsgAttrType, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.EIP712MsgAttrType;
                fromJSON(object: any): _73.EIP712MsgAttrType;
                toJSON(message: _73.EIP712MsgAttrType): unknown;
                fromPartial(object: Partial<_73.EIP712MsgAttrType>): _73.EIP712MsgAttrType;
            };
        };
    }
    namespace feemarket {
        const v1: {
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                baseFee(request?: _79.QueryBaseFeeRequest): Promise<_79.QueryBaseFeeResponse>;
                blockGas(request?: _79.QueryBlockGasRequest): Promise<_79.QueryBlockGasResponse>;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromJSON(_: any): _79.QueryParamsRequest;
                toJSON(_: _79.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_79.QueryParamsRequest>): _79.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromJSON(object: any): _79.QueryParamsResponse;
                toJSON(message: _79.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_79.QueryParamsResponse>): _79.QueryParamsResponse;
            };
            QueryBaseFeeRequest: {
                encode(_: _79.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBaseFeeRequest;
                fromJSON(_: any): _79.QueryBaseFeeRequest;
                toJSON(_: _79.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_79.QueryBaseFeeRequest>): _79.QueryBaseFeeRequest;
            };
            QueryBaseFeeResponse: {
                encode(message: _79.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBaseFeeResponse;
                fromJSON(object: any): _79.QueryBaseFeeResponse;
                toJSON(message: _79.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_79.QueryBaseFeeResponse>): _79.QueryBaseFeeResponse;
            };
            QueryBlockGasRequest: {
                encode(_: _79.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBlockGasRequest;
                fromJSON(_: any): _79.QueryBlockGasRequest;
                toJSON(_: _79.QueryBlockGasRequest): unknown;
                fromPartial(_: Partial<_79.QueryBlockGasRequest>): _79.QueryBlockGasRequest;
            };
            QueryBlockGasResponse: {
                encode(message: _79.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBlockGasResponse;
                fromJSON(object: any): _79.QueryBlockGasResponse;
                toJSON(message: _79.QueryBlockGasResponse): unknown;
                fromPartial(object: Partial<_79.QueryBlockGasResponse>): _79.QueryBlockGasResponse;
            };
            GenesisState: {
                encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                fromJSON(object: any): _78.GenesisState;
                toJSON(message: _78.GenesisState): unknown;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
            };
            Params: {
                encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                fromJSON(object: any): _77.Params;
                toJSON(message: _77.Params): unknown;
                fromPartial(object: Partial<_77.Params>): _77.Params;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                encode(message: _81.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ExtensionOptionsWeb3Tx;
                fromJSON(object: any): _81.ExtensionOptionsWeb3Tx;
                toJSON(message: _81.ExtensionOptionsWeb3Tx): unknown;
                fromPartial(object: Partial<_81.ExtensionOptionsWeb3Tx>): _81.ExtensionOptionsWeb3Tx;
            };
            EthAccount: {
                encode(message: _80.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.EthAccount;
                fromJSON(object: any): _80.EthAccount;
                toJSON(message: _80.EthAccount): unknown;
                fromPartial(object: Partial<_80.EthAccount>): _80.EthAccount;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ethermint: {
                evm: {
                    v1: _252.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            ethermint: {
                evm: {
                    v1: {
                        account(request: _75.QueryAccountRequest): Promise<_75.QueryAccountResponse>;
                        cosmosAccount(request: _75.QueryCosmosAccountRequest): Promise<_75.QueryCosmosAccountResponse>;
                        validatorAccount(request: _75.QueryValidatorAccountRequest): Promise<_75.QueryValidatorAccountResponse>;
                        balance(request: _75.QueryBalanceRequest): Promise<_75.QueryBalanceResponse>;
                        storage(request: _75.QueryStorageRequest): Promise<_75.QueryStorageResponse>;
                        code(request: _75.QueryCodeRequest): Promise<_75.QueryCodeResponse>;
                        params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        ethCall(request: _75.EthCallRequest): Promise<_76.MsgEthereumTxResponse>;
                        estimateGas(request: _75.EthCallRequest): Promise<_75.EstimateGasResponse>;
                        traceTx(request: _75.QueryTraceTxRequest): Promise<_75.QueryTraceTxResponse>;
                        traceBlock(request: _75.QueryTraceBlockRequest): Promise<_75.QueryTraceBlockResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        baseFee(request?: _79.QueryBaseFeeRequest): Promise<_79.QueryBaseFeeResponse>;
                        blockGas(request?: _79.QueryBlockGasRequest): Promise<_79.QueryBlockGasResponse>;
                    };
                };
            };
        }>;
    };
}
