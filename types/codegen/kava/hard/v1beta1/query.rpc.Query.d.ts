import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    unsyncedDeposits(request: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponse>;
    totalDeposited(request: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponse>;
    borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse>;
    unsyncedBorrows(request: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponse>;
    totalBorrowed(request: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponse>;
    interestRate(request: QueryInterestRateRequest): Promise<QueryInterestRateResponse>;
    reserves(request: QueryReservesRequest): Promise<QueryReservesResponse>;
    interestFactors(request: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    unsyncedDeposits(request: QueryUnsyncedDepositsRequest): Promise<QueryUnsyncedDepositsResponse>;
    totalDeposited(request: QueryTotalDepositedRequest): Promise<QueryTotalDepositedResponse>;
    borrows(request: QueryBorrowsRequest): Promise<QueryBorrowsResponse>;
    unsyncedBorrows(request: QueryUnsyncedBorrowsRequest): Promise<QueryUnsyncedBorrowsResponse>;
    totalBorrowed(request: QueryTotalBorrowedRequest): Promise<QueryTotalBorrowedResponse>;
    interestRate(request: QueryInterestRateRequest): Promise<QueryInterestRateResponse>;
    reserves(request: QueryReservesRequest): Promise<QueryReservesResponse>;
    interestFactors(request: QueryInterestFactorsRequest): Promise<QueryInterestFactorsResponse>;
};
