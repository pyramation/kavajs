import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAccountsRequest, QueryAccountsResponse, QueryTotalPrincipalRequest, QueryTotalPrincipalResponse, QueryTotalCollateralRequest, QueryTotalCollateralResponse, QueryCdpsRequest, QueryCdpsResponse, QueryCdpRequest, QueryCdpResponse, QueryDepositsRequest, QueryDepositsResponse } from "./query";
/** Query defines the gRPC querier service for cdp module */

export interface Query {
  /** Params queries all parameters of the cdp module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Accounts queries the CDP module accounts. */

  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** TotalPrincipal queries the total principal of a given collateral type. */

  totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse>;
  /** TotalCollateral queries the total collateral of a given collateral type. */

  totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse>;
  /** Cdps queries all active CDPs. */

  cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse>;
  /** Cdp queries a CDP with the input owner address and collateral type. */

  cdp(request: QueryCdpRequest): Promise<QueryCdpResponse>;
  /** Deposits queries deposits associated with the CDP owned by an address for a collateral type. */

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.accounts = this.accounts.bind(this);
    this.totalPrincipal = this.totalPrincipal.bind(this);
    this.totalCollateral = this.totalCollateral.bind(this);
    this.cdps = this.cdps.bind(this);
    this.cdp = this.cdp.bind(this);
    this.deposits = this.deposits.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  accounts(request: QueryAccountsRequest = {}): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }

  totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse> {
    const data = QueryTotalPrincipalRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "TotalPrincipal", data);
    return promise.then(data => QueryTotalPrincipalResponse.decode(new _m0.Reader(data)));
  }

  totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "TotalCollateral", data);
    return promise.then(data => QueryTotalCollateralResponse.decode(new _m0.Reader(data)));
  }

  cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse> {
    const data = QueryCdpsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "Cdps", data);
    return promise.then(data => QueryCdpsResponse.decode(new _m0.Reader(data)));
  }

  cdp(request: QueryCdpRequest): Promise<QueryCdpResponse> {
    const data = QueryCdpRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "Cdp", data);
    return promise.then(data => QueryCdpResponse.decode(new _m0.Reader(data)));
  }

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.cdp.v1beta1.Query", "Deposits", data);
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

    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },

    totalPrincipal(request: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponse> {
      return queryService.totalPrincipal(request);
    },

    totalCollateral(request: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponse> {
      return queryService.totalCollateral(request);
    },

    cdps(request: QueryCdpsRequest): Promise<QueryCdpsResponse> {
      return queryService.cdps(request);
    },

    cdp(request: QueryCdpRequest): Promise<QueryCdpResponse> {
      return queryService.cdp(request);
    },

    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    }

  };
};