import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/kv/v1beta1/kv";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v1beta1/reflection";
import * as _19 from "./base/reflection/v2alpha1/reflection";
import * as _20 from "./base/snapshots/v1beta1/snapshot";
import * as _21 from "./base/store/v1beta1/commit_info";
import * as _22 from "./base/store/v1beta1/listening";
import * as _23 from "./base/store/v1beta1/snapshot";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./evidence/v1beta1/evidence";
import * as _39 from "./evidence/v1beta1/genesis";
import * as _40 from "./evidence/v1beta1/query";
import * as _41 from "./evidence/v1beta1/tx";
import * as _42 from "./feegrant/v1beta1/feegrant";
import * as _43 from "./feegrant/v1beta1/genesis";
import * as _44 from "./feegrant/v1beta1/query";
import * as _45 from "./feegrant/v1beta1/tx";
import * as _46 from "./genutil/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/gov";
import * as _49 from "./gov/v1beta1/query";
import * as _50 from "./gov/v1beta1/tx";
import * as _51 from "./mint/v1beta1/genesis";
import * as _52 from "./mint/v1beta1/mint";
import * as _53 from "./mint/v1beta1/query";
import * as _54 from "./params/v1beta1/params";
import * as _55 from "./params/v1beta1/query";
import * as _56 from "./slashing/v1beta1/genesis";
import * as _57 from "./slashing/v1beta1/query";
import * as _58 from "./slashing/v1beta1/slashing";
import * as _59 from "./slashing/v1beta1/tx";
import * as _60 from "./staking/v1beta1/authz";
import * as _61 from "./staking/v1beta1/genesis";
import * as _62 from "./staking/v1beta1/query";
import * as _63 from "./staking/v1beta1/staking";
import * as _64 from "./staking/v1beta1/tx";
import * as _65 from "./tx/signing/v1beta1/signing";
import * as _66 from "./tx/v1beta1/service";
import * as _67 from "./tx/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/query";
import * as _69 from "./upgrade/v1beta1/upgrade";
import * as _70 from "./vesting/v1beta1/tx";
import * as _71 from "./vesting/v1beta1/vesting";
import * as _224 from "./auth/v1beta1/query.rpc.Query";
import * as _225 from "./authz/v1beta1/query.rpc.Query";
import * as _226 from "./bank/v1beta1/query.rpc.Query";
import * as _227 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _228 from "./distribution/v1beta1/query.rpc.Query";
import * as _229 from "./evidence/v1beta1/query.rpc.Query";
import * as _230 from "./feegrant/v1beta1/query.rpc.Query";
import * as _231 from "./gov/v1beta1/query.rpc.Query";
import * as _232 from "./mint/v1beta1/query.rpc.Query";
import * as _233 from "./params/v1beta1/query.rpc.Query";
import * as _234 from "./slashing/v1beta1/query.rpc.Query";
import * as _235 from "./staking/v1beta1/query.rpc.Query";
import * as _236 from "./tx/v1beta1/service.rpc.Service";
import * as _237 from "./upgrade/v1beta1/query.rpc.Query";
import * as _238 from "./authz/v1beta1/tx.rpc.msg";
import * as _239 from "./bank/v1beta1/tx.rpc.msg";
import * as _240 from "./crisis/v1beta1/tx.rpc.msg";
import * as _241 from "./distribution/v1beta1/tx.rpc.msg";
import * as _242 from "./evidence/v1beta1/tx.rpc.msg";
import * as _243 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _244 from "./gov/v1beta1/tx.rpc.msg";
import * as _245 from "./slashing/v1beta1/tx.rpc.msg";
import * as _246 from "./staking/v1beta1/tx.rpc.msg";
import * as _247 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _4.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsRequest;
                fromJSON(object: any): _4.QueryAccountsRequest;
                toJSON(message: _4.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_4.QueryAccountsRequest>): _4.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _4.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsResponse;
                fromJSON(object: any): _4.QueryAccountsResponse;
                toJSON(message: _4.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_4.QueryAccountsResponse>): _4.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountRequest;
                fromJSON(object: any): _4.QueryAccountRequest;
                toJSON(message: _4.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_4.QueryAccountRequest>): _4.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountResponse;
                fromJSON(object: any): _4.QueryAccountResponse;
                toJSON(message: _4.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_4.QueryAccountResponse>): _4.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromJSON(_: any): _4.QueryParamsRequest;
                toJSON(_: _4.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromJSON(object: any): _4.QueryParamsResponse;
                toJSON(message: _4.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromJSON(object: any): _3.GenesisState;
                toJSON(message: _3.GenesisState): unknown;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
            BaseAccount: {
                encode(message: _2.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BaseAccount;
                fromJSON(object: any): _2.BaseAccount;
                toJSON(message: _2.BaseAccount): unknown;
                fromPartial(object: Partial<_2.BaseAccount>): _2.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _2.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleAccount;
                fromJSON(object: any): _2.ModuleAccount;
                toJSON(message: _2.ModuleAccount): unknown;
                fromPartial(object: Partial<_2.ModuleAccount>): _2.ModuleAccount;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _9.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _9.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _9.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _9.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrant;
                fromJSON(object: any): _9.MsgGrant;
                toJSON(message: _9.MsgGrant): unknown;
                fromPartial(object: Partial<_9.MsgGrant>): _9.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _9.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExecResponse;
                fromJSON(object: any): _9.MsgExecResponse;
                toJSON(message: _9.MsgExecResponse): unknown;
                fromPartial(object: Partial<_9.MsgExecResponse>): _9.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _9.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExec;
                fromJSON(object: any): _9.MsgExec;
                toJSON(message: _9.MsgExec): unknown;
                fromPartial(object: Partial<_9.MsgExec>): _9.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _9.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrantResponse;
                fromJSON(_: any): _9.MsgGrantResponse;
                toJSON(_: _9.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_9.MsgGrantResponse>): _9.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _9.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevoke;
                fromJSON(object: any): _9.MsgRevoke;
                toJSON(message: _9.MsgRevoke): unknown;
                fromPartial(object: Partial<_9.MsgRevoke>): _9.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _9.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevokeResponse;
                fromJSON(_: any): _9.MsgRevokeResponse;
                toJSON(_: _9.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_9.MsgRevokeResponse>): _9.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _8.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsRequest;
                fromJSON(object: any): _8.QueryGrantsRequest;
                toJSON(message: _8.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGrantsRequest>): _8.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _8.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsResponse;
                fromJSON(object: any): _8.QueryGrantsResponse;
                toJSON(message: _8.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGrantsResponse>): _8.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _8.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsRequest;
                fromJSON(object: any): _8.QueryGranterGrantsRequest;
                toJSON(message: _8.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGranterGrantsRequest>): _8.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _8.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsResponse;
                fromJSON(object: any): _8.QueryGranterGrantsResponse;
                toJSON(message: _8.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGranterGrantsResponse>): _8.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _8.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsRequest;
                fromJSON(object: any): _8.QueryGranteeGrantsRequest;
                toJSON(message: _8.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_8.QueryGranteeGrantsRequest>): _8.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _8.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsResponse;
                fromJSON(object: any): _8.QueryGranteeGrantsResponse;
                toJSON(message: _8.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_8.QueryGranteeGrantsResponse>): _8.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromJSON(object: any): _7.GenesisState;
                toJSON(message: _7.GenesisState): unknown;
                fromPartial(object: Partial<_7.GenesisState>): _7.GenesisState;
            };
            EventGrant: {
                encode(message: _6.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventGrant;
                fromJSON(object: any): _6.EventGrant;
                toJSON(message: _6.EventGrant): unknown;
                fromPartial(object: Partial<_6.EventGrant>): _6.EventGrant;
            };
            EventRevoke: {
                encode(message: _6.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventRevoke;
                fromJSON(object: any): _6.EventRevoke;
                toJSON(message: _6.EventRevoke): unknown;
                fromPartial(object: Partial<_6.EventRevoke>): _6.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _5.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenericAuthorization;
                fromJSON(object: any): _5.GenericAuthorization;
                toJSON(message: _5.GenericAuthorization): unknown;
                fromPartial(object: Partial<_5.GenericAuthorization>): _5.GenericAuthorization;
            };
            Grant: {
                encode(message: _5.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Grant;
                fromJSON(object: any): _5.Grant;
                toJSON(message: _5.Grant): unknown;
                fromPartial(object: Partial<_5.Grant>): _5.Grant;
            };
            GrantAuthorization: {
                encode(message: _5.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GrantAuthorization;
                fromJSON(object: any): _5.GrantAuthorization;
                toJSON(message: _5.GrantAuthorization): unknown;
                fromPartial(object: Partial<_5.GrantAuthorization>): _5.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _14.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _14.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _14.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSend;
                fromJSON(object: any): _14.MsgSend;
                toJSON(message: _14.MsgSend): unknown;
                fromPartial(object: Partial<_14.MsgSend>): _14.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _14.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSendResponse;
                fromJSON(_: any): _14.MsgSendResponse;
                toJSON(_: _14.MsgSendResponse): unknown;
                fromPartial(_: Partial<_14.MsgSendResponse>): _14.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _14.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSend;
                fromJSON(object: any): _14.MsgMultiSend;
                toJSON(message: _14.MsgMultiSend): unknown;
                fromPartial(object: Partial<_14.MsgMultiSend>): _14.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _14.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSendResponse;
                fromJSON(_: any): _14.MsgMultiSendResponse;
                toJSON(_: _14.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_14.MsgMultiSendResponse>): _14.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _13.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceRequest;
                fromJSON(object: any): _13.QueryBalanceRequest;
                toJSON(message: _13.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_13.QueryBalanceRequest>): _13.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _13.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceResponse;
                fromJSON(object: any): _13.QueryBalanceResponse;
                toJSON(message: _13.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_13.QueryBalanceResponse>): _13.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _13.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesRequest;
                fromJSON(object: any): _13.QueryAllBalancesRequest;
                toJSON(message: _13.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_13.QueryAllBalancesRequest>): _13.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _13.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesResponse;
                fromJSON(object: any): _13.QueryAllBalancesResponse;
                toJSON(message: _13.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_13.QueryAllBalancesResponse>): _13.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _13.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesRequest;
                fromJSON(object: any): _13.QuerySpendableBalancesRequest;
                toJSON(message: _13.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_13.QuerySpendableBalancesRequest>): _13.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _13.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesResponse;
                fromJSON(object: any): _13.QuerySpendableBalancesResponse;
                toJSON(message: _13.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_13.QuerySpendableBalancesResponse>): _13.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyRequest;
                fromJSON(object: any): _13.QueryTotalSupplyRequest;
                toJSON(message: _13.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_13.QueryTotalSupplyRequest>): _13.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyResponse;
                fromJSON(object: any): _13.QueryTotalSupplyResponse;
                toJSON(message: _13.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_13.QueryTotalSupplyResponse>): _13.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _13.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfRequest;
                fromJSON(object: any): _13.QuerySupplyOfRequest;
                toJSON(message: _13.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_13.QuerySupplyOfRequest>): _13.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _13.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfResponse;
                fromJSON(object: any): _13.QuerySupplyOfResponse;
                toJSON(message: _13.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_13.QuerySupplyOfResponse>): _13.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataRequest;
                fromJSON(object: any): _13.QueryDenomsMetadataRequest;
                toJSON(message: _13.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_13.QueryDenomsMetadataRequest>): _13.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataResponse;
                fromJSON(object: any): _13.QueryDenomsMetadataResponse;
                toJSON(message: _13.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_13.QueryDenomsMetadataResponse>): _13.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataRequest;
                fromJSON(object: any): _13.QueryDenomMetadataRequest;
                toJSON(message: _13.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_13.QueryDenomMetadataRequest>): _13.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataResponse;
                fromJSON(object: any): _13.QueryDenomMetadataResponse;
                toJSON(message: _13.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_13.QueryDenomMetadataResponse>): _13.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
            };
            Balance: {
                encode(message: _12.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Balance;
                fromJSON(object: any): _12.Balance;
                toJSON(message: _12.Balance): unknown;
                fromPartial(object: Partial<_12.Balance>): _12.Balance;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: Partial<_11.Params>): _11.Params;
            };
            SendEnabled: {
                encode(message: _11.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SendEnabled;
                fromJSON(object: any): _11.SendEnabled;
                toJSON(message: _11.SendEnabled): unknown;
                fromPartial(object: Partial<_11.SendEnabled>): _11.SendEnabled;
            };
            Input: {
                encode(message: _11.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Input;
                fromJSON(object: any): _11.Input;
                toJSON(message: _11.Input): unknown;
                fromPartial(object: Partial<_11.Input>): _11.Input;
            };
            Output: {
                encode(message: _11.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Output;
                fromJSON(object: any): _11.Output;
                toJSON(message: _11.Output): unknown;
                fromPartial(object: Partial<_11.Output>): _11.Output;
            };
            Supply: {
                encode(message: _11.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Supply;
                fromJSON(object: any): _11.Supply;
                toJSON(message: _11.Supply): unknown;
                fromPartial(object: Partial<_11.Supply>): _11.Supply;
            };
            DenomUnit: {
                encode(message: _11.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomUnit;
                fromJSON(object: any): _11.DenomUnit;
                toJSON(message: _11.DenomUnit): unknown;
                fromPartial(object: Partial<_11.DenomUnit>): _11.DenomUnit;
            };
            Metadata: {
                encode(message: _11.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Metadata;
                fromJSON(object: any): _11.Metadata;
                toJSON(message: _11.Metadata): unknown;
                fromPartial(object: Partial<_11.Metadata>): _11.Metadata;
            };
            SendAuthorization: {
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendAuthorization;
                fromJSON(object: any): _10.SendAuthorization;
                toJSON(message: _10.SendAuthorization): unknown;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _15.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxResponse;
                    fromJSON(object: any): _15.TxResponse;
                    toJSON(message: _15.TxResponse): unknown;
                    fromPartial(object: Partial<_15.TxResponse>): _15.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _15.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ABCIMessageLog;
                    fromJSON(object: any): _15.ABCIMessageLog;
                    toJSON(message: _15.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_15.ABCIMessageLog>): _15.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _15.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.StringEvent;
                    fromJSON(object: any): _15.StringEvent;
                    toJSON(message: _15.StringEvent): unknown;
                    fromPartial(object: Partial<_15.StringEvent>): _15.StringEvent;
                };
                Attribute: {
                    encode(message: _15.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Attribute;
                    fromJSON(object: any): _15.Attribute;
                    toJSON(message: _15.Attribute): unknown;
                    fromPartial(object: Partial<_15.Attribute>): _15.Attribute;
                };
                GasInfo: {
                    encode(message: _15.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GasInfo;
                    fromJSON(object: any): _15.GasInfo;
                    toJSON(message: _15.GasInfo): unknown;
                    fromPartial(object: Partial<_15.GasInfo>): _15.GasInfo;
                };
                Result: {
                    encode(message: _15.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Result;
                    fromJSON(object: any): _15.Result;
                    toJSON(message: _15.Result): unknown;
                    fromPartial(object: Partial<_15.Result>): _15.Result;
                };
                SimulationResponse: {
                    encode(message: _15.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SimulationResponse;
                    fromJSON(object: any): _15.SimulationResponse;
                    toJSON(message: _15.SimulationResponse): unknown;
                    fromPartial(object: Partial<_15.SimulationResponse>): _15.SimulationResponse;
                };
                MsgData: {
                    encode(message: _15.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgData;
                    fromJSON(object: any): _15.MsgData;
                    toJSON(message: _15.MsgData): unknown;
                    fromPartial(object: Partial<_15.MsgData>): _15.MsgData;
                };
                TxMsgData: {
                    encode(message: _15.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxMsgData;
                    fromJSON(object: any): _15.TxMsgData;
                    toJSON(message: _15.TxMsgData): unknown;
                    fromPartial(object: Partial<_15.TxMsgData>): _15.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _15.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SearchTxsResult;
                    fromJSON(object: any): _15.SearchTxsResult;
                    toJSON(message: _15.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_15.SearchTxsResult>): _15.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _16.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Pairs;
                    fromJSON(object: any): _16.Pairs;
                    toJSON(message: _16.Pairs): unknown;
                    fromPartial(object: Partial<_16.Pairs>): _16.Pairs;
                };
                Pair: {
                    encode(message: _16.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Pair;
                    fromJSON(object: any): _16.Pair;
                    toJSON(message: _16.Pair): unknown;
                    fromPartial(object: Partial<_16.Pair>): _16.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _17.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PageRequest;
                    fromJSON(object: any): _17.PageRequest;
                    toJSON(message: _17.PageRequest): unknown;
                    fromPartial(object: Partial<_17.PageRequest>): _17.PageRequest;
                };
                PageResponse: {
                    encode(message: _17.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PageResponse;
                    fromJSON(object: any): _17.PageResponse;
                    toJSON(message: _17.PageResponse): unknown;
                    fromPartial(object: Partial<_17.PageResponse>): _17.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _18.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ListAllInterfacesRequest;
                    fromJSON(_: any): _18.ListAllInterfacesRequest;
                    toJSON(_: _18.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_18.ListAllInterfacesRequest>): _18.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _18.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ListAllInterfacesResponse;
                    fromJSON(object: any): _18.ListAllInterfacesResponse;
                    toJSON(message: _18.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_18.ListAllInterfacesResponse>): _18.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _18.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ListImplementationsRequest;
                    fromJSON(object: any): _18.ListImplementationsRequest;
                    toJSON(message: _18.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_18.ListImplementationsRequest>): _18.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _18.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ListImplementationsResponse;
                    fromJSON(object: any): _18.ListImplementationsResponse;
                    toJSON(message: _18.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_18.ListImplementationsResponse>): _18.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _19.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.AppDescriptor;
                    fromJSON(object: any): _19.AppDescriptor;
                    toJSON(message: _19.AppDescriptor): unknown;
                    fromPartial(object: Partial<_19.AppDescriptor>): _19.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _19.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TxDescriptor;
                    fromJSON(object: any): _19.TxDescriptor;
                    toJSON(message: _19.TxDescriptor): unknown;
                    fromPartial(object: Partial<_19.TxDescriptor>): _19.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _19.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.AuthnDescriptor;
                    fromJSON(object: any): _19.AuthnDescriptor;
                    toJSON(message: _19.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_19.AuthnDescriptor>): _19.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _19.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SigningModeDescriptor;
                    fromJSON(object: any): _19.SigningModeDescriptor;
                    toJSON(message: _19.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_19.SigningModeDescriptor>): _19.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _19.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ChainDescriptor;
                    fromJSON(object: any): _19.ChainDescriptor;
                    toJSON(message: _19.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_19.ChainDescriptor>): _19.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _19.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.CodecDescriptor;
                    fromJSON(object: any): _19.CodecDescriptor;
                    toJSON(message: _19.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_19.CodecDescriptor>): _19.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _19.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InterfaceDescriptor;
                    fromJSON(object: any): _19.InterfaceDescriptor;
                    toJSON(message: _19.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_19.InterfaceDescriptor>): _19.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _19.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _19.InterfaceImplementerDescriptor;
                    toJSON(message: _19.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_19.InterfaceImplementerDescriptor>): _19.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _19.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _19.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _19.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_19.InterfaceAcceptingMessageDescriptor>): _19.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _19.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ConfigurationDescriptor;
                    fromJSON(object: any): _19.ConfigurationDescriptor;
                    toJSON(message: _19.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_19.ConfigurationDescriptor>): _19.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _19.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgDescriptor;
                    fromJSON(object: any): _19.MsgDescriptor;
                    toJSON(message: _19.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_19.MsgDescriptor>): _19.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _19.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _19.GetAuthnDescriptorRequest;
                    toJSON(_: _19.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetAuthnDescriptorRequest>): _19.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _19.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _19.GetAuthnDescriptorResponse;
                    toJSON(message: _19.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetAuthnDescriptorResponse>): _19.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _19.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetChainDescriptorRequest;
                    fromJSON(_: any): _19.GetChainDescriptorRequest;
                    toJSON(_: _19.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetChainDescriptorRequest>): _19.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _19.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetChainDescriptorResponse;
                    fromJSON(object: any): _19.GetChainDescriptorResponse;
                    toJSON(message: _19.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetChainDescriptorResponse>): _19.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _19.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetCodecDescriptorRequest;
                    fromJSON(_: any): _19.GetCodecDescriptorRequest;
                    toJSON(_: _19.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetCodecDescriptorRequest>): _19.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _19.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetCodecDescriptorResponse;
                    fromJSON(object: any): _19.GetCodecDescriptorResponse;
                    toJSON(message: _19.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetCodecDescriptorResponse>): _19.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _19.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _19.GetConfigurationDescriptorRequest;
                    toJSON(_: _19.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetConfigurationDescriptorRequest>): _19.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _19.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _19.GetConfigurationDescriptorResponse;
                    toJSON(message: _19.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetConfigurationDescriptorResponse>): _19.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _19.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _19.GetQueryServicesDescriptorRequest;
                    toJSON(_: _19.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetQueryServicesDescriptorRequest>): _19.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _19.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _19.GetQueryServicesDescriptorResponse;
                    toJSON(message: _19.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetQueryServicesDescriptorResponse>): _19.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _19.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetTxDescriptorRequest;
                    fromJSON(_: any): _19.GetTxDescriptorRequest;
                    toJSON(_: _19.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_19.GetTxDescriptorRequest>): _19.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _19.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GetTxDescriptorResponse;
                    fromJSON(object: any): _19.GetTxDescriptorResponse;
                    toJSON(message: _19.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_19.GetTxDescriptorResponse>): _19.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _19.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryServicesDescriptor;
                    fromJSON(object: any): _19.QueryServicesDescriptor;
                    toJSON(message: _19.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_19.QueryServicesDescriptor>): _19.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _19.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryServiceDescriptor;
                    fromJSON(object: any): _19.QueryServiceDescriptor;
                    toJSON(message: _19.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_19.QueryServiceDescriptor>): _19.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _19.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.QueryMethodDescriptor;
                    fromJSON(object: any): _19.QueryMethodDescriptor;
                    toJSON(message: _19.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_19.QueryMethodDescriptor>): _19.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _20.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Snapshot;
                    fromJSON(object: any): _20.Snapshot;
                    toJSON(message: _20.Snapshot): unknown;
                    fromPartial(object: Partial<_20.Snapshot>): _20.Snapshot;
                };
                Metadata: {
                    encode(message: _20.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Metadata;
                    fromJSON(object: any): _20.Metadata;
                    toJSON(message: _20.Metadata): unknown;
                    fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
                };
                SnapshotItem: {
                    encode(message: _20.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SnapshotItem;
                    fromJSON(object: any): _20.SnapshotItem;
                    toJSON(message: _20.SnapshotItem): unknown;
                    fromPartial(object: Partial<_20.SnapshotItem>): _20.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _20.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SnapshotStoreItem;
                    fromJSON(object: any): _20.SnapshotStoreItem;
                    toJSON(message: _20.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_20.SnapshotStoreItem>): _20.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _20.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SnapshotIAVLItem;
                    fromJSON(object: any): _20.SnapshotIAVLItem;
                    toJSON(message: _20.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_20.SnapshotIAVLItem>): _20.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _20.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SnapshotExtensionMeta;
                    fromJSON(object: any): _20.SnapshotExtensionMeta;
                    toJSON(message: _20.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_20.SnapshotExtensionMeta>): _20.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _20.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SnapshotExtensionPayload;
                    fromJSON(object: any): _20.SnapshotExtensionPayload;
                    toJSON(message: _20.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_20.SnapshotExtensionPayload>): _20.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromJSON(object: any): _23.SnapshotItem;
                    toJSON(message: _23.SnapshotItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromJSON(object: any): _23.SnapshotStoreItem;
                    toJSON(message: _23.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromJSON(object: any): _23.SnapshotIAVLItem;
                    toJSON(message: _23.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                StoreKVPair: {
                    encode(message: _22.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.StoreKVPair;
                    fromJSON(object: any): _22.StoreKVPair;
                    toJSON(message: _22.StoreKVPair): unknown;
                    fromPartial(object: Partial<_22.StoreKVPair>): _22.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _21.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.CommitInfo;
                    fromJSON(object: any): _21.CommitInfo;
                    toJSON(message: _21.CommitInfo): unknown;
                    fromPartial(object: Partial<_21.CommitInfo>): _21.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _21.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.StoreInfo;
                    fromJSON(object: any): _21.StoreInfo;
                    toJSON(message: _21.StoreInfo): unknown;
                    fromPartial(object: Partial<_21.StoreInfo>): _21.StoreInfo;
                };
                CommitID: {
                    encode(message: _21.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.CommitID;
                    fromJSON(object: any): _21.CommitID;
                    toJSON(message: _21.CommitID): unknown;
                    fromPartial(object: Partial<_21.CommitID>): _21.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _227.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                    getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                    getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                    getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _24.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _24.GetValidatorSetByHeightRequest;
                    toJSON(message: _24.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightRequest>): _24.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _24.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _24.GetValidatorSetByHeightResponse;
                    toJSON(message: _24.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightResponse>): _24.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _24.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _24.GetLatestValidatorSetRequest;
                    toJSON(message: _24.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetRequest>): _24.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _24.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _24.GetLatestValidatorSetResponse;
                    toJSON(message: _24.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetResponse>): _24.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _24.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Validator;
                    fromJSON(object: any): _24.Validator;
                    toJSON(message: _24.Validator): unknown;
                    fromPartial(object: Partial<_24.Validator>): _24.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _24.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetBlockByHeightRequest;
                    fromJSON(object: any): _24.GetBlockByHeightRequest;
                    toJSON(message: _24.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_24.GetBlockByHeightRequest>): _24.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _24.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetBlockByHeightResponse;
                    fromJSON(object: any): _24.GetBlockByHeightResponse;
                    toJSON(message: _24.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_24.GetBlockByHeightResponse>): _24.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _24.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestBlockRequest;
                    fromJSON(_: any): _24.GetLatestBlockRequest;
                    toJSON(_: _24.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_24.GetLatestBlockRequest>): _24.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _24.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestBlockResponse;
                    fromJSON(object: any): _24.GetLatestBlockResponse;
                    toJSON(message: _24.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_24.GetLatestBlockResponse>): _24.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _24.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetSyncingRequest;
                    fromJSON(_: any): _24.GetSyncingRequest;
                    toJSON(_: _24.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_24.GetSyncingRequest>): _24.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _24.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetSyncingResponse;
                    fromJSON(object: any): _24.GetSyncingResponse;
                    toJSON(message: _24.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_24.GetSyncingResponse>): _24.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _24.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetNodeInfoRequest;
                    fromJSON(_: any): _24.GetNodeInfoRequest;
                    toJSON(_: _24.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_24.GetNodeInfoRequest>): _24.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _24.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetNodeInfoResponse;
                    fromJSON(object: any): _24.GetNodeInfoResponse;
                    toJSON(message: _24.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_24.GetNodeInfoResponse>): _24.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _24.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.VersionInfo;
                    fromJSON(object: any): _24.VersionInfo;
                    toJSON(message: _24.VersionInfo): unknown;
                    fromPartial(object: Partial<_24.VersionInfo>): _24.VersionInfo;
                };
                Module: {
                    encode(message: _24.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Module;
                    fromJSON(object: any): _24.Module;
                    toJSON(message: _24.Module): unknown;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _25.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Coin;
                fromJSON(object: any): _25.Coin;
                toJSON(message: _25.Coin): unknown;
                fromPartial(object: Partial<_25.Coin>): _25.Coin;
            };
            DecCoin: {
                encode(message: _25.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DecCoin;
                fromJSON(object: any): _25.DecCoin;
                toJSON(message: _25.DecCoin): unknown;
                fromPartial(object: Partial<_25.DecCoin>): _25.DecCoin;
            };
            IntProto: {
                encode(message: _25.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.IntProto;
                fromJSON(object: any): _25.IntProto;
                toJSON(message: _25.IntProto): unknown;
                fromPartial(object: Partial<_25.IntProto>): _25.IntProto;
            };
            DecProto: {
                encode(message: _25.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DecProto;
                fromJSON(object: any): _25.DecProto;
                toJSON(message: _25.DecProto): unknown;
                fromPartial(object: Partial<_25.DecProto>): _25.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _27.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisOwners;
                fromJSON(object: any): _27.GenesisOwners;
                toJSON(message: _27.GenesisOwners): unknown;
                fromPartial(object: Partial<_27.GenesisOwners>): _27.GenesisOwners;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): unknown;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            Capability: {
                encode(message: _26.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Capability;
                fromJSON(object: any): _26.Capability;
                toJSON(message: _26.Capability): unknown;
                fromPartial(object: Partial<_26.Capability>): _26.Capability;
            };
            Owner: {
                encode(message: _26.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Owner;
                fromJSON(object: any): _26.Owner;
                toJSON(message: _26.Owner): unknown;
                fromPartial(object: Partial<_26.Owner>): _26.Owner;
            };
            CapabilityOwners: {
                encode(message: _26.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CapabilityOwners;
                fromJSON(object: any): _26.CapabilityOwners;
                toJSON(message: _26.CapabilityOwners): unknown;
                fromPartial(object: Partial<_26.CapabilityOwners>): _26.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _29.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _29.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _29.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _29.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _29.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVerifyInvariant;
                fromJSON(object: any): _29.MsgVerifyInvariant;
                toJSON(message: _29.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_29.MsgVerifyInvariant>): _29.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _29.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVerifyInvariantResponse;
                fromJSON(_: any): _29.MsgVerifyInvariantResponse;
                toJSON(_: _29.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_29.MsgVerifyInvariantResponse>): _29.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromJSON(object: any): _28.GenesisState;
                toJSON(message: _28.GenesisState): unknown;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PubKey;
                fromJSON(object: any): _30.PubKey;
                toJSON(message: _30.PubKey): unknown;
                fromPartial(object: Partial<_30.PubKey>): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PrivKey;
                fromJSON(object: any): _30.PrivKey;
                toJSON(message: _30.PrivKey): unknown;
                fromPartial(object: Partial<_30.PrivKey>): _30.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _31.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.LegacyAminoPubKey;
                fromJSON(object: any): _31.LegacyAminoPubKey;
                toJSON(message: _31.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_31.LegacyAminoPubKey>): _31.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromJSON(object: any): _32.PubKey;
                toJSON(message: _32.PubKey): unknown;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromJSON(object: any): _32.PrivKey;
                toJSON(message: _32.PrivKey): unknown;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _33.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PubKey;
                fromJSON(object: any): _33.PubKey;
                toJSON(message: _33.PubKey): unknown;
                fromPartial(object: Partial<_33.PubKey>): _33.PubKey;
            };
            PrivKey: {
                encode(message: _33.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.PrivKey;
                fromJSON(object: any): _33.PrivKey;
                toJSON(message: _33.PrivKey): unknown;
                fromPartial(object: Partial<_33.PrivKey>): _33.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _37.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _37.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _37.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _37.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _37.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _37.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _37.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _37.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _37.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _37.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _37.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _37.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _37.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _37.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _37.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _37.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _37.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSetWithdrawAddress;
                fromJSON(object: any): _37.MsgSetWithdrawAddress;
                toJSON(message: _37.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_37.MsgSetWithdrawAddress>): _37.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _37.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _37.MsgSetWithdrawAddressResponse;
                toJSON(_: _37.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_37.MsgSetWithdrawAddressResponse>): _37.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _37.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _37.MsgWithdrawDelegatorReward;
                toJSON(message: _37.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_37.MsgWithdrawDelegatorReward>): _37.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _37.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawDelegatorRewardResponse;
                fromJSON(_: any): _37.MsgWithdrawDelegatorRewardResponse;
                toJSON(_: _37.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(_: Partial<_37.MsgWithdrawDelegatorRewardResponse>): _37.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _37.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _37.MsgWithdrawValidatorCommission;
                toJSON(message: _37.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_37.MsgWithdrawValidatorCommission>): _37.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _37.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgWithdrawValidatorCommissionResponse;
                fromJSON(_: any): _37.MsgWithdrawValidatorCommissionResponse;
                toJSON(_: _37.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(_: Partial<_37.MsgWithdrawValidatorCommissionResponse>): _37.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _37.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgFundCommunityPool;
                fromJSON(object: any): _37.MsgFundCommunityPool;
                toJSON(message: _37.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_37.MsgFundCommunityPool>): _37.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _37.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _37.MsgFundCommunityPoolResponse;
                toJSON(_: _37.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_37.MsgFundCommunityPoolResponse>): _37.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _36.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _36.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsRequest>): _36.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _36.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _36.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _36.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_36.QueryValidatorOutstandingRewardsResponse>): _36.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _36.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorCommissionRequest;
                fromJSON(object: any): _36.QueryValidatorCommissionRequest;
                toJSON(message: _36.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_36.QueryValidatorCommissionRequest>): _36.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _36.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorCommissionResponse;
                fromJSON(object: any): _36.QueryValidatorCommissionResponse;
                toJSON(message: _36.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_36.QueryValidatorCommissionResponse>): _36.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _36.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorSlashesRequest;
                fromJSON(object: any): _36.QueryValidatorSlashesRequest;
                toJSON(message: _36.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_36.QueryValidatorSlashesRequest>): _36.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _36.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorSlashesResponse;
                fromJSON(object: any): _36.QueryValidatorSlashesResponse;
                toJSON(message: _36.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_36.QueryValidatorSlashesResponse>): _36.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _36.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRewardsRequest;
                fromJSON(object: any): _36.QueryDelegationRewardsRequest;
                toJSON(message: _36.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_36.QueryDelegationRewardsRequest>): _36.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _36.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRewardsResponse;
                fromJSON(object: any): _36.QueryDelegationRewardsResponse;
                toJSON(message: _36.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_36.QueryDelegationRewardsResponse>): _36.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _36.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsRequest;
                toJSON(message: _36.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsRequest>): _36.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _36.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _36.QueryDelegationTotalRewardsResponse;
                toJSON(message: _36.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_36.QueryDelegationTotalRewardsResponse>): _36.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _36.QueryDelegatorValidatorsRequest;
                toJSON(message: _36.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsRequest>): _36.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _36.QueryDelegatorValidatorsResponse;
                toJSON(message: _36.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsResponse>): _36.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _36.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _36.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressRequest>): _36.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _36.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _36.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _36.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_36.QueryDelegatorWithdrawAddressResponse>): _36.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _36.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryCommunityPoolRequest;
                fromJSON(_: any): _36.QueryCommunityPoolRequest;
                toJSON(_: _36.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_36.QueryCommunityPoolRequest>): _36.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _36.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryCommunityPoolResponse;
                fromJSON(object: any): _36.QueryCommunityPoolResponse;
                toJSON(message: _36.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_36.QueryCommunityPoolResponse>): _36.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _35.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DelegatorWithdrawInfo;
                fromJSON(object: any): _35.DelegatorWithdrawInfo;
                toJSON(message: _35.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_35.DelegatorWithdrawInfo>): _35.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _35.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _35.ValidatorOutstandingRewardsRecord;
                toJSON(message: _35.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_35.ValidatorOutstandingRewardsRecord>): _35.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _35.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _35.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _35.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_35.ValidatorAccumulatedCommissionRecord>): _35.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _35.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _35.ValidatorHistoricalRewardsRecord;
                toJSON(message: _35.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_35.ValidatorHistoricalRewardsRecord>): _35.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _35.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _35.ValidatorCurrentRewardsRecord;
                toJSON(message: _35.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_35.ValidatorCurrentRewardsRecord>): _35.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _35.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.DelegatorStartingInfoRecord;
                fromJSON(object: any): _35.DelegatorStartingInfoRecord;
                toJSON(message: _35.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_35.DelegatorStartingInfoRecord>): _35.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _35.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorSlashEventRecord;
                fromJSON(object: any): _35.ValidatorSlashEventRecord;
                toJSON(message: _35.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_35.ValidatorSlashEventRecord>): _35.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): unknown;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromJSON(object: any): _34.Params;
                toJSON(message: _34.Params): unknown;
                fromPartial(object: Partial<_34.Params>): _34.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _34.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorHistoricalRewards;
                fromJSON(object: any): _34.ValidatorHistoricalRewards;
                toJSON(message: _34.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewards>): _34.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _34.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorCurrentRewards;
                fromJSON(object: any): _34.ValidatorCurrentRewards;
                toJSON(message: _34.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_34.ValidatorCurrentRewards>): _34.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _34.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorAccumulatedCommission;
                fromJSON(object: any): _34.ValidatorAccumulatedCommission;
                toJSON(message: _34.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommission>): _34.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _34.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorOutstandingRewards;
                fromJSON(object: any): _34.ValidatorOutstandingRewards;
                toJSON(message: _34.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewards>): _34.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _34.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEvent;
                fromJSON(object: any): _34.ValidatorSlashEvent;
                toJSON(message: _34.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_34.ValidatorSlashEvent>): _34.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _34.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEvents;
                fromJSON(object: any): _34.ValidatorSlashEvents;
                toJSON(message: _34.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_34.ValidatorSlashEvents>): _34.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _34.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.FeePool;
                fromJSON(object: any): _34.FeePool;
                toJSON(message: _34.FeePool): unknown;
                fromPartial(object: Partial<_34.FeePool>): _34.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _34.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommunityPoolSpendProposal;
                fromJSON(object: any): _34.CommunityPoolSpendProposal;
                toJSON(message: _34.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposal>): _34.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _34.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorStartingInfo;
                fromJSON(object: any): _34.DelegatorStartingInfo;
                toJSON(message: _34.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_34.DelegatorStartingInfo>): _34.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _34.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegationDelegatorReward;
                fromJSON(object: any): _34.DelegationDelegatorReward;
                toJSON(message: _34.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_34.DelegationDelegatorReward>): _34.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _34.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _34.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _34.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_34.CommunityPoolSpendProposalWithDeposit>): _34.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _41.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _41.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _41.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _41.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _41.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSubmitEvidence;
                fromJSON(object: any): _41.MsgSubmitEvidence;
                toJSON(message: _41.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_41.MsgSubmitEvidence>): _41.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _41.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _41.MsgSubmitEvidenceResponse;
                toJSON(message: _41.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_41.MsgSubmitEvidenceResponse>): _41.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _40.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryEvidenceRequest;
                fromJSON(object: any): _40.QueryEvidenceRequest;
                toJSON(message: _40.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_40.QueryEvidenceRequest>): _40.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _40.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryEvidenceResponse;
                fromJSON(object: any): _40.QueryEvidenceResponse;
                toJSON(message: _40.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_40.QueryEvidenceResponse>): _40.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _40.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryAllEvidenceRequest;
                fromJSON(object: any): _40.QueryAllEvidenceRequest;
                toJSON(message: _40.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_40.QueryAllEvidenceRequest>): _40.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _40.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryAllEvidenceResponse;
                fromJSON(object: any): _40.QueryAllEvidenceResponse;
                toJSON(message: _40.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_40.QueryAllEvidenceResponse>): _40.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromJSON(object: any): _39.GenesisState;
                toJSON(message: _39.GenesisState): unknown;
                fromPartial(object: Partial<_39.GenesisState>): _39.GenesisState;
            };
            Equivocation: {
                encode(message: _38.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Equivocation;
                fromJSON(object: any): _38.Equivocation;
                toJSON(message: _38.Equivocation): unknown;
                fromPartial(object: Partial<_38.Equivocation>): _38.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _45.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _45.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _45.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _45.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _45.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _45.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _45.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _45.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _45.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgGrantAllowance;
                fromJSON(object: any): _45.MsgGrantAllowance;
                toJSON(message: _45.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_45.MsgGrantAllowance>): _45.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _45.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgGrantAllowanceResponse;
                fromJSON(_: any): _45.MsgGrantAllowanceResponse;
                toJSON(_: _45.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_45.MsgGrantAllowanceResponse>): _45.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _45.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgRevokeAllowance;
                fromJSON(object: any): _45.MsgRevokeAllowance;
                toJSON(message: _45.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_45.MsgRevokeAllowance>): _45.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _45.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _45.MsgRevokeAllowanceResponse;
                toJSON(_: _45.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_45.MsgRevokeAllowanceResponse>): _45.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _44.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowanceRequest;
                fromJSON(object: any): _44.QueryAllowanceRequest;
                toJSON(message: _44.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_44.QueryAllowanceRequest>): _44.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _44.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowanceResponse;
                fromJSON(object: any): _44.QueryAllowanceResponse;
                toJSON(message: _44.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_44.QueryAllowanceResponse>): _44.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _44.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowancesRequest;
                fromJSON(object: any): _44.QueryAllowancesRequest;
                toJSON(message: _44.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_44.QueryAllowancesRequest>): _44.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _44.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowancesResponse;
                fromJSON(object: any): _44.QueryAllowancesResponse;
                toJSON(message: _44.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_44.QueryAllowancesResponse>): _44.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _44.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _44.QueryAllowancesByGranterRequest;
                toJSON(message: _44.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterRequest>): _44.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _44.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _44.QueryAllowancesByGranterResponse;
                toJSON(message: _44.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_44.QueryAllowancesByGranterResponse>): _44.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _43.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GenesisState;
                fromJSON(object: any): _43.GenesisState;
                toJSON(message: _43.GenesisState): unknown;
                fromPartial(object: Partial<_43.GenesisState>): _43.GenesisState;
            };
            BasicAllowance: {
                encode(message: _42.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.BasicAllowance;
                fromJSON(object: any): _42.BasicAllowance;
                toJSON(message: _42.BasicAllowance): unknown;
                fromPartial(object: Partial<_42.BasicAllowance>): _42.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _42.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PeriodicAllowance;
                fromJSON(object: any): _42.PeriodicAllowance;
                toJSON(message: _42.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_42.PeriodicAllowance>): _42.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _42.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.AllowedMsgAllowance;
                fromJSON(object: any): _42.AllowedMsgAllowance;
                toJSON(message: _42.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_42.AllowedMsgAllowance>): _42.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _42.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Grant;
                fromJSON(object: any): _42.Grant;
                toJSON(message: _42.Grant): unknown;
                fromPartial(object: Partial<_42.Grant>): _42.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _50.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _50.MsgSubmitProposal;
                    };
                    vote(value: _50.MsgVote): {
                        typeUrl: string;
                        value: _50.MsgVote;
                    };
                    voteWeighted(value: _50.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _50.MsgVoteWeighted;
                    };
                    deposit(value: _50.MsgDeposit): {
                        typeUrl: string;
                        value: _50.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _50.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _50.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _50.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _50.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _50.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _50.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _50.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _50.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _50.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSubmitProposal;
                fromJSON(object: any): _50.MsgSubmitProposal;
                toJSON(message: _50.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_50.MsgSubmitProposal>): _50.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _50.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSubmitProposalResponse;
                fromJSON(object: any): _50.MsgSubmitProposalResponse;
                toJSON(message: _50.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_50.MsgSubmitProposalResponse>): _50.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _50.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVote;
                fromJSON(object: any): _50.MsgVote;
                toJSON(message: _50.MsgVote): unknown;
                fromPartial(object: Partial<_50.MsgVote>): _50.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _50.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVoteResponse;
                fromJSON(_: any): _50.MsgVoteResponse;
                toJSON(_: _50.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_50.MsgVoteResponse>): _50.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _50.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVoteWeighted;
                fromJSON(object: any): _50.MsgVoteWeighted;
                toJSON(message: _50.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_50.MsgVoteWeighted>): _50.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _50.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgVoteWeightedResponse;
                fromJSON(_: any): _50.MsgVoteWeightedResponse;
                toJSON(_: _50.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_50.MsgVoteWeightedResponse>): _50.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _50.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgDeposit;
                fromJSON(object: any): _50.MsgDeposit;
                toJSON(message: _50.MsgDeposit): unknown;
                fromPartial(object: Partial<_50.MsgDeposit>): _50.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _50.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgDepositResponse;
                fromJSON(_: any): _50.MsgDepositResponse;
                toJSON(_: _50.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_50.MsgDepositResponse>): _50.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _49.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryProposalRequest;
                fromJSON(object: any): _49.QueryProposalRequest;
                toJSON(message: _49.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_49.QueryProposalRequest>): _49.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _49.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryProposalResponse;
                fromJSON(object: any): _49.QueryProposalResponse;
                toJSON(message: _49.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_49.QueryProposalResponse>): _49.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _49.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryProposalsRequest;
                fromJSON(object: any): _49.QueryProposalsRequest;
                toJSON(message: _49.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_49.QueryProposalsRequest>): _49.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _49.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryProposalsResponse;
                fromJSON(object: any): _49.QueryProposalsResponse;
                toJSON(message: _49.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_49.QueryProposalsResponse>): _49.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _49.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryVoteRequest;
                fromJSON(object: any): _49.QueryVoteRequest;
                toJSON(message: _49.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_49.QueryVoteRequest>): _49.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _49.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryVoteResponse;
                fromJSON(object: any): _49.QueryVoteResponse;
                toJSON(message: _49.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_49.QueryVoteResponse>): _49.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _49.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryVotesRequest;
                fromJSON(object: any): _49.QueryVotesRequest;
                toJSON(message: _49.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_49.QueryVotesRequest>): _49.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _49.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryVotesResponse;
                fromJSON(object: any): _49.QueryVotesResponse;
                toJSON(message: _49.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_49.QueryVotesResponse>): _49.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsRequest;
                fromJSON(object: any): _49.QueryParamsRequest;
                toJSON(message: _49.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_49.QueryParamsRequest>): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsResponse;
                fromJSON(object: any): _49.QueryParamsResponse;
                toJSON(message: _49.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_49.QueryParamsResponse>): _49.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _49.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDepositRequest;
                fromJSON(object: any): _49.QueryDepositRequest;
                toJSON(message: _49.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_49.QueryDepositRequest>): _49.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _49.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDepositResponse;
                fromJSON(object: any): _49.QueryDepositResponse;
                toJSON(message: _49.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_49.QueryDepositResponse>): _49.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _49.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDepositsRequest;
                fromJSON(object: any): _49.QueryDepositsRequest;
                toJSON(message: _49.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_49.QueryDepositsRequest>): _49.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _49.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDepositsResponse;
                fromJSON(object: any): _49.QueryDepositsResponse;
                toJSON(message: _49.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_49.QueryDepositsResponse>): _49.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _49.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryTallyResultRequest;
                fromJSON(object: any): _49.QueryTallyResultRequest;
                toJSON(message: _49.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_49.QueryTallyResultRequest>): _49.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _49.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryTallyResultResponse;
                fromJSON(object: any): _49.QueryTallyResultResponse;
                toJSON(message: _49.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_49.QueryTallyResultResponse>): _49.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _48.VoteOption;
            voteOptionToJSON(object: _48.VoteOption): string;
            proposalStatusFromJSON(object: any): _48.ProposalStatus;
            proposalStatusToJSON(object: _48.ProposalStatus): string;
            VoteOption: typeof _48.VoteOption;
            VoteOptionSDKType: typeof _48.VoteOptionSDKType;
            ProposalStatus: typeof _48.ProposalStatus;
            ProposalStatusSDKType: typeof _48.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _48.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.WeightedVoteOption;
                fromJSON(object: any): _48.WeightedVoteOption;
                toJSON(message: _48.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_48.WeightedVoteOption>): _48.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _48.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TextProposal;
                fromJSON(object: any): _48.TextProposal;
                toJSON(message: _48.TextProposal): unknown;
                fromPartial(object: Partial<_48.TextProposal>): _48.TextProposal;
            };
            Deposit: {
                encode(message: _48.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Deposit;
                fromJSON(object: any): _48.Deposit;
                toJSON(message: _48.Deposit): unknown;
                fromPartial(object: Partial<_48.Deposit>): _48.Deposit;
            };
            Proposal: {
                encode(message: _48.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Proposal;
                fromJSON(object: any): _48.Proposal;
                toJSON(message: _48.Proposal): unknown;
                fromPartial(object: Partial<_48.Proposal>): _48.Proposal;
            };
            TallyResult: {
                encode(message: _48.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TallyResult;
                fromJSON(object: any): _48.TallyResult;
                toJSON(message: _48.TallyResult): unknown;
                fromPartial(object: Partial<_48.TallyResult>): _48.TallyResult;
            };
            Vote: {
                encode(message: _48.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Vote;
                fromJSON(object: any): _48.Vote;
                toJSON(message: _48.Vote): unknown;
                fromPartial(object: Partial<_48.Vote>): _48.Vote;
            };
            DepositParams: {
                encode(message: _48.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.DepositParams;
                fromJSON(object: any): _48.DepositParams;
                toJSON(message: _48.DepositParams): unknown;
                fromPartial(object: Partial<_48.DepositParams>): _48.DepositParams;
            };
            VotingParams: {
                encode(message: _48.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.VotingParams;
                fromJSON(object: any): _48.VotingParams;
                toJSON(message: _48.VotingParams): unknown;
                fromPartial(object: Partial<_48.VotingParams>): _48.VotingParams;
            };
            TallyParams: {
                encode(message: _48.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TallyParams;
                fromJSON(object: any): _48.TallyParams;
                toJSON(message: _48.TallyParams): unknown;
                fromPartial(object: Partial<_48.TallyParams>): _48.TallyParams;
            };
            GenesisState: {
                encode(message: _47.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GenesisState;
                fromJSON(object: any): _47.GenesisState;
                toJSON(message: _47.GenesisState): unknown;
                fromPartial(object: Partial<_47.GenesisState>): _47.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _53.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsRequest;
                fromJSON(_: any): _53.QueryParamsRequest;
                toJSON(_: _53.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_53.QueryParamsRequest>): _53.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _53.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryParamsResponse;
                fromJSON(object: any): _53.QueryParamsResponse;
                toJSON(message: _53.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_53.QueryParamsResponse>): _53.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _53.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryInflationRequest;
                fromJSON(_: any): _53.QueryInflationRequest;
                toJSON(_: _53.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_53.QueryInflationRequest>): _53.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _53.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryInflationResponse;
                fromJSON(object: any): _53.QueryInflationResponse;
                toJSON(message: _53.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_53.QueryInflationResponse>): _53.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _53.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _53.QueryAnnualProvisionsRequest;
                toJSON(_: _53.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_53.QueryAnnualProvisionsRequest>): _53.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _53.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _53.QueryAnnualProvisionsResponse;
                toJSON(message: _53.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_53.QueryAnnualProvisionsResponse>): _53.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _52.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Minter;
                fromJSON(object: any): _52.Minter;
                toJSON(message: _52.Minter): unknown;
                fromPartial(object: Partial<_52.Minter>): _52.Minter;
            };
            Params: {
                encode(message: _52.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Params;
                fromJSON(object: any): _52.Params;
                toJSON(message: _52.Params): unknown;
                fromPartial(object: Partial<_52.Params>): _52.Params;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _233.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
                fromJSON(object: any): _55.QueryParamsRequest;
                toJSON(message: _55.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
                fromJSON(object: any): _55.QueryParamsResponse;
                toJSON(message: _55.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _54.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ParameterChangeProposal;
                fromJSON(object: any): _54.ParameterChangeProposal;
                toJSON(message: _54.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_54.ParameterChangeProposal>): _54.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _54.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ParamChange;
                fromJSON(object: any): _54.ParamChange;
                toJSON(message: _54.ParamChange): unknown;
                fromPartial(object: Partial<_54.ParamChange>): _54.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _59.MsgUnjail): {
                        typeUrl: string;
                        value: _59.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _59.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _59.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _59.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgUnjail;
                fromJSON(object: any): _59.MsgUnjail;
                toJSON(message: _59.MsgUnjail): unknown;
                fromPartial(object: Partial<_59.MsgUnjail>): _59.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _59.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgUnjailResponse;
                fromJSON(_: any): _59.MsgUnjailResponse;
                toJSON(_: _59.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_59.MsgUnjailResponse>): _59.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _58.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ValidatorSigningInfo;
                fromJSON(object: any): _58.ValidatorSigningInfo;
                toJSON(message: _58.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_58.ValidatorSigningInfo>): _58.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _58.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Params;
                fromJSON(object: any): _58.Params;
                toJSON(message: _58.Params): unknown;
                fromPartial(object: Partial<_58.Params>): _58.Params;
            };
            QueryParamsRequest: {
                encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                fromJSON(_: any): _57.QueryParamsRequest;
                toJSON(_: _57.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                fromJSON(object: any): _57.QueryParamsResponse;
                toJSON(message: _57.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _57.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QuerySigningInfoRequest;
                fromJSON(object: any): _57.QuerySigningInfoRequest;
                toJSON(message: _57.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_57.QuerySigningInfoRequest>): _57.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _57.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QuerySigningInfoResponse;
                fromJSON(object: any): _57.QuerySigningInfoResponse;
                toJSON(message: _57.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_57.QuerySigningInfoResponse>): _57.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _57.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QuerySigningInfosRequest;
                fromJSON(object: any): _57.QuerySigningInfosRequest;
                toJSON(message: _57.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_57.QuerySigningInfosRequest>): _57.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _57.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QuerySigningInfosResponse;
                fromJSON(object: any): _57.QuerySigningInfosResponse;
                toJSON(message: _57.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_57.QuerySigningInfosResponse>): _57.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            SigningInfo: {
                encode(message: _56.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.SigningInfo;
                fromJSON(object: any): _56.SigningInfo;
                toJSON(message: _56.SigningInfo): unknown;
                fromPartial(object: Partial<_56.SigningInfo>): _56.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _56.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ValidatorMissedBlocks;
                fromJSON(object: any): _56.ValidatorMissedBlocks;
                toJSON(message: _56.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_56.ValidatorMissedBlocks>): _56.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _56.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MissedBlock;
                fromJSON(object: any): _56.MissedBlock;
                toJSON(message: _56.MissedBlock): unknown;
                fromPartial(object: Partial<_56.MissedBlock>): _56.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _235.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _64.MsgCreateValidator): {
                        typeUrl: string;
                        value: _64.MsgCreateValidator;
                    };
                    editValidator(value: _64.MsgEditValidator): {
                        typeUrl: string;
                        value: _64.MsgEditValidator;
                    };
                    delegate(value: _64.MsgDelegate): {
                        typeUrl: string;
                        value: _64.MsgDelegate;
                    };
                    beginRedelegate(value: _64.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _64.MsgBeginRedelegate;
                    };
                    undelegate(value: _64.MsgUndelegate): {
                        typeUrl: string;
                        value: _64.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _64.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _64.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _64.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _64.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _64.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _64.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _64.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _64.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _64.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _64.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _64.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateValidator;
                fromJSON(object: any): _64.MsgCreateValidator;
                toJSON(message: _64.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_64.MsgCreateValidator>): _64.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _64.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateValidatorResponse;
                fromJSON(_: any): _64.MsgCreateValidatorResponse;
                toJSON(_: _64.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_64.MsgCreateValidatorResponse>): _64.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _64.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgEditValidator;
                fromJSON(object: any): _64.MsgEditValidator;
                toJSON(message: _64.MsgEditValidator): unknown;
                fromPartial(object: Partial<_64.MsgEditValidator>): _64.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _64.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgEditValidatorResponse;
                fromJSON(_: any): _64.MsgEditValidatorResponse;
                toJSON(_: _64.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_64.MsgEditValidatorResponse>): _64.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _64.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgDelegate;
                fromJSON(object: any): _64.MsgDelegate;
                toJSON(message: _64.MsgDelegate): unknown;
                fromPartial(object: Partial<_64.MsgDelegate>): _64.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _64.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgDelegateResponse;
                fromJSON(_: any): _64.MsgDelegateResponse;
                toJSON(_: _64.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_64.MsgDelegateResponse>): _64.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _64.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgBeginRedelegate;
                fromJSON(object: any): _64.MsgBeginRedelegate;
                toJSON(message: _64.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_64.MsgBeginRedelegate>): _64.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _64.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgBeginRedelegateResponse;
                fromJSON(object: any): _64.MsgBeginRedelegateResponse;
                toJSON(message: _64.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_64.MsgBeginRedelegateResponse>): _64.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _64.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUndelegate;
                fromJSON(object: any): _64.MsgUndelegate;
                toJSON(message: _64.MsgUndelegate): unknown;
                fromPartial(object: Partial<_64.MsgUndelegate>): _64.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _64.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgUndelegateResponse;
                fromJSON(object: any): _64.MsgUndelegateResponse;
                toJSON(message: _64.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_64.MsgUndelegateResponse>): _64.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _63.BondStatus;
            bondStatusToJSON(object: _63.BondStatus): string;
            BondStatus: typeof _63.BondStatus;
            BondStatusSDKType: typeof _63.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _63.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.HistoricalInfo;
                fromJSON(object: any): _63.HistoricalInfo;
                toJSON(message: _63.HistoricalInfo): unknown;
                fromPartial(object: Partial<_63.HistoricalInfo>): _63.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _63.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.CommissionRates;
                fromJSON(object: any): _63.CommissionRates;
                toJSON(message: _63.CommissionRates): unknown;
                fromPartial(object: Partial<_63.CommissionRates>): _63.CommissionRates;
            };
            Commission: {
                encode(message: _63.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Commission;
                fromJSON(object: any): _63.Commission;
                toJSON(message: _63.Commission): unknown;
                fromPartial(object: Partial<_63.Commission>): _63.Commission;
            };
            Description: {
                encode(message: _63.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Description;
                fromJSON(object: any): _63.Description;
                toJSON(message: _63.Description): unknown;
                fromPartial(object: Partial<_63.Description>): _63.Description;
            };
            Validator: {
                encode(message: _63.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Validator;
                fromJSON(object: any): _63.Validator;
                toJSON(message: _63.Validator): unknown;
                fromPartial(object: Partial<_63.Validator>): _63.Validator;
            };
            ValAddresses: {
                encode(message: _63.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ValAddresses;
                fromJSON(object: any): _63.ValAddresses;
                toJSON(message: _63.ValAddresses): unknown;
                fromPartial(object: Partial<_63.ValAddresses>): _63.ValAddresses;
            };
            DVPair: {
                encode(message: _63.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DVPair;
                fromJSON(object: any): _63.DVPair;
                toJSON(message: _63.DVPair): unknown;
                fromPartial(object: Partial<_63.DVPair>): _63.DVPair;
            };
            DVPairs: {
                encode(message: _63.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DVPairs;
                fromJSON(object: any): _63.DVPairs;
                toJSON(message: _63.DVPairs): unknown;
                fromPartial(object: Partial<_63.DVPairs>): _63.DVPairs;
            };
            DVVTriplet: {
                encode(message: _63.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DVVTriplet;
                fromJSON(object: any): _63.DVVTriplet;
                toJSON(message: _63.DVVTriplet): unknown;
                fromPartial(object: Partial<_63.DVVTriplet>): _63.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _63.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DVVTriplets;
                fromJSON(object: any): _63.DVVTriplets;
                toJSON(message: _63.DVVTriplets): unknown;
                fromPartial(object: Partial<_63.DVVTriplets>): _63.DVVTriplets;
            };
            Delegation: {
                encode(message: _63.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Delegation;
                fromJSON(object: any): _63.Delegation;
                toJSON(message: _63.Delegation): unknown;
                fromPartial(object: Partial<_63.Delegation>): _63.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _63.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UnbondingDelegation;
                fromJSON(object: any): _63.UnbondingDelegation;
                toJSON(message: _63.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_63.UnbondingDelegation>): _63.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _63.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UnbondingDelegationEntry;
                fromJSON(object: any): _63.UnbondingDelegationEntry;
                toJSON(message: _63.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_63.UnbondingDelegationEntry>): _63.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _63.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.RedelegationEntry;
                fromJSON(object: any): _63.RedelegationEntry;
                toJSON(message: _63.RedelegationEntry): unknown;
                fromPartial(object: Partial<_63.RedelegationEntry>): _63.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _63.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Redelegation;
                fromJSON(object: any): _63.Redelegation;
                toJSON(message: _63.Redelegation): unknown;
                fromPartial(object: Partial<_63.Redelegation>): _63.Redelegation;
            };
            Params: {
                encode(message: _63.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Params;
                fromJSON(object: any): _63.Params;
                toJSON(message: _63.Params): unknown;
                fromPartial(object: Partial<_63.Params>): _63.Params;
            };
            DelegationResponse: {
                encode(message: _63.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DelegationResponse;
                fromJSON(object: any): _63.DelegationResponse;
                toJSON(message: _63.DelegationResponse): unknown;
                fromPartial(object: Partial<_63.DelegationResponse>): _63.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _63.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.RedelegationEntryResponse;
                fromJSON(object: any): _63.RedelegationEntryResponse;
                toJSON(message: _63.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_63.RedelegationEntryResponse>): _63.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _63.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.RedelegationResponse;
                fromJSON(object: any): _63.RedelegationResponse;
                toJSON(message: _63.RedelegationResponse): unknown;
                fromPartial(object: Partial<_63.RedelegationResponse>): _63.RedelegationResponse;
            };
            Pool: {
                encode(message: _63.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Pool;
                fromJSON(object: any): _63.Pool;
                toJSON(message: _63.Pool): unknown;
                fromPartial(object: Partial<_63.Pool>): _63.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _62.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorsRequest;
                fromJSON(object: any): _62.QueryValidatorsRequest;
                toJSON(message: _62.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorsRequest>): _62.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _62.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorsResponse;
                fromJSON(object: any): _62.QueryValidatorsResponse;
                toJSON(message: _62.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorsResponse>): _62.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _62.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorRequest;
                fromJSON(object: any): _62.QueryValidatorRequest;
                toJSON(message: _62.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorRequest>): _62.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _62.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorResponse;
                fromJSON(object: any): _62.QueryValidatorResponse;
                toJSON(message: _62.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorResponse>): _62.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _62.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _62.QueryValidatorDelegationsRequest;
                toJSON(message: _62.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsRequest>): _62.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _62.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _62.QueryValidatorDelegationsResponse;
                toJSON(message: _62.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorDelegationsResponse>): _62.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _62.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _62.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsRequest>): _62.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _62.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _62.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _62.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorUnbondingDelegationsResponse>): _62.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _62.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegationRequest;
                fromJSON(object: any): _62.QueryDelegationRequest;
                toJSON(message: _62.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegationRequest>): _62.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _62.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegationResponse;
                fromJSON(object: any): _62.QueryDelegationResponse;
                toJSON(message: _62.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegationResponse>): _62.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _62.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _62.QueryUnbondingDelegationRequest;
                toJSON(message: _62.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationRequest>): _62.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _62.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _62.QueryUnbondingDelegationResponse;
                toJSON(message: _62.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_62.QueryUnbondingDelegationResponse>): _62.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _62.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _62.QueryDelegatorDelegationsRequest;
                toJSON(message: _62.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsRequest>): _62.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _62.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _62.QueryDelegatorDelegationsResponse;
                toJSON(message: _62.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorDelegationsResponse>): _62.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _62.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _62.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsRequest>): _62.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _62.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _62.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _62.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorUnbondingDelegationsResponse>): _62.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _62.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryRedelegationsRequest;
                fromJSON(object: any): _62.QueryRedelegationsRequest;
                toJSON(message: _62.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_62.QueryRedelegationsRequest>): _62.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _62.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryRedelegationsResponse;
                fromJSON(object: any): _62.QueryRedelegationsResponse;
                toJSON(message: _62.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_62.QueryRedelegationsResponse>): _62.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _62.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _62.QueryDelegatorValidatorsRequest;
                toJSON(message: _62.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsRequest>): _62.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _62.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _62.QueryDelegatorValidatorsResponse;
                toJSON(message: _62.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsResponse>): _62.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _62.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _62.QueryDelegatorValidatorRequest;
                toJSON(message: _62.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorRequest>): _62.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _62.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _62.QueryDelegatorValidatorResponse;
                toJSON(message: _62.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorResponse>): _62.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _62.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryHistoricalInfoRequest;
                fromJSON(object: any): _62.QueryHistoricalInfoRequest;
                toJSON(message: _62.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_62.QueryHistoricalInfoRequest>): _62.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _62.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryHistoricalInfoResponse;
                fromJSON(object: any): _62.QueryHistoricalInfoResponse;
                toJSON(message: _62.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_62.QueryHistoricalInfoResponse>): _62.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _62.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryPoolRequest;
                fromJSON(_: any): _62.QueryPoolRequest;
                toJSON(_: _62.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_62.QueryPoolRequest>): _62.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _62.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryPoolResponse;
                fromJSON(object: any): _62.QueryPoolResponse;
                toJSON(message: _62.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_62.QueryPoolResponse>): _62.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _62.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsRequest;
                fromJSON(_: any): _62.QueryParamsRequest;
                toJSON(_: _62.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _62.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsResponse;
                fromJSON(object: any): _62.QueryParamsResponse;
                toJSON(message: _62.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _61.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.LastValidatorPower;
                fromJSON(object: any): _61.LastValidatorPower;
                toJSON(message: _61.LastValidatorPower): unknown;
                fromPartial(object: Partial<_61.LastValidatorPower>): _61.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _60.AuthorizationType;
            authorizationTypeToJSON(object: _60.AuthorizationType): string;
            AuthorizationType: typeof _60.AuthorizationType;
            AuthorizationTypeSDKType: typeof _60.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _60.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.StakeAuthorization;
                fromJSON(object: any): _60.StakeAuthorization;
                toJSON(message: _60.StakeAuthorization): unknown;
                fromPartial(object: Partial<_60.StakeAuthorization>): _60.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _60.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.StakeAuthorization_Validators;
                fromJSON(object: any): _60.StakeAuthorization_Validators;
                toJSON(message: _60.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_60.StakeAuthorization_Validators>): _60.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _65.SignMode;
                signModeToJSON(object: _65.SignMode): string;
                SignMode: typeof _65.SignMode;
                SignModeSDKType: typeof _65.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _65.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignatureDescriptors;
                    fromJSON(object: any): _65.SignatureDescriptors;
                    toJSON(message: _65.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_65.SignatureDescriptors>): _65.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _65.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignatureDescriptor;
                    fromJSON(object: any): _65.SignatureDescriptor;
                    toJSON(message: _65.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_65.SignatureDescriptor>): _65.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _65.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignatureDescriptor_Data;
                    fromJSON(object: any): _65.SignatureDescriptor_Data;
                    toJSON(message: _65.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data>): _65.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _65.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Single;
                    toJSON(message: _65.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Single>): _65.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _65.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _65.SignatureDescriptor_Data_Multi;
                    toJSON(message: _65.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_65.SignatureDescriptor_Data_Multi>): _65.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _236.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _67.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Tx;
                fromJSON(object: any): _67.Tx;
                toJSON(message: _67.Tx): unknown;
                fromPartial(object: Partial<_67.Tx>): _67.Tx;
            };
            TxRaw: {
                encode(message: _67.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TxRaw;
                fromJSON(object: any): _67.TxRaw;
                toJSON(message: _67.TxRaw): unknown;
                fromPartial(object: Partial<_67.TxRaw>): _67.TxRaw;
            };
            SignDoc: {
                encode(message: _67.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.SignDoc;
                fromJSON(object: any): _67.SignDoc;
                toJSON(message: _67.SignDoc): unknown;
                fromPartial(object: Partial<_67.SignDoc>): _67.SignDoc;
            };
            TxBody: {
                encode(message: _67.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.TxBody;
                fromJSON(object: any): _67.TxBody;
                toJSON(message: _67.TxBody): unknown;
                fromPartial(object: Partial<_67.TxBody>): _67.TxBody;
            };
            AuthInfo: {
                encode(message: _67.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.AuthInfo;
                fromJSON(object: any): _67.AuthInfo;
                toJSON(message: _67.AuthInfo): unknown;
                fromPartial(object: Partial<_67.AuthInfo>): _67.AuthInfo;
            };
            SignerInfo: {
                encode(message: _67.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.SignerInfo;
                fromJSON(object: any): _67.SignerInfo;
                toJSON(message: _67.SignerInfo): unknown;
                fromPartial(object: Partial<_67.SignerInfo>): _67.SignerInfo;
            };
            ModeInfo: {
                encode(message: _67.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ModeInfo;
                fromJSON(object: any): _67.ModeInfo;
                toJSON(message: _67.ModeInfo): unknown;
                fromPartial(object: Partial<_67.ModeInfo>): _67.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _67.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ModeInfo_Single;
                fromJSON(object: any): _67.ModeInfo_Single;
                toJSON(message: _67.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_67.ModeInfo_Single>): _67.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _67.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.ModeInfo_Multi;
                fromJSON(object: any): _67.ModeInfo_Multi;
                toJSON(message: _67.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_67.ModeInfo_Multi>): _67.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _67.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Fee;
                fromJSON(object: any): _67.Fee;
                toJSON(message: _67.Fee): unknown;
                fromPartial(object: Partial<_67.Fee>): _67.Fee;
            };
            orderByFromJSON(object: any): _66.OrderBy;
            orderByToJSON(object: _66.OrderBy): string;
            broadcastModeFromJSON(object: any): _66.BroadcastMode;
            broadcastModeToJSON(object: _66.BroadcastMode): string;
            OrderBy: typeof _66.OrderBy;
            OrderBySDKType: typeof _66.OrderBySDKType;
            BroadcastMode: typeof _66.BroadcastMode;
            BroadcastModeSDKType: typeof _66.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _66.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetTxsEventRequest;
                fromJSON(object: any): _66.GetTxsEventRequest;
                toJSON(message: _66.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_66.GetTxsEventRequest>): _66.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _66.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetTxsEventResponse;
                fromJSON(object: any): _66.GetTxsEventResponse;
                toJSON(message: _66.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_66.GetTxsEventResponse>): _66.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _66.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.BroadcastTxRequest;
                fromJSON(object: any): _66.BroadcastTxRequest;
                toJSON(message: _66.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_66.BroadcastTxRequest>): _66.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _66.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.BroadcastTxResponse;
                fromJSON(object: any): _66.BroadcastTxResponse;
                toJSON(message: _66.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_66.BroadcastTxResponse>): _66.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _66.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SimulateRequest;
                fromJSON(object: any): _66.SimulateRequest;
                toJSON(message: _66.SimulateRequest): unknown;
                fromPartial(object: Partial<_66.SimulateRequest>): _66.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _66.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SimulateResponse;
                fromJSON(object: any): _66.SimulateResponse;
                toJSON(message: _66.SimulateResponse): unknown;
                fromPartial(object: Partial<_66.SimulateResponse>): _66.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _66.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetTxRequest;
                fromJSON(object: any): _66.GetTxRequest;
                toJSON(message: _66.GetTxRequest): unknown;
                fromPartial(object: Partial<_66.GetTxRequest>): _66.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _66.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetTxResponse;
                fromJSON(object: any): _66.GetTxResponse;
                toJSON(message: _66.GetTxResponse): unknown;
                fromPartial(object: Partial<_66.GetTxResponse>): _66.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _66.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetBlockWithTxsRequest;
                fromJSON(object: any): _66.GetBlockWithTxsRequest;
                toJSON(message: _66.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_66.GetBlockWithTxsRequest>): _66.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _66.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetBlockWithTxsResponse;
                fromJSON(object: any): _66.GetBlockWithTxsResponse;
                toJSON(message: _66.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_66.GetBlockWithTxsResponse>): _66.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _237.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
            };
            Plan: {
                encode(message: _69.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Plan;
                fromJSON(object: any): _69.Plan;
                toJSON(message: _69.Plan): unknown;
                fromPartial(object: Partial<_69.Plan>): _69.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _69.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.SoftwareUpgradeProposal;
                fromJSON(object: any): _69.SoftwareUpgradeProposal;
                toJSON(message: _69.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_69.SoftwareUpgradeProposal>): _69.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _69.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _69.CancelSoftwareUpgradeProposal;
                toJSON(message: _69.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_69.CancelSoftwareUpgradeProposal>): _69.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _69.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ModuleVersion;
                fromJSON(object: any): _69.ModuleVersion;
                toJSON(message: _69.ModuleVersion): unknown;
                fromPartial(object: Partial<_69.ModuleVersion>): _69.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _68.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryCurrentPlanRequest;
                fromJSON(_: any): _68.QueryCurrentPlanRequest;
                toJSON(_: _68.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_68.QueryCurrentPlanRequest>): _68.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _68.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryCurrentPlanResponse;
                fromJSON(object: any): _68.QueryCurrentPlanResponse;
                toJSON(message: _68.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_68.QueryCurrentPlanResponse>): _68.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _68.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryAppliedPlanRequest;
                fromJSON(object: any): _68.QueryAppliedPlanRequest;
                toJSON(message: _68.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_68.QueryAppliedPlanRequest>): _68.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _68.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryAppliedPlanResponse;
                fromJSON(object: any): _68.QueryAppliedPlanResponse;
                toJSON(message: _68.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_68.QueryAppliedPlanResponse>): _68.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _68.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateRequest;
                toJSON(message: _68.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateRequest>): _68.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _68.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _68.QueryUpgradedConsensusStateResponse;
                toJSON(message: _68.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_68.QueryUpgradedConsensusStateResponse>): _68.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _68.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryModuleVersionsRequest;
                fromJSON(object: any): _68.QueryModuleVersionsRequest;
                toJSON(message: _68.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_68.QueryModuleVersionsRequest>): _68.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _68.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryModuleVersionsResponse;
                fromJSON(object: any): _68.QueryModuleVersionsResponse;
                toJSON(message: _68.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_68.QueryModuleVersionsResponse>): _68.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _70.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _70.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _70.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _70.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _71.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BaseVestingAccount;
                fromJSON(object: any): _71.BaseVestingAccount;
                toJSON(message: _71.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_71.BaseVestingAccount>): _71.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _71.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ContinuousVestingAccount;
                fromJSON(object: any): _71.ContinuousVestingAccount;
                toJSON(message: _71.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_71.ContinuousVestingAccount>): _71.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _71.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DelayedVestingAccount;
                fromJSON(object: any): _71.DelayedVestingAccount;
                toJSON(message: _71.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_71.DelayedVestingAccount>): _71.DelayedVestingAccount;
            };
            Period: {
                encode(message: _71.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Period;
                fromJSON(object: any): _71.Period;
                toJSON(message: _71.Period): unknown;
                fromPartial(object: Partial<_71.Period>): _71.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _71.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.PeriodicVestingAccount;
                fromJSON(object: any): _71.PeriodicVestingAccount;
                toJSON(message: _71.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_71.PeriodicVestingAccount>): _71.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _71.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.PermanentLockedAccount;
                fromJSON(object: any): _71.PermanentLockedAccount;
                toJSON(message: _71.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_71.PermanentLockedAccount>): _71.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _70.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateVestingAccount;
                fromJSON(object: any): _70.MsgCreateVestingAccount;
                toJSON(message: _70.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_70.MsgCreateVestingAccount>): _70.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _70.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _70.MsgCreateVestingAccountResponse;
                toJSON(_: _70.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_70.MsgCreateVestingAccountResponse>): _70.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _238.MsgClientImpl;
                };
                bank: {
                    v1beta1: _239.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _240.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _241.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _242.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _243.MsgClientImpl;
                };
                gov: {
                    v1beta1: _244.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _245.MsgClientImpl;
                };
                staking: {
                    v1beta1: _246.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _247.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                        granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                        granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                            getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                            getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                            getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _36.QueryValidatorOutstandingRewardsRequest): Promise<_36.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _36.QueryValidatorCommissionRequest): Promise<_36.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _36.QueryValidatorSlashesRequest): Promise<_36.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _36.QueryDelegationRewardsRequest): Promise<_36.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _36.QueryDelegationTotalRewardsRequest): Promise<_36.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _36.QueryDelegatorWithdrawAddressRequest): Promise<_36.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _36.QueryCommunityPoolRequest): Promise<_36.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _40.QueryEvidenceRequest): Promise<_40.QueryEvidenceResponse>;
                        allEvidence(request?: _40.QueryAllEvidenceRequest): Promise<_40.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _44.QueryAllowanceRequest): Promise<_44.QueryAllowanceResponse>;
                        allowances(request: _44.QueryAllowancesRequest): Promise<_44.QueryAllowancesResponse>;
                        allowancesByGranter(request: _44.QueryAllowancesByGranterRequest): Promise<_44.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _49.QueryProposalRequest): Promise<_49.QueryProposalResponse>;
                        proposals(request: _49.QueryProposalsRequest): Promise<_49.QueryProposalsResponse>;
                        vote(request: _49.QueryVoteRequest): Promise<_49.QueryVoteResponse>;
                        votes(request: _49.QueryVotesRequest): Promise<_49.QueryVotesResponse>;
                        params(request: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                        deposit(request: _49.QueryDepositRequest): Promise<_49.QueryDepositResponse>;
                        deposits(request: _49.QueryDepositsRequest): Promise<_49.QueryDepositsResponse>;
                        tallyResult(request: _49.QueryTallyResultRequest): Promise<_49.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        inflation(request?: _53.QueryInflationRequest): Promise<_53.QueryInflationResponse>;
                        annualProvisions(request?: _53.QueryAnnualProvisionsRequest): Promise<_53.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        signingInfo(request: _57.QuerySigningInfoRequest): Promise<_57.QuerySigningInfoResponse>;
                        signingInfos(request?: _57.QuerySigningInfosRequest): Promise<_57.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _62.QueryValidatorsRequest): Promise<_62.QueryValidatorsResponse>;
                        validator(request: _62.QueryValidatorRequest): Promise<_62.QueryValidatorResponse>;
                        validatorDelegations(request: _62.QueryValidatorDelegationsRequest): Promise<_62.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _62.QueryValidatorUnbondingDelegationsRequest): Promise<_62.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _62.QueryDelegationRequest): Promise<_62.QueryDelegationResponse>;
                        unbondingDelegation(request: _62.QueryUnbondingDelegationRequest): Promise<_62.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _62.QueryDelegatorDelegationsRequest): Promise<_62.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _62.QueryDelegatorUnbondingDelegationsRequest): Promise<_62.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _62.QueryRedelegationsRequest): Promise<_62.QueryRedelegationsResponse>;
                        delegatorValidators(request: _62.QueryDelegatorValidatorsRequest): Promise<_62.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _62.QueryDelegatorValidatorRequest): Promise<_62.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _62.QueryHistoricalInfoRequest): Promise<_62.QueryHistoricalInfoResponse>;
                        pool(request?: _62.QueryPoolRequest): Promise<_62.QueryPoolResponse>;
                        params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _66.SimulateRequest): Promise<_66.SimulateResponse>;
                        getTx(request: _66.GetTxRequest): Promise<_66.GetTxResponse>;
                        broadcastTx(request: _66.BroadcastTxRequest): Promise<_66.BroadcastTxResponse>;
                        getTxsEvent(request: _66.GetTxsEventRequest): Promise<_66.GetTxsEventResponse>;
                        getBlockWithTxs(request: _66.GetBlockWithTxsRequest): Promise<_66.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _68.QueryCurrentPlanRequest): Promise<_68.QueryCurrentPlanResponse>;
                        appliedPlan(request: _68.QueryAppliedPlanRequest): Promise<_68.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _68.QueryUpgradedConsensusStateRequest): Promise<_68.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _68.QueryModuleVersionsRequest): Promise<_68.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
    };
}
