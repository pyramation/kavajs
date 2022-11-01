import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetSupply = this.assetSupply.bind(this);
    this.assetSupplies = this.assetSupplies.bind(this);
    this.atomicSwap = this.atomicSwap.bind(this);
    this.atomicSwaps = this.atomicSwaps.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  assetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse> {
    const data = QueryAssetSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Query", "AssetSupply", data);
    return promise.then(data => QueryAssetSupplyResponse.decode(new _m0.Reader(data)));
  }

  assetSupplies(request: QueryAssetSuppliesRequest = {}): Promise<QueryAssetSuppliesResponse> {
    const data = QueryAssetSuppliesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Query", "AssetSupplies", data);
    return promise.then(data => QueryAssetSuppliesResponse.decode(new _m0.Reader(data)));
  }

  atomicSwap(request: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponse> {
    const data = QueryAtomicSwapRequest.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Query", "AtomicSwap", data);
    return promise.then(data => QueryAtomicSwapResponse.decode(new _m0.Reader(data)));
  }

  atomicSwaps(request: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponse> {
    const data = QueryAtomicSwapsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Query", "AtomicSwaps", data);
    return promise.then(data => QueryAtomicSwapsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    assetSupply(request: QueryAssetSupplyRequest): Promise<QueryAssetSupplyResponse> {
      return queryService.assetSupply(request);
    },

    assetSupplies(request?: QueryAssetSuppliesRequest): Promise<QueryAssetSuppliesResponse> {
      return queryService.assetSupplies(request);
    },

    atomicSwap(request: QueryAtomicSwapRequest): Promise<QueryAtomicSwapResponse> {
      return queryService.atomicSwap(request);
    },

    atomicSwaps(request: QueryAtomicSwapsRequest): Promise<QueryAtomicSwapsResponse> {
      return queryService.atomicSwaps(request);
    }

  };
};