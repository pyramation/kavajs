import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDelegatedBalanceRequest, QueryDelegatedBalanceResponse } from "./query";
/** Query defines the gRPC querier service for liquid module */

export interface Query {
  /**
   * DelegatedBalance returns an account's vesting and vested coins currently delegated to validators.
   * It ignores coins in unbonding delegations.
   */
  delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.delegatedBalance = this.delegatedBalance.bind(this);
  }

  delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse> {
    const data = QueryDelegatedBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.liquid.v1beta1.Query", "DelegatedBalance", data);
    return promise.then(data => QueryDelegatedBalanceResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    delegatedBalance(request: QueryDelegatedBalanceRequest): Promise<QueryDelegatedBalanceResponse> {
      return queryService.delegatedBalance(request);
    }

  };
};