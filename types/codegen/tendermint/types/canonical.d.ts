import { SignedMsgType, SignedMsgTypeSDKType } from "./types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface CanonicalBlockID {
    hash: Uint8Array;
    partSetHeader?: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDSDKType {
    hash: Uint8Array;
    part_set_header?: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalPartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    polRound: Long;
    blockId?: CanonicalBlockID;
    timestamp?: Timestamp;
    chainId: string;
}
export interface CanonicalProposalSDKType {
    /** type alias for byte */
    type: SignedMsgTypeSDKType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    pol_round: Long;
    block_id?: CanonicalBlockIDSDKType;
    timestamp?: TimestampSDKType;
    chain_id: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    blockId?: CanonicalBlockID;
    timestamp?: Timestamp;
    chainId: string;
}
export interface CanonicalVoteSDKType {
    /** type alias for byte */
    type: SignedMsgTypeSDKType;
    /** canonicalization requires fixed size encoding here */
    height: Long;
    /** canonicalization requires fixed size encoding here */
    round: Long;
    block_id?: CanonicalBlockIDSDKType;
    timestamp?: TimestampSDKType;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID;
    fromJSON(object: any): CanonicalBlockID;
    toJSON(message: CanonicalBlockID): unknown;
    fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID;
};
export declare const CanonicalPartSetHeader: {
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalPartSetHeader;
    fromJSON(object: any): CanonicalPartSetHeader;
    toJSON(message: CanonicalPartSetHeader): unknown;
    fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
};
export declare const CanonicalProposal: {
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal;
    fromJSON(object: any): CanonicalProposal;
    toJSON(message: CanonicalProposal): unknown;
    fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal;
};
export declare const CanonicalVote: {
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote;
    fromJSON(object: any): CanonicalVote;
    toJSON(message: CanonicalVote): unknown;
    fromPartial(object: Partial<CanonicalVote>): CanonicalVote;
};
