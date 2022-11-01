import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAccountsRequest, QueryAccountsResponse, QueryDepositsRequest, QueryDepositsResponse, QueryUnsyncedDepositsRequest, QueryUnsyncedDepositsResponse, QueryTotalDepositedRequest, QueryTotalDepositedResponse, QueryBorrowsRequest, QueryBorrowsResponse, QueryUnsyncedBorrowsRequest, QueryUnsyncedBorrowsResponse, QueryTotalBorrowedRequest, QueryTotalBorrowedResponse, QueryInterestRateRequest, QueryInterestRateResponse, QueryReservesRequest, QueryReservesResponse, QueryInterestFactorsRequest, QueryInterestFactorsResponse } from "./query";
/** Query defines the gRPC querier service for bep3 module. */

export interface Query {
  /** Params queries module params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Accounts queries module accounts. */

  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Deposits queries hard deposits. */

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** UnsyncedDeposits queries unsynced deposits. */

  unsyncedDeposits(request: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponse>;
  /** TotalDeposited queries total coins deposited to hard liquidity pools. */

  totalDeposited(request: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponse>;
  /** Borrows queries hard borrows. */

  borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse>;
  /** UnsyncedBorrows queries unsynced borrows. */

  unsyncedBorrows(request: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponse>;
  /** TotalBorrowed queries total coins borrowed from hard liquidity pools. */

  totalBorrowed(request: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponse>;
  /** InterestRate queries the hard module interest rates. */

  interestRate(request: QueryInterestRateRequest): Promise<QueryInterestRateResponse>;
  /** Reserves queries total hard reserve coins. */

  reserves(request: QueryReservesRequest): Promise<QueryReservesResponse>;
  /** InterestFactors queries hard module interest factors. */

  interestFactors(request: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.accounts = this.accounts.bind(this);
    this.deposits = this.deposits.bind(this);
    this.unsyncedDeposits = this.unsyncedDeposits.bind(this);
    this.totalDeposited = this.totalDeposited.bind(this);
    this.borrows = this.borrows.bind(this);
    this.unsyncedBorrows = this.unsyncedBorrows.bind(this);
    this.totalBorrowed = this.totalBorrowed.bind(this);
    this.interestRate = this.interestRate.bind(this);
    this.reserves = this.reserves.bind(this);
    this.interestFactors = this.interestFactors.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  accounts(request: QueryAccountsRequest = {}): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  }

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  }

  unsyncedDeposits(request: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponse> {
    const data = QueryUnsyncedDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "UnsyncedDeposits", data);
    return promise.then(data => QueryUnsyncedDepositsResponse.decode(new _m0.Reader(data)));
  }

  totalDeposited(request: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponse> {
    const data = QueryTotalDepositedRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "TotalDeposited", data);
    return promise.then(data => QueryTotalDepositedResponse.decode(new _m0.Reader(data)));
  }

  borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse> {
    const data = QueryBorrowsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "Borrows", data);
    return promise.then(data => QueryBorrowsResponse.decode(new _m0.Reader(data)));
  }

  unsyncedBorrows(request: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponse> {
    const data = QueryUnsyncedBorrowsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "UnsyncedBorrows", data);
    return promise.then(data => QueryUnsyncedBorrowsResponse.decode(new _m0.Reader(data)));
  }

  totalBorrowed(request: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponse> {
    const data = QueryTotalBorrowedRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "TotalBorrowed", data);
    return promise.then(data => QueryTotalBorrowedResponse.decode(new _m0.Reader(data)));
  }

  interestRate(request: QueryInterestRateRequest): Promise<QueryInterestRateResponse> {
    const data = QueryInterestRateRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "InterestRate", data);
    return promise.then(data => QueryInterestRateResponse.decode(new _m0.Reader(data)));
  }

  reserves(request: QueryReservesRequest): Promise<QueryReservesResponse> {
    const data = QueryReservesRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "Reserves", data);
    return promise.then(data => QueryReservesResponse.decode(new _m0.Reader(data)));
  }

  interestFactors(request: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponse> {
    const data = QueryInterestFactorsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.hard.v1beta1.Query", "InterestFactors", data);
    return promise.then(data => QueryInterestFactorsResponse.decode(new _m0.Reader(data)));
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

    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },

    unsyncedDeposits(request: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponse> {
      return queryService.unsyncedDeposits(request);
    },

    totalDeposited(request: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponse> {
      return queryService.totalDeposited(request);
    },

    borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse> {
      return queryService.borrows(request);
    },

    unsyncedBorrows(request: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponse> {
      return queryService.unsyncedBorrows(request);
    },

    totalBorrowed(request: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponse> {
      return queryService.totalBorrowed(request);
    },

    interestRate(request: QueryInterestRateRequest): Promise<QueryInterestRateResponse> {
      return queryService.interestRate(request);
    },

    reserves(request: QueryReservesRequest): Promise<QueryReservesResponse> {
      return queryService.reserves(request);
    },

    interestFactors(request: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponse> {
      return queryService.interestFactors(request);
    }

  };
};