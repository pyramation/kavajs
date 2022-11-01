import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposal {
    title: string;
    description: string;
    amount?: Coin;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSON {
    title: string;
    description: string;
    amount?: Coin;
    deposit: Coin[];
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
    deposit: CoinSDKType[];
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposal {
    title: string;
    description: string;
    amount?: Coin;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSON {
    title: string;
    description: string;
    amount?: Coin;
    deposit: Coin[];
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
    deposit: CoinSDKType[];
}
export declare const CommunityPoolDepositProposal: {
    encode(message: CommunityPoolDepositProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolDepositProposal;
    fromJSON(object: any): CommunityPoolDepositProposal;
    toJSON(message: CommunityPoolDepositProposal): unknown;
    fromPartial(object: Partial<CommunityPoolDepositProposal>): CommunityPoolDepositProposal;
};
export declare const CommunityPoolDepositProposalJSON: {
    encode(message: CommunityPoolDepositProposalJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolDepositProposalJSON;
    fromJSON(object: any): CommunityPoolDepositProposalJSON;
    toJSON(message: CommunityPoolDepositProposalJSON): unknown;
    fromPartial(object: Partial<CommunityPoolDepositProposalJSON>): CommunityPoolDepositProposalJSON;
};
export declare const CommunityPoolWithdrawProposal: {
    encode(message: CommunityPoolWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolWithdrawProposal;
    fromJSON(object: any): CommunityPoolWithdrawProposal;
    toJSON(message: CommunityPoolWithdrawProposal): unknown;
    fromPartial(object: Partial<CommunityPoolWithdrawProposal>): CommunityPoolWithdrawProposal;
};
export declare const CommunityPoolWithdrawProposalJSON: {
    encode(message: CommunityPoolWithdrawProposalJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolWithdrawProposalJSON;
    fromJSON(object: any): CommunityPoolWithdrawProposalJSON;
    toJSON(message: CommunityPoolWithdrawProposalJSON): unknown;
    fromPartial(object: Partial<CommunityPoolWithdrawProposalJSON>): CommunityPoolWithdrawProposalJSON;
};
