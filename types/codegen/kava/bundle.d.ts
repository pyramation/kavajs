import * as _121 from "./auction/v1beta1/auction";
import * as _122 from "./auction/v1beta1/genesis";
import * as _123 from "./auction/v1beta1/query";
import * as _124 from "./auction/v1beta1/tx";
import * as _125 from "./bep3/v1beta1/bep3";
import * as _126 from "./bep3/v1beta1/genesis";
import * as _127 from "./bep3/v1beta1/query";
import * as _128 from "./bep3/v1beta1/tx";
import * as _129 from "./cdp/v1beta1/cdp";
import * as _130 from "./cdp/v1beta1/genesis";
import * as _131 from "./cdp/v1beta1/query";
import * as _132 from "./cdp/v1beta1/tx";
import * as _133 from "./committee/v1beta1/committee";
import * as _134 from "./committee/v1beta1/genesis";
import * as _135 from "./committee/v1beta1/permissions";
import * as _136 from "./committee/v1beta1/proposal";
import * as _137 from "./committee/v1beta1/query";
import * as _138 from "./committee/v1beta1/tx";
import * as _139 from "./earn/v1beta1/genesis";
import * as _140 from "./earn/v1beta1/params";
import * as _141 from "./earn/v1beta1/proposal";
import * as _142 from "./earn/v1beta1/query";
import * as _143 from "./earn/v1beta1/strategy";
import * as _144 from "./earn/v1beta1/tx";
import * as _145 from "./earn/v1beta1/vault";
import * as _146 from "./evmutil/v1beta1/conversion_pair";
import * as _147 from "./evmutil/v1beta1/genesis";
import * as _148 from "./evmutil/v1beta1/query";
import * as _149 from "./evmutil/v1beta1/tx";
import * as _150 from "./hard/v1beta1/genesis";
import * as _151 from "./hard/v1beta1/hard";
import * as _152 from "./hard/v1beta1/query";
import * as _153 from "./hard/v1beta1/tx";
import * as _154 from "./incentive/v1beta1/claims";
import * as _155 from "./incentive/v1beta1/genesis";
import * as _156 from "./incentive/v1beta1/params";
import * as _157 from "./incentive/v1beta1/tx";
import * as _158 from "./issuance/v1beta1/genesis";
import * as _159 from "./issuance/v1beta1/query";
import * as _160 from "./issuance/v1beta1/tx";
import * as _161 from "./kavadist/v1beta1/genesis";
import * as _162 from "./kavadist/v1beta1/params";
import * as _163 from "./kavadist/v1beta1/proposal";
import * as _164 from "./kavadist/v1beta1/query";
import * as _165 from "./liquid/v1beta1/query";
import * as _166 from "./liquid/v1beta1/tx";
import * as _167 from "./pricefeed/v1beta1/genesis";
import * as _168 from "./pricefeed/v1beta1/query";
import * as _169 from "./pricefeed/v1beta1/store";
import * as _170 from "./pricefeed/v1beta1/tx";
import * as _171 from "./router/v1beta1/tx";
import * as _172 from "./savings/v1beta1/genesis";
import * as _173 from "./savings/v1beta1/query";
import * as _174 from "./savings/v1beta1/store";
import * as _175 from "./savings/v1beta1/tx";
import * as _176 from "./swap/v1beta1/genesis";
import * as _177 from "./swap/v1beta1/query";
import * as _178 from "./swap/v1beta1/swap";
import * as _179 from "./swap/v1beta1/tx";
import * as _299 from "./auction/v1beta1/query.rpc.Query";
import * as _300 from "./bep3/v1beta1/query.rpc.Query";
import * as _301 from "./cdp/v1beta1/query.rpc.Query";
import * as _302 from "./committee/v1beta1/query.rpc.Query";
import * as _303 from "./earn/v1beta1/query.rpc.Query";
import * as _304 from "./evmutil/v1beta1/query.rpc.Query";
import * as _305 from "./hard/v1beta1/query.rpc.Query";
import * as _306 from "./issuance/v1beta1/query.rpc.Query";
import * as _307 from "./kavadist/v1beta1/query.rpc.Query";
import * as _308 from "./liquid/v1beta1/query.rpc.Query";
import * as _309 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _310 from "./savings/v1beta1/query.rpc.Query";
import * as _311 from "./swap/v1beta1/query.rpc.Query";
import * as _312 from "./auction/v1beta1/tx.rpc.msg";
import * as _313 from "./bep3/v1beta1/tx.rpc.msg";
import * as _314 from "./cdp/v1beta1/tx.rpc.msg";
import * as _315 from "./committee/v1beta1/tx.rpc.msg";
import * as _316 from "./earn/v1beta1/tx.rpc.msg";
import * as _317 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _318 from "./hard/v1beta1/tx.rpc.msg";
import * as _319 from "./incentive/v1beta1/tx.rpc.msg";
import * as _320 from "./issuance/v1beta1/tx.rpc.msg";
import * as _321 from "./liquid/v1beta1/tx.rpc.msg";
import * as _322 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _323 from "./router/v1beta1/tx.rpc.msg";
import * as _324 from "./savings/v1beta1/tx.rpc.msg";
import * as _325 from "./swap/v1beta1/tx.rpc.msg";
export declare namespace kava {
    namespace auction {
        const v1beta1: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                auction(request: _123.QueryAuctionRequest): Promise<_123.QueryAuctionResponse>;
                auctions(request: _123.QueryAuctionsRequest): Promise<_123.QueryAuctionsResponse>;
                nextAuctionID(request?: _123.QueryNextAuctionIDRequest): Promise<_123.QueryNextAuctionIDResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeBid(value: _124.MsgPlaceBid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeBid(value: _124.MsgPlaceBid): {
                        typeUrl: string;
                        value: _124.MsgPlaceBid;
                    };
                };
                toJSON: {
                    placeBid(value: _124.MsgPlaceBid): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    placeBid(value: any): {
                        typeUrl: string;
                        value: _124.MsgPlaceBid;
                    };
                };
                fromPartial: {
                    placeBid(value: _124.MsgPlaceBid): {
                        typeUrl: string;
                        value: _124.MsgPlaceBid;
                    };
                };
            };
            AminoConverter: {
                "/kava.auction.v1beta1.MsgPlaceBid": {
                    aminoType: string;
                    toAmino: ({ auctionId, bidder, amount }: _124.MsgPlaceBid) => {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ auction_id, bidder, amount }: {
                        auction_id: string;
                        bidder: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _124.MsgPlaceBid;
                };
            };
            MsgPlaceBid: {
                encode(message: _124.MsgPlaceBid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgPlaceBid;
                fromJSON(object: any): _124.MsgPlaceBid;
                toJSON(message: _124.MsgPlaceBid): unknown;
                fromPartial(object: Partial<_124.MsgPlaceBid>): _124.MsgPlaceBid;
            };
            MsgPlaceBidResponse: {
                encode(_: _124.MsgPlaceBidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgPlaceBidResponse;
                fromJSON(_: any): _124.MsgPlaceBidResponse;
                toJSON(_: _124.MsgPlaceBidResponse): unknown;
                fromPartial(_: Partial<_124.MsgPlaceBidResponse>): _124.MsgPlaceBidResponse;
            };
            QueryParamsRequest: {
                encode(_: _123.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsRequest;
                fromJSON(_: any): _123.QueryParamsRequest;
                toJSON(_: _123.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _123.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsResponse;
                fromJSON(object: any): _123.QueryParamsResponse;
                toJSON(message: _123.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
            };
            QueryAuctionRequest: {
                encode(message: _123.QueryAuctionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAuctionRequest;
                fromJSON(object: any): _123.QueryAuctionRequest;
                toJSON(message: _123.QueryAuctionRequest): unknown;
                fromPartial(object: Partial<_123.QueryAuctionRequest>): _123.QueryAuctionRequest;
            };
            QueryAuctionResponse: {
                encode(message: _123.QueryAuctionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAuctionResponse;
                fromJSON(object: any): _123.QueryAuctionResponse;
                toJSON(message: _123.QueryAuctionResponse): unknown;
                fromPartial(object: Partial<_123.QueryAuctionResponse>): _123.QueryAuctionResponse;
            };
            QueryAuctionsRequest: {
                encode(message: _123.QueryAuctionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAuctionsRequest;
                fromJSON(object: any): _123.QueryAuctionsRequest;
                toJSON(message: _123.QueryAuctionsRequest): unknown;
                fromPartial(object: Partial<_123.QueryAuctionsRequest>): _123.QueryAuctionsRequest;
            };
            QueryAuctionsResponse: {
                encode(message: _123.QueryAuctionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAuctionsResponse;
                fromJSON(object: any): _123.QueryAuctionsResponse;
                toJSON(message: _123.QueryAuctionsResponse): unknown;
                fromPartial(object: Partial<_123.QueryAuctionsResponse>): _123.QueryAuctionsResponse;
            };
            QueryNextAuctionIDRequest: {
                encode(_: _123.QueryNextAuctionIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryNextAuctionIDRequest;
                fromJSON(_: any): _123.QueryNextAuctionIDRequest;
                toJSON(_: _123.QueryNextAuctionIDRequest): unknown;
                fromPartial(_: Partial<_123.QueryNextAuctionIDRequest>): _123.QueryNextAuctionIDRequest;
            };
            QueryNextAuctionIDResponse: {
                encode(message: _123.QueryNextAuctionIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryNextAuctionIDResponse;
                fromJSON(object: any): _123.QueryNextAuctionIDResponse;
                toJSON(message: _123.QueryNextAuctionIDResponse): unknown;
                fromPartial(object: Partial<_123.QueryNextAuctionIDResponse>): _123.QueryNextAuctionIDResponse;
            };
            GenesisState: {
                encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                fromJSON(object: any): _122.GenesisState;
                toJSON(message: _122.GenesisState): unknown;
                fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
            };
            Params: {
                encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                fromJSON(object: any): _122.Params;
                toJSON(message: _122.Params): unknown;
                fromPartial(object: Partial<_122.Params>): _122.Params;
            };
            BaseAuction: {
                encode(message: _121.BaseAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BaseAuction;
                fromJSON(object: any): _121.BaseAuction;
                toJSON(message: _121.BaseAuction): unknown;
                fromPartial(object: Partial<_121.BaseAuction>): _121.BaseAuction;
            };
            SurplusAuction: {
                encode(message: _121.SurplusAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SurplusAuction;
                fromJSON(object: any): _121.SurplusAuction;
                toJSON(message: _121.SurplusAuction): unknown;
                fromPartial(object: Partial<_121.SurplusAuction>): _121.SurplusAuction;
            };
            DebtAuction: {
                encode(message: _121.DebtAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.DebtAuction;
                fromJSON(object: any): _121.DebtAuction;
                toJSON(message: _121.DebtAuction): unknown;
                fromPartial(object: Partial<_121.DebtAuction>): _121.DebtAuction;
            };
            CollateralAuction: {
                encode(message: _121.CollateralAuction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.CollateralAuction;
                fromJSON(object: any): _121.CollateralAuction;
                toJSON(message: _121.CollateralAuction): unknown;
                fromPartial(object: Partial<_121.CollateralAuction>): _121.CollateralAuction;
            };
            WeightedAddresses: {
                encode(message: _121.WeightedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.WeightedAddresses;
                fromJSON(object: any): _121.WeightedAddresses;
                toJSON(message: _121.WeightedAddresses): unknown;
                fromPartial(object: Partial<_121.WeightedAddresses>): _121.WeightedAddresses;
            };
        };
    }
    namespace bep3 {
        const v1beta1: {
            MsgClientImpl: typeof _313.MsgClientImpl;
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                assetSupply(request: _127.QueryAssetSupplyRequest): Promise<_127.QueryAssetSupplyResponse>;
                assetSupplies(request?: _127.QueryAssetSuppliesRequest): Promise<_127.QueryAssetSuppliesResponse>;
                atomicSwap(request: _127.QueryAtomicSwapRequest): Promise<_127.QueryAtomicSwapResponse>;
                atomicSwaps(request: _127.QueryAtomicSwapsRequest): Promise<_127.QueryAtomicSwapsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createAtomicSwap(value: _128.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimAtomicSwap(value: _128.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    refundAtomicSwap(value: _128.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createAtomicSwap(value: _128.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _128.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _128.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgRefundAtomicSwap;
                    };
                };
                toJSON: {
                    createAtomicSwap(value: _128.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimAtomicSwap(value: _128.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    refundAtomicSwap(value: _128.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _128.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: any): {
                        typeUrl: string;
                        value: _128.MsgRefundAtomicSwap;
                    };
                };
                fromPartial: {
                    createAtomicSwap(value: _128.MsgCreateAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgCreateAtomicSwap;
                    };
                    claimAtomicSwap(value: _128.MsgClaimAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgClaimAtomicSwap;
                    };
                    refundAtomicSwap(value: _128.MsgRefundAtomicSwap): {
                        typeUrl: string;
                        value: _128.MsgRefundAtomicSwap;
                    };
                };
            };
            AminoConverter: {
                "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: _128.MsgCreateAtomicSwap) => {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    };
                    fromAmino: ({ from, to, recipient_other_chain, sender_other_chain, random_number_hash, timestamp, amount, height_span }: {
                        from: string;
                        to: string;
                        recipient_other_chain: string;
                        sender_other_chain: string;
                        random_number_hash: string;
                        timestamp: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        height_span: string;
                    }) => _128.MsgCreateAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId, randomNumber }: _128.MsgClaimAtomicSwap) => {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    };
                    fromAmino: ({ from, swap_id, random_number }: {
                        from: string;
                        swap_id: string;
                        random_number: string;
                    }) => _128.MsgClaimAtomicSwap;
                };
                "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
                    aminoType: string;
                    toAmino: ({ from, swapId }: _128.MsgRefundAtomicSwap) => {
                        from: string;
                        swap_id: string;
                    };
                    fromAmino: ({ from, swap_id }: {
                        from: string;
                        swap_id: string;
                    }) => _128.MsgRefundAtomicSwap;
                };
            };
            MsgCreateAtomicSwap: {
                encode(message: _128.MsgCreateAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreateAtomicSwap;
                fromJSON(object: any): _128.MsgCreateAtomicSwap;
                toJSON(message: _128.MsgCreateAtomicSwap): unknown;
                fromPartial(object: Partial<_128.MsgCreateAtomicSwap>): _128.MsgCreateAtomicSwap;
            };
            MsgCreateAtomicSwapResponse: {
                encode(_: _128.MsgCreateAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreateAtomicSwapResponse;
                fromJSON(_: any): _128.MsgCreateAtomicSwapResponse;
                toJSON(_: _128.MsgCreateAtomicSwapResponse): unknown;
                fromPartial(_: Partial<_128.MsgCreateAtomicSwapResponse>): _128.MsgCreateAtomicSwapResponse;
            };
            MsgClaimAtomicSwap: {
                encode(message: _128.MsgClaimAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgClaimAtomicSwap;
                fromJSON(object: any): _128.MsgClaimAtomicSwap;
                toJSON(message: _128.MsgClaimAtomicSwap): unknown;
                fromPartial(object: Partial<_128.MsgClaimAtomicSwap>): _128.MsgClaimAtomicSwap;
            };
            MsgClaimAtomicSwapResponse: {
                encode(_: _128.MsgClaimAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgClaimAtomicSwapResponse;
                fromJSON(_: any): _128.MsgClaimAtomicSwapResponse;
                toJSON(_: _128.MsgClaimAtomicSwapResponse): unknown;
                fromPartial(_: Partial<_128.MsgClaimAtomicSwapResponse>): _128.MsgClaimAtomicSwapResponse;
            };
            MsgRefundAtomicSwap: {
                encode(message: _128.MsgRefundAtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgRefundAtomicSwap;
                fromJSON(object: any): _128.MsgRefundAtomicSwap;
                toJSON(message: _128.MsgRefundAtomicSwap): unknown;
                fromPartial(object: Partial<_128.MsgRefundAtomicSwap>): _128.MsgRefundAtomicSwap;
            };
            MsgRefundAtomicSwapResponse: {
                encode(_: _128.MsgRefundAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgRefundAtomicSwapResponse;
                fromJSON(_: any): _128.MsgRefundAtomicSwapResponse;
                toJSON(_: _128.MsgRefundAtomicSwapResponse): unknown;
                fromPartial(_: Partial<_128.MsgRefundAtomicSwapResponse>): _128.MsgRefundAtomicSwapResponse;
            };
            QueryParamsRequest: {
                encode(_: _127.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryParamsRequest;
                fromJSON(_: any): _127.QueryParamsRequest;
                toJSON(_: _127.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_127.QueryParamsRequest>): _127.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _127.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryParamsResponse;
                fromJSON(object: any): _127.QueryParamsResponse;
                toJSON(message: _127.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_127.QueryParamsResponse>): _127.QueryParamsResponse;
            };
            QueryAssetSupplyRequest: {
                encode(message: _127.QueryAssetSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAssetSupplyRequest;
                fromJSON(object: any): _127.QueryAssetSupplyRequest;
                toJSON(message: _127.QueryAssetSupplyRequest): unknown;
                fromPartial(object: Partial<_127.QueryAssetSupplyRequest>): _127.QueryAssetSupplyRequest;
            };
            AssetSupplyResponse: {
                encode(message: _127.AssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.AssetSupplyResponse;
                fromJSON(object: any): _127.AssetSupplyResponse;
                toJSON(message: _127.AssetSupplyResponse): unknown;
                fromPartial(object: Partial<_127.AssetSupplyResponse>): _127.AssetSupplyResponse;
            };
            QueryAssetSupplyResponse: {
                encode(message: _127.QueryAssetSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAssetSupplyResponse;
                fromJSON(object: any): _127.QueryAssetSupplyResponse;
                toJSON(message: _127.QueryAssetSupplyResponse): unknown;
                fromPartial(object: Partial<_127.QueryAssetSupplyResponse>): _127.QueryAssetSupplyResponse;
            };
            QueryAssetSuppliesRequest: {
                encode(_: _127.QueryAssetSuppliesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAssetSuppliesRequest;
                fromJSON(_: any): _127.QueryAssetSuppliesRequest;
                toJSON(_: _127.QueryAssetSuppliesRequest): unknown;
                fromPartial(_: Partial<_127.QueryAssetSuppliesRequest>): _127.QueryAssetSuppliesRequest;
            };
            QueryAssetSuppliesResponse: {
                encode(message: _127.QueryAssetSuppliesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAssetSuppliesResponse;
                fromJSON(object: any): _127.QueryAssetSuppliesResponse;
                toJSON(message: _127.QueryAssetSuppliesResponse): unknown;
                fromPartial(object: Partial<_127.QueryAssetSuppliesResponse>): _127.QueryAssetSuppliesResponse;
            };
            QueryAtomicSwapRequest: {
                encode(message: _127.QueryAtomicSwapRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAtomicSwapRequest;
                fromJSON(object: any): _127.QueryAtomicSwapRequest;
                toJSON(message: _127.QueryAtomicSwapRequest): unknown;
                fromPartial(object: Partial<_127.QueryAtomicSwapRequest>): _127.QueryAtomicSwapRequest;
            };
            QueryAtomicSwapResponse: {
                encode(message: _127.QueryAtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAtomicSwapResponse;
                fromJSON(object: any): _127.QueryAtomicSwapResponse;
                toJSON(message: _127.QueryAtomicSwapResponse): unknown;
                fromPartial(object: Partial<_127.QueryAtomicSwapResponse>): _127.QueryAtomicSwapResponse;
            };
            AtomicSwapResponse: {
                encode(message: _127.AtomicSwapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.AtomicSwapResponse;
                fromJSON(object: any): _127.AtomicSwapResponse;
                toJSON(message: _127.AtomicSwapResponse): unknown;
                fromPartial(object: Partial<_127.AtomicSwapResponse>): _127.AtomicSwapResponse;
            };
            QueryAtomicSwapsRequest: {
                encode(message: _127.QueryAtomicSwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAtomicSwapsRequest;
                fromJSON(object: any): _127.QueryAtomicSwapsRequest;
                toJSON(message: _127.QueryAtomicSwapsRequest): unknown;
                fromPartial(object: Partial<_127.QueryAtomicSwapsRequest>): _127.QueryAtomicSwapsRequest;
            };
            QueryAtomicSwapsResponse: {
                encode(message: _127.QueryAtomicSwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryAtomicSwapsResponse;
                fromJSON(object: any): _127.QueryAtomicSwapsResponse;
                toJSON(message: _127.QueryAtomicSwapsResponse): unknown;
                fromPartial(object: Partial<_127.QueryAtomicSwapsResponse>): _127.QueryAtomicSwapsResponse;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                fromJSON(object: any): _126.GenesisState;
                toJSON(message: _126.GenesisState): unknown;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            };
            swapStatusFromJSON(object: any): _125.SwapStatus;
            swapStatusToJSON(object: _125.SwapStatus): string;
            swapDirectionFromJSON(object: any): _125.SwapDirection;
            swapDirectionToJSON(object: _125.SwapDirection): string;
            SwapStatus: typeof _125.SwapStatus;
            SwapStatusSDKType: typeof _125.SwapStatusSDKType;
            SwapDirection: typeof _125.SwapDirection;
            SwapDirectionSDKType: typeof _125.SwapDirectionSDKType;
            Params: {
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Params;
                fromJSON(object: any): _125.Params;
                toJSON(message: _125.Params): unknown;
                fromPartial(object: Partial<_125.Params>): _125.Params;
            };
            AssetParam: {
                encode(message: _125.AssetParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AssetParam;
                fromJSON(object: any): _125.AssetParam;
                toJSON(message: _125.AssetParam): unknown;
                fromPartial(object: Partial<_125.AssetParam>): _125.AssetParam;
            };
            SupplyLimit: {
                encode(message: _125.SupplyLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.SupplyLimit;
                fromJSON(object: any): _125.SupplyLimit;
                toJSON(message: _125.SupplyLimit): unknown;
                fromPartial(object: Partial<_125.SupplyLimit>): _125.SupplyLimit;
            };
            AtomicSwap: {
                encode(message: _125.AtomicSwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AtomicSwap;
                fromJSON(object: any): _125.AtomicSwap;
                toJSON(message: _125.AtomicSwap): unknown;
                fromPartial(object: Partial<_125.AtomicSwap>): _125.AtomicSwap;
            };
            AssetSupply: {
                encode(message: _125.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.AssetSupply;
                fromJSON(object: any): _125.AssetSupply;
                toJSON(message: _125.AssetSupply): unknown;
                fromPartial(object: Partial<_125.AssetSupply>): _125.AssetSupply;
            };
        };
    }
    namespace cdp {
        const v1beta1: {
            MsgClientImpl: typeof _314.MsgClientImpl;
            QueryClientImpl: typeof _301.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                accounts(request?: _131.QueryAccountsRequest): Promise<_131.QueryAccountsResponse>;
                totalPrincipal(request: _131.QueryTotalPrincipalRequest): Promise<_131.QueryTotalPrincipalResponse>;
                totalCollateral(request: _131.QueryTotalCollateralRequest): Promise<_131.QueryTotalCollateralResponse>;
                cdps(request: _131.QueryCdpsRequest): Promise<_131.QueryCdpsResponse>;
                cdp(request: _131.QueryCdpRequest): Promise<_131.QueryCdpResponse>;
                deposits(request: _131.QueryDepositsRequest): Promise<_131.QueryDepositsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createCDP(value: _132.MsgCreateCDP): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _132.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _132.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    drawDebt(value: _132.MsgDrawDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repayDebt(value: _132.MsgRepayDebt): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _132.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createCDP(value: _132.MsgCreateCDP): {
                        typeUrl: string;
                        value: _132.MsgCreateCDP;
                    };
                    deposit(value: _132.MsgDeposit): {
                        typeUrl: string;
                        value: _132.MsgDeposit;
                    };
                    withdraw(value: _132.MsgWithdraw): {
                        typeUrl: string;
                        value: _132.MsgWithdraw;
                    };
                    drawDebt(value: _132.MsgDrawDebt): {
                        typeUrl: string;
                        value: _132.MsgDrawDebt;
                    };
                    repayDebt(value: _132.MsgRepayDebt): {
                        typeUrl: string;
                        value: _132.MsgRepayDebt;
                    };
                    liquidate(value: _132.MsgLiquidate): {
                        typeUrl: string;
                        value: _132.MsgLiquidate;
                    };
                };
                toJSON: {
                    createCDP(value: _132.MsgCreateCDP): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _132.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _132.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    drawDebt(value: _132.MsgDrawDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repayDebt(value: _132.MsgRepayDebt): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _132.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createCDP(value: any): {
                        typeUrl: string;
                        value: _132.MsgCreateCDP;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _132.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _132.MsgWithdraw;
                    };
                    drawDebt(value: any): {
                        typeUrl: string;
                        value: _132.MsgDrawDebt;
                    };
                    repayDebt(value: any): {
                        typeUrl: string;
                        value: _132.MsgRepayDebt;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _132.MsgLiquidate;
                    };
                };
                fromPartial: {
                    createCDP(value: _132.MsgCreateCDP): {
                        typeUrl: string;
                        value: _132.MsgCreateCDP;
                    };
                    deposit(value: _132.MsgDeposit): {
                        typeUrl: string;
                        value: _132.MsgDeposit;
                    };
                    withdraw(value: _132.MsgWithdraw): {
                        typeUrl: string;
                        value: _132.MsgWithdraw;
                    };
                    drawDebt(value: _132.MsgDrawDebt): {
                        typeUrl: string;
                        value: _132.MsgDrawDebt;
                    };
                    repayDebt(value: _132.MsgRepayDebt): {
                        typeUrl: string;
                        value: _132.MsgRepayDebt;
                    };
                    liquidate(value: _132.MsgLiquidate): {
                        typeUrl: string;
                        value: _132.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.cdp.v1beta1.MsgCreateCDP": {
                    aminoType: string;
                    toAmino: ({ sender, collateral, principal, collateralType }: _132.MsgCreateCDP) => {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ sender, collateral, principal, collateral_type }: {
                        sender: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        principal: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _132.MsgCreateCDP;
                };
                "/kava.cdp.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _132.MsgDeposit) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _132.MsgDeposit;
                };
                "/kava.cdp.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, owner, collateral, collateralType }: _132.MsgWithdraw) => {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    };
                    fromAmino: ({ depositor, owner, collateral, collateral_type }: {
                        depositor: string;
                        owner: string;
                        collateral: {
                            denom: string;
                            amount: string;
                        };
                        collateral_type: string;
                    }) => _132.MsgWithdraw;
                };
                "/kava.cdp.v1beta1.MsgDrawDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, principal }: _132.MsgDrawDebt) => {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, principal }: {
                        sender: string;
                        collateral_type: string;
                        principal: {
                            denom: string;
                            amount: string;
                        };
                    }) => _132.MsgDrawDebt;
                };
                "/kava.cdp.v1beta1.MsgRepayDebt": {
                    aminoType: string;
                    toAmino: ({ sender, collateralType, payment }: _132.MsgRepayDebt) => {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, collateral_type, payment }: {
                        sender: string;
                        collateral_type: string;
                        payment: {
                            denom: string;
                            amount: string;
                        };
                    }) => _132.MsgRepayDebt;
                };
                "/kava.cdp.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower, collateralType }: _132.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    };
                    fromAmino: ({ keeper, borrower, collateral_type }: {
                        keeper: string;
                        borrower: string;
                        collateral_type: string;
                    }) => _132.MsgLiquidate;
                };
            };
            MsgCreateCDP: {
                encode(message: _132.MsgCreateCDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateCDP;
                fromJSON(object: any): _132.MsgCreateCDP;
                toJSON(message: _132.MsgCreateCDP): unknown;
                fromPartial(object: Partial<_132.MsgCreateCDP>): _132.MsgCreateCDP;
            };
            MsgCreateCDPResponse: {
                encode(message: _132.MsgCreateCDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgCreateCDPResponse;
                fromJSON(object: any): _132.MsgCreateCDPResponse;
                toJSON(message: _132.MsgCreateCDPResponse): unknown;
                fromPartial(object: Partial<_132.MsgCreateCDPResponse>): _132.MsgCreateCDPResponse;
            };
            MsgDeposit: {
                encode(message: _132.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgDeposit;
                fromJSON(object: any): _132.MsgDeposit;
                toJSON(message: _132.MsgDeposit): unknown;
                fromPartial(object: Partial<_132.MsgDeposit>): _132.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _132.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgDepositResponse;
                fromJSON(_: any): _132.MsgDepositResponse;
                toJSON(_: _132.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_132.MsgDepositResponse>): _132.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _132.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgWithdraw;
                fromJSON(object: any): _132.MsgWithdraw;
                toJSON(message: _132.MsgWithdraw): unknown;
                fromPartial(object: Partial<_132.MsgWithdraw>): _132.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _132.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgWithdrawResponse;
                fromJSON(_: any): _132.MsgWithdrawResponse;
                toJSON(_: _132.MsgWithdrawResponse): unknown;
                fromPartial(_: Partial<_132.MsgWithdrawResponse>): _132.MsgWithdrawResponse;
            };
            MsgDrawDebt: {
                encode(message: _132.MsgDrawDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgDrawDebt;
                fromJSON(object: any): _132.MsgDrawDebt;
                toJSON(message: _132.MsgDrawDebt): unknown;
                fromPartial(object: Partial<_132.MsgDrawDebt>): _132.MsgDrawDebt;
            };
            MsgDrawDebtResponse: {
                encode(_: _132.MsgDrawDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgDrawDebtResponse;
                fromJSON(_: any): _132.MsgDrawDebtResponse;
                toJSON(_: _132.MsgDrawDebtResponse): unknown;
                fromPartial(_: Partial<_132.MsgDrawDebtResponse>): _132.MsgDrawDebtResponse;
            };
            MsgRepayDebt: {
                encode(message: _132.MsgRepayDebt, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgRepayDebt;
                fromJSON(object: any): _132.MsgRepayDebt;
                toJSON(message: _132.MsgRepayDebt): unknown;
                fromPartial(object: Partial<_132.MsgRepayDebt>): _132.MsgRepayDebt;
            };
            MsgRepayDebtResponse: {
                encode(_: _132.MsgRepayDebtResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgRepayDebtResponse;
                fromJSON(_: any): _132.MsgRepayDebtResponse;
                toJSON(_: _132.MsgRepayDebtResponse): unknown;
                fromPartial(_: Partial<_132.MsgRepayDebtResponse>): _132.MsgRepayDebtResponse;
            };
            MsgLiquidate: {
                encode(message: _132.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgLiquidate;
                fromJSON(object: any): _132.MsgLiquidate;
                toJSON(message: _132.MsgLiquidate): unknown;
                fromPartial(object: Partial<_132.MsgLiquidate>): _132.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _132.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.MsgLiquidateResponse;
                fromJSON(_: any): _132.MsgLiquidateResponse;
                toJSON(_: _132.MsgLiquidateResponse): unknown;
                fromPartial(_: Partial<_132.MsgLiquidateResponse>): _132.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _131.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsRequest;
                fromJSON(_: any): _131.QueryParamsRequest;
                toJSON(_: _131.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_131.QueryParamsRequest>): _131.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _131.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryParamsResponse;
                fromJSON(object: any): _131.QueryParamsResponse;
                toJSON(message: _131.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_131.QueryParamsResponse>): _131.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _131.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryAccountsRequest;
                fromJSON(_: any): _131.QueryAccountsRequest;
                toJSON(_: _131.QueryAccountsRequest): unknown;
                fromPartial(_: Partial<_131.QueryAccountsRequest>): _131.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _131.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryAccountsResponse;
                fromJSON(object: any): _131.QueryAccountsResponse;
                toJSON(message: _131.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_131.QueryAccountsResponse>): _131.QueryAccountsResponse;
            };
            QueryCdpRequest: {
                encode(message: _131.QueryCdpRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCdpRequest;
                fromJSON(object: any): _131.QueryCdpRequest;
                toJSON(message: _131.QueryCdpRequest): unknown;
                fromPartial(object: Partial<_131.QueryCdpRequest>): _131.QueryCdpRequest;
            };
            QueryCdpResponse: {
                encode(message: _131.QueryCdpResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCdpResponse;
                fromJSON(object: any): _131.QueryCdpResponse;
                toJSON(message: _131.QueryCdpResponse): unknown;
                fromPartial(object: Partial<_131.QueryCdpResponse>): _131.QueryCdpResponse;
            };
            QueryCdpsRequest: {
                encode(message: _131.QueryCdpsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCdpsRequest;
                fromJSON(object: any): _131.QueryCdpsRequest;
                toJSON(message: _131.QueryCdpsRequest): unknown;
                fromPartial(object: Partial<_131.QueryCdpsRequest>): _131.QueryCdpsRequest;
            };
            QueryCdpsResponse: {
                encode(message: _131.QueryCdpsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryCdpsResponse;
                fromJSON(object: any): _131.QueryCdpsResponse;
                toJSON(message: _131.QueryCdpsResponse): unknown;
                fromPartial(object: Partial<_131.QueryCdpsResponse>): _131.QueryCdpsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _131.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDepositsRequest;
                fromJSON(object: any): _131.QueryDepositsRequest;
                toJSON(message: _131.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_131.QueryDepositsRequest>): _131.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _131.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryDepositsResponse;
                fromJSON(object: any): _131.QueryDepositsResponse;
                toJSON(message: _131.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_131.QueryDepositsResponse>): _131.QueryDepositsResponse;
            };
            QueryTotalPrincipalRequest: {
                encode(message: _131.QueryTotalPrincipalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryTotalPrincipalRequest;
                fromJSON(object: any): _131.QueryTotalPrincipalRequest;
                toJSON(message: _131.QueryTotalPrincipalRequest): unknown;
                fromPartial(object: Partial<_131.QueryTotalPrincipalRequest>): _131.QueryTotalPrincipalRequest;
            };
            QueryTotalPrincipalResponse: {
                encode(message: _131.QueryTotalPrincipalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryTotalPrincipalResponse;
                fromJSON(object: any): _131.QueryTotalPrincipalResponse;
                toJSON(message: _131.QueryTotalPrincipalResponse): unknown;
                fromPartial(object: Partial<_131.QueryTotalPrincipalResponse>): _131.QueryTotalPrincipalResponse;
            };
            QueryTotalCollateralRequest: {
                encode(message: _131.QueryTotalCollateralRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryTotalCollateralRequest;
                fromJSON(object: any): _131.QueryTotalCollateralRequest;
                toJSON(message: _131.QueryTotalCollateralRequest): unknown;
                fromPartial(object: Partial<_131.QueryTotalCollateralRequest>): _131.QueryTotalCollateralRequest;
            };
            QueryTotalCollateralResponse: {
                encode(message: _131.QueryTotalCollateralResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.QueryTotalCollateralResponse;
                fromJSON(object: any): _131.QueryTotalCollateralResponse;
                toJSON(message: _131.QueryTotalCollateralResponse): unknown;
                fromPartial(object: Partial<_131.QueryTotalCollateralResponse>): _131.QueryTotalCollateralResponse;
            };
            CDPResponse: {
                encode(message: _131.CDPResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.CDPResponse;
                fromJSON(object: any): _131.CDPResponse;
                toJSON(message: _131.CDPResponse): unknown;
                fromPartial(object: Partial<_131.CDPResponse>): _131.CDPResponse;
            };
            GenesisState: {
                encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                fromJSON(object: any): _130.GenesisState;
                toJSON(message: _130.GenesisState): unknown;
                fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: Partial<_130.Params>): _130.Params;
            };
            DebtParam: {
                encode(message: _130.DebtParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.DebtParam;
                fromJSON(object: any): _130.DebtParam;
                toJSON(message: _130.DebtParam): unknown;
                fromPartial(object: Partial<_130.DebtParam>): _130.DebtParam;
            };
            CollateralParam: {
                encode(message: _130.CollateralParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CollateralParam;
                fromJSON(object: any): _130.CollateralParam;
                toJSON(message: _130.CollateralParam): unknown;
                fromPartial(object: Partial<_130.CollateralParam>): _130.CollateralParam;
            };
            GenesisAccumulationTime: {
                encode(message: _130.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisAccumulationTime;
                fromJSON(object: any): _130.GenesisAccumulationTime;
                toJSON(message: _130.GenesisAccumulationTime): unknown;
                fromPartial(object: Partial<_130.GenesisAccumulationTime>): _130.GenesisAccumulationTime;
            };
            GenesisTotalPrincipal: {
                encode(message: _130.GenesisTotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisTotalPrincipal;
                fromJSON(object: any): _130.GenesisTotalPrincipal;
                toJSON(message: _130.GenesisTotalPrincipal): unknown;
                fromPartial(object: Partial<_130.GenesisTotalPrincipal>): _130.GenesisTotalPrincipal;
            };
            CDP: {
                encode(message: _129.CDP, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.CDP;
                fromJSON(object: any): _129.CDP;
                toJSON(message: _129.CDP): unknown;
                fromPartial(object: Partial<_129.CDP>): _129.CDP;
            };
            Deposit: {
                encode(message: _129.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Deposit;
                fromJSON(object: any): _129.Deposit;
                toJSON(message: _129.Deposit): unknown;
                fromPartial(object: Partial<_129.Deposit>): _129.Deposit;
            };
            TotalPrincipal: {
                encode(message: _129.TotalPrincipal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TotalPrincipal;
                fromJSON(object: any): _129.TotalPrincipal;
                toJSON(message: _129.TotalPrincipal): unknown;
                fromPartial(object: Partial<_129.TotalPrincipal>): _129.TotalPrincipal;
            };
            TotalCollateral: {
                encode(message: _129.TotalCollateral, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TotalCollateral;
                fromJSON(object: any): _129.TotalCollateral;
                toJSON(message: _129.TotalCollateral): unknown;
                fromPartial(object: Partial<_129.TotalCollateral>): _129.TotalCollateral;
            };
            OwnerCDPIndex: {
                encode(message: _129.OwnerCDPIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.OwnerCDPIndex;
                fromJSON(object: any): _129.OwnerCDPIndex;
                toJSON(message: _129.OwnerCDPIndex): unknown;
                fromPartial(object: Partial<_129.OwnerCDPIndex>): _129.OwnerCDPIndex;
            };
        };
    }
    namespace committee {
        const v1beta1: {
            MsgClientImpl: typeof _315.MsgClientImpl;
            QueryClientImpl: typeof _302.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                committees(request?: _137.QueryCommitteesRequest): Promise<_137.QueryCommitteesResponse>;
                committee(request: _137.QueryCommitteeRequest): Promise<_137.QueryCommitteeResponse>;
                proposals(request: _137.QueryProposalsRequest): Promise<_137.QueryProposalsResponse>;
                proposal(request: _137.QueryProposalRequest): Promise<_137.QueryProposalResponse>;
                nextProposalID(request?: _137.QueryNextProposalIDRequest): Promise<_137.QueryNextProposalIDResponse>;
                votes(request: _137.QueryVotesRequest): Promise<_137.QueryVotesResponse>;
                vote(request: _137.QueryVoteRequest): Promise<_137.QueryVoteResponse>;
                tally(request: _137.QueryTallyRequest): Promise<_137.QueryTallyResponse>;
                rawParams(request: _137.QueryRawParamsRequest): Promise<_137.QueryRawParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _138.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _138.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _138.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _138.MsgSubmitProposal;
                    };
                    vote(value: _138.MsgVote): {
                        typeUrl: string;
                        value: _138.MsgVote;
                    };
                };
                toJSON: {
                    submitProposal(value: _138.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _138.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _138.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _138.MsgVote;
                    };
                };
                fromPartial: {
                    submitProposal(value: _138.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _138.MsgSubmitProposal;
                    };
                    vote(value: _138.MsgVote): {
                        typeUrl: string;
                        value: _138.MsgVote;
                    };
                };
            };
            AminoConverter: {
                "/kava.committee.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ pubProposal, proposer, committeeId }: _138.MsgSubmitProposal) => {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    };
                    fromAmino: ({ pub_proposal, proposer, committee_id }: {
                        pub_proposal: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        proposer: string;
                        committee_id: string;
                    }) => _138.MsgSubmitProposal;
                };
                "/kava.committee.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, voteType }: _138.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    };
                    fromAmino: ({ proposal_id, voter, vote_type }: {
                        proposal_id: string;
                        voter: string;
                        vote_type: number;
                    }) => _138.MsgVote;
                };
            };
            MsgSubmitProposal: {
                encode(message: _138.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSubmitProposal;
                fromJSON(object: any): _138.MsgSubmitProposal;
                toJSON(message: _138.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_138.MsgSubmitProposal>): _138.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _138.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgSubmitProposalResponse;
                fromJSON(object: any): _138.MsgSubmitProposalResponse;
                toJSON(message: _138.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_138.MsgSubmitProposalResponse>): _138.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _138.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgVote;
                fromJSON(object: any): _138.MsgVote;
                toJSON(message: _138.MsgVote): unknown;
                fromPartial(object: Partial<_138.MsgVote>): _138.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _138.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgVoteResponse;
                fromJSON(_: any): _138.MsgVoteResponse;
                toJSON(_: _138.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_138.MsgVoteResponse>): _138.MsgVoteResponse;
            };
            QueryCommitteesRequest: {
                encode(_: _137.QueryCommitteesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCommitteesRequest;
                fromJSON(_: any): _137.QueryCommitteesRequest;
                toJSON(_: _137.QueryCommitteesRequest): unknown;
                fromPartial(_: Partial<_137.QueryCommitteesRequest>): _137.QueryCommitteesRequest;
            };
            QueryCommitteesResponse: {
                encode(message: _137.QueryCommitteesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCommitteesResponse;
                fromJSON(object: any): _137.QueryCommitteesResponse;
                toJSON(message: _137.QueryCommitteesResponse): unknown;
                fromPartial(object: Partial<_137.QueryCommitteesResponse>): _137.QueryCommitteesResponse;
            };
            QueryCommitteeRequest: {
                encode(message: _137.QueryCommitteeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCommitteeRequest;
                fromJSON(object: any): _137.QueryCommitteeRequest;
                toJSON(message: _137.QueryCommitteeRequest): unknown;
                fromPartial(object: Partial<_137.QueryCommitteeRequest>): _137.QueryCommitteeRequest;
            };
            QueryCommitteeResponse: {
                encode(message: _137.QueryCommitteeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryCommitteeResponse;
                fromJSON(object: any): _137.QueryCommitteeResponse;
                toJSON(message: _137.QueryCommitteeResponse): unknown;
                fromPartial(object: Partial<_137.QueryCommitteeResponse>): _137.QueryCommitteeResponse;
            };
            QueryProposalsRequest: {
                encode(message: _137.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryProposalsRequest;
                fromJSON(object: any): _137.QueryProposalsRequest;
                toJSON(message: _137.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_137.QueryProposalsRequest>): _137.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _137.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryProposalsResponse;
                fromJSON(object: any): _137.QueryProposalsResponse;
                toJSON(message: _137.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_137.QueryProposalsResponse>): _137.QueryProposalsResponse;
            };
            QueryProposalRequest: {
                encode(message: _137.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryProposalRequest;
                fromJSON(object: any): _137.QueryProposalRequest;
                toJSON(message: _137.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_137.QueryProposalRequest>): _137.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _137.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryProposalResponse;
                fromJSON(object: any): _137.QueryProposalResponse;
                toJSON(message: _137.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_137.QueryProposalResponse>): _137.QueryProposalResponse;
            };
            QueryNextProposalIDRequest: {
                encode(_: _137.QueryNextProposalIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryNextProposalIDRequest;
                fromJSON(_: any): _137.QueryNextProposalIDRequest;
                toJSON(_: _137.QueryNextProposalIDRequest): unknown;
                fromPartial(_: Partial<_137.QueryNextProposalIDRequest>): _137.QueryNextProposalIDRequest;
            };
            QueryNextProposalIDResponse: {
                encode(message: _137.QueryNextProposalIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryNextProposalIDResponse;
                fromJSON(object: any): _137.QueryNextProposalIDResponse;
                toJSON(message: _137.QueryNextProposalIDResponse): unknown;
                fromPartial(object: Partial<_137.QueryNextProposalIDResponse>): _137.QueryNextProposalIDResponse;
            };
            QueryVotesRequest: {
                encode(message: _137.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryVotesRequest;
                fromJSON(object: any): _137.QueryVotesRequest;
                toJSON(message: _137.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_137.QueryVotesRequest>): _137.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _137.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryVotesResponse;
                fromJSON(object: any): _137.QueryVotesResponse;
                toJSON(message: _137.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_137.QueryVotesResponse>): _137.QueryVotesResponse;
            };
            QueryVoteRequest: {
                encode(message: _137.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryVoteRequest;
                fromJSON(object: any): _137.QueryVoteRequest;
                toJSON(message: _137.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_137.QueryVoteRequest>): _137.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _137.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryVoteResponse;
                fromJSON(object: any): _137.QueryVoteResponse;
                toJSON(message: _137.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_137.QueryVoteResponse>): _137.QueryVoteResponse;
            };
            QueryTallyRequest: {
                encode(message: _137.QueryTallyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryTallyRequest;
                fromJSON(object: any): _137.QueryTallyRequest;
                toJSON(message: _137.QueryTallyRequest): unknown;
                fromPartial(object: Partial<_137.QueryTallyRequest>): _137.QueryTallyRequest;
            };
            QueryTallyResponse: {
                encode(message: _137.QueryTallyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryTallyResponse;
                fromJSON(object: any): _137.QueryTallyResponse;
                toJSON(message: _137.QueryTallyResponse): unknown;
                fromPartial(object: Partial<_137.QueryTallyResponse>): _137.QueryTallyResponse;
            };
            QueryRawParamsRequest: {
                encode(message: _137.QueryRawParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryRawParamsRequest;
                fromJSON(object: any): _137.QueryRawParamsRequest;
                toJSON(message: _137.QueryRawParamsRequest): unknown;
                fromPartial(object: Partial<_137.QueryRawParamsRequest>): _137.QueryRawParamsRequest;
            };
            QueryRawParamsResponse: {
                encode(message: _137.QueryRawParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryRawParamsResponse;
                fromJSON(object: any): _137.QueryRawParamsResponse;
                toJSON(message: _137.QueryRawParamsResponse): unknown;
                fromPartial(object: Partial<_137.QueryRawParamsResponse>): _137.QueryRawParamsResponse;
            };
            CommitteeChangeProposal: {
                encode(message: _136.CommitteeChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.CommitteeChangeProposal;
                fromJSON(object: any): _136.CommitteeChangeProposal;
                toJSON(message: _136.CommitteeChangeProposal): unknown;
                fromPartial(object: Partial<_136.CommitteeChangeProposal>): _136.CommitteeChangeProposal;
            };
            CommitteeDeleteProposal: {
                encode(message: _136.CommitteeDeleteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.CommitteeDeleteProposal;
                fromJSON(object: any): _136.CommitteeDeleteProposal;
                toJSON(message: _136.CommitteeDeleteProposal): unknown;
                fromPartial(object: Partial<_136.CommitteeDeleteProposal>): _136.CommitteeDeleteProposal;
            };
            GodPermission: {
                encode(_: _135.GodPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GodPermission;
                fromJSON(_: any): _135.GodPermission;
                toJSON(_: _135.GodPermission): unknown;
                fromPartial(_: Partial<_135.GodPermission>): _135.GodPermission;
            };
            SoftwareUpgradePermission: {
                encode(_: _135.SoftwareUpgradePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SoftwareUpgradePermission;
                fromJSON(_: any): _135.SoftwareUpgradePermission;
                toJSON(_: _135.SoftwareUpgradePermission): unknown;
                fromPartial(_: Partial<_135.SoftwareUpgradePermission>): _135.SoftwareUpgradePermission;
            };
            TextPermission: {
                encode(_: _135.TextPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.TextPermission;
                fromJSON(_: any): _135.TextPermission;
                toJSON(_: _135.TextPermission): unknown;
                fromPartial(_: Partial<_135.TextPermission>): _135.TextPermission;
            };
            ParamsChangePermission: {
                encode(message: _135.ParamsChangePermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ParamsChangePermission;
                fromJSON(object: any): _135.ParamsChangePermission;
                toJSON(message: _135.ParamsChangePermission): unknown;
                fromPartial(object: Partial<_135.ParamsChangePermission>): _135.ParamsChangePermission;
            };
            AllowedParamsChange: {
                encode(message: _135.AllowedParamsChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AllowedParamsChange;
                fromJSON(object: any): _135.AllowedParamsChange;
                toJSON(message: _135.AllowedParamsChange): unknown;
                fromPartial(object: Partial<_135.AllowedParamsChange>): _135.AllowedParamsChange;
            };
            SubparamRequirement: {
                encode(message: _135.SubparamRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SubparamRequirement;
                fromJSON(object: any): _135.SubparamRequirement;
                toJSON(message: _135.SubparamRequirement): unknown;
                fromPartial(object: Partial<_135.SubparamRequirement>): _135.SubparamRequirement;
            };
            voteTypeFromJSON(object: any): _134.VoteType;
            voteTypeToJSON(object: _134.VoteType): string;
            VoteType: typeof _134.VoteType;
            VoteTypeSDKType: typeof _134.VoteTypeSDKType;
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GenesisState;
                fromJSON(object: any): _134.GenesisState;
                toJSON(message: _134.GenesisState): unknown;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
            };
            Proposal: {
                encode(message: _134.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proposal;
                fromJSON(object: any): _134.Proposal;
                toJSON(message: _134.Proposal): unknown;
                fromPartial(object: Partial<_134.Proposal>): _134.Proposal;
            };
            Vote: {
                encode(message: _134.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Vote;
                fromJSON(object: any): _134.Vote;
                toJSON(message: _134.Vote): unknown;
                fromPartial(object: Partial<_134.Vote>): _134.Vote;
            };
            tallyOptionFromJSON(object: any): _133.TallyOption;
            tallyOptionToJSON(object: _133.TallyOption): string;
            TallyOption: typeof _133.TallyOption;
            TallyOptionSDKType: typeof _133.TallyOptionSDKType;
            BaseCommittee: {
                encode(message: _133.BaseCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.BaseCommittee;
                fromJSON(object: any): _133.BaseCommittee;
                toJSON(message: _133.BaseCommittee): unknown;
                fromPartial(object: Partial<_133.BaseCommittee>): _133.BaseCommittee;
            };
            MemberCommittee: {
                encode(message: _133.MemberCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.MemberCommittee;
                fromJSON(object: any): _133.MemberCommittee;
                toJSON(message: _133.MemberCommittee): unknown;
                fromPartial(object: Partial<_133.MemberCommittee>): _133.MemberCommittee;
            };
            TokenCommittee: {
                encode(message: _133.TokenCommittee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TokenCommittee;
                fromJSON(object: any): _133.TokenCommittee;
                toJSON(message: _133.TokenCommittee): unknown;
                fromPartial(object: Partial<_133.TokenCommittee>): _133.TokenCommittee;
            };
        };
    }
    namespace earn {
        const v1beta1: {
            MsgClientImpl: typeof _316.MsgClientImpl;
            QueryClientImpl: typeof _303.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                vaults(request?: _142.QueryVaultsRequest): Promise<_142.QueryVaultsResponse>;
                vault(request: _142.QueryVaultRequest): Promise<_142.QueryVaultResponse>;
                deposits(request: _142.QueryDepositsRequest): Promise<_142.QueryDepositsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _144.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                    withdraw(value: _144.MsgWithdraw): {
                        typeUrl: string;
                        value: _144.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _144.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _144.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _144.MsgDeposit): {
                        typeUrl: string;
                        value: _144.MsgDeposit;
                    };
                    withdraw(value: _144.MsgWithdraw): {
                        typeUrl: string;
                        value: _144.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.earn.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount, strategy }: _144.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    };
                    fromAmino: ({ depositor, amount, strategy }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    }) => _144.MsgDeposit;
                };
                "/kava.earn.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, amount, strategy }: _144.MsgWithdraw) => {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    };
                    fromAmino: ({ from, amount, strategy }: {
                        from: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        strategy: number;
                    }) => _144.MsgWithdraw;
                };
            };
            AllowedVault: {
                encode(message: _145.AllowedVault, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AllowedVault;
                fromJSON(object: any): _145.AllowedVault;
                toJSON(message: _145.AllowedVault): unknown;
                fromPartial(object: Partial<_145.AllowedVault>): _145.AllowedVault;
            };
            VaultRecord: {
                encode(message: _145.VaultRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.VaultRecord;
                fromJSON(object: any): _145.VaultRecord;
                toJSON(message: _145.VaultRecord): unknown;
                fromPartial(object: Partial<_145.VaultRecord>): _145.VaultRecord;
            };
            VaultShareRecord: {
                encode(message: _145.VaultShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.VaultShareRecord;
                fromJSON(object: any): _145.VaultShareRecord;
                toJSON(message: _145.VaultShareRecord): unknown;
                fromPartial(object: Partial<_145.VaultShareRecord>): _145.VaultShareRecord;
            };
            VaultShare: {
                encode(message: _145.VaultShare, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.VaultShare;
                fromJSON(object: any): _145.VaultShare;
                toJSON(message: _145.VaultShare): unknown;
                fromPartial(object: Partial<_145.VaultShare>): _145.VaultShare;
            };
            MsgDeposit: {
                encode(message: _144.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDeposit;
                fromJSON(object: any): _144.MsgDeposit;
                toJSON(message: _144.MsgDeposit): unknown;
                fromPartial(object: Partial<_144.MsgDeposit>): _144.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(message: _144.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgDepositResponse;
                fromJSON(object: any): _144.MsgDepositResponse;
                toJSON(message: _144.MsgDepositResponse): unknown;
                fromPartial(object: Partial<_144.MsgDepositResponse>): _144.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _144.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgWithdraw;
                fromJSON(object: any): _144.MsgWithdraw;
                toJSON(message: _144.MsgWithdraw): unknown;
                fromPartial(object: Partial<_144.MsgWithdraw>): _144.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(message: _144.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.MsgWithdrawResponse;
                fromJSON(object: any): _144.MsgWithdrawResponse;
                toJSON(message: _144.MsgWithdrawResponse): unknown;
                fromPartial(object: Partial<_144.MsgWithdrawResponse>): _144.MsgWithdrawResponse;
            };
            strategyTypeFromJSON(object: any): _143.StrategyType;
            strategyTypeToJSON(object: _143.StrategyType): string;
            StrategyType: typeof _143.StrategyType;
            StrategyTypeSDKType: typeof _143.StrategyTypeSDKType;
            QueryParamsRequest: {
                encode(_: _142.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsRequest;
                fromJSON(_: any): _142.QueryParamsRequest;
                toJSON(_: _142.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _142.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryParamsResponse;
                fromJSON(object: any): _142.QueryParamsResponse;
                toJSON(message: _142.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
            };
            QueryVaultsRequest: {
                encode(_: _142.QueryVaultsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVaultsRequest;
                fromJSON(_: any): _142.QueryVaultsRequest;
                toJSON(_: _142.QueryVaultsRequest): unknown;
                fromPartial(_: Partial<_142.QueryVaultsRequest>): _142.QueryVaultsRequest;
            };
            QueryVaultsResponse: {
                encode(message: _142.QueryVaultsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVaultsResponse;
                fromJSON(object: any): _142.QueryVaultsResponse;
                toJSON(message: _142.QueryVaultsResponse): unknown;
                fromPartial(object: Partial<_142.QueryVaultsResponse>): _142.QueryVaultsResponse;
            };
            QueryVaultRequest: {
                encode(message: _142.QueryVaultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVaultRequest;
                fromJSON(object: any): _142.QueryVaultRequest;
                toJSON(message: _142.QueryVaultRequest): unknown;
                fromPartial(object: Partial<_142.QueryVaultRequest>): _142.QueryVaultRequest;
            };
            QueryVaultResponse: {
                encode(message: _142.QueryVaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryVaultResponse;
                fromJSON(object: any): _142.QueryVaultResponse;
                toJSON(message: _142.QueryVaultResponse): unknown;
                fromPartial(object: Partial<_142.QueryVaultResponse>): _142.QueryVaultResponse;
            };
            VaultResponse: {
                encode(message: _142.VaultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.VaultResponse;
                fromJSON(object: any): _142.VaultResponse;
                toJSON(message: _142.VaultResponse): unknown;
                fromPartial(object: Partial<_142.VaultResponse>): _142.VaultResponse;
            };
            QueryDepositsRequest: {
                encode(message: _142.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositsRequest;
                fromJSON(object: any): _142.QueryDepositsRequest;
                toJSON(message: _142.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_142.QueryDepositsRequest>): _142.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _142.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryDepositsResponse;
                fromJSON(object: any): _142.QueryDepositsResponse;
                toJSON(message: _142.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_142.QueryDepositsResponse>): _142.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _142.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DepositResponse;
                fromJSON(object: any): _142.DepositResponse;
                toJSON(message: _142.DepositResponse): unknown;
                fromPartial(object: Partial<_142.DepositResponse>): _142.DepositResponse;
            };
            CommunityPoolDepositProposal: {
                encode(message: _141.CommunityPoolDepositProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CommunityPoolDepositProposal;
                fromJSON(object: any): _141.CommunityPoolDepositProposal;
                toJSON(message: _141.CommunityPoolDepositProposal): unknown;
                fromPartial(object: Partial<_141.CommunityPoolDepositProposal>): _141.CommunityPoolDepositProposal;
            };
            CommunityPoolDepositProposalJSON: {
                encode(message: _141.CommunityPoolDepositProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CommunityPoolDepositProposalJSON;
                fromJSON(object: any): _141.CommunityPoolDepositProposalJSON;
                toJSON(message: _141.CommunityPoolDepositProposalJSON): unknown;
                fromPartial(object: Partial<_141.CommunityPoolDepositProposalJSON>): _141.CommunityPoolDepositProposalJSON;
            };
            CommunityPoolWithdrawProposal: {
                encode(message: _141.CommunityPoolWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CommunityPoolWithdrawProposal;
                fromJSON(object: any): _141.CommunityPoolWithdrawProposal;
                toJSON(message: _141.CommunityPoolWithdrawProposal): unknown;
                fromPartial(object: Partial<_141.CommunityPoolWithdrawProposal>): _141.CommunityPoolWithdrawProposal;
            };
            CommunityPoolWithdrawProposalJSON: {
                encode(message: _141.CommunityPoolWithdrawProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CommunityPoolWithdrawProposalJSON;
                fromJSON(object: any): _141.CommunityPoolWithdrawProposalJSON;
                toJSON(message: _141.CommunityPoolWithdrawProposalJSON): unknown;
                fromPartial(object: Partial<_141.CommunityPoolWithdrawProposalJSON>): _141.CommunityPoolWithdrawProposalJSON;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
            };
            GenesisState: {
                encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.GenesisState;
                fromJSON(object: any): _139.GenesisState;
                toJSON(message: _139.GenesisState): unknown;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
            };
        };
    }
    namespace evmutil {
        const v1beta1: {
            MsgClientImpl: typeof _317.MsgClientImpl;
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoinToERC20(value: _149.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20ToCoin(value: _149.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoinToERC20(value: _149.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _149.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _149.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _149.MsgConvertERC20ToCoin;
                    };
                };
                toJSON: {
                    convertCoinToERC20(value: _149.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20ToCoin(value: _149.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoinToERC20(value: any): {
                        typeUrl: string;
                        value: _149.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: any): {
                        typeUrl: string;
                        value: _149.MsgConvertERC20ToCoin;
                    };
                };
                fromPartial: {
                    convertCoinToERC20(value: _149.MsgConvertCoinToERC20): {
                        typeUrl: string;
                        value: _149.MsgConvertCoinToERC20;
                    };
                    convertERC20ToCoin(value: _149.MsgConvertERC20ToCoin): {
                        typeUrl: string;
                        value: _149.MsgConvertERC20ToCoin;
                    };
                };
            };
            AminoConverter: {
                "/kava.evmutil.v1beta1.MsgConvertCoinToERC20": {
                    aminoType: string;
                    toAmino: ({ initiator, receiver, amount }: _149.MsgConvertCoinToERC20) => {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ initiator, receiver, amount }: {
                        initiator: string;
                        receiver: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _149.MsgConvertCoinToERC20;
                };
                "/kava.evmutil.v1beta1.MsgConvertERC20ToCoin": {
                    aminoType: string;
                    toAmino: ({ initiator, receiver, kavaErc20Address, amount }: _149.MsgConvertERC20ToCoin) => {
                        initiator: string;
                        receiver: string;
                        kava_erc20_address: string;
                        amount: string;
                    };
                    fromAmino: ({ initiator, receiver, kava_erc20_address, amount }: {
                        initiator: string;
                        receiver: string;
                        kava_erc20_address: string;
                        amount: string;
                    }) => _149.MsgConvertERC20ToCoin;
                };
            };
            MsgConvertCoinToERC20: {
                encode(message: _149.MsgConvertCoinToERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgConvertCoinToERC20;
                fromJSON(object: any): _149.MsgConvertCoinToERC20;
                toJSON(message: _149.MsgConvertCoinToERC20): unknown;
                fromPartial(object: Partial<_149.MsgConvertCoinToERC20>): _149.MsgConvertCoinToERC20;
            };
            MsgConvertCoinToERC20Response: {
                encode(_: _149.MsgConvertCoinToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgConvertCoinToERC20Response;
                fromJSON(_: any): _149.MsgConvertCoinToERC20Response;
                toJSON(_: _149.MsgConvertCoinToERC20Response): unknown;
                fromPartial(_: Partial<_149.MsgConvertCoinToERC20Response>): _149.MsgConvertCoinToERC20Response;
            };
            MsgConvertERC20ToCoin: {
                encode(message: _149.MsgConvertERC20ToCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgConvertERC20ToCoin;
                fromJSON(object: any): _149.MsgConvertERC20ToCoin;
                toJSON(message: _149.MsgConvertERC20ToCoin): unknown;
                fromPartial(object: Partial<_149.MsgConvertERC20ToCoin>): _149.MsgConvertERC20ToCoin;
            };
            MsgConvertERC20ToCoinResponse: {
                encode(_: _149.MsgConvertERC20ToCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgConvertERC20ToCoinResponse;
                fromJSON(_: any): _149.MsgConvertERC20ToCoinResponse;
                toJSON(_: _149.MsgConvertERC20ToCoinResponse): unknown;
                fromPartial(_: Partial<_149.MsgConvertERC20ToCoinResponse>): _149.MsgConvertERC20ToCoinResponse;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromJSON(_: any): _148.QueryParamsRequest;
                toJSON(_: _148.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _147.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.GenesisState;
                fromJSON(object: any): _147.GenesisState;
                toJSON(message: _147.GenesisState): unknown;
                fromPartial(object: Partial<_147.GenesisState>): _147.GenesisState;
            };
            Account: {
                encode(message: _147.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Account;
                fromJSON(object: any): _147.Account;
                toJSON(message: _147.Account): unknown;
                fromPartial(object: Partial<_147.Account>): _147.Account;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromJSON(object: any): _147.Params;
                toJSON(message: _147.Params): unknown;
                fromPartial(object: Partial<_147.Params>): _147.Params;
            };
            ConversionPair: {
                encode(message: _146.ConversionPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ConversionPair;
                fromJSON(object: any): _146.ConversionPair;
                toJSON(message: _146.ConversionPair): unknown;
                fromPartial(object: Partial<_146.ConversionPair>): _146.ConversionPair;
            };
        };
    }
    namespace hard {
        const v1beta1: {
            MsgClientImpl: typeof _318.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                accounts(request?: _152.QueryAccountsRequest): Promise<_152.QueryAccountsResponse>;
                deposits(request: _152.QueryDepositsRequest): Promise<_152.QueryDepositsResponse>;
                unsyncedDeposits(request: _152.QueryUnsyncedDepositsRequest): Promise<_152.QueryUnsyncedDepositsResponse>;
                totalDeposited(request: _152.QueryTotalDepositedRequest): Promise<_152.QueryTotalDepositedResponse>;
                borrows(request: _152.QueryBorrowsRequest): Promise<_152.QueryBorrowsResponse>;
                unsyncedBorrows(request: _152.QueryUnsyncedBorrowsRequest): Promise<_152.QueryUnsyncedBorrowsResponse>;
                totalBorrowed(request: _152.QueryTotalBorrowedRequest): Promise<_152.QueryTotalBorrowedResponse>;
                interestRate(request: _152.QueryInterestRateRequest): Promise<_152.QueryInterestRateResponse>;
                reserves(request: _152.QueryReservesRequest): Promise<_152.QueryReservesResponse>;
                interestFactors(request: _152.QueryInterestFactorsRequest): Promise<_152.QueryInterestFactorsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _153.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _153.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _153.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _153.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                    withdraw(value: _153.MsgWithdraw): {
                        typeUrl: string;
                        value: _153.MsgWithdraw;
                    };
                    borrow(value: _153.MsgBorrow): {
                        typeUrl: string;
                        value: _153.MsgBorrow;
                    };
                    repay(value: _153.MsgRepay): {
                        typeUrl: string;
                        value: _153.MsgRepay;
                    };
                    liquidate(value: _153.MsgLiquidate): {
                        typeUrl: string;
                        value: _153.MsgLiquidate;
                    };
                };
                toJSON: {
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _153.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    borrow(value: _153.MsgBorrow): {
                        typeUrl: string;
                        value: unknown;
                    };
                    repay(value: _153.MsgRepay): {
                        typeUrl: string;
                        value: unknown;
                    };
                    liquidate(value: _153.MsgLiquidate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _153.MsgWithdraw;
                    };
                    borrow(value: any): {
                        typeUrl: string;
                        value: _153.MsgBorrow;
                    };
                    repay(value: any): {
                        typeUrl: string;
                        value: _153.MsgRepay;
                    };
                    liquidate(value: any): {
                        typeUrl: string;
                        value: _153.MsgLiquidate;
                    };
                };
                fromPartial: {
                    deposit(value: _153.MsgDeposit): {
                        typeUrl: string;
                        value: _153.MsgDeposit;
                    };
                    withdraw(value: _153.MsgWithdraw): {
                        typeUrl: string;
                        value: _153.MsgWithdraw;
                    };
                    borrow(value: _153.MsgBorrow): {
                        typeUrl: string;
                        value: _153.MsgBorrow;
                    };
                    repay(value: _153.MsgRepay): {
                        typeUrl: string;
                        value: _153.MsgRepay;
                    };
                    liquidate(value: _153.MsgLiquidate): {
                        typeUrl: string;
                        value: _153.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/kava.hard.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _153.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _153.MsgDeposit;
                };
                "/kava.hard.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _153.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _153.MsgWithdraw;
                };
                "/kava.hard.v1beta1.MsgBorrow": {
                    aminoType: string;
                    toAmino: ({ borrower, amount }: _153.MsgBorrow) => {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ borrower, amount }: {
                        borrower: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _153.MsgBorrow;
                };
                "/kava.hard.v1beta1.MsgRepay": {
                    aminoType: string;
                    toAmino: ({ sender, owner, amount }: _153.MsgRepay) => {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, owner, amount }: {
                        sender: string;
                        owner: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _153.MsgRepay;
                };
                "/kava.hard.v1beta1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: ({ keeper, borrower }: _153.MsgLiquidate) => {
                        keeper: string;
                        borrower: string;
                    };
                    fromAmino: ({ keeper, borrower }: {
                        keeper: string;
                        borrower: string;
                    }) => _153.MsgLiquidate;
                };
            };
            MsgDeposit: {
                encode(message: _153.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDeposit;
                fromJSON(object: any): _153.MsgDeposit;
                toJSON(message: _153.MsgDeposit): unknown;
                fromPartial(object: Partial<_153.MsgDeposit>): _153.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _153.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgDepositResponse;
                fromJSON(_: any): _153.MsgDepositResponse;
                toJSON(_: _153.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_153.MsgDepositResponse>): _153.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _153.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdraw;
                fromJSON(object: any): _153.MsgWithdraw;
                toJSON(message: _153.MsgWithdraw): unknown;
                fromPartial(object: Partial<_153.MsgWithdraw>): _153.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _153.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgWithdrawResponse;
                fromJSON(_: any): _153.MsgWithdrawResponse;
                toJSON(_: _153.MsgWithdrawResponse): unknown;
                fromPartial(_: Partial<_153.MsgWithdrawResponse>): _153.MsgWithdrawResponse;
            };
            MsgBorrow: {
                encode(message: _153.MsgBorrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgBorrow;
                fromJSON(object: any): _153.MsgBorrow;
                toJSON(message: _153.MsgBorrow): unknown;
                fromPartial(object: Partial<_153.MsgBorrow>): _153.MsgBorrow;
            };
            MsgBorrowResponse: {
                encode(_: _153.MsgBorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgBorrowResponse;
                fromJSON(_: any): _153.MsgBorrowResponse;
                toJSON(_: _153.MsgBorrowResponse): unknown;
                fromPartial(_: Partial<_153.MsgBorrowResponse>): _153.MsgBorrowResponse;
            };
            MsgRepay: {
                encode(message: _153.MsgRepay, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRepay;
                fromJSON(object: any): _153.MsgRepay;
                toJSON(message: _153.MsgRepay): unknown;
                fromPartial(object: Partial<_153.MsgRepay>): _153.MsgRepay;
            };
            MsgRepayResponse: {
                encode(_: _153.MsgRepayResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRepayResponse;
                fromJSON(_: any): _153.MsgRepayResponse;
                toJSON(_: _153.MsgRepayResponse): unknown;
                fromPartial(_: Partial<_153.MsgRepayResponse>): _153.MsgRepayResponse;
            };
            MsgLiquidate: {
                encode(message: _153.MsgLiquidate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgLiquidate;
                fromJSON(object: any): _153.MsgLiquidate;
                toJSON(message: _153.MsgLiquidate): unknown;
                fromPartial(object: Partial<_153.MsgLiquidate>): _153.MsgLiquidate;
            };
            MsgLiquidateResponse: {
                encode(_: _153.MsgLiquidateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgLiquidateResponse;
                fromJSON(_: any): _153.MsgLiquidateResponse;
                toJSON(_: _153.MsgLiquidateResponse): unknown;
                fromPartial(_: Partial<_153.MsgLiquidateResponse>): _153.MsgLiquidateResponse;
            };
            QueryParamsRequest: {
                encode(_: _152.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsRequest;
                fromJSON(_: any): _152.QueryParamsRequest;
                toJSON(_: _152.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_152.QueryParamsRequest>): _152.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _152.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_152.QueryParamsResponse>): _152.QueryParamsResponse;
            };
            QueryAccountsRequest: {
                encode(_: _152.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAccountsRequest;
                fromJSON(_: any): _152.QueryAccountsRequest;
                toJSON(_: _152.QueryAccountsRequest): unknown;
                fromPartial(_: Partial<_152.QueryAccountsRequest>): _152.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _152.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryAccountsResponse;
                fromJSON(object: any): _152.QueryAccountsResponse;
                toJSON(message: _152.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_152.QueryAccountsResponse>): _152.QueryAccountsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _152.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositsRequest;
                fromJSON(object: any): _152.QueryDepositsRequest;
                toJSON(message: _152.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_152.QueryDepositsRequest>): _152.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _152.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryDepositsResponse;
                fromJSON(object: any): _152.QueryDepositsResponse;
                toJSON(message: _152.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_152.QueryDepositsResponse>): _152.QueryDepositsResponse;
            };
            QueryUnsyncedDepositsRequest: {
                encode(message: _152.QueryUnsyncedDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnsyncedDepositsRequest;
                fromJSON(object: any): _152.QueryUnsyncedDepositsRequest;
                toJSON(message: _152.QueryUnsyncedDepositsRequest): unknown;
                fromPartial(object: Partial<_152.QueryUnsyncedDepositsRequest>): _152.QueryUnsyncedDepositsRequest;
            };
            QueryUnsyncedDepositsResponse: {
                encode(message: _152.QueryUnsyncedDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnsyncedDepositsResponse;
                fromJSON(object: any): _152.QueryUnsyncedDepositsResponse;
                toJSON(message: _152.QueryUnsyncedDepositsResponse): unknown;
                fromPartial(object: Partial<_152.QueryUnsyncedDepositsResponse>): _152.QueryUnsyncedDepositsResponse;
            };
            QueryTotalDepositedRequest: {
                encode(message: _152.QueryTotalDepositedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTotalDepositedRequest;
                fromJSON(object: any): _152.QueryTotalDepositedRequest;
                toJSON(message: _152.QueryTotalDepositedRequest): unknown;
                fromPartial(object: Partial<_152.QueryTotalDepositedRequest>): _152.QueryTotalDepositedRequest;
            };
            QueryTotalDepositedResponse: {
                encode(message: _152.QueryTotalDepositedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTotalDepositedResponse;
                fromJSON(object: any): _152.QueryTotalDepositedResponse;
                toJSON(message: _152.QueryTotalDepositedResponse): unknown;
                fromPartial(object: Partial<_152.QueryTotalDepositedResponse>): _152.QueryTotalDepositedResponse;
            };
            QueryBorrowsRequest: {
                encode(message: _152.QueryBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBorrowsRequest;
                fromJSON(object: any): _152.QueryBorrowsRequest;
                toJSON(message: _152.QueryBorrowsRequest): unknown;
                fromPartial(object: Partial<_152.QueryBorrowsRequest>): _152.QueryBorrowsRequest;
            };
            QueryBorrowsResponse: {
                encode(message: _152.QueryBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryBorrowsResponse;
                fromJSON(object: any): _152.QueryBorrowsResponse;
                toJSON(message: _152.QueryBorrowsResponse): unknown;
                fromPartial(object: Partial<_152.QueryBorrowsResponse>): _152.QueryBorrowsResponse;
            };
            QueryUnsyncedBorrowsRequest: {
                encode(message: _152.QueryUnsyncedBorrowsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnsyncedBorrowsRequest;
                fromJSON(object: any): _152.QueryUnsyncedBorrowsRequest;
                toJSON(message: _152.QueryUnsyncedBorrowsRequest): unknown;
                fromPartial(object: Partial<_152.QueryUnsyncedBorrowsRequest>): _152.QueryUnsyncedBorrowsRequest;
            };
            QueryUnsyncedBorrowsResponse: {
                encode(message: _152.QueryUnsyncedBorrowsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryUnsyncedBorrowsResponse;
                fromJSON(object: any): _152.QueryUnsyncedBorrowsResponse;
                toJSON(message: _152.QueryUnsyncedBorrowsResponse): unknown;
                fromPartial(object: Partial<_152.QueryUnsyncedBorrowsResponse>): _152.QueryUnsyncedBorrowsResponse;
            };
            QueryTotalBorrowedRequest: {
                encode(message: _152.QueryTotalBorrowedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTotalBorrowedRequest;
                fromJSON(object: any): _152.QueryTotalBorrowedRequest;
                toJSON(message: _152.QueryTotalBorrowedRequest): unknown;
                fromPartial(object: Partial<_152.QueryTotalBorrowedRequest>): _152.QueryTotalBorrowedRequest;
            };
            QueryTotalBorrowedResponse: {
                encode(message: _152.QueryTotalBorrowedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryTotalBorrowedResponse;
                fromJSON(object: any): _152.QueryTotalBorrowedResponse;
                toJSON(message: _152.QueryTotalBorrowedResponse): unknown;
                fromPartial(object: Partial<_152.QueryTotalBorrowedResponse>): _152.QueryTotalBorrowedResponse;
            };
            QueryInterestRateRequest: {
                encode(message: _152.QueryInterestRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInterestRateRequest;
                fromJSON(object: any): _152.QueryInterestRateRequest;
                toJSON(message: _152.QueryInterestRateRequest): unknown;
                fromPartial(object: Partial<_152.QueryInterestRateRequest>): _152.QueryInterestRateRequest;
            };
            QueryInterestRateResponse: {
                encode(message: _152.QueryInterestRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInterestRateResponse;
                fromJSON(object: any): _152.QueryInterestRateResponse;
                toJSON(message: _152.QueryInterestRateResponse): unknown;
                fromPartial(object: Partial<_152.QueryInterestRateResponse>): _152.QueryInterestRateResponse;
            };
            QueryReservesRequest: {
                encode(message: _152.QueryReservesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryReservesRequest;
                fromJSON(object: any): _152.QueryReservesRequest;
                toJSON(message: _152.QueryReservesRequest): unknown;
                fromPartial(object: Partial<_152.QueryReservesRequest>): _152.QueryReservesRequest;
            };
            QueryReservesResponse: {
                encode(message: _152.QueryReservesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryReservesResponse;
                fromJSON(object: any): _152.QueryReservesResponse;
                toJSON(message: _152.QueryReservesResponse): unknown;
                fromPartial(object: Partial<_152.QueryReservesResponse>): _152.QueryReservesResponse;
            };
            QueryInterestFactorsRequest: {
                encode(message: _152.QueryInterestFactorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInterestFactorsRequest;
                fromJSON(object: any): _152.QueryInterestFactorsRequest;
                toJSON(message: _152.QueryInterestFactorsRequest): unknown;
                fromPartial(object: Partial<_152.QueryInterestFactorsRequest>): _152.QueryInterestFactorsRequest;
            };
            QueryInterestFactorsResponse: {
                encode(message: _152.QueryInterestFactorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.QueryInterestFactorsResponse;
                fromJSON(object: any): _152.QueryInterestFactorsResponse;
                toJSON(message: _152.QueryInterestFactorsResponse): unknown;
                fromPartial(object: Partial<_152.QueryInterestFactorsResponse>): _152.QueryInterestFactorsResponse;
            };
            DepositResponse: {
                encode(message: _152.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DepositResponse;
                fromJSON(object: any): _152.DepositResponse;
                toJSON(message: _152.DepositResponse): unknown;
                fromPartial(object: Partial<_152.DepositResponse>): _152.DepositResponse;
            };
            SupplyInterestFactorResponse: {
                encode(message: _152.SupplyInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.SupplyInterestFactorResponse;
                fromJSON(object: any): _152.SupplyInterestFactorResponse;
                toJSON(message: _152.SupplyInterestFactorResponse): unknown;
                fromPartial(object: Partial<_152.SupplyInterestFactorResponse>): _152.SupplyInterestFactorResponse;
            };
            BorrowResponse: {
                encode(message: _152.BorrowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.BorrowResponse;
                fromJSON(object: any): _152.BorrowResponse;
                toJSON(message: _152.BorrowResponse): unknown;
                fromPartial(object: Partial<_152.BorrowResponse>): _152.BorrowResponse;
            };
            BorrowInterestFactorResponse: {
                encode(message: _152.BorrowInterestFactorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.BorrowInterestFactorResponse;
                fromJSON(object: any): _152.BorrowInterestFactorResponse;
                toJSON(message: _152.BorrowInterestFactorResponse): unknown;
                fromPartial(object: Partial<_152.BorrowInterestFactorResponse>): _152.BorrowInterestFactorResponse;
            };
            MoneyMarketInterestRate: {
                encode(message: _152.MoneyMarketInterestRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MoneyMarketInterestRate;
                fromJSON(object: any): _152.MoneyMarketInterestRate;
                toJSON(message: _152.MoneyMarketInterestRate): unknown;
                fromPartial(object: Partial<_152.MoneyMarketInterestRate>): _152.MoneyMarketInterestRate;
            };
            InterestFactor: {
                encode(message: _152.InterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.InterestFactor;
                fromJSON(object: any): _152.InterestFactor;
                toJSON(message: _152.InterestFactor): unknown;
                fromPartial(object: Partial<_152.InterestFactor>): _152.InterestFactor;
            };
            Params: {
                encode(message: _151.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Params;
                fromJSON(object: any): _151.Params;
                toJSON(message: _151.Params): unknown;
                fromPartial(object: Partial<_151.Params>): _151.Params;
            };
            MoneyMarket: {
                encode(message: _151.MoneyMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MoneyMarket;
                fromJSON(object: any): _151.MoneyMarket;
                toJSON(message: _151.MoneyMarket): unknown;
                fromPartial(object: Partial<_151.MoneyMarket>): _151.MoneyMarket;
            };
            BorrowLimit: {
                encode(message: _151.BorrowLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.BorrowLimit;
                fromJSON(object: any): _151.BorrowLimit;
                toJSON(message: _151.BorrowLimit): unknown;
                fromPartial(object: Partial<_151.BorrowLimit>): _151.BorrowLimit;
            };
            InterestRateModel: {
                encode(message: _151.InterestRateModel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.InterestRateModel;
                fromJSON(object: any): _151.InterestRateModel;
                toJSON(message: _151.InterestRateModel): unknown;
                fromPartial(object: Partial<_151.InterestRateModel>): _151.InterestRateModel;
            };
            Deposit: {
                encode(message: _151.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Deposit;
                fromJSON(object: any): _151.Deposit;
                toJSON(message: _151.Deposit): unknown;
                fromPartial(object: Partial<_151.Deposit>): _151.Deposit;
            };
            Borrow: {
                encode(message: _151.Borrow, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Borrow;
                fromJSON(object: any): _151.Borrow;
                toJSON(message: _151.Borrow): unknown;
                fromPartial(object: Partial<_151.Borrow>): _151.Borrow;
            };
            SupplyInterestFactor: {
                encode(message: _151.SupplyInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SupplyInterestFactor;
                fromJSON(object: any): _151.SupplyInterestFactor;
                toJSON(message: _151.SupplyInterestFactor): unknown;
                fromPartial(object: Partial<_151.SupplyInterestFactor>): _151.SupplyInterestFactor;
            };
            BorrowInterestFactor: {
                encode(message: _151.BorrowInterestFactor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.BorrowInterestFactor;
                fromJSON(object: any): _151.BorrowInterestFactor;
                toJSON(message: _151.BorrowInterestFactor): unknown;
                fromPartial(object: Partial<_151.BorrowInterestFactor>): _151.BorrowInterestFactor;
            };
            CoinsProto: {
                encode(message: _151.CoinsProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CoinsProto;
                fromJSON(object: any): _151.CoinsProto;
                toJSON(message: _151.CoinsProto): unknown;
                fromPartial(object: Partial<_151.CoinsProto>): _151.CoinsProto;
            };
            GenesisState: {
                encode(message: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(object: any): _150.GenesisState;
                toJSON(message: _150.GenesisState): unknown;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
            };
            GenesisAccumulationTime: {
                encode(message: _150.GenesisAccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisAccumulationTime;
                fromJSON(object: any): _150.GenesisAccumulationTime;
                toJSON(message: _150.GenesisAccumulationTime): unknown;
                fromPartial(object: Partial<_150.GenesisAccumulationTime>): _150.GenesisAccumulationTime;
            };
        };
    }
    namespace incentive {
        const v1beta1: {
            MsgClientImpl: typeof _319.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimUSDXMintingReward(value: _157.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimHardReward(value: _157.MsgClaimHardReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimDelegatorReward(value: _157.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSwapReward(value: _157.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimSavingsReward(value: _157.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    claimEarnReward(value: _157.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimUSDXMintingReward(value: _157.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _157.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _157.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _157.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _157.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _157.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _157.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _157.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _157.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _157.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _157.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _157.MsgClaimEarnReward;
                    };
                };
                toJSON: {
                    claimUSDXMintingReward(value: _157.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimHardReward(value: _157.MsgClaimHardReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimDelegatorReward(value: _157.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSwapReward(value: _157.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimSavingsReward(value: _157.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    claimEarnReward(value: _157.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimUSDXMintingReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: any): {
                        typeUrl: string;
                        value: _157.MsgClaimEarnReward;
                    };
                };
                fromPartial: {
                    claimUSDXMintingReward(value: _157.MsgClaimUSDXMintingReward): {
                        typeUrl: string;
                        value: _157.MsgClaimUSDXMintingReward;
                    };
                    claimHardReward(value: _157.MsgClaimHardReward): {
                        typeUrl: string;
                        value: _157.MsgClaimHardReward;
                    };
                    claimDelegatorReward(value: _157.MsgClaimDelegatorReward): {
                        typeUrl: string;
                        value: _157.MsgClaimDelegatorReward;
                    };
                    claimSwapReward(value: _157.MsgClaimSwapReward): {
                        typeUrl: string;
                        value: _157.MsgClaimSwapReward;
                    };
                    claimSavingsReward(value: _157.MsgClaimSavingsReward): {
                        typeUrl: string;
                        value: _157.MsgClaimSavingsReward;
                    };
                    claimEarnReward(value: _157.MsgClaimEarnReward): {
                        typeUrl: string;
                        value: _157.MsgClaimEarnReward;
                    };
                };
            };
            AminoConverter: {
                "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward": {
                    aminoType: string;
                    toAmino: ({ sender, multiplierName }: _157.MsgClaimUSDXMintingReward) => {
                        sender: string;
                        multiplier_name: string;
                    };
                    fromAmino: ({ sender, multiplier_name }: {
                        sender: string;
                        multiplier_name: string;
                    }) => _157.MsgClaimUSDXMintingReward;
                };
                "/kava.incentive.v1beta1.MsgClaimHardReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _157.MsgClaimHardReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _157.MsgClaimHardReward;
                };
                "/kava.incentive.v1beta1.MsgClaimDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _157.MsgClaimDelegatorReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _157.MsgClaimDelegatorReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSwapReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _157.MsgClaimSwapReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _157.MsgClaimSwapReward;
                };
                "/kava.incentive.v1beta1.MsgClaimSavingsReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _157.MsgClaimSavingsReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _157.MsgClaimSavingsReward;
                };
                "/kava.incentive.v1beta1.MsgClaimEarnReward": {
                    aminoType: string;
                    toAmino: ({ sender, denomsToClaim }: _157.MsgClaimEarnReward) => {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    };
                    fromAmino: ({ sender, denoms_to_claim }: {
                        sender: string;
                        denoms_to_claim: {
                            denom: string;
                            multiplier_name: string;
                        }[];
                    }) => _157.MsgClaimEarnReward;
                };
            };
            Selection: {
                encode(message: _157.Selection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Selection;
                fromJSON(object: any): _157.Selection;
                toJSON(message: _157.Selection): unknown;
                fromPartial(object: Partial<_157.Selection>): _157.Selection;
            };
            MsgClaimUSDXMintingReward: {
                encode(message: _157.MsgClaimUSDXMintingReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimUSDXMintingReward;
                fromJSON(object: any): _157.MsgClaimUSDXMintingReward;
                toJSON(message: _157.MsgClaimUSDXMintingReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimUSDXMintingReward>): _157.MsgClaimUSDXMintingReward;
            };
            MsgClaimUSDXMintingRewardResponse: {
                encode(_: _157.MsgClaimUSDXMintingRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimUSDXMintingRewardResponse;
                fromJSON(_: any): _157.MsgClaimUSDXMintingRewardResponse;
                toJSON(_: _157.MsgClaimUSDXMintingRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimUSDXMintingRewardResponse>): _157.MsgClaimUSDXMintingRewardResponse;
            };
            MsgClaimHardReward: {
                encode(message: _157.MsgClaimHardReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimHardReward;
                fromJSON(object: any): _157.MsgClaimHardReward;
                toJSON(message: _157.MsgClaimHardReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimHardReward>): _157.MsgClaimHardReward;
            };
            MsgClaimHardRewardResponse: {
                encode(_: _157.MsgClaimHardRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimHardRewardResponse;
                fromJSON(_: any): _157.MsgClaimHardRewardResponse;
                toJSON(_: _157.MsgClaimHardRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimHardRewardResponse>): _157.MsgClaimHardRewardResponse;
            };
            MsgClaimDelegatorReward: {
                encode(message: _157.MsgClaimDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimDelegatorReward;
                fromJSON(object: any): _157.MsgClaimDelegatorReward;
                toJSON(message: _157.MsgClaimDelegatorReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimDelegatorReward>): _157.MsgClaimDelegatorReward;
            };
            MsgClaimDelegatorRewardResponse: {
                encode(_: _157.MsgClaimDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimDelegatorRewardResponse;
                fromJSON(_: any): _157.MsgClaimDelegatorRewardResponse;
                toJSON(_: _157.MsgClaimDelegatorRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimDelegatorRewardResponse>): _157.MsgClaimDelegatorRewardResponse;
            };
            MsgClaimSwapReward: {
                encode(message: _157.MsgClaimSwapReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimSwapReward;
                fromJSON(object: any): _157.MsgClaimSwapReward;
                toJSON(message: _157.MsgClaimSwapReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimSwapReward>): _157.MsgClaimSwapReward;
            };
            MsgClaimSwapRewardResponse: {
                encode(_: _157.MsgClaimSwapRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimSwapRewardResponse;
                fromJSON(_: any): _157.MsgClaimSwapRewardResponse;
                toJSON(_: _157.MsgClaimSwapRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimSwapRewardResponse>): _157.MsgClaimSwapRewardResponse;
            };
            MsgClaimSavingsReward: {
                encode(message: _157.MsgClaimSavingsReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimSavingsReward;
                fromJSON(object: any): _157.MsgClaimSavingsReward;
                toJSON(message: _157.MsgClaimSavingsReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimSavingsReward>): _157.MsgClaimSavingsReward;
            };
            MsgClaimSavingsRewardResponse: {
                encode(_: _157.MsgClaimSavingsRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimSavingsRewardResponse;
                fromJSON(_: any): _157.MsgClaimSavingsRewardResponse;
                toJSON(_: _157.MsgClaimSavingsRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimSavingsRewardResponse>): _157.MsgClaimSavingsRewardResponse;
            };
            MsgClaimEarnReward: {
                encode(message: _157.MsgClaimEarnReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimEarnReward;
                fromJSON(object: any): _157.MsgClaimEarnReward;
                toJSON(message: _157.MsgClaimEarnReward): unknown;
                fromPartial(object: Partial<_157.MsgClaimEarnReward>): _157.MsgClaimEarnReward;
            };
            MsgClaimEarnRewardResponse: {
                encode(_: _157.MsgClaimEarnRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgClaimEarnRewardResponse;
                fromJSON(_: any): _157.MsgClaimEarnRewardResponse;
                toJSON(_: _157.MsgClaimEarnRewardResponse): unknown;
                fromPartial(_: Partial<_157.MsgClaimEarnRewardResponse>): _157.MsgClaimEarnRewardResponse;
            };
            RewardPeriod: {
                encode(message: _156.RewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.RewardPeriod;
                fromJSON(object: any): _156.RewardPeriod;
                toJSON(message: _156.RewardPeriod): unknown;
                fromPartial(object: Partial<_156.RewardPeriod>): _156.RewardPeriod;
            };
            MultiRewardPeriod: {
                encode(message: _156.MultiRewardPeriod, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MultiRewardPeriod;
                fromJSON(object: any): _156.MultiRewardPeriod;
                toJSON(message: _156.MultiRewardPeriod): unknown;
                fromPartial(object: Partial<_156.MultiRewardPeriod>): _156.MultiRewardPeriod;
            };
            Multiplier: {
                encode(message: _156.Multiplier, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Multiplier;
                fromJSON(object: any): _156.Multiplier;
                toJSON(message: _156.Multiplier): unknown;
                fromPartial(object: Partial<_156.Multiplier>): _156.Multiplier;
            };
            MultipliersPerDenom: {
                encode(message: _156.MultipliersPerDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MultipliersPerDenom;
                fromJSON(object: any): _156.MultipliersPerDenom;
                toJSON(message: _156.MultipliersPerDenom): unknown;
                fromPartial(object: Partial<_156.MultipliersPerDenom>): _156.MultipliersPerDenom;
            };
            Params: {
                encode(message: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromJSON(object: any): _156.Params;
                toJSON(message: _156.Params): unknown;
                fromPartial(object: Partial<_156.Params>): _156.Params;
            };
            AccumulationTime: {
                encode(message: _155.AccumulationTime, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.AccumulationTime;
                fromJSON(object: any): _155.AccumulationTime;
                toJSON(message: _155.AccumulationTime): unknown;
                fromPartial(object: Partial<_155.AccumulationTime>): _155.AccumulationTime;
            };
            GenesisRewardState: {
                encode(message: _155.GenesisRewardState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisRewardState;
                fromJSON(object: any): _155.GenesisRewardState;
                toJSON(message: _155.GenesisRewardState): unknown;
                fromPartial(object: Partial<_155.GenesisRewardState>): _155.GenesisRewardState;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
                fromJSON(object: any): _155.GenesisState;
                toJSON(message: _155.GenesisState): unknown;
                fromPartial(object: Partial<_155.GenesisState>): _155.GenesisState;
            };
            claimTypeFromJSON(object: any): _154.ClaimType;
            claimTypeToJSON(object: _154.ClaimType): string;
            ClaimType: typeof _154.ClaimType;
            ClaimTypeSDKType: typeof _154.ClaimTypeSDKType;
            BaseClaim: {
                encode(message: _154.BaseClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.BaseClaim;
                fromJSON(object: any): _154.BaseClaim;
                toJSON(message: _154.BaseClaim): unknown;
                fromPartial(object: Partial<_154.BaseClaim>): _154.BaseClaim;
            };
            BaseMultiClaim: {
                encode(message: _154.BaseMultiClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.BaseMultiClaim;
                fromJSON(object: any): _154.BaseMultiClaim;
                toJSON(message: _154.BaseMultiClaim): unknown;
                fromPartial(object: Partial<_154.BaseMultiClaim>): _154.BaseMultiClaim;
            };
            RewardIndex: {
                encode(message: _154.RewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.RewardIndex;
                fromJSON(object: any): _154.RewardIndex;
                toJSON(message: _154.RewardIndex): unknown;
                fromPartial(object: Partial<_154.RewardIndex>): _154.RewardIndex;
            };
            RewardIndexesProto: {
                encode(message: _154.RewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.RewardIndexesProto;
                fromJSON(object: any): _154.RewardIndexesProto;
                toJSON(message: _154.RewardIndexesProto): unknown;
                fromPartial(object: Partial<_154.RewardIndexesProto>): _154.RewardIndexesProto;
            };
            MultiRewardIndex: {
                encode(message: _154.MultiRewardIndex, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MultiRewardIndex;
                fromJSON(object: any): _154.MultiRewardIndex;
                toJSON(message: _154.MultiRewardIndex): unknown;
                fromPartial(object: Partial<_154.MultiRewardIndex>): _154.MultiRewardIndex;
            };
            MultiRewardIndexesProto: {
                encode(message: _154.MultiRewardIndexesProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MultiRewardIndexesProto;
                fromJSON(object: any): _154.MultiRewardIndexesProto;
                toJSON(message: _154.MultiRewardIndexesProto): unknown;
                fromPartial(object: Partial<_154.MultiRewardIndexesProto>): _154.MultiRewardIndexesProto;
            };
            USDXMintingClaim: {
                encode(message: _154.USDXMintingClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.USDXMintingClaim;
                fromJSON(object: any): _154.USDXMintingClaim;
                toJSON(message: _154.USDXMintingClaim): unknown;
                fromPartial(object: Partial<_154.USDXMintingClaim>): _154.USDXMintingClaim;
            };
            HardLiquidityProviderClaim: {
                encode(message: _154.HardLiquidityProviderClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.HardLiquidityProviderClaim;
                fromJSON(object: any): _154.HardLiquidityProviderClaim;
                toJSON(message: _154.HardLiquidityProviderClaim): unknown;
                fromPartial(object: Partial<_154.HardLiquidityProviderClaim>): _154.HardLiquidityProviderClaim;
            };
            DelegatorClaim: {
                encode(message: _154.DelegatorClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DelegatorClaim;
                fromJSON(object: any): _154.DelegatorClaim;
                toJSON(message: _154.DelegatorClaim): unknown;
                fromPartial(object: Partial<_154.DelegatorClaim>): _154.DelegatorClaim;
            };
            SwapClaim: {
                encode(message: _154.SwapClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SwapClaim;
                fromJSON(object: any): _154.SwapClaim;
                toJSON(message: _154.SwapClaim): unknown;
                fromPartial(object: Partial<_154.SwapClaim>): _154.SwapClaim;
            };
            SavingsClaim: {
                encode(message: _154.SavingsClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SavingsClaim;
                fromJSON(object: any): _154.SavingsClaim;
                toJSON(message: _154.SavingsClaim): unknown;
                fromPartial(object: Partial<_154.SavingsClaim>): _154.SavingsClaim;
            };
            EarnClaim: {
                encode(message: _154.EarnClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.EarnClaim;
                fromJSON(object: any): _154.EarnClaim;
                toJSON(message: _154.EarnClaim): unknown;
                fromPartial(object: Partial<_154.EarnClaim>): _154.EarnClaim;
            };
            Claim: {
                encode(message: _154.Claim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Claim;
                fromJSON(object: any): _154.Claim;
                toJSON(message: _154.Claim): unknown;
                fromPartial(object: Partial<_154.Claim>): _154.Claim;
            };
        };
    }
    namespace issuance {
        const v1beta1: {
            MsgClientImpl: typeof _320.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issueTokens(value: _160.MsgIssueTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemTokens(value: _160.MsgRedeemTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    blockAddress(value: _160.MsgBlockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unblockAddress(value: _160.MsgUnblockAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPauseStatus(value: _160.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issueTokens(value: _160.MsgIssueTokens): {
                        typeUrl: string;
                        value: _160.MsgIssueTokens;
                    };
                    redeemTokens(value: _160.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _160.MsgRedeemTokens;
                    };
                    blockAddress(value: _160.MsgBlockAddress): {
                        typeUrl: string;
                        value: _160.MsgBlockAddress;
                    };
                    unblockAddress(value: _160.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _160.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _160.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _160.MsgSetPauseStatus;
                    };
                };
                toJSON: {
                    issueTokens(value: _160.MsgIssueTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redeemTokens(value: _160.MsgRedeemTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    blockAddress(value: _160.MsgBlockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unblockAddress(value: _160.MsgUnblockAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setPauseStatus(value: _160.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    issueTokens(value: any): {
                        typeUrl: string;
                        value: _160.MsgIssueTokens;
                    };
                    redeemTokens(value: any): {
                        typeUrl: string;
                        value: _160.MsgRedeemTokens;
                    };
                    blockAddress(value: any): {
                        typeUrl: string;
                        value: _160.MsgBlockAddress;
                    };
                    unblockAddress(value: any): {
                        typeUrl: string;
                        value: _160.MsgUnblockAddress;
                    };
                    setPauseStatus(value: any): {
                        typeUrl: string;
                        value: _160.MsgSetPauseStatus;
                    };
                };
                fromPartial: {
                    issueTokens(value: _160.MsgIssueTokens): {
                        typeUrl: string;
                        value: _160.MsgIssueTokens;
                    };
                    redeemTokens(value: _160.MsgRedeemTokens): {
                        typeUrl: string;
                        value: _160.MsgRedeemTokens;
                    };
                    blockAddress(value: _160.MsgBlockAddress): {
                        typeUrl: string;
                        value: _160.MsgBlockAddress;
                    };
                    unblockAddress(value: _160.MsgUnblockAddress): {
                        typeUrl: string;
                        value: _160.MsgUnblockAddress;
                    };
                    setPauseStatus(value: _160.MsgSetPauseStatus): {
                        typeUrl: string;
                        value: _160.MsgSetPauseStatus;
                    };
                };
            };
            AminoConverter: {
                "/kava.issuance.v1beta1.MsgIssueTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens, receiver }: _160.MsgIssueTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    };
                    fromAmino: ({ sender, tokens, receiver }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                        receiver: string;
                    }) => _160.MsgIssueTokens;
                };
                "/kava.issuance.v1beta1.MsgRedeemTokens": {
                    aminoType: string;
                    toAmino: ({ sender, tokens }: _160.MsgRedeemTokens) => {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, tokens }: {
                        sender: string;
                        tokens: {
                            denom: string;
                            amount: string;
                        };
                    }) => _160.MsgRedeemTokens;
                };
                "/kava.issuance.v1beta1.MsgBlockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _160.MsgBlockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _160.MsgBlockAddress;
                };
                "/kava.issuance.v1beta1.MsgUnblockAddress": {
                    aminoType: string;
                    toAmino: ({ sender, denom, blockedAddress }: _160.MsgUnblockAddress) => {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    };
                    fromAmino: ({ sender, denom, blocked_address }: {
                        sender: string;
                        denom: string;
                        blocked_address: string;
                    }) => _160.MsgUnblockAddress;
                };
                "/kava.issuance.v1beta1.MsgSetPauseStatus": {
                    aminoType: string;
                    toAmino: ({ sender, denom, status }: _160.MsgSetPauseStatus) => {
                        sender: string;
                        denom: string;
                        status: boolean;
                    };
                    fromAmino: ({ sender, denom, status }: {
                        sender: string;
                        denom: string;
                        status: boolean;
                    }) => _160.MsgSetPauseStatus;
                };
            };
            MsgIssueTokens: {
                encode(message: _160.MsgIssueTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgIssueTokens;
                fromJSON(object: any): _160.MsgIssueTokens;
                toJSON(message: _160.MsgIssueTokens): unknown;
                fromPartial(object: Partial<_160.MsgIssueTokens>): _160.MsgIssueTokens;
            };
            MsgIssueTokensResponse: {
                encode(_: _160.MsgIssueTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgIssueTokensResponse;
                fromJSON(_: any): _160.MsgIssueTokensResponse;
                toJSON(_: _160.MsgIssueTokensResponse): unknown;
                fromPartial(_: Partial<_160.MsgIssueTokensResponse>): _160.MsgIssueTokensResponse;
            };
            MsgRedeemTokens: {
                encode(message: _160.MsgRedeemTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgRedeemTokens;
                fromJSON(object: any): _160.MsgRedeemTokens;
                toJSON(message: _160.MsgRedeemTokens): unknown;
                fromPartial(object: Partial<_160.MsgRedeemTokens>): _160.MsgRedeemTokens;
            };
            MsgRedeemTokensResponse: {
                encode(_: _160.MsgRedeemTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgRedeemTokensResponse;
                fromJSON(_: any): _160.MsgRedeemTokensResponse;
                toJSON(_: _160.MsgRedeemTokensResponse): unknown;
                fromPartial(_: Partial<_160.MsgRedeemTokensResponse>): _160.MsgRedeemTokensResponse;
            };
            MsgBlockAddress: {
                encode(message: _160.MsgBlockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgBlockAddress;
                fromJSON(object: any): _160.MsgBlockAddress;
                toJSON(message: _160.MsgBlockAddress): unknown;
                fromPartial(object: Partial<_160.MsgBlockAddress>): _160.MsgBlockAddress;
            };
            MsgBlockAddressResponse: {
                encode(_: _160.MsgBlockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgBlockAddressResponse;
                fromJSON(_: any): _160.MsgBlockAddressResponse;
                toJSON(_: _160.MsgBlockAddressResponse): unknown;
                fromPartial(_: Partial<_160.MsgBlockAddressResponse>): _160.MsgBlockAddressResponse;
            };
            MsgUnblockAddress: {
                encode(message: _160.MsgUnblockAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnblockAddress;
                fromJSON(object: any): _160.MsgUnblockAddress;
                toJSON(message: _160.MsgUnblockAddress): unknown;
                fromPartial(object: Partial<_160.MsgUnblockAddress>): _160.MsgUnblockAddress;
            };
            MsgUnblockAddressResponse: {
                encode(_: _160.MsgUnblockAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgUnblockAddressResponse;
                fromJSON(_: any): _160.MsgUnblockAddressResponse;
                toJSON(_: _160.MsgUnblockAddressResponse): unknown;
                fromPartial(_: Partial<_160.MsgUnblockAddressResponse>): _160.MsgUnblockAddressResponse;
            };
            MsgSetPauseStatus: {
                encode(message: _160.MsgSetPauseStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSetPauseStatus;
                fromJSON(object: any): _160.MsgSetPauseStatus;
                toJSON(message: _160.MsgSetPauseStatus): unknown;
                fromPartial(object: Partial<_160.MsgSetPauseStatus>): _160.MsgSetPauseStatus;
            };
            MsgSetPauseStatusResponse: {
                encode(_: _160.MsgSetPauseStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgSetPauseStatusResponse;
                fromJSON(_: any): _160.MsgSetPauseStatusResponse;
                toJSON(_: _160.MsgSetPauseStatusResponse): unknown;
                fromPartial(_: Partial<_160.MsgSetPauseStatusResponse>): _160.MsgSetPauseStatusResponse;
            };
            QueryParamsRequest: {
                encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
                fromJSON(_: any): _159.QueryParamsRequest;
                toJSON(_: _159.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _159.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
                fromJSON(object: any): _159.QueryParamsResponse;
                toJSON(message: _159.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_159.QueryParamsResponse>): _159.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                fromJSON(object: any): _158.GenesisState;
                toJSON(message: _158.GenesisState): unknown;
                fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
            };
            Params: {
                encode(message: _158.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Params;
                fromJSON(object: any): _158.Params;
                toJSON(message: _158.Params): unknown;
                fromPartial(object: Partial<_158.Params>): _158.Params;
            };
            Asset: {
                encode(message: _158.Asset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Asset;
                fromJSON(object: any): _158.Asset;
                toJSON(message: _158.Asset): unknown;
                fromPartial(object: Partial<_158.Asset>): _158.Asset;
            };
            RateLimit: {
                encode(message: _158.RateLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.RateLimit;
                fromJSON(object: any): _158.RateLimit;
                toJSON(message: _158.RateLimit): unknown;
                fromPartial(object: Partial<_158.RateLimit>): _158.RateLimit;
            };
            AssetSupply: {
                encode(message: _158.AssetSupply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AssetSupply;
                fromJSON(object: any): _158.AssetSupply;
                toJSON(message: _158.AssetSupply): unknown;
                fromPartial(object: Partial<_158.AssetSupply>): _158.AssetSupply;
            };
        };
    }
    namespace kavadist {
        const v1beta1: {
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                balance(request?: _164.QueryBalanceRequest): Promise<_164.QueryBalanceResponse>;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromJSON(_: any): _164.QueryParamsRequest;
                toJSON(_: _164.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_164.QueryParamsRequest>): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponse;
                fromJSON(object: any): _164.QueryParamsResponse;
                toJSON(message: _164.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_164.QueryParamsResponse>): _164.QueryParamsResponse;
            };
            QueryBalanceRequest: {
                encode(_: _164.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryBalanceRequest;
                fromJSON(_: any): _164.QueryBalanceRequest;
                toJSON(_: _164.QueryBalanceRequest): unknown;
                fromPartial(_: Partial<_164.QueryBalanceRequest>): _164.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _164.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryBalanceResponse;
                fromJSON(object: any): _164.QueryBalanceResponse;
                toJSON(message: _164.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_164.QueryBalanceResponse>): _164.QueryBalanceResponse;
            };
            CommunityPoolMultiSpendProposal: {
                encode(message: _163.CommunityPoolMultiSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.CommunityPoolMultiSpendProposal;
                fromJSON(object: any): _163.CommunityPoolMultiSpendProposal;
                toJSON(message: _163.CommunityPoolMultiSpendProposal): unknown;
                fromPartial(object: Partial<_163.CommunityPoolMultiSpendProposal>): _163.CommunityPoolMultiSpendProposal;
            };
            CommunityPoolMultiSpendProposalJSON: {
                encode(message: _163.CommunityPoolMultiSpendProposalJSON, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.CommunityPoolMultiSpendProposalJSON;
                fromJSON(object: any): _163.CommunityPoolMultiSpendProposalJSON;
                toJSON(message: _163.CommunityPoolMultiSpendProposalJSON): unknown;
                fromPartial(object: Partial<_163.CommunityPoolMultiSpendProposalJSON>): _163.CommunityPoolMultiSpendProposalJSON;
            };
            MultiSpendRecipient: {
                encode(message: _163.MultiSpendRecipient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MultiSpendRecipient;
                fromJSON(object: any): _163.MultiSpendRecipient;
                toJSON(message: _163.MultiSpendRecipient): unknown;
                fromPartial(object: Partial<_163.MultiSpendRecipient>): _163.MultiSpendRecipient;
            };
            Params: {
                encode(message: _162.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Params;
                fromJSON(object: any): _162.Params;
                toJSON(message: _162.Params): unknown;
                fromPartial(object: Partial<_162.Params>): _162.Params;
            };
            InfrastructureParams: {
                encode(message: _162.InfrastructureParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.InfrastructureParams;
                fromJSON(object: any): _162.InfrastructureParams;
                toJSON(message: _162.InfrastructureParams): unknown;
                fromPartial(object: Partial<_162.InfrastructureParams>): _162.InfrastructureParams;
            };
            CoreReward: {
                encode(message: _162.CoreReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.CoreReward;
                fromJSON(object: any): _162.CoreReward;
                toJSON(message: _162.CoreReward): unknown;
                fromPartial(object: Partial<_162.CoreReward>): _162.CoreReward;
            };
            PartnerReward: {
                encode(message: _162.PartnerReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.PartnerReward;
                fromJSON(object: any): _162.PartnerReward;
                toJSON(message: _162.PartnerReward): unknown;
                fromPartial(object: Partial<_162.PartnerReward>): _162.PartnerReward;
            };
            Period: {
                encode(message: _162.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Period;
                fromJSON(object: any): _162.Period;
                toJSON(message: _162.Period): unknown;
                fromPartial(object: Partial<_162.Period>): _162.Period;
            };
            GenesisState: {
                encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                fromJSON(object: any): _161.GenesisState;
                toJSON(message: _161.GenesisState): unknown;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
            };
        };
    }
    namespace liquid {
        const v1beta1: {
            MsgClientImpl: typeof _321.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                delegatedBalance(request: _165.QueryDelegatedBalanceRequest): Promise<_165.QueryDelegatedBalanceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDerivative(value: _166.MsgMintDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burnDerivative(value: _166.MsgBurnDerivative): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDerivative(value: _166.MsgMintDerivative): {
                        typeUrl: string;
                        value: _166.MsgMintDerivative;
                    };
                    burnDerivative(value: _166.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _166.MsgBurnDerivative;
                    };
                };
                toJSON: {
                    mintDerivative(value: _166.MsgMintDerivative): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burnDerivative(value: _166.MsgBurnDerivative): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    mintDerivative(value: any): {
                        typeUrl: string;
                        value: _166.MsgMintDerivative;
                    };
                    burnDerivative(value: any): {
                        typeUrl: string;
                        value: _166.MsgBurnDerivative;
                    };
                };
                fromPartial: {
                    mintDerivative(value: _166.MsgMintDerivative): {
                        typeUrl: string;
                        value: _166.MsgMintDerivative;
                    };
                    burnDerivative(value: _166.MsgBurnDerivative): {
                        typeUrl: string;
                        value: _166.MsgBurnDerivative;
                    };
                };
            };
            AminoConverter: {
                "/kava.liquid.v1beta1.MsgMintDerivative": {
                    aminoType: string;
                    toAmino: ({ sender, validator, amount }: _166.MsgMintDerivative) => {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, validator, amount }: {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _166.MsgMintDerivative;
                };
                "/kava.liquid.v1beta1.MsgBurnDerivative": {
                    aminoType: string;
                    toAmino: ({ sender, validator, amount }: _166.MsgBurnDerivative) => {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ sender, validator, amount }: {
                        sender: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _166.MsgBurnDerivative;
                };
            };
            MsgMintDerivative: {
                encode(message: _166.MsgMintDerivative, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgMintDerivative;
                fromJSON(object: any): _166.MsgMintDerivative;
                toJSON(message: _166.MsgMintDerivative): unknown;
                fromPartial(object: Partial<_166.MsgMintDerivative>): _166.MsgMintDerivative;
            };
            MsgMintDerivativeResponse: {
                encode(message: _166.MsgMintDerivativeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgMintDerivativeResponse;
                fromJSON(object: any): _166.MsgMintDerivativeResponse;
                toJSON(message: _166.MsgMintDerivativeResponse): unknown;
                fromPartial(object: Partial<_166.MsgMintDerivativeResponse>): _166.MsgMintDerivativeResponse;
            };
            MsgBurnDerivative: {
                encode(message: _166.MsgBurnDerivative, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgBurnDerivative;
                fromJSON(object: any): _166.MsgBurnDerivative;
                toJSON(message: _166.MsgBurnDerivative): unknown;
                fromPartial(object: Partial<_166.MsgBurnDerivative>): _166.MsgBurnDerivative;
            };
            MsgBurnDerivativeResponse: {
                encode(message: _166.MsgBurnDerivativeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.MsgBurnDerivativeResponse;
                fromJSON(object: any): _166.MsgBurnDerivativeResponse;
                toJSON(message: _166.MsgBurnDerivativeResponse): unknown;
                fromPartial(object: Partial<_166.MsgBurnDerivativeResponse>): _166.MsgBurnDerivativeResponse;
            };
            QueryDelegatedBalanceRequest: {
                encode(message: _165.QueryDelegatedBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDelegatedBalanceRequest;
                fromJSON(object: any): _165.QueryDelegatedBalanceRequest;
                toJSON(message: _165.QueryDelegatedBalanceRequest): unknown;
                fromPartial(object: Partial<_165.QueryDelegatedBalanceRequest>): _165.QueryDelegatedBalanceRequest;
            };
            QueryDelegatedBalanceResponse: {
                encode(message: _165.QueryDelegatedBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.QueryDelegatedBalanceResponse;
                fromJSON(object: any): _165.QueryDelegatedBalanceResponse;
                toJSON(message: _165.QueryDelegatedBalanceResponse): unknown;
                fromPartial(object: Partial<_165.QueryDelegatedBalanceResponse>): _165.QueryDelegatedBalanceResponse;
            };
        };
    }
    namespace pricefeed {
        const v1beta1: {
            MsgClientImpl: typeof _322.MsgClientImpl;
            QueryClientImpl: typeof _309.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                price(request: _168.QueryPriceRequest): Promise<_168.QueryPriceResponse>;
                prices(request?: _168.QueryPricesRequest): Promise<_168.QueryPricesResponse>;
                rawPrices(request: _168.QueryRawPricesRequest): Promise<_168.QueryRawPricesResponse>;
                oracles(request: _168.QueryOraclesRequest): Promise<_168.QueryOraclesResponse>;
                markets(request?: _168.QueryMarketsRequest): Promise<_168.QueryMarketsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    postPrice(value: _170.MsgPostPrice): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    postPrice(value: _170.MsgPostPrice): {
                        typeUrl: string;
                        value: _170.MsgPostPrice;
                    };
                };
                toJSON: {
                    postPrice(value: _170.MsgPostPrice): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    postPrice(value: any): {
                        typeUrl: string;
                        value: _170.MsgPostPrice;
                    };
                };
                fromPartial: {
                    postPrice(value: _170.MsgPostPrice): {
                        typeUrl: string;
                        value: _170.MsgPostPrice;
                    };
                };
            };
            AminoConverter: {
                "/kava.pricefeed.v1beta1.MsgPostPrice": {
                    aminoType: string;
                    toAmino: ({ from, marketId, price, expiry }: _170.MsgPostPrice) => {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    fromAmino: ({ from, market_id, price, expiry }: {
                        from: string;
                        market_id: string;
                        price: string;
                        expiry: {
                            seconds: string;
                            nanos: number;
                        };
                    }) => _170.MsgPostPrice;
                };
            };
            MsgPostPrice: {
                encode(message: _170.MsgPostPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgPostPrice;
                fromJSON(object: any): _170.MsgPostPrice;
                toJSON(message: _170.MsgPostPrice): unknown;
                fromPartial(object: Partial<_170.MsgPostPrice>): _170.MsgPostPrice;
            };
            MsgPostPriceResponse: {
                encode(_: _170.MsgPostPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.MsgPostPriceResponse;
                fromJSON(_: any): _170.MsgPostPriceResponse;
                toJSON(_: _170.MsgPostPriceResponse): unknown;
                fromPartial(_: Partial<_170.MsgPostPriceResponse>): _170.MsgPostPriceResponse;
            };
            Params: {
                encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
                fromJSON(object: any): _169.Params;
                toJSON(message: _169.Params): unknown;
                fromPartial(object: Partial<_169.Params>): _169.Params;
            };
            Market: {
                encode(message: _169.Market, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Market;
                fromJSON(object: any): _169.Market;
                toJSON(message: _169.Market): unknown;
                fromPartial(object: Partial<_169.Market>): _169.Market;
            };
            PostedPrice: {
                encode(message: _169.PostedPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PostedPrice;
                fromJSON(object: any): _169.PostedPrice;
                toJSON(message: _169.PostedPrice): unknown;
                fromPartial(object: Partial<_169.PostedPrice>): _169.PostedPrice;
            };
            CurrentPrice: {
                encode(message: _169.CurrentPrice, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.CurrentPrice;
                fromJSON(object: any): _169.CurrentPrice;
                toJSON(message: _169.CurrentPrice): unknown;
                fromPartial(object: Partial<_169.CurrentPrice>): _169.CurrentPrice;
            };
            QueryParamsRequest: {
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
                fromJSON(_: any): _168.QueryParamsRequest;
                toJSON(_: _168.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_168.QueryParamsRequest>): _168.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
                fromJSON(object: any): _168.QueryParamsResponse;
                toJSON(message: _168.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_168.QueryParamsResponse>): _168.QueryParamsResponse;
            };
            QueryPriceRequest: {
                encode(message: _168.QueryPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPriceRequest;
                fromJSON(object: any): _168.QueryPriceRequest;
                toJSON(message: _168.QueryPriceRequest): unknown;
                fromPartial(object: Partial<_168.QueryPriceRequest>): _168.QueryPriceRequest;
            };
            QueryPriceResponse: {
                encode(message: _168.QueryPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPriceResponse;
                fromJSON(object: any): _168.QueryPriceResponse;
                toJSON(message: _168.QueryPriceResponse): unknown;
                fromPartial(object: Partial<_168.QueryPriceResponse>): _168.QueryPriceResponse;
            };
            QueryPricesRequest: {
                encode(_: _168.QueryPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPricesRequest;
                fromJSON(_: any): _168.QueryPricesRequest;
                toJSON(_: _168.QueryPricesRequest): unknown;
                fromPartial(_: Partial<_168.QueryPricesRequest>): _168.QueryPricesRequest;
            };
            QueryPricesResponse: {
                encode(message: _168.QueryPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPricesResponse;
                fromJSON(object: any): _168.QueryPricesResponse;
                toJSON(message: _168.QueryPricesResponse): unknown;
                fromPartial(object: Partial<_168.QueryPricesResponse>): _168.QueryPricesResponse;
            };
            QueryRawPricesRequest: {
                encode(message: _168.QueryRawPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryRawPricesRequest;
                fromJSON(object: any): _168.QueryRawPricesRequest;
                toJSON(message: _168.QueryRawPricesRequest): unknown;
                fromPartial(object: Partial<_168.QueryRawPricesRequest>): _168.QueryRawPricesRequest;
            };
            QueryRawPricesResponse: {
                encode(message: _168.QueryRawPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryRawPricesResponse;
                fromJSON(object: any): _168.QueryRawPricesResponse;
                toJSON(message: _168.QueryRawPricesResponse): unknown;
                fromPartial(object: Partial<_168.QueryRawPricesResponse>): _168.QueryRawPricesResponse;
            };
            QueryOraclesRequest: {
                encode(message: _168.QueryOraclesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryOraclesRequest;
                fromJSON(object: any): _168.QueryOraclesRequest;
                toJSON(message: _168.QueryOraclesRequest): unknown;
                fromPartial(object: Partial<_168.QueryOraclesRequest>): _168.QueryOraclesRequest;
            };
            QueryOraclesResponse: {
                encode(message: _168.QueryOraclesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryOraclesResponse;
                fromJSON(object: any): _168.QueryOraclesResponse;
                toJSON(message: _168.QueryOraclesResponse): unknown;
                fromPartial(object: Partial<_168.QueryOraclesResponse>): _168.QueryOraclesResponse;
            };
            QueryMarketsRequest: {
                encode(_: _168.QueryMarketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryMarketsRequest;
                fromJSON(_: any): _168.QueryMarketsRequest;
                toJSON(_: _168.QueryMarketsRequest): unknown;
                fromPartial(_: Partial<_168.QueryMarketsRequest>): _168.QueryMarketsRequest;
            };
            QueryMarketsResponse: {
                encode(message: _168.QueryMarketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryMarketsResponse;
                fromJSON(object: any): _168.QueryMarketsResponse;
                toJSON(message: _168.QueryMarketsResponse): unknown;
                fromPartial(object: Partial<_168.QueryMarketsResponse>): _168.QueryMarketsResponse;
            };
            PostedPriceResponse: {
                encode(message: _168.PostedPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PostedPriceResponse;
                fromJSON(object: any): _168.PostedPriceResponse;
                toJSON(message: _168.PostedPriceResponse): unknown;
                fromPartial(object: Partial<_168.PostedPriceResponse>): _168.PostedPriceResponse;
            };
            CurrentPriceResponse: {
                encode(message: _168.CurrentPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.CurrentPriceResponse;
                fromJSON(object: any): _168.CurrentPriceResponse;
                toJSON(message: _168.CurrentPriceResponse): unknown;
                fromPartial(object: Partial<_168.CurrentPriceResponse>): _168.CurrentPriceResponse;
            };
            MarketResponse: {
                encode(message: _168.MarketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MarketResponse;
                fromJSON(object: any): _168.MarketResponse;
                toJSON(message: _168.MarketResponse): unknown;
                fromPartial(object: Partial<_168.MarketResponse>): _168.MarketResponse;
            };
            GenesisState: {
                encode(message: _167.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.GenesisState;
                fromJSON(object: any): _167.GenesisState;
                toJSON(message: _167.GenesisState): unknown;
                fromPartial(object: Partial<_167.GenesisState>): _167.GenesisState;
            };
        };
    }
    namespace router {
        const v1beta1: {
            MsgClientImpl: typeof _323.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    mintDeposit(value: _171.MsgMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateMintDeposit(value: _171.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurn(value: _171.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawBurnUndelegate(value: _171.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    mintDeposit(value: _171.MsgMintDeposit): {
                        typeUrl: string;
                        value: _171.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _171.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _171.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _171.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _171.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurnUndelegate;
                    };
                };
                toJSON: {
                    mintDeposit(value: _171.MsgMintDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateMintDeposit(value: _171.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawBurn(value: _171.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawBurnUndelegate(value: _171.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    mintDeposit(value: any): {
                        typeUrl: string;
                        value: _171.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: any): {
                        typeUrl: string;
                        value: _171.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: any): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: any): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurnUndelegate;
                    };
                };
                fromPartial: {
                    mintDeposit(value: _171.MsgMintDeposit): {
                        typeUrl: string;
                        value: _171.MsgMintDeposit;
                    };
                    delegateMintDeposit(value: _171.MsgDelegateMintDeposit): {
                        typeUrl: string;
                        value: _171.MsgDelegateMintDeposit;
                    };
                    withdrawBurn(value: _171.MsgWithdrawBurn): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurn;
                    };
                    withdrawBurnUndelegate(value: _171.MsgWithdrawBurnUndelegate): {
                        typeUrl: string;
                        value: _171.MsgWithdrawBurnUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/kava.router.v1beta1.MsgMintDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, validator, amount }: _171.MsgMintDeposit) => {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ depositor, validator, amount }: {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgMintDeposit;
                };
                "/kava.router.v1beta1.MsgDelegateMintDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, validator, amount }: _171.MsgDelegateMintDeposit) => {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ depositor, validator, amount }: {
                        depositor: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgDelegateMintDeposit;
                };
                "/kava.router.v1beta1.MsgWithdrawBurn": {
                    aminoType: string;
                    toAmino: ({ from, validator, amount }: _171.MsgWithdrawBurn) => {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ from, validator, amount }: {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgWithdrawBurn;
                };
                "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
                    aminoType: string;
                    toAmino: ({ from, validator, amount }: _171.MsgWithdrawBurnUndelegate) => {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ from, validator, amount }: {
                        from: string;
                        validator: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _171.MsgWithdrawBurnUndelegate;
                };
            };
            MsgMintDeposit: {
                encode(message: _171.MsgMintDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgMintDeposit;
                fromJSON(object: any): _171.MsgMintDeposit;
                toJSON(message: _171.MsgMintDeposit): unknown;
                fromPartial(object: Partial<_171.MsgMintDeposit>): _171.MsgMintDeposit;
            };
            MsgMintDepositResponse: {
                encode(_: _171.MsgMintDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgMintDepositResponse;
                fromJSON(_: any): _171.MsgMintDepositResponse;
                toJSON(_: _171.MsgMintDepositResponse): unknown;
                fromPartial(_: Partial<_171.MsgMintDepositResponse>): _171.MsgMintDepositResponse;
            };
            MsgDelegateMintDeposit: {
                encode(message: _171.MsgDelegateMintDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegateMintDeposit;
                fromJSON(object: any): _171.MsgDelegateMintDeposit;
                toJSON(message: _171.MsgDelegateMintDeposit): unknown;
                fromPartial(object: Partial<_171.MsgDelegateMintDeposit>): _171.MsgDelegateMintDeposit;
            };
            MsgDelegateMintDepositResponse: {
                encode(_: _171.MsgDelegateMintDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegateMintDepositResponse;
                fromJSON(_: any): _171.MsgDelegateMintDepositResponse;
                toJSON(_: _171.MsgDelegateMintDepositResponse): unknown;
                fromPartial(_: Partial<_171.MsgDelegateMintDepositResponse>): _171.MsgDelegateMintDepositResponse;
            };
            MsgWithdrawBurn: {
                encode(message: _171.MsgWithdrawBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgWithdrawBurn;
                fromJSON(object: any): _171.MsgWithdrawBurn;
                toJSON(message: _171.MsgWithdrawBurn): unknown;
                fromPartial(object: Partial<_171.MsgWithdrawBurn>): _171.MsgWithdrawBurn;
            };
            MsgWithdrawBurnResponse: {
                encode(_: _171.MsgWithdrawBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgWithdrawBurnResponse;
                fromJSON(_: any): _171.MsgWithdrawBurnResponse;
                toJSON(_: _171.MsgWithdrawBurnResponse): unknown;
                fromPartial(_: Partial<_171.MsgWithdrawBurnResponse>): _171.MsgWithdrawBurnResponse;
            };
            MsgWithdrawBurnUndelegate: {
                encode(message: _171.MsgWithdrawBurnUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgWithdrawBurnUndelegate;
                fromJSON(object: any): _171.MsgWithdrawBurnUndelegate;
                toJSON(message: _171.MsgWithdrawBurnUndelegate): unknown;
                fromPartial(object: Partial<_171.MsgWithdrawBurnUndelegate>): _171.MsgWithdrawBurnUndelegate;
            };
            MsgWithdrawBurnUndelegateResponse: {
                encode(_: _171.MsgWithdrawBurnUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgWithdrawBurnUndelegateResponse;
                fromJSON(_: any): _171.MsgWithdrawBurnUndelegateResponse;
                toJSON(_: _171.MsgWithdrawBurnUndelegateResponse): unknown;
                fromPartial(_: Partial<_171.MsgWithdrawBurnUndelegateResponse>): _171.MsgWithdrawBurnUndelegateResponse;
            };
        };
    }
    namespace savings {
        const v1beta1: {
            MsgClientImpl: typeof _324.MsgClientImpl;
            QueryClientImpl: typeof _310.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
                deposits(request: _173.QueryDepositsRequest): Promise<_173.QueryDepositsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _175.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _175.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _175.MsgDeposit): {
                        typeUrl: string;
                        value: _175.MsgDeposit;
                    };
                    withdraw(value: _175.MsgWithdraw): {
                        typeUrl: string;
                        value: _175.MsgWithdraw;
                    };
                };
                toJSON: {
                    deposit(value: _175.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _175.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _175.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _175.MsgWithdraw;
                    };
                };
                fromPartial: {
                    deposit(value: _175.MsgDeposit): {
                        typeUrl: string;
                        value: _175.MsgDeposit;
                    };
                    withdraw(value: _175.MsgWithdraw): {
                        typeUrl: string;
                        value: _175.MsgWithdraw;
                    };
                };
            };
            AminoConverter: {
                "/kava.savings.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _175.MsgDeposit) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _175.MsgDeposit;
                };
                "/kava.savings.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ depositor, amount }: _175.MsgWithdraw) => {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, amount }: {
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _175.MsgWithdraw;
                };
            };
            MsgDeposit: {
                encode(message: _175.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgDeposit;
                fromJSON(object: any): _175.MsgDeposit;
                toJSON(message: _175.MsgDeposit): unknown;
                fromPartial(object: Partial<_175.MsgDeposit>): _175.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _175.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgDepositResponse;
                fromJSON(_: any): _175.MsgDepositResponse;
                toJSON(_: _175.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_175.MsgDepositResponse>): _175.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _175.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgWithdraw;
                fromJSON(object: any): _175.MsgWithdraw;
                toJSON(message: _175.MsgWithdraw): unknown;
                fromPartial(object: Partial<_175.MsgWithdraw>): _175.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _175.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgWithdrawResponse;
                fromJSON(_: any): _175.MsgWithdrawResponse;
                toJSON(_: _175.MsgWithdrawResponse): unknown;
                fromPartial(_: Partial<_175.MsgWithdrawResponse>): _175.MsgWithdrawResponse;
            };
            Params: {
                encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
                fromJSON(object: any): _174.Params;
                toJSON(message: _174.Params): unknown;
                fromPartial(object: Partial<_174.Params>): _174.Params;
            };
            Deposit: {
                encode(message: _174.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Deposit;
                fromJSON(object: any): _174.Deposit;
                toJSON(message: _174.Deposit): unknown;
                fromPartial(object: Partial<_174.Deposit>): _174.Deposit;
            };
            QueryParamsRequest: {
                encode(_: _173.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryParamsRequest;
                fromJSON(_: any): _173.QueryParamsRequest;
                toJSON(_: _173.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_173.QueryParamsRequest>): _173.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _173.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryParamsResponse;
                fromJSON(object: any): _173.QueryParamsResponse;
                toJSON(message: _173.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_173.QueryParamsResponse>): _173.QueryParamsResponse;
            };
            QueryDepositsRequest: {
                encode(message: _173.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDepositsRequest;
                fromJSON(object: any): _173.QueryDepositsRequest;
                toJSON(message: _173.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_173.QueryDepositsRequest>): _173.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _173.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryDepositsResponse;
                fromJSON(object: any): _173.QueryDepositsResponse;
                toJSON(message: _173.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_173.QueryDepositsResponse>): _173.QueryDepositsResponse;
            };
            GenesisState: {
                encode(message: _172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GenesisState;
                fromJSON(object: any): _172.GenesisState;
                toJSON(message: _172.GenesisState): unknown;
                fromPartial(object: Partial<_172.GenesisState>): _172.GenesisState;
            };
        };
    }
    namespace swap {
        const v1beta1: {
            MsgClientImpl: typeof _325.MsgClientImpl;
            QueryClientImpl: typeof _311.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                pools(request: _177.QueryPoolsRequest): Promise<_177.QueryPoolsResponse>;
                deposits(request: _177.QueryDepositsRequest): Promise<_177.QueryDepositsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    deposit(value: _179.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _179.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactForTokens(value: _179.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapForExactTokens(value: _179.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    deposit(value: _179.MsgDeposit): {
                        typeUrl: string;
                        value: _179.MsgDeposit;
                    };
                    withdraw(value: _179.MsgWithdraw): {
                        typeUrl: string;
                        value: _179.MsgWithdraw;
                    };
                    swapExactForTokens(value: _179.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _179.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _179.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _179.MsgSwapForExactTokens;
                    };
                };
                toJSON: {
                    deposit(value: _179.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdraw(value: _179.MsgWithdraw): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactForTokens(value: _179.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapForExactTokens(value: _179.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    deposit(value: any): {
                        typeUrl: string;
                        value: _179.MsgDeposit;
                    };
                    withdraw(value: any): {
                        typeUrl: string;
                        value: _179.MsgWithdraw;
                    };
                    swapExactForTokens(value: any): {
                        typeUrl: string;
                        value: _179.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: any): {
                        typeUrl: string;
                        value: _179.MsgSwapForExactTokens;
                    };
                };
                fromPartial: {
                    deposit(value: _179.MsgDeposit): {
                        typeUrl: string;
                        value: _179.MsgDeposit;
                    };
                    withdraw(value: _179.MsgWithdraw): {
                        typeUrl: string;
                        value: _179.MsgWithdraw;
                    };
                    swapExactForTokens(value: _179.MsgSwapExactForTokens): {
                        typeUrl: string;
                        value: _179.MsgSwapExactForTokens;
                    };
                    swapForExactTokens(value: _179.MsgSwapForExactTokens): {
                        typeUrl: string;
                        value: _179.MsgSwapForExactTokens;
                    };
                };
            };
            AminoConverter: {
                "/kava.swap.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ depositor, tokenA, tokenB, slippage, deadline }: _179.MsgDeposit) => {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ depositor, token_a, token_b, slippage, deadline }: {
                        depositor: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _179.MsgDeposit;
                };
                "/kava.swap.v1beta1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: ({ from, shares, minTokenA, minTokenB, deadline }: _179.MsgWithdraw) => {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    };
                    fromAmino: ({ from, shares, min_token_a, min_token_b, deadline }: {
                        from: string;
                        shares: string;
                        min_token_a: {
                            denom: string;
                            amount: string;
                        };
                        min_token_b: {
                            denom: string;
                            amount: string;
                        };
                        deadline: string;
                    }) => _179.MsgWithdraw;
                };
                "/kava.swap.v1beta1.MsgSwapExactForTokens": {
                    aminoType: string;
                    toAmino: ({ requester, exactTokenA, tokenB, slippage, deadline }: _179.MsgSwapExactForTokens) => {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, exact_token_a, token_b, slippage, deadline }: {
                        requester: string;
                        exact_token_a: {
                            denom: string;
                            amount: string;
                        };
                        token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _179.MsgSwapExactForTokens;
                };
                "/kava.swap.v1beta1.MsgSwapForExactTokens": {
                    aminoType: string;
                    toAmino: ({ requester, tokenA, exactTokenB, slippage, deadline }: _179.MsgSwapForExactTokens) => {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    };
                    fromAmino: ({ requester, token_a, exact_token_b, slippage, deadline }: {
                        requester: string;
                        token_a: {
                            denom: string;
                            amount: string;
                        };
                        exact_token_b: {
                            denom: string;
                            amount: string;
                        };
                        slippage: string;
                        deadline: string;
                    }) => _179.MsgSwapForExactTokens;
                };
            };
            MsgDeposit: {
                encode(message: _179.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDeposit;
                fromJSON(object: any): _179.MsgDeposit;
                toJSON(message: _179.MsgDeposit): unknown;
                fromPartial(object: Partial<_179.MsgDeposit>): _179.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _179.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgDepositResponse;
                fromJSON(_: any): _179.MsgDepositResponse;
                toJSON(_: _179.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_179.MsgDepositResponse>): _179.MsgDepositResponse;
            };
            MsgWithdraw: {
                encode(message: _179.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgWithdraw;
                fromJSON(object: any): _179.MsgWithdraw;
                toJSON(message: _179.MsgWithdraw): unknown;
                fromPartial(object: Partial<_179.MsgWithdraw>): _179.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(_: _179.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgWithdrawResponse;
                fromJSON(_: any): _179.MsgWithdrawResponse;
                toJSON(_: _179.MsgWithdrawResponse): unknown;
                fromPartial(_: Partial<_179.MsgWithdrawResponse>): _179.MsgWithdrawResponse;
            };
            MsgSwapExactForTokens: {
                encode(message: _179.MsgSwapExactForTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSwapExactForTokens;
                fromJSON(object: any): _179.MsgSwapExactForTokens;
                toJSON(message: _179.MsgSwapExactForTokens): unknown;
                fromPartial(object: Partial<_179.MsgSwapExactForTokens>): _179.MsgSwapExactForTokens;
            };
            MsgSwapExactForTokensResponse: {
                encode(_: _179.MsgSwapExactForTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSwapExactForTokensResponse;
                fromJSON(_: any): _179.MsgSwapExactForTokensResponse;
                toJSON(_: _179.MsgSwapExactForTokensResponse): unknown;
                fromPartial(_: Partial<_179.MsgSwapExactForTokensResponse>): _179.MsgSwapExactForTokensResponse;
            };
            MsgSwapForExactTokens: {
                encode(message: _179.MsgSwapForExactTokens, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSwapForExactTokens;
                fromJSON(object: any): _179.MsgSwapForExactTokens;
                toJSON(message: _179.MsgSwapForExactTokens): unknown;
                fromPartial(object: Partial<_179.MsgSwapForExactTokens>): _179.MsgSwapForExactTokens;
            };
            MsgSwapForExactTokensResponse: {
                encode(_: _179.MsgSwapForExactTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgSwapForExactTokensResponse;
                fromJSON(_: any): _179.MsgSwapForExactTokensResponse;
                toJSON(_: _179.MsgSwapForExactTokensResponse): unknown;
                fromPartial(_: Partial<_179.MsgSwapForExactTokensResponse>): _179.MsgSwapForExactTokensResponse;
            };
            Params: {
                encode(message: _178.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Params;
                fromJSON(object: any): _178.Params;
                toJSON(message: _178.Params): unknown;
                fromPartial(object: Partial<_178.Params>): _178.Params;
            };
            AllowedPool: {
                encode(message: _178.AllowedPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.AllowedPool;
                fromJSON(object: any): _178.AllowedPool;
                toJSON(message: _178.AllowedPool): unknown;
                fromPartial(object: Partial<_178.AllowedPool>): _178.AllowedPool;
            };
            PoolRecord: {
                encode(message: _178.PoolRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.PoolRecord;
                fromJSON(object: any): _178.PoolRecord;
                toJSON(message: _178.PoolRecord): unknown;
                fromPartial(object: Partial<_178.PoolRecord>): _178.PoolRecord;
            };
            ShareRecord: {
                encode(message: _178.ShareRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.ShareRecord;
                fromJSON(object: any): _178.ShareRecord;
                toJSON(message: _178.ShareRecord): unknown;
                fromPartial(object: Partial<_178.ShareRecord>): _178.ShareRecord;
            };
            QueryParamsRequest: {
                encode(_: _177.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsRequest;
                fromJSON(_: any): _177.QueryParamsRequest;
                toJSON(_: _177.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_177.QueryParamsRequest>): _177.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _177.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsResponse;
                fromJSON(object: any): _177.QueryParamsResponse;
                toJSON(message: _177.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_177.QueryParamsResponse>): _177.QueryParamsResponse;
            };
            QueryPoolsRequest: {
                encode(message: _177.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryPoolsRequest;
                fromJSON(object: any): _177.QueryPoolsRequest;
                toJSON(message: _177.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_177.QueryPoolsRequest>): _177.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: _177.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryPoolsResponse;
                fromJSON(object: any): _177.QueryPoolsResponse;
                toJSON(message: _177.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_177.QueryPoolsResponse>): _177.QueryPoolsResponse;
            };
            PoolResponse: {
                encode(message: _177.PoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.PoolResponse;
                fromJSON(object: any): _177.PoolResponse;
                toJSON(message: _177.PoolResponse): unknown;
                fromPartial(object: Partial<_177.PoolResponse>): _177.PoolResponse;
            };
            QueryDepositsRequest: {
                encode(message: _177.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDepositsRequest;
                fromJSON(object: any): _177.QueryDepositsRequest;
                toJSON(message: _177.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_177.QueryDepositsRequest>): _177.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _177.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDepositsResponse;
                fromJSON(object: any): _177.QueryDepositsResponse;
                toJSON(message: _177.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_177.QueryDepositsResponse>): _177.QueryDepositsResponse;
            };
            DepositResponse: {
                encode(message: _177.DepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.DepositResponse;
                fromJSON(object: any): _177.DepositResponse;
                toJSON(message: _177.DepositResponse): unknown;
                fromPartial(object: Partial<_177.DepositResponse>): _177.DepositResponse;
            };
            GenesisState: {
                encode(message: _176.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisState;
                fromJSON(object: any): _176.GenesisState;
                toJSON(message: _176.GenesisState): unknown;
                fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
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
            kava: {
                auction: {
                    v1beta1: _312.MsgClientImpl;
                };
                bep3: {
                    v1beta1: _313.MsgClientImpl;
                };
                cdp: {
                    v1beta1: _314.MsgClientImpl;
                };
                committee: {
                    v1beta1: _315.MsgClientImpl;
                };
                earn: {
                    v1beta1: _316.MsgClientImpl;
                };
                evmutil: {
                    v1beta1: _317.MsgClientImpl;
                };
                hard: {
                    v1beta1: _318.MsgClientImpl;
                };
                incentive: {
                    v1beta1: _319.MsgClientImpl;
                };
                issuance: {
                    v1beta1: _320.MsgClientImpl;
                };
                liquid: {
                    v1beta1: _321.MsgClientImpl;
                };
                pricefeed: {
                    v1beta1: _322.MsgClientImpl;
                };
                router: {
                    v1beta1: _323.MsgClientImpl;
                };
                savings: {
                    v1beta1: _324.MsgClientImpl;
                };
                swap: {
                    v1beta1: _325.MsgClientImpl;
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
            kava: {
                auction: {
                    v1beta1: {
                        params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        auction(request: _123.QueryAuctionRequest): Promise<_123.QueryAuctionResponse>;
                        auctions(request: _123.QueryAuctionsRequest): Promise<_123.QueryAuctionsResponse>;
                        nextAuctionID(request?: _123.QueryNextAuctionIDRequest): Promise<_123.QueryNextAuctionIDResponse>;
                    };
                };
                bep3: {
                    v1beta1: {
                        params(request?: _127.QueryParamsRequest): Promise<_127.QueryParamsResponse>;
                        assetSupply(request: _127.QueryAssetSupplyRequest): Promise<_127.QueryAssetSupplyResponse>;
                        assetSupplies(request?: _127.QueryAssetSuppliesRequest): Promise<_127.QueryAssetSuppliesResponse>;
                        atomicSwap(request: _127.QueryAtomicSwapRequest): Promise<_127.QueryAtomicSwapResponse>;
                        atomicSwaps(request: _127.QueryAtomicSwapsRequest): Promise<_127.QueryAtomicSwapsResponse>;
                    };
                };
                cdp: {
                    v1beta1: {
                        params(request?: _131.QueryParamsRequest): Promise<_131.QueryParamsResponse>;
                        accounts(request?: _131.QueryAccountsRequest): Promise<_131.QueryAccountsResponse>;
                        totalPrincipal(request: _131.QueryTotalPrincipalRequest): Promise<_131.QueryTotalPrincipalResponse>;
                        totalCollateral(request: _131.QueryTotalCollateralRequest): Promise<_131.QueryTotalCollateralResponse>;
                        cdps(request: _131.QueryCdpsRequest): Promise<_131.QueryCdpsResponse>;
                        cdp(request: _131.QueryCdpRequest): Promise<_131.QueryCdpResponse>;
                        deposits(request: _131.QueryDepositsRequest): Promise<_131.QueryDepositsResponse>;
                    };
                };
                committee: {
                    v1beta1: {
                        committees(request?: _137.QueryCommitteesRequest): Promise<_137.QueryCommitteesResponse>;
                        committee(request: _137.QueryCommitteeRequest): Promise<_137.QueryCommitteeResponse>;
                        proposals(request: _137.QueryProposalsRequest): Promise<_137.QueryProposalsResponse>;
                        proposal(request: _137.QueryProposalRequest): Promise<_137.QueryProposalResponse>;
                        nextProposalID(request?: _137.QueryNextProposalIDRequest): Promise<_137.QueryNextProposalIDResponse>;
                        votes(request: _137.QueryVotesRequest): Promise<_137.QueryVotesResponse>;
                        vote(request: _137.QueryVoteRequest): Promise<_137.QueryVoteResponse>;
                        tally(request: _137.QueryTallyRequest): Promise<_137.QueryTallyResponse>;
                        rawParams(request: _137.QueryRawParamsRequest): Promise<_137.QueryRawParamsResponse>;
                    };
                };
                earn: {
                    v1beta1: {
                        params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                        vaults(request?: _142.QueryVaultsRequest): Promise<_142.QueryVaultsResponse>;
                        vault(request: _142.QueryVaultRequest): Promise<_142.QueryVaultResponse>;
                        deposits(request: _142.QueryDepositsRequest): Promise<_142.QueryDepositsResponse>;
                    };
                };
                evmutil: {
                    v1beta1: {
                        params(request?: _148.QueryParamsRequest): Promise<_148.QueryParamsResponse>;
                    };
                };
                hard: {
                    v1beta1: {
                        params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                        accounts(request?: _152.QueryAccountsRequest): Promise<_152.QueryAccountsResponse>;
                        deposits(request: _152.QueryDepositsRequest): Promise<_152.QueryDepositsResponse>;
                        unsyncedDeposits(request: _152.QueryUnsyncedDepositsRequest): Promise<_152.QueryUnsyncedDepositsResponse>;
                        totalDeposited(request: _152.QueryTotalDepositedRequest): Promise<_152.QueryTotalDepositedResponse>;
                        borrows(request: _152.QueryBorrowsRequest): Promise<_152.QueryBorrowsResponse>;
                        unsyncedBorrows(request: _152.QueryUnsyncedBorrowsRequest): Promise<_152.QueryUnsyncedBorrowsResponse>;
                        totalBorrowed(request: _152.QueryTotalBorrowedRequest): Promise<_152.QueryTotalBorrowedResponse>;
                        interestRate(request: _152.QueryInterestRateRequest): Promise<_152.QueryInterestRateResponse>;
                        reserves(request: _152.QueryReservesRequest): Promise<_152.QueryReservesResponse>;
                        interestFactors(request: _152.QueryInterestFactorsRequest): Promise<_152.QueryInterestFactorsResponse>;
                    };
                };
                issuance: {
                    v1beta1: {
                        params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                    };
                };
                kavadist: {
                    v1beta1: {
                        params(request?: _164.QueryParamsRequest): Promise<_164.QueryParamsResponse>;
                        balance(request?: _164.QueryBalanceRequest): Promise<_164.QueryBalanceResponse>;
                    };
                };
                liquid: {
                    v1beta1: {
                        delegatedBalance(request: _165.QueryDelegatedBalanceRequest): Promise<_165.QueryDelegatedBalanceResponse>;
                    };
                };
                pricefeed: {
                    v1beta1: {
                        params(request?: _168.QueryParamsRequest): Promise<_168.QueryParamsResponse>;
                        price(request: _168.QueryPriceRequest): Promise<_168.QueryPriceResponse>;
                        prices(request?: _168.QueryPricesRequest): Promise<_168.QueryPricesResponse>;
                        rawPrices(request: _168.QueryRawPricesRequest): Promise<_168.QueryRawPricesResponse>;
                        oracles(request: _168.QueryOraclesRequest): Promise<_168.QueryOraclesResponse>;
                        markets(request?: _168.QueryMarketsRequest): Promise<_168.QueryMarketsResponse>;
                    };
                };
                savings: {
                    v1beta1: {
                        params(request?: _173.QueryParamsRequest): Promise<_173.QueryParamsResponse>;
                        deposits(request: _173.QueryDepositsRequest): Promise<_173.QueryDepositsResponse>;
                    };
                };
                swap: {
                    v1beta1: {
                        params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                        pools(request: _177.QueryPoolsRequest): Promise<_177.QueryPoolsResponse>;
                        deposits(request: _177.QueryDepositsRequest): Promise<_177.QueryDepositsResponse>;
                    };
                };
            };
        }>;
    };
}
