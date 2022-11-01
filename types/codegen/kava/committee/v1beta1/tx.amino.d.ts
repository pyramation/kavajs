import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitProposal, MsgVote } from "./tx";
export interface AminoMsgSubmitProposal extends AminoMsg {
    type: "/kava.committee.v1beta1.MsgSubmitProposal";
    value: {
        pub_proposal: {
            type_url: string;
            value: Uint8Array;
        };
        proposer: string;
        committee_id: string;
    };
}
export interface AminoMsgVote extends AminoMsg {
    type: "/kava.committee.v1beta1.MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        vote_type: number;
    };
}
export declare const AminoConverter: {
    "/kava.committee.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ pubProposal, proposer, committeeId }: MsgSubmitProposal) => AminoMsgSubmitProposal["value"];
        fromAmino: ({ pub_proposal, proposer, committee_id }: AminoMsgSubmitProposal["value"]) => MsgSubmitProposal;
    };
    "/kava.committee.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, voteType }: MsgVote) => AminoMsgVote["value"];
        fromAmino: ({ proposal_id, voter, vote_type }: AminoMsgVote["value"]) => MsgVote;
    };
};
