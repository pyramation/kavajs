import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBalanceRequest, QueryBalanceResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** Params queries the parameters of x/kavadist module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Balance queries the balance of all coins of x/kavadist module. */

  balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.balance = this.balance.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.kavadist.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  balance(request: QueryBalanceRequest = {}): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.kavadist.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    }

  };
};