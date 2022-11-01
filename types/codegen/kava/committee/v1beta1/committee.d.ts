import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** TallyOption enumerates the valid types of a tally. */
export declare enum TallyOption {
    /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
    TALLY_OPTION_UNSPECIFIED = 0,
    /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
    TALLY_OPTION_FIRST_PAST_THE_POST = 1,
    /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
    TALLY_OPTION_DEADLINE = 2,
    UNRECOGNIZED = -1
}
/** TallyOption enumerates the valid types of a tally. */
export declare enum TallyOptionSDKType {
    /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
    TALLY_OPTION_UNSPECIFIED = 0,
    /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
    TALLY_OPTION_FIRST_PAST_THE_POST = 1,
    /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
    TALLY_OPTION_DEADLINE = 2,
    UNRECOGNIZED = -1
}
export declare function tallyOptionFromJSON(object: any): TallyOption;
export declare function tallyOptionToJSON(object: TallyOption): string;
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommittee {
    id: Long;
    description: string;
    members: Uint8Array[];
    permissions: Any[];
    /** Smallest percentage that must vote for a proposal to pass */
    voteThreshold: string;
    /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
    proposalDuration?: Duration;
    tallyOption: TallyOption;
}
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommitteeSDKType {
    id: Long;
    description: string;
    members: Uint8Array[];
    permissions: AnySDKType[];
    /** Smallest percentage that must vote for a proposal to pass */
    vote_threshold: string;
    /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
    proposal_duration?: DurationSDKType;
    tally_option: TallyOptionSDKType;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommittee {
    baseCommittee?: BaseCommittee;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommitteeSDKType {
    base_committee?: BaseCommitteeSDKType;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommittee {
    baseCommittee?: BaseCommittee;
    quorum: string;
    tallyDenom: string;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommitteeSDKType {
    base_committee?: BaseCommitteeSDKType;
    quorum: string;
    tally_denom: string;
}
export declare const BaseCommittee: {
    encode(message: BaseCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseCommittee;
    fromJSON(object: any): BaseCommittee;
    toJSON(message: BaseCommittee): unknown;
    fromPartial(object: Partial<BaseCommittee>): BaseCommittee;
};
export declare const MemberCommittee: {
    encode(message: MemberCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberCommittee;
    fromJSON(object: any): MemberCommittee;
    toJSON(message: MemberCommittee): unknown;
    fromPartial(object: Partial<MemberCommittee>): MemberCommittee;
};
export declare const TokenCommittee: {
    encode(message: TokenCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenCommittee;
    fromJSON(object: any): TokenCommittee;
    toJSON(message: TokenCommittee): unknown;
    fromPartial(object: Partial<TokenCommittee>): TokenCommittee;
};
