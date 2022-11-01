import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolsRequest, QueryPoolsResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for swap module */

export interface Query {
  /** Params queries all parameters of the swap module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Pools queries pools based on pool ID */

  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Deposits queries deposit details based on owner address and pool */

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pools = this.pools.bind(this);
    this.deposits = this.deposits.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.swap.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },

    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    }

  };
};