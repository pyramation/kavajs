import * as _90 from "./applications/interchain_accounts/controller/v1/controller";
import * as _91 from "./applications/interchain_accounts/controller/v1/query";
import * as _92 from "./applications/interchain_accounts/host/v1/host";
import * as _93 from "./applications/interchain_accounts/host/v1/query";
import * as _94 from "./applications/interchain_accounts/v1/account";
import * as _95 from "./applications/interchain_accounts/v1/genesis";
import * as _96 from "./applications/interchain_accounts/v1/metadata";
import * as _97 from "./applications/interchain_accounts/v1/packet";
import * as _98 from "./applications/transfer/v1/genesis";
import * as _99 from "./applications/transfer/v1/query";
import * as _100 from "./applications/transfer/v1/transfer";
import * as _101 from "./applications/transfer/v1/tx";
import * as _102 from "./applications/transfer/v2/packet";
import * as _103 from "./core/channel/v1/channel";
import * as _104 from "./core/channel/v1/genesis";
import * as _105 from "./core/channel/v1/query";
import * as _106 from "./core/channel/v1/tx";
import * as _107 from "./core/client/v1/client";
import * as _108 from "./core/client/v1/genesis";
import * as _109 from "./core/client/v1/query";
import * as _110 from "./core/client/v1/tx";
import * as _111 from "./core/commitment/v1/commitment";
import * as _112 from "./core/connection/v1/connection";
import * as _113 from "./core/connection/v1/genesis";
import * as _114 from "./core/connection/v1/query";
import * as _115 from "./core/connection/v1/tx";
import * as _116 from "./core/types/v1/genesis";
import * as _117 from "./lightclients/localhost/v1/localhost";
import * as _118 from "./lightclients/solomachine/v1/solomachine";
import * as _119 from "./lightclients/solomachine/v2/solomachine";
import * as _120 from "./lightclients/tendermint/v1/tendermint";
import * as _261 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _262 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _263 from "./applications/transfer/v1/query.rpc.Query";
import * as _264 from "./core/channel/v1/query.rpc.Query";
import * as _265 from "./core/client/v1/query.rpc.Query";
import * as _266 from "./core/connection/v1/query.rpc.Query";
import * as _267 from "./applications/transfer/v1/tx.rpc.msg";
import * as _268 from "./core/channel/v1/tx.rpc.msg";
import * as _269 from "./core/client/v1/tx.rpc.msg";
import * as _270 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _261.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _91.QueryInterchainAccountRequest): Promise<_91.QueryInterchainAccountResponse>;
                        params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _91.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryInterchainAccountRequest;
                        fromJSON(object: any): _91.QueryInterchainAccountRequest;
                        toJSON(message: _91.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_91.QueryInterchainAccountRequest>): _91.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _91.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryInterchainAccountResponse;
                        fromJSON(object: any): _91.QueryInterchainAccountResponse;
                        toJSON(message: _91.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_91.QueryInterchainAccountResponse>): _91.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                        fromJSON(_: any): _91.QueryParamsRequest;
                        toJSON(_: _91.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_91.QueryParamsRequest>): _91.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                        fromJSON(object: any): _91.QueryParamsResponse;
                        toJSON(message: _91.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_91.QueryParamsResponse>): _91.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                        fromJSON(object: any): _90.Params;
                        toJSON(message: _90.Params): unknown;
                        fromPartial(object: Partial<_90.Params>): _90.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _262.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        encode(_: _93.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsRequest;
                        fromJSON(_: any): _93.QueryParamsRequest;
                        toJSON(_: _93.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_93.QueryParamsRequest>): _93.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _93.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryParamsResponse;
                        fromJSON(object: any): _93.QueryParamsResponse;
                        toJSON(message: _93.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_93.QueryParamsResponse>): _93.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                        fromJSON(object: any): _92.Params;
                        toJSON(message: _92.Params): unknown;
                        fromPartial(object: Partial<_92.Params>): _92.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _97.Type;
                typeToJSON(object: _97.Type): string;
                Type: typeof _97.Type;
                TypeSDKType: typeof _97.TypeSDKType;
                InterchainAccountPacketData: {
                    encode(message: _97.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.InterchainAccountPacketData;
                    fromJSON(object: any): _97.InterchainAccountPacketData;
                    toJSON(message: _97.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_97.InterchainAccountPacketData>): _97.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _97.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CosmosTx;
                    fromJSON(object: any): _97.CosmosTx;
                    toJSON(message: _97.CosmosTx): unknown;
                    fromPartial(object: Partial<_97.CosmosTx>): _97.CosmosTx;
                };
                Metadata: {
                    encode(message: _96.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Metadata;
                    fromJSON(object: any): _96.Metadata;
                    toJSON(message: _96.Metadata): unknown;
                    fromPartial(object: Partial<_96.Metadata>): _96.Metadata;
                };
                GenesisState: {
                    encode(message: _95.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GenesisState;
                    fromJSON(object: any): _95.GenesisState;
                    toJSON(message: _95.GenesisState): unknown;
                    fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _95.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ControllerGenesisState;
                    fromJSON(object: any): _95.ControllerGenesisState;
                    toJSON(message: _95.ControllerGenesisState): unknown;
                    fromPartial(object: Partial<_95.ControllerGenesisState>): _95.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _95.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.HostGenesisState;
                    fromJSON(object: any): _95.HostGenesisState;
                    toJSON(message: _95.HostGenesisState): unknown;
                    fromPartial(object: Partial<_95.HostGenesisState>): _95.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _95.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ActiveChannel;
                    fromJSON(object: any): _95.ActiveChannel;
                    toJSON(message: _95.ActiveChannel): unknown;
                    fromPartial(object: Partial<_95.ActiveChannel>): _95.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _95.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RegisteredInterchainAccount;
                    fromJSON(object: any): _95.RegisteredInterchainAccount;
                    toJSON(message: _95.RegisteredInterchainAccount): unknown;
                    fromPartial(object: Partial<_95.RegisteredInterchainAccount>): _95.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _94.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.InterchainAccount;
                    fromJSON(object: any): _94.InterchainAccount;
                    toJSON(message: _94.InterchainAccount): unknown;
                    fromPartial(object: Partial<_94.InterchainAccount>): _94.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _267.MsgClientImpl;
                QueryClientImpl: typeof _263.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _99.QueryDenomTraceRequest): Promise<_99.QueryDenomTraceResponse>;
                    denomTraces(request?: _99.QueryDenomTracesRequest): Promise<_99.QueryDenomTracesResponse>;
                    params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                    denomHash(request: _99.QueryDenomHashRequest): Promise<_99.QueryDenomHashResponse>;
                    escrowAddress(request: _99.QueryEscrowAddressRequest): Promise<_99.QueryEscrowAddressResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: _101.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _101.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _101.MsgTransfer): {
                            typeUrl: string;
                            value: _101.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _101.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _101.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _101.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgTransfer;
                    fromJSON(object: any): _101.MsgTransfer;
                    toJSON(message: _101.MsgTransfer): unknown;
                    fromPartial(object: Partial<_101.MsgTransfer>): _101.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _101.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgTransferResponse;
                    fromJSON(_: any): _101.MsgTransferResponse;
                    toJSON(_: _101.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_101.MsgTransferResponse>): _101.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _100.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DenomTrace;
                    fromJSON(object: any): _100.DenomTrace;
                    toJSON(message: _100.DenomTrace): unknown;
                    fromPartial(object: Partial<_100.DenomTrace>): _100.DenomTrace;
                };
                Params: {
                    encode(message: _100.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Params;
                    fromJSON(object: any): _100.Params;
                    toJSON(message: _100.Params): unknown;
                    fromPartial(object: Partial<_100.Params>): _100.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _99.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTraceRequest;
                    fromJSON(object: any): _99.QueryDenomTraceRequest;
                    toJSON(message: _99.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_99.QueryDenomTraceRequest>): _99.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _99.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTraceResponse;
                    fromJSON(object: any): _99.QueryDenomTraceResponse;
                    toJSON(message: _99.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_99.QueryDenomTraceResponse>): _99.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _99.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTracesRequest;
                    fromJSON(object: any): _99.QueryDenomTracesRequest;
                    toJSON(message: _99.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_99.QueryDenomTracesRequest>): _99.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _99.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomTracesResponse;
                    fromJSON(object: any): _99.QueryDenomTracesResponse;
                    toJSON(message: _99.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_99.QueryDenomTracesResponse>): _99.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _99.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsRequest;
                    fromJSON(_: any): _99.QueryParamsRequest;
                    toJSON(_: _99.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_99.QueryParamsRequest>): _99.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _99.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryParamsResponse;
                    fromJSON(object: any): _99.QueryParamsResponse;
                    toJSON(message: _99.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_99.QueryParamsResponse>): _99.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _99.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomHashRequest;
                    fromJSON(object: any): _99.QueryDenomHashRequest;
                    toJSON(message: _99.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_99.QueryDenomHashRequest>): _99.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _99.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryDenomHashResponse;
                    fromJSON(object: any): _99.QueryDenomHashResponse;
                    toJSON(message: _99.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_99.QueryDenomHashResponse>): _99.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _99.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryEscrowAddressRequest;
                    fromJSON(object: any): _99.QueryEscrowAddressRequest;
                    toJSON(message: _99.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_99.QueryEscrowAddressRequest>): _99.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _99.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.QueryEscrowAddressResponse;
                    fromJSON(object: any): _99.QueryEscrowAddressResponse;
                    toJSON(message: _99.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_99.QueryEscrowAddressResponse>): _99.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                    fromJSON(object: any): _98.GenesisState;
                    toJSON(message: _98.GenesisState): unknown;
                    fromPartial(object: Partial<_98.GenesisState>): _98.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _102.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FungibleTokenPacketData;
                    fromJSON(object: any): _102.FungibleTokenPacketData;
                    toJSON(message: _102.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_102.FungibleTokenPacketData>): _102.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _268.MsgClientImpl;
                QueryClientImpl: typeof _264.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _105.QueryChannelRequest): Promise<_105.QueryChannelResponse>;
                    channels(request?: _105.QueryChannelsRequest): Promise<_105.QueryChannelsResponse>;
                    connectionChannels(request: _105.QueryConnectionChannelsRequest): Promise<_105.QueryConnectionChannelsResponse>;
                    channelClientState(request: _105.QueryChannelClientStateRequest): Promise<_105.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _105.QueryChannelConsensusStateRequest): Promise<_105.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _105.QueryPacketCommitmentRequest): Promise<_105.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _105.QueryPacketCommitmentsRequest): Promise<_105.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _105.QueryPacketReceiptRequest): Promise<_105.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _105.QueryPacketAcknowledgementRequest): Promise<_105.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _105.QueryPacketAcknowledgementsRequest): Promise<_105.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _105.QueryUnreceivedPacketsRequest): Promise<_105.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _105.QueryUnreceivedAcksRequest): Promise<_105.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _105.QueryNextSequenceReceiveRequest): Promise<_105.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: _106.MsgRecvPacket;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: _106.MsgTimeout;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _106.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _106.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _106.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _106.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _106.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _106.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _106.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _106.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _106.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _106.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _106.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _106.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _106.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _106.MsgRecvPacket): {
                            typeUrl: string;
                            value: _106.MsgRecvPacket;
                        };
                        timeout(value: _106.MsgTimeout): {
                            typeUrl: string;
                            value: _106.MsgTimeout;
                        };
                        timeoutOnClose(value: _106.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _106.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _106.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _106.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _106.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _106.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _106.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _106.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _106.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _106.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _106.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _106.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _106.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _106.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _106.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _106.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _106.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _106.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _106.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _106.ResponseResultType;
                responseResultTypeToJSON(object: _106.ResponseResultType): string;
                ResponseResultType: typeof _106.ResponseResultType;
                ResponseResultTypeSDKType: typeof _106.ResponseResultTypeSDKType;
                MsgChannelOpenInit: {
                    encode(message: _106.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenInit;
                    fromJSON(object: any): _106.MsgChannelOpenInit;
                    toJSON(message: _106.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenInit>): _106.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _106.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _106.MsgChannelOpenInitResponse;
                    toJSON(message: _106.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenInitResponse>): _106.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _106.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenTry;
                    fromJSON(object: any): _106.MsgChannelOpenTry;
                    toJSON(message: _106.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenTry>): _106.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _106.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _106.MsgChannelOpenTryResponse;
                    toJSON(message: _106.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenTryResponse>): _106.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _106.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenAck;
                    fromJSON(object: any): _106.MsgChannelOpenAck;
                    toJSON(message: _106.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenAck>): _106.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _106.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _106.MsgChannelOpenAckResponse;
                    toJSON(_: _106.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_106.MsgChannelOpenAckResponse>): _106.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _106.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenConfirm;
                    fromJSON(object: any): _106.MsgChannelOpenConfirm;
                    toJSON(message: _106.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_106.MsgChannelOpenConfirm>): _106.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _106.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _106.MsgChannelOpenConfirmResponse;
                    toJSON(_: _106.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_106.MsgChannelOpenConfirmResponse>): _106.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _106.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseInit;
                    fromJSON(object: any): _106.MsgChannelCloseInit;
                    toJSON(message: _106.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_106.MsgChannelCloseInit>): _106.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _106.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _106.MsgChannelCloseInitResponse;
                    toJSON(_: _106.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_106.MsgChannelCloseInitResponse>): _106.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _106.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseConfirm;
                    fromJSON(object: any): _106.MsgChannelCloseConfirm;
                    toJSON(message: _106.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_106.MsgChannelCloseConfirm>): _106.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _106.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _106.MsgChannelCloseConfirmResponse;
                    toJSON(_: _106.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_106.MsgChannelCloseConfirmResponse>): _106.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _106.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRecvPacket;
                    fromJSON(object: any): _106.MsgRecvPacket;
                    toJSON(message: _106.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_106.MsgRecvPacket>): _106.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _106.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRecvPacketResponse;
                    fromJSON(object: any): _106.MsgRecvPacketResponse;
                    toJSON(message: _106.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_106.MsgRecvPacketResponse>): _106.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _106.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeout;
                    fromJSON(object: any): _106.MsgTimeout;
                    toJSON(message: _106.MsgTimeout): unknown;
                    fromPartial(object: Partial<_106.MsgTimeout>): _106.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _106.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutResponse;
                    fromJSON(object: any): _106.MsgTimeoutResponse;
                    toJSON(message: _106.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_106.MsgTimeoutResponse>): _106.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _106.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutOnClose;
                    fromJSON(object: any): _106.MsgTimeoutOnClose;
                    toJSON(message: _106.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_106.MsgTimeoutOnClose>): _106.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _106.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _106.MsgTimeoutOnCloseResponse;
                    toJSON(message: _106.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_106.MsgTimeoutOnCloseResponse>): _106.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _106.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAcknowledgement;
                    fromJSON(object: any): _106.MsgAcknowledgement;
                    toJSON(message: _106.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_106.MsgAcknowledgement>): _106.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _106.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgAcknowledgementResponse;
                    fromJSON(object: any): _106.MsgAcknowledgementResponse;
                    toJSON(message: _106.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_106.MsgAcknowledgementResponse>): _106.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _105.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelRequest;
                    fromJSON(object: any): _105.QueryChannelRequest;
                    toJSON(message: _105.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_105.QueryChannelRequest>): _105.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _105.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelResponse;
                    fromJSON(object: any): _105.QueryChannelResponse;
                    toJSON(message: _105.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_105.QueryChannelResponse>): _105.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _105.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelsRequest;
                    fromJSON(object: any): _105.QueryChannelsRequest;
                    toJSON(message: _105.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_105.QueryChannelsRequest>): _105.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _105.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelsResponse;
                    fromJSON(object: any): _105.QueryChannelsResponse;
                    toJSON(message: _105.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryChannelsResponse>): _105.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _105.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _105.QueryConnectionChannelsRequest;
                    toJSON(message: _105.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_105.QueryConnectionChannelsRequest>): _105.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _105.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _105.QueryConnectionChannelsResponse;
                    toJSON(message: _105.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryConnectionChannelsResponse>): _105.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _105.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelClientStateRequest;
                    fromJSON(object: any): _105.QueryChannelClientStateRequest;
                    toJSON(message: _105.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_105.QueryChannelClientStateRequest>): _105.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _105.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelClientStateResponse;
                    fromJSON(object: any): _105.QueryChannelClientStateResponse;
                    toJSON(message: _105.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_105.QueryChannelClientStateResponse>): _105.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _105.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _105.QueryChannelConsensusStateRequest;
                    toJSON(message: _105.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_105.QueryChannelConsensusStateRequest>): _105.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _105.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _105.QueryChannelConsensusStateResponse;
                    toJSON(message: _105.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_105.QueryChannelConsensusStateResponse>): _105.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _105.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _105.QueryPacketCommitmentRequest;
                    toJSON(message: _105.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_105.QueryPacketCommitmentRequest>): _105.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _105.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _105.QueryPacketCommitmentResponse;
                    toJSON(message: _105.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_105.QueryPacketCommitmentResponse>): _105.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _105.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _105.QueryPacketCommitmentsRequest;
                    toJSON(message: _105.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_105.QueryPacketCommitmentsRequest>): _105.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _105.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _105.QueryPacketCommitmentsResponse;
                    toJSON(message: _105.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryPacketCommitmentsResponse>): _105.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _105.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketReceiptRequest;
                    fromJSON(object: any): _105.QueryPacketReceiptRequest;
                    toJSON(message: _105.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_105.QueryPacketReceiptRequest>): _105.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _105.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketReceiptResponse;
                    fromJSON(object: any): _105.QueryPacketReceiptResponse;
                    toJSON(message: _105.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_105.QueryPacketReceiptResponse>): _105.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _105.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _105.QueryPacketAcknowledgementRequest;
                    toJSON(message: _105.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_105.QueryPacketAcknowledgementRequest>): _105.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _105.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _105.QueryPacketAcknowledgementResponse;
                    toJSON(message: _105.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_105.QueryPacketAcknowledgementResponse>): _105.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _105.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _105.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _105.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_105.QueryPacketAcknowledgementsRequest>): _105.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _105.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _105.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _105.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryPacketAcknowledgementsResponse>): _105.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _105.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _105.QueryUnreceivedPacketsRequest;
                    toJSON(message: _105.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_105.QueryUnreceivedPacketsRequest>): _105.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _105.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _105.QueryUnreceivedPacketsResponse;
                    toJSON(message: _105.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_105.QueryUnreceivedPacketsResponse>): _105.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _105.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _105.QueryUnreceivedAcksRequest;
                    toJSON(message: _105.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_105.QueryUnreceivedAcksRequest>): _105.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _105.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _105.QueryUnreceivedAcksResponse;
                    toJSON(message: _105.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_105.QueryUnreceivedAcksResponse>): _105.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _105.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _105.QueryNextSequenceReceiveRequest;
                    toJSON(message: _105.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_105.QueryNextSequenceReceiveRequest>): _105.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _105.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _105.QueryNextSequenceReceiveResponse;
                    toJSON(message: _105.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_105.QueryNextSequenceReceiveResponse>): _105.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                    fromJSON(object: any): _104.GenesisState;
                    toJSON(message: _104.GenesisState): unknown;
                    fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                };
                PacketSequence: {
                    encode(message: _104.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.PacketSequence;
                    fromJSON(object: any): _104.PacketSequence;
                    toJSON(message: _104.PacketSequence): unknown;
                    fromPartial(object: Partial<_104.PacketSequence>): _104.PacketSequence;
                };
                stateFromJSON(object: any): _103.State;
                stateToJSON(object: _103.State): string;
                orderFromJSON(object: any): _103.Order;
                orderToJSON(object: _103.Order): string;
                State: typeof _103.State;
                StateSDKType: typeof _103.StateSDKType;
                Order: typeof _103.Order;
                OrderSDKType: typeof _103.OrderSDKType;
                Channel: {
                    encode(message: _103.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Channel;
                    fromJSON(object: any): _103.Channel;
                    toJSON(message: _103.Channel): unknown;
                    fromPartial(object: Partial<_103.Channel>): _103.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _103.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.IdentifiedChannel;
                    fromJSON(object: any): _103.IdentifiedChannel;
                    toJSON(message: _103.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_103.IdentifiedChannel>): _103.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _103.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Counterparty;
                    fromJSON(object: any): _103.Counterparty;
                    toJSON(message: _103.Counterparty): unknown;
                    fromPartial(object: Partial<_103.Counterparty>): _103.Counterparty;
                };
                Packet: {
                    encode(message: _103.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Packet;
                    fromJSON(object: any): _103.Packet;
                    toJSON(message: _103.Packet): unknown;
                    fromPartial(object: Partial<_103.Packet>): _103.Packet;
                };
                PacketState: {
                    encode(message: _103.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PacketState;
                    fromJSON(object: any): _103.PacketState;
                    toJSON(message: _103.PacketState): unknown;
                    fromPartial(object: Partial<_103.PacketState>): _103.PacketState;
                };
                Acknowledgement: {
                    encode(message: _103.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Acknowledgement;
                    fromJSON(object: any): _103.Acknowledgement;
                    toJSON(message: _103.Acknowledgement): unknown;
                    fromPartial(object: Partial<_103.Acknowledgement>): _103.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _269.MsgClientImpl;
                QueryClientImpl: typeof _265.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _109.QueryClientStateRequest): Promise<_109.QueryClientStateResponse>;
                    clientStates(request?: _109.QueryClientStatesRequest): Promise<_109.QueryClientStatesResponse>;
                    consensusState(request: _109.QueryConsensusStateRequest): Promise<_109.QueryConsensusStateResponse>;
                    consensusStates(request: _109.QueryConsensusStatesRequest): Promise<_109.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _109.QueryConsensusStateHeightsRequest): Promise<_109.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _109.QueryClientStatusRequest): Promise<_109.QueryClientStatusResponse>;
                    clientParams(request?: _109.QueryClientParamsRequest): Promise<_109.QueryClientParamsResponse>;
                    upgradedClientState(request?: _109.QueryUpgradedClientStateRequest): Promise<_109.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _109.QueryUpgradedConsensusStateRequest): Promise<_109.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: _110.MsgCreateClient;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: _110.MsgUpdateClient;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _110.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _110.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _110.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _110.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _110.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _110.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _110.MsgCreateClient): {
                            typeUrl: string;
                            value: _110.MsgCreateClient;
                        };
                        updateClient(value: _110.MsgUpdateClient): {
                            typeUrl: string;
                            value: _110.MsgUpdateClient;
                        };
                        upgradeClient(value: _110.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _110.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _110.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _110.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _110.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _110.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _110.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _110.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _110.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _110.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _110.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateClient;
                    fromJSON(object: any): _110.MsgCreateClient;
                    toJSON(message: _110.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_110.MsgCreateClient>): _110.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _110.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgCreateClientResponse;
                    fromJSON(_: any): _110.MsgCreateClientResponse;
                    toJSON(_: _110.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_110.MsgCreateClientResponse>): _110.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _110.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpdateClient;
                    fromJSON(object: any): _110.MsgUpdateClient;
                    toJSON(message: _110.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_110.MsgUpdateClient>): _110.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _110.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpdateClientResponse;
                    fromJSON(_: any): _110.MsgUpdateClientResponse;
                    toJSON(_: _110.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_110.MsgUpdateClientResponse>): _110.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _110.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpgradeClient;
                    fromJSON(object: any): _110.MsgUpgradeClient;
                    toJSON(message: _110.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_110.MsgUpgradeClient>): _110.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _110.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgUpgradeClientResponse;
                    fromJSON(_: any): _110.MsgUpgradeClientResponse;
                    toJSON(_: _110.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_110.MsgUpgradeClientResponse>): _110.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _110.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _110.MsgSubmitMisbehaviour;
                    toJSON(message: _110.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_110.MsgSubmitMisbehaviour>): _110.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _110.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _110.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _110.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_110.MsgSubmitMisbehaviourResponse>): _110.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _109.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStateRequest;
                    fromJSON(object: any): _109.QueryClientStateRequest;
                    toJSON(message: _109.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_109.QueryClientStateRequest>): _109.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _109.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStateResponse;
                    fromJSON(object: any): _109.QueryClientStateResponse;
                    toJSON(message: _109.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryClientStateResponse>): _109.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _109.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatesRequest;
                    fromJSON(object: any): _109.QueryClientStatesRequest;
                    toJSON(message: _109.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_109.QueryClientStatesRequest>): _109.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _109.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatesResponse;
                    fromJSON(object: any): _109.QueryClientStatesResponse;
                    toJSON(message: _109.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_109.QueryClientStatesResponse>): _109.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _109.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateRequest;
                    fromJSON(object: any): _109.QueryConsensusStateRequest;
                    toJSON(message: _109.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStateRequest>): _109.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _109.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateResponse;
                    fromJSON(object: any): _109.QueryConsensusStateResponse;
                    toJSON(message: _109.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStateResponse>): _109.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _109.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStatesRequest;
                    fromJSON(object: any): _109.QueryConsensusStatesRequest;
                    toJSON(message: _109.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStatesRequest>): _109.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _109.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStatesResponse;
                    fromJSON(object: any): _109.QueryConsensusStatesResponse;
                    toJSON(message: _109.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStatesResponse>): _109.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _109.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _109.QueryConsensusStateHeightsRequest;
                    toJSON(message: _109.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStateHeightsRequest>): _109.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _109.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _109.QueryConsensusStateHeightsResponse;
                    toJSON(message: _109.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryConsensusStateHeightsResponse>): _109.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _109.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatusRequest;
                    fromJSON(object: any): _109.QueryClientStatusRequest;
                    toJSON(message: _109.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_109.QueryClientStatusRequest>): _109.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _109.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientStatusResponse;
                    fromJSON(object: any): _109.QueryClientStatusResponse;
                    toJSON(message: _109.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_109.QueryClientStatusResponse>): _109.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _109.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientParamsRequest;
                    fromJSON(_: any): _109.QueryClientParamsRequest;
                    toJSON(_: _109.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_109.QueryClientParamsRequest>): _109.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _109.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryClientParamsResponse;
                    fromJSON(object: any): _109.QueryClientParamsResponse;
                    toJSON(message: _109.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_109.QueryClientParamsResponse>): _109.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _109.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _109.QueryUpgradedClientStateRequest;
                    toJSON(_: _109.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_109.QueryUpgradedClientStateRequest>): _109.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _109.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _109.QueryUpgradedClientStateResponse;
                    toJSON(message: _109.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryUpgradedClientStateResponse>): _109.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _109.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _109.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _109.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_109.QueryUpgradedConsensusStateRequest>): _109.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _109.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _109.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _109.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_109.QueryUpgradedConsensusStateResponse>): _109.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _108.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisMetadata;
                    fromJSON(object: any): _108.GenesisMetadata;
                    toJSON(message: _108.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_108.GenesisMetadata>): _108.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _108.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _108.IdentifiedGenesisMetadata;
                    toJSON(message: _108.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_108.IdentifiedGenesisMetadata>): _108.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _107.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedClientState;
                    fromJSON(object: any): _107.IdentifiedClientState;
                    toJSON(message: _107.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_107.IdentifiedClientState>): _107.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _107.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ConsensusStateWithHeight;
                    fromJSON(object: any): _107.ConsensusStateWithHeight;
                    toJSON(message: _107.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_107.ConsensusStateWithHeight>): _107.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _107.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ClientConsensusStates;
                    fromJSON(object: any): _107.ClientConsensusStates;
                    toJSON(message: _107.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_107.ClientConsensusStates>): _107.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _107.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ClientUpdateProposal;
                    fromJSON(object: any): _107.ClientUpdateProposal;
                    toJSON(message: _107.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_107.ClientUpdateProposal>): _107.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _107.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.UpgradeProposal;
                    fromJSON(object: any): _107.UpgradeProposal;
                    toJSON(message: _107.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_107.UpgradeProposal>): _107.UpgradeProposal;
                };
                Height: {
                    encode(message: _107.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Height;
                    fromJSON(object: any): _107.Height;
                    toJSON(message: _107.Height): unknown;
                    fromPartial(object: Partial<_107.Height>): _107.Height;
                };
                Params: {
                    encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                    fromJSON(object: any): _107.Params;
                    toJSON(message: _107.Params): unknown;
                    fromPartial(object: Partial<_107.Params>): _107.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _111.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerkleRoot;
                    fromJSON(object: any): _111.MerkleRoot;
                    toJSON(message: _111.MerkleRoot): unknown;
                    fromPartial(object: Partial<_111.MerkleRoot>): _111.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _111.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerklePrefix;
                    fromJSON(object: any): _111.MerklePrefix;
                    toJSON(message: _111.MerklePrefix): unknown;
                    fromPartial(object: Partial<_111.MerklePrefix>): _111.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _111.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerklePath;
                    fromJSON(object: any): _111.MerklePath;
                    toJSON(message: _111.MerklePath): unknown;
                    fromPartial(object: Partial<_111.MerklePath>): _111.MerklePath;
                };
                MerkleProof: {
                    encode(message: _111.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MerkleProof;
                    fromJSON(object: any): _111.MerkleProof;
                    toJSON(message: _111.MerkleProof): unknown;
                    fromPartial(object: Partial<_111.MerkleProof>): _111.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _270.MsgClientImpl;
                QueryClientImpl: typeof _266.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _114.QueryConnectionRequest): Promise<_114.QueryConnectionResponse>;
                    connections(request?: _114.QueryConnectionsRequest): Promise<_114.QueryConnectionsResponse>;
                    clientConnections(request: _114.QueryClientConnectionsRequest): Promise<_114.QueryClientConnectionsResponse>;
                    connectionClientState(request: _114.QueryConnectionClientStateRequest): Promise<_114.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _114.QueryConnectionConsensusStateRequest): Promise<_114.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _115.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _115.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _115.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _115.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _115.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _115.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _115.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _115.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _115.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _115.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _115.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _115.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenInit;
                    fromJSON(object: any): _115.MsgConnectionOpenInit;
                    toJSON(message: _115.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_115.MsgConnectionOpenInit>): _115.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _115.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _115.MsgConnectionOpenInitResponse;
                    toJSON(_: _115.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_115.MsgConnectionOpenInitResponse>): _115.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _115.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenTry;
                    fromJSON(object: any): _115.MsgConnectionOpenTry;
                    toJSON(message: _115.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_115.MsgConnectionOpenTry>): _115.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _115.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _115.MsgConnectionOpenTryResponse;
                    toJSON(_: _115.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_115.MsgConnectionOpenTryResponse>): _115.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _115.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenAck;
                    fromJSON(object: any): _115.MsgConnectionOpenAck;
                    toJSON(message: _115.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_115.MsgConnectionOpenAck>): _115.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _115.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _115.MsgConnectionOpenAckResponse;
                    toJSON(_: _115.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_115.MsgConnectionOpenAckResponse>): _115.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _115.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _115.MsgConnectionOpenConfirm;
                    toJSON(message: _115.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_115.MsgConnectionOpenConfirm>): _115.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _115.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _115.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _115.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_115.MsgConnectionOpenConfirmResponse>): _115.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _114.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionRequest;
                    fromJSON(object: any): _114.QueryConnectionRequest;
                    toJSON(message: _114.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionRequest>): _114.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _114.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionResponse;
                    fromJSON(object: any): _114.QueryConnectionResponse;
                    toJSON(message: _114.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionResponse>): _114.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _114.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionsRequest;
                    fromJSON(object: any): _114.QueryConnectionsRequest;
                    toJSON(message: _114.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionsRequest>): _114.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _114.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionsResponse;
                    fromJSON(object: any): _114.QueryConnectionsResponse;
                    toJSON(message: _114.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionsResponse>): _114.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _114.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientConnectionsRequest;
                    fromJSON(object: any): _114.QueryClientConnectionsRequest;
                    toJSON(message: _114.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_114.QueryClientConnectionsRequest>): _114.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _114.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryClientConnectionsResponse;
                    fromJSON(object: any): _114.QueryClientConnectionsResponse;
                    toJSON(message: _114.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_114.QueryClientConnectionsResponse>): _114.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _114.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _114.QueryConnectionClientStateRequest;
                    toJSON(message: _114.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionClientStateRequest>): _114.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _114.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _114.QueryConnectionClientStateResponse;
                    toJSON(message: _114.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionClientStateResponse>): _114.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _114.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _114.QueryConnectionConsensusStateRequest;
                    toJSON(message: _114.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionConsensusStateRequest>): _114.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _114.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _114.QueryConnectionConsensusStateResponse;
                    toJSON(message: _114.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_114.QueryConnectionConsensusStateResponse>): _114.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
                    fromJSON(object: any): _113.GenesisState;
                    toJSON(message: _113.GenesisState): unknown;
                    fromPartial(object: Partial<_113.GenesisState>): _113.GenesisState;
                };
                stateFromJSON(object: any): _112.State;
                stateToJSON(object: _112.State): string;
                State: typeof _112.State;
                StateSDKType: typeof _112.StateSDKType;
                ConnectionEnd: {
                    encode(message: _112.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConnectionEnd;
                    fromJSON(object: any): _112.ConnectionEnd;
                    toJSON(message: _112.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_112.ConnectionEnd>): _112.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _112.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedConnection;
                    fromJSON(object: any): _112.IdentifiedConnection;
                    toJSON(message: _112.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_112.IdentifiedConnection>): _112.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _112.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Counterparty;
                    fromJSON(object: any): _112.Counterparty;
                    toJSON(message: _112.Counterparty): unknown;
                    fromPartial(object: Partial<_112.Counterparty>): _112.Counterparty;
                };
                ClientPaths: {
                    encode(message: _112.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ClientPaths;
                    fromJSON(object: any): _112.ClientPaths;
                    toJSON(message: _112.ClientPaths): unknown;
                    fromPartial(object: Partial<_112.ClientPaths>): _112.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _112.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ConnectionPaths;
                    fromJSON(object: any): _112.ConnectionPaths;
                    toJSON(message: _112.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_112.ConnectionPaths>): _112.ConnectionPaths;
                };
                Version: {
                    encode(message: _112.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Version;
                    fromJSON(object: any): _112.Version;
                    toJSON(message: _112.Version): unknown;
                    fromPartial(object: Partial<_112.Version>): _112.Version;
                };
                Params: {
                    encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                    fromJSON(object: any): _112.Params;
                    toJSON(message: _112.Params): unknown;
                    fromPartial(object: Partial<_112.Params>): _112.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _116.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.GenesisState;
                    fromJSON(object: any): _116.GenesisState;
                    toJSON(message: _116.GenesisState): unknown;
                    fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _117.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ClientState;
                    fromJSON(object: any): _117.ClientState;
                    toJSON(message: _117.ClientState): unknown;
                    fromPartial(object: Partial<_117.ClientState>): _117.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _118.DataType;
                dataTypeToJSON(object: _118.DataType): string;
                DataType: typeof _118.DataType;
                DataTypeSDKType: typeof _118.DataTypeSDKType;
                ClientState: {
                    encode(message: _118.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ClientState;
                    fromJSON(object: any): _118.ClientState;
                    toJSON(message: _118.ClientState): unknown;
                    fromPartial(object: Partial<_118.ClientState>): _118.ClientState;
                };
                ConsensusState: {
                    encode(message: _118.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConsensusState;
                    fromJSON(object: any): _118.ConsensusState;
                    toJSON(message: _118.ConsensusState): unknown;
                    fromPartial(object: Partial<_118.ConsensusState>): _118.ConsensusState;
                };
                Header: {
                    encode(message: _118.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Header;
                    fromJSON(object: any): _118.Header;
                    toJSON(message: _118.Header): unknown;
                    fromPartial(object: Partial<_118.Header>): _118.Header;
                };
                Misbehaviour: {
                    encode(message: _118.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Misbehaviour;
                    fromJSON(object: any): _118.Misbehaviour;
                    toJSON(message: _118.Misbehaviour): unknown;
                    fromPartial(object: Partial<_118.Misbehaviour>): _118.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _118.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.SignatureAndData;
                    fromJSON(object: any): _118.SignatureAndData;
                    toJSON(message: _118.SignatureAndData): unknown;
                    fromPartial(object: Partial<_118.SignatureAndData>): _118.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _118.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.TimestampedSignatureData;
                    fromJSON(object: any): _118.TimestampedSignatureData;
                    toJSON(message: _118.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_118.TimestampedSignatureData>): _118.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _118.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.SignBytes;
                    fromJSON(object: any): _118.SignBytes;
                    toJSON(message: _118.SignBytes): unknown;
                    fromPartial(object: Partial<_118.SignBytes>): _118.SignBytes;
                };
                HeaderData: {
                    encode(message: _118.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.HeaderData;
                    fromJSON(object: any): _118.HeaderData;
                    toJSON(message: _118.HeaderData): unknown;
                    fromPartial(object: Partial<_118.HeaderData>): _118.HeaderData;
                };
                ClientStateData: {
                    encode(message: _118.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ClientStateData;
                    fromJSON(object: any): _118.ClientStateData;
                    toJSON(message: _118.ClientStateData): unknown;
                    fromPartial(object: Partial<_118.ClientStateData>): _118.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _118.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConsensusStateData;
                    fromJSON(object: any): _118.ConsensusStateData;
                    toJSON(message: _118.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_118.ConsensusStateData>): _118.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _118.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ConnectionStateData;
                    fromJSON(object: any): _118.ConnectionStateData;
                    toJSON(message: _118.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_118.ConnectionStateData>): _118.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _118.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.ChannelStateData;
                    fromJSON(object: any): _118.ChannelStateData;
                    toJSON(message: _118.ChannelStateData): unknown;
                    fromPartial(object: Partial<_118.ChannelStateData>): _118.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _118.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketCommitmentData;
                    fromJSON(object: any): _118.PacketCommitmentData;
                    toJSON(message: _118.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_118.PacketCommitmentData>): _118.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _118.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketAcknowledgementData;
                    fromJSON(object: any): _118.PacketAcknowledgementData;
                    toJSON(message: _118.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_118.PacketAcknowledgementData>): _118.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _118.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.PacketReceiptAbsenceData;
                    fromJSON(object: any): _118.PacketReceiptAbsenceData;
                    toJSON(message: _118.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_118.PacketReceiptAbsenceData>): _118.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _118.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.NextSequenceRecvData;
                    fromJSON(object: any): _118.NextSequenceRecvData;
                    toJSON(message: _118.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_118.NextSequenceRecvData>): _118.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _119.DataType;
                dataTypeToJSON(object: _119.DataType): string;
                DataType: typeof _119.DataType;
                DataTypeSDKType: typeof _119.DataTypeSDKType;
                ClientState: {
                    encode(message: _119.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientState;
                    fromJSON(object: any): _119.ClientState;
                    toJSON(message: _119.ClientState): unknown;
                    fromPartial(object: Partial<_119.ClientState>): _119.ClientState;
                };
                ConsensusState: {
                    encode(message: _119.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusState;
                    fromJSON(object: any): _119.ConsensusState;
                    toJSON(message: _119.ConsensusState): unknown;
                    fromPartial(object: Partial<_119.ConsensusState>): _119.ConsensusState;
                };
                Header: {
                    encode(message: _119.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Header;
                    fromJSON(object: any): _119.Header;
                    toJSON(message: _119.Header): unknown;
                    fromPartial(object: Partial<_119.Header>): _119.Header;
                };
                Misbehaviour: {
                    encode(message: _119.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Misbehaviour;
                    fromJSON(object: any): _119.Misbehaviour;
                    toJSON(message: _119.Misbehaviour): unknown;
                    fromPartial(object: Partial<_119.Misbehaviour>): _119.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _119.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SignatureAndData;
                    fromJSON(object: any): _119.SignatureAndData;
                    toJSON(message: _119.SignatureAndData): unknown;
                    fromPartial(object: Partial<_119.SignatureAndData>): _119.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _119.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TimestampedSignatureData;
                    fromJSON(object: any): _119.TimestampedSignatureData;
                    toJSON(message: _119.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_119.TimestampedSignatureData>): _119.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _119.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.SignBytes;
                    fromJSON(object: any): _119.SignBytes;
                    toJSON(message: _119.SignBytes): unknown;
                    fromPartial(object: Partial<_119.SignBytes>): _119.SignBytes;
                };
                HeaderData: {
                    encode(message: _119.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.HeaderData;
                    fromJSON(object: any): _119.HeaderData;
                    toJSON(message: _119.HeaderData): unknown;
                    fromPartial(object: Partial<_119.HeaderData>): _119.HeaderData;
                };
                ClientStateData: {
                    encode(message: _119.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ClientStateData;
                    fromJSON(object: any): _119.ClientStateData;
                    toJSON(message: _119.ClientStateData): unknown;
                    fromPartial(object: Partial<_119.ClientStateData>): _119.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _119.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConsensusStateData;
                    fromJSON(object: any): _119.ConsensusStateData;
                    toJSON(message: _119.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_119.ConsensusStateData>): _119.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _119.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ConnectionStateData;
                    fromJSON(object: any): _119.ConnectionStateData;
                    toJSON(message: _119.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_119.ConnectionStateData>): _119.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _119.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ChannelStateData;
                    fromJSON(object: any): _119.ChannelStateData;
                    toJSON(message: _119.ChannelStateData): unknown;
                    fromPartial(object: Partial<_119.ChannelStateData>): _119.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _119.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketCommitmentData;
                    fromJSON(object: any): _119.PacketCommitmentData;
                    toJSON(message: _119.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_119.PacketCommitmentData>): _119.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _119.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketAcknowledgementData;
                    fromJSON(object: any): _119.PacketAcknowledgementData;
                    toJSON(message: _119.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_119.PacketAcknowledgementData>): _119.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _119.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.PacketReceiptAbsenceData;
                    fromJSON(object: any): _119.PacketReceiptAbsenceData;
                    toJSON(message: _119.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_119.PacketReceiptAbsenceData>): _119.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _119.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.NextSequenceRecvData;
                    fromJSON(object: any): _119.NextSequenceRecvData;
                    toJSON(message: _119.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_119.NextSequenceRecvData>): _119.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _120.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientState;
                    fromJSON(object: any): _120.ClientState;
                    toJSON(message: _120.ClientState): unknown;
                    fromPartial(object: Partial<_120.ClientState>): _120.ClientState;
                };
                ConsensusState: {
                    encode(message: _120.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConsensusState;
                    fromJSON(object: any): _120.ConsensusState;
                    toJSON(message: _120.ConsensusState): unknown;
                    fromPartial(object: Partial<_120.ConsensusState>): _120.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _120.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Misbehaviour;
                    fromJSON(object: any): _120.Misbehaviour;
                    toJSON(message: _120.Misbehaviour): unknown;
                    fromPartial(object: Partial<_120.Misbehaviour>): _120.Misbehaviour;
                };
                Header: {
                    encode(message: _120.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Header;
                    fromJSON(object: any): _120.Header;
                    toJSON(message: _120.Header): unknown;
                    fromPartial(object: Partial<_120.Header>): _120.Header;
                };
                Fraction: {
                    encode(message: _120.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Fraction;
                    fromJSON(object: any): _120.Fraction;
                    toJSON(message: _120.Fraction): unknown;
                    fromPartial(object: Partial<_120.Fraction>): _120.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _267.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _268.MsgClientImpl;
                    };
                    client: {
                        v1: _269.MsgClientImpl;
                    };
                    connection: {
                        v1: _270.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _91.QueryInterchainAccountRequest): Promise<_91.QueryInterchainAccountResponse>;
                                params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _93.QueryParamsRequest): Promise<_93.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _99.QueryDenomTraceRequest): Promise<_99.QueryDenomTraceResponse>;
                            denomTraces(request?: _99.QueryDenomTracesRequest): Promise<_99.QueryDenomTracesResponse>;
                            params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                            denomHash(request: _99.QueryDenomHashRequest): Promise<_99.QueryDenomHashResponse>;
                            escrowAddress(request: _99.QueryEscrowAddressRequest): Promise<_99.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _105.QueryChannelRequest): Promise<_105.QueryChannelResponse>;
                            channels(request?: _105.QueryChannelsRequest): Promise<_105.QueryChannelsResponse>;
                            connectionChannels(request: _105.QueryConnectionChannelsRequest): Promise<_105.QueryConnectionChannelsResponse>;
                            channelClientState(request: _105.QueryChannelClientStateRequest): Promise<_105.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _105.QueryChannelConsensusStateRequest): Promise<_105.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _105.QueryPacketCommitmentRequest): Promise<_105.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _105.QueryPacketCommitmentsRequest): Promise<_105.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _105.QueryPacketReceiptRequest): Promise<_105.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _105.QueryPacketAcknowledgementRequest): Promise<_105.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _105.QueryPacketAcknowledgementsRequest): Promise<_105.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _105.QueryUnreceivedPacketsRequest): Promise<_105.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _105.QueryUnreceivedAcksRequest): Promise<_105.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _105.QueryNextSequenceReceiveRequest): Promise<_105.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _109.QueryClientStateRequest): Promise<_109.QueryClientStateResponse>;
                            clientStates(request?: _109.QueryClientStatesRequest): Promise<_109.QueryClientStatesResponse>;
                            consensusState(request: _109.QueryConsensusStateRequest): Promise<_109.QueryConsensusStateResponse>;
                            consensusStates(request: _109.QueryConsensusStatesRequest): Promise<_109.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _109.QueryConsensusStateHeightsRequest): Promise<_109.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _109.QueryClientStatusRequest): Promise<_109.QueryClientStatusResponse>;
                            clientParams(request?: _109.QueryClientParamsRequest): Promise<_109.QueryClientParamsResponse>;
                            upgradedClientState(request?: _109.QueryUpgradedClientStateRequest): Promise<_109.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _109.QueryUpgradedConsensusStateRequest): Promise<_109.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _114.QueryConnectionRequest): Promise<_114.QueryConnectionResponse>;
                            connections(request?: _114.QueryConnectionsRequest): Promise<_114.QueryConnectionsResponse>;
                            clientConnections(request: _114.QueryClientConnectionsRequest): Promise<_114.QueryClientConnectionsResponse>;
                            connectionClientState(request: _114.QueryConnectionClientStateRequest): Promise<_114.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _114.QueryConnectionConsensusStateRequest): Promise<_114.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
