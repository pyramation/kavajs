import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposal {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposalSDKType {
    title: string;
    description: string;
    recipient_list: MultiSpendRecipientSDKType[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSON {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
    deposit: Coin[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSONSDKType {
    title: string;
    description: string;
    recipient_list: MultiSpendRecipientSDKType[];
    deposit: CoinSDKType[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipient {
    address: string;
    amount: Coin[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipientSDKType {
    address: string;
    amount: CoinSDKType[];
}
export declare const CommunityPoolMultiSpendProposal: {
    encode(message: CommunityPoolMultiSpendProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposal;
    fromJSON(object: any): CommunityPoolMultiSpendProposal;
    toJSON(message: CommunityPoolMultiSpendProposal): unknown;
    fromPartial(object: Partial<CommunityPoolMultiSpendProposal>): CommunityPoolMultiSpendProposal;
};
export declare const CommunityPoolMultiSpendProposalJSON: {
    encode(message: CommunityPoolMultiSpendProposalJSON, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolMultiSpendProposalJSON;
    fromJSON(object: any): CommunityPoolMultiSpendProposalJSON;
    toJSON(message: CommunityPoolMultiSpendProposalJSON): unknown;
    fromPartial(object: Partial<CommunityPoolMultiSpendProposalJSON>): CommunityPoolMultiSpendProposalJSON;
};
export declare const MultiSpendRecipient: {
    encode(message: MultiSpendRecipient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSpendRecipient;
    fromJSON(object: any): MultiSpendRecipient;
    toJSON(message: MultiSpendRecipient): unknown;
    fromPartial(object: Partial<MultiSpendRecipient>): MultiSpendRecipient;
};
