import { ResponseDeliverTx, ResponseDeliverTxSDKType, ResponseEndBlock, ResponseEndBlockSDKType, ResponseBeginBlock, ResponseBeginBlockSDKType } from "../abci/types";
import { ValidatorSet, ValidatorSetSDKType } from "../types/validator";
import { ConsensusParams, ConsensusParamsSDKType } from "../types/params";
import { Consensus, ConsensusSDKType } from "../version/types";
import { BlockID, BlockIDSDKType } from "../types/types";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
    deliverTxs: ResponseDeliverTx[];
    endBlock?: ResponseEndBlock;
    beginBlock?: ResponseBeginBlock;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesSDKType {
    deliver_txs: ResponseDeliverTxSDKType[];
    end_block?: ResponseEndBlockSDKType;
    begin_block?: ResponseBeginBlockSDKType;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
    validatorSet?: ValidatorSet;
    lastHeightChanged: Long;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoSDKType {
    validator_set?: ValidatorSetSDKType;
    last_height_changed: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
    consensusParams?: ConsensusParams;
    lastHeightChanged: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoSDKType {
    consensus_params?: ConsensusParamsSDKType;
    last_height_changed: Long;
}
export interface ABCIResponsesInfo {
    abciResponses?: ABCIResponses;
    height: Long;
}
export interface ABCIResponsesInfoSDKType {
    abci_responses?: ABCIResponsesSDKType;
    height: Long;
}
export interface Version {
    consensus?: Consensus;
    software: string;
}
export interface VersionSDKType {
    consensus?: ConsensusSDKType;
    software: string;
}
export interface State {
    version?: Version;
    /** immutable */
    chainId: string;
    initialHeight: Long;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    lastBlockHeight: Long;
    lastBlockId?: BlockID;
    lastBlockTime?: Timestamp;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    nextValidators?: ValidatorSet;
    validators?: ValidatorSet;
    lastValidators?: ValidatorSet;
    lastHeightValidatorsChanged: Long;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensusParams?: ConsensusParams;
    lastHeightConsensusParamsChanged: Long;
    /** Merkle root of the results from executing prev block */
    lastResultsHash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    appHash: Uint8Array;
}
export interface StateSDKType {
    version?: VersionSDKType;
    /** immutable */
    chain_id: string;
    initial_height: Long;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    last_block_height: Long;
    last_block_id?: BlockIDSDKType;
    last_block_time?: TimestampSDKType;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    next_validators?: ValidatorSetSDKType;
    validators?: ValidatorSetSDKType;
    last_validators?: ValidatorSetSDKType;
    last_height_validators_changed: Long;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensus_params?: ConsensusParamsSDKType;
    last_height_consensus_params_changed: Long;
    /** Merkle root of the results from executing prev block */
    last_results_hash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    app_hash: Uint8Array;
}
export declare const ABCIResponses: {
    encode(message: ABCIResponses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses;
    fromJSON(object: any): ABCIResponses;
    toJSON(message: ABCIResponses): unknown;
    fromPartial(object: Partial<ABCIResponses>): ABCIResponses;
};
export declare const ValidatorsInfo: {
    encode(message: ValidatorsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo;
    fromJSON(object: any): ValidatorsInfo;
    toJSON(message: ValidatorsInfo): unknown;
    fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo;
};
export declare const ConsensusParamsInfo: {
    encode(message: ConsensusParamsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo;
    fromJSON(object: any): ConsensusParamsInfo;
    toJSON(message: ConsensusParamsInfo): unknown;
    fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo;
};
export declare const ABCIResponsesInfo: {
    encode(message: ABCIResponsesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo;
    fromJSON(object: any): ABCIResponsesInfo;
    toJSON(message: ABCIResponsesInfo): unknown;
    fromPartial(object: Partial<ABCIResponsesInfo>): ABCIResponsesInfo;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: Partial<Version>): Version;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial(object: Partial<State>): State;
};
