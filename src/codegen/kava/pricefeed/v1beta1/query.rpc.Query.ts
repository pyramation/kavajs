import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPriceRequest, QueryPriceResponse, QueryPricesRequest, QueryPricesResponse, QueryRawPricesRequest, QueryRawPricesResponse, QueryOraclesRequest, QueryOraclesResponse, QueryMarketsRequest, QueryMarketsResponse } from "./query";
/** Query defines the gRPC querier service for pricefeed module */

export interface Query {
  /** Params queries all parameters of the pricefeed module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Price queries price details based on a market */

  price(request: QueryPriceRequest): Promise<QueryPriceResponse>;
  /** Prices queries all prices */

  prices(request?: QueryPricesRequest): Promise<QueryPricesResponse>;
  /** RawPrices queries all raw prices based on a market */

  rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse>;
  /** Oracles queries all oracles based on a market */

  oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse>;
  /** Markets queries all markets */

  markets(request?: QueryMarketsRequest): Promise<QueryMarketsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.price = this.price.bind(this);
    this.prices = this.prices.bind(this);
    this.rawPrices = this.rawPrices.bind(this);
    this.oracles = this.oracles.bind(this);
    this.markets = this.markets.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
    const data = QueryPriceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "Price", data);
    return promise.then(data => QueryPriceResponse.decode(new _m0.Reader(data)));
  }

  prices(request: QueryPricesRequest = {}): Promise<QueryPricesResponse> {
    const data = QueryPricesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "Prices", data);
    return promise.then(data => QueryPricesResponse.decode(new _m0.Reader(data)));
  }

  rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse> {
    const data = QueryRawPricesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "RawPrices", data);
    return promise.then(data => QueryRawPricesResponse.decode(new _m0.Reader(data)));
  }

  oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse> {
    const data = QueryOraclesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "Oracles", data);
    return promise.then(data => QueryOraclesResponse.decode(new _m0.Reader(data)));
  }

  markets(request: QueryMarketsRequest = {}): Promise<QueryMarketsResponse> {
    const data = QueryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.pricefeed.v1beta1.Query", "Markets", data);
    return promise.then(data => QueryMarketsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    price(request: QueryPriceRequest): Promise<QueryPriceResponse> {
      return queryService.price(request);
    },

    prices(request?: QueryPricesRequest): Promise<QueryPricesResponse> {
      return queryService.prices(request);
    },

    rawPrices(request: QueryRawPricesRequest): Promise<QueryRawPricesResponse> {
      return queryService.rawPrices(request);
    },

    oracles(request: QueryOraclesRequest): Promise<QueryOraclesResponse> {
      return queryService.oracles(request);
    },

    markets(request?: QueryMarketsRequest): Promise<QueryMarketsResponse> {
      return queryService.markets(request);
    }

  };
};