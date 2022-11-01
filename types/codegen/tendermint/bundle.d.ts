import * as _180 from "./abci/types";
import * as _181 from "./blockchain/types";
import * as _182 from "./consensus/types";
import * as _183 from "./consensus/wal";
import * as _184 from "./crypto/keys";
import * as _185 from "./crypto/proof";
import * as _186 from "./libs/bits/types";
import * as _187 from "./mempool/types";
import * as _188 from "./p2p/conn";
import * as _189 from "./p2p/pex";
import * as _190 from "./p2p/types";
import * as _191 from "./privval/types";
import * as _192 from "./rpc/grpc/types";
import * as _193 from "./state/types";
import * as _194 from "./statesync/types";
import * as _195 from "./store/types";
import * as _196 from "./types/block";
import * as _197 from "./types/canonical";
import * as _198 from "./types/events";
import * as _199 from "./types/evidence";
import * as _200 from "./types/params";
import * as _201 from "./types/types";
import * as _202 from "./types/validator";
import * as _203 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _180.CheckTxType;
        checkTxTypeToJSON(object: _180.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _180.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _180.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _180.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _180.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _180.EvidenceType;
        evidenceTypeToJSON(object: _180.EvidenceType): string;
        CheckTxType: typeof _180.CheckTxType;
        CheckTxTypeSDKType: typeof _180.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _180.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _180.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _180.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _180.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _180.EvidenceType;
        EvidenceTypeSDKType: typeof _180.EvidenceTypeSDKType;
        Request: {
            encode(message: _180.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Request;
            fromJSON(object: any): _180.Request;
            toJSON(message: _180.Request): unknown;
            fromPartial(object: Partial<_180.Request>): _180.Request;
        };
        RequestEcho: {
            encode(message: _180.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestEcho;
            fromJSON(object: any): _180.RequestEcho;
            toJSON(message: _180.RequestEcho): unknown;
            fromPartial(object: Partial<_180.RequestEcho>): _180.RequestEcho;
        };
        RequestFlush: {
            encode(_: _180.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestFlush;
            fromJSON(_: any): _180.RequestFlush;
            toJSON(_: _180.RequestFlush): unknown;
            fromPartial(_: Partial<_180.RequestFlush>): _180.RequestFlush;
        };
        RequestInfo: {
            encode(message: _180.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestInfo;
            fromJSON(object: any): _180.RequestInfo;
            toJSON(message: _180.RequestInfo): unknown;
            fromPartial(object: Partial<_180.RequestInfo>): _180.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _180.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestSetOption;
            fromJSON(object: any): _180.RequestSetOption;
            toJSON(message: _180.RequestSetOption): unknown;
            fromPartial(object: Partial<_180.RequestSetOption>): _180.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _180.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestInitChain;
            fromJSON(object: any): _180.RequestInitChain;
            toJSON(message: _180.RequestInitChain): unknown;
            fromPartial(object: Partial<_180.RequestInitChain>): _180.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _180.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestQuery;
            fromJSON(object: any): _180.RequestQuery;
            toJSON(message: _180.RequestQuery): unknown;
            fromPartial(object: Partial<_180.RequestQuery>): _180.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _180.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestBeginBlock;
            fromJSON(object: any): _180.RequestBeginBlock;
            toJSON(message: _180.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_180.RequestBeginBlock>): _180.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _180.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestCheckTx;
            fromJSON(object: any): _180.RequestCheckTx;
            toJSON(message: _180.RequestCheckTx): unknown;
            fromPartial(object: Partial<_180.RequestCheckTx>): _180.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _180.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestDeliverTx;
            fromJSON(object: any): _180.RequestDeliverTx;
            toJSON(message: _180.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_180.RequestDeliverTx>): _180.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _180.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestEndBlock;
            fromJSON(object: any): _180.RequestEndBlock;
            toJSON(message: _180.RequestEndBlock): unknown;
            fromPartial(object: Partial<_180.RequestEndBlock>): _180.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _180.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestCommit;
            fromJSON(_: any): _180.RequestCommit;
            toJSON(_: _180.RequestCommit): unknown;
            fromPartial(_: Partial<_180.RequestCommit>): _180.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _180.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestListSnapshots;
            fromJSON(_: any): _180.RequestListSnapshots;
            toJSON(_: _180.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_180.RequestListSnapshots>): _180.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _180.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestOfferSnapshot;
            fromJSON(object: any): _180.RequestOfferSnapshot;
            toJSON(message: _180.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_180.RequestOfferSnapshot>): _180.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _180.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestLoadSnapshotChunk;
            fromJSON(object: any): _180.RequestLoadSnapshotChunk;
            toJSON(message: _180.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_180.RequestLoadSnapshotChunk>): _180.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _180.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.RequestApplySnapshotChunk;
            fromJSON(object: any): _180.RequestApplySnapshotChunk;
            toJSON(message: _180.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_180.RequestApplySnapshotChunk>): _180.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _180.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Response;
            fromJSON(object: any): _180.Response;
            toJSON(message: _180.Response): unknown;
            fromPartial(object: Partial<_180.Response>): _180.Response;
        };
        ResponseException: {
            encode(message: _180.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseException;
            fromJSON(object: any): _180.ResponseException;
            toJSON(message: _180.ResponseException): unknown;
            fromPartial(object: Partial<_180.ResponseException>): _180.ResponseException;
        };
        ResponseEcho: {
            encode(message: _180.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseEcho;
            fromJSON(object: any): _180.ResponseEcho;
            toJSON(message: _180.ResponseEcho): unknown;
            fromPartial(object: Partial<_180.ResponseEcho>): _180.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _180.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseFlush;
            fromJSON(_: any): _180.ResponseFlush;
            toJSON(_: _180.ResponseFlush): unknown;
            fromPartial(_: Partial<_180.ResponseFlush>): _180.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _180.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseInfo;
            fromJSON(object: any): _180.ResponseInfo;
            toJSON(message: _180.ResponseInfo): unknown;
            fromPartial(object: Partial<_180.ResponseInfo>): _180.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _180.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseSetOption;
            fromJSON(object: any): _180.ResponseSetOption;
            toJSON(message: _180.ResponseSetOption): unknown;
            fromPartial(object: Partial<_180.ResponseSetOption>): _180.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _180.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseInitChain;
            fromJSON(object: any): _180.ResponseInitChain;
            toJSON(message: _180.ResponseInitChain): unknown;
            fromPartial(object: Partial<_180.ResponseInitChain>): _180.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _180.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseQuery;
            fromJSON(object: any): _180.ResponseQuery;
            toJSON(message: _180.ResponseQuery): unknown;
            fromPartial(object: Partial<_180.ResponseQuery>): _180.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _180.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseBeginBlock;
            fromJSON(object: any): _180.ResponseBeginBlock;
            toJSON(message: _180.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_180.ResponseBeginBlock>): _180.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _180.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseCheckTx;
            fromJSON(object: any): _180.ResponseCheckTx;
            toJSON(message: _180.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_180.ResponseCheckTx>): _180.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _180.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseDeliverTx;
            fromJSON(object: any): _180.ResponseDeliverTx;
            toJSON(message: _180.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_180.ResponseDeliverTx>): _180.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _180.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseEndBlock;
            fromJSON(object: any): _180.ResponseEndBlock;
            toJSON(message: _180.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_180.ResponseEndBlock>): _180.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _180.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseCommit;
            fromJSON(object: any): _180.ResponseCommit;
            toJSON(message: _180.ResponseCommit): unknown;
            fromPartial(object: Partial<_180.ResponseCommit>): _180.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _180.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseListSnapshots;
            fromJSON(object: any): _180.ResponseListSnapshots;
            toJSON(message: _180.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_180.ResponseListSnapshots>): _180.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _180.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseOfferSnapshot;
            fromJSON(object: any): _180.ResponseOfferSnapshot;
            toJSON(message: _180.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_180.ResponseOfferSnapshot>): _180.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _180.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _180.ResponseLoadSnapshotChunk;
            toJSON(message: _180.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_180.ResponseLoadSnapshotChunk>): _180.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _180.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ResponseApplySnapshotChunk;
            fromJSON(object: any): _180.ResponseApplySnapshotChunk;
            toJSON(message: _180.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_180.ResponseApplySnapshotChunk>): _180.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _180.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ConsensusParams;
            fromJSON(object: any): _180.ConsensusParams;
            toJSON(message: _180.ConsensusParams): unknown;
            fromPartial(object: Partial<_180.ConsensusParams>): _180.ConsensusParams;
        };
        BlockParams: {
            encode(message: _180.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.BlockParams;
            fromJSON(object: any): _180.BlockParams;
            toJSON(message: _180.BlockParams): unknown;
            fromPartial(object: Partial<_180.BlockParams>): _180.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _180.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.LastCommitInfo;
            fromJSON(object: any): _180.LastCommitInfo;
            toJSON(message: _180.LastCommitInfo): unknown;
            fromPartial(object: Partial<_180.LastCommitInfo>): _180.LastCommitInfo;
        };
        Event: {
            encode(message: _180.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Event;
            fromJSON(object: any): _180.Event;
            toJSON(message: _180.Event): unknown;
            fromPartial(object: Partial<_180.Event>): _180.Event;
        };
        EventAttribute: {
            encode(message: _180.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.EventAttribute;
            fromJSON(object: any): _180.EventAttribute;
            toJSON(message: _180.EventAttribute): unknown;
            fromPartial(object: Partial<_180.EventAttribute>): _180.EventAttribute;
        };
        TxResult: {
            encode(message: _180.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.TxResult;
            fromJSON(object: any): _180.TxResult;
            toJSON(message: _180.TxResult): unknown;
            fromPartial(object: Partial<_180.TxResult>): _180.TxResult;
        };
        Validator: {
            encode(message: _180.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Validator;
            fromJSON(object: any): _180.Validator;
            toJSON(message: _180.Validator): unknown;
            fromPartial(object: Partial<_180.Validator>): _180.Validator;
        };
        ValidatorUpdate: {
            encode(message: _180.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ValidatorUpdate;
            fromJSON(object: any): _180.ValidatorUpdate;
            toJSON(message: _180.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_180.ValidatorUpdate>): _180.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _180.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.VoteInfo;
            fromJSON(object: any): _180.VoteInfo;
            toJSON(message: _180.VoteInfo): unknown;
            fromPartial(object: Partial<_180.VoteInfo>): _180.VoteInfo;
        };
        Evidence: {
            encode(message: _180.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Evidence;
            fromJSON(object: any): _180.Evidence;
            toJSON(message: _180.Evidence): unknown;
            fromPartial(object: Partial<_180.Evidence>): _180.Evidence;
        };
        Snapshot: {
            encode(message: _180.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Snapshot;
            fromJSON(object: any): _180.Snapshot;
            toJSON(message: _180.Snapshot): unknown;
            fromPartial(object: Partial<_180.Snapshot>): _180.Snapshot;
        };
    };
    const blockchain: {
        BlockRequest: {
            encode(message: _181.BlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.BlockRequest;
            fromJSON(object: any): _181.BlockRequest;
            toJSON(message: _181.BlockRequest): unknown;
            fromPartial(object: Partial<_181.BlockRequest>): _181.BlockRequest;
        };
        NoBlockResponse: {
            encode(message: _181.NoBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.NoBlockResponse;
            fromJSON(object: any): _181.NoBlockResponse;
            toJSON(message: _181.NoBlockResponse): unknown;
            fromPartial(object: Partial<_181.NoBlockResponse>): _181.NoBlockResponse;
        };
        BlockResponse: {
            encode(message: _181.BlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.BlockResponse;
            fromJSON(object: any): _181.BlockResponse;
            toJSON(message: _181.BlockResponse): unknown;
            fromPartial(object: Partial<_181.BlockResponse>): _181.BlockResponse;
        };
        StatusRequest: {
            encode(_: _181.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.StatusRequest;
            fromJSON(_: any): _181.StatusRequest;
            toJSON(_: _181.StatusRequest): unknown;
            fromPartial(_: Partial<_181.StatusRequest>): _181.StatusRequest;
        };
        StatusResponse: {
            encode(message: _181.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.StatusResponse;
            fromJSON(object: any): _181.StatusResponse;
            toJSON(message: _181.StatusResponse): unknown;
            fromPartial(object: Partial<_181.StatusResponse>): _181.StatusResponse;
        };
        Message: {
            encode(message: _181.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Message;
            fromJSON(object: any): _181.Message;
            toJSON(message: _181.Message): unknown;
            fromPartial(object: Partial<_181.Message>): _181.Message;
        };
    };
    const consensus: {
        MsgInfo: {
            encode(message: _183.MsgInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgInfo;
            fromJSON(object: any): _183.MsgInfo;
            toJSON(message: _183.MsgInfo): unknown;
            fromPartial(object: Partial<_183.MsgInfo>): _183.MsgInfo;
        };
        TimeoutInfo: {
            encode(message: _183.TimeoutInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.TimeoutInfo;
            fromJSON(object: any): _183.TimeoutInfo;
            toJSON(message: _183.TimeoutInfo): unknown;
            fromPartial(object: Partial<_183.TimeoutInfo>): _183.TimeoutInfo;
        };
        EndHeight: {
            encode(message: _183.EndHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.EndHeight;
            fromJSON(object: any): _183.EndHeight;
            toJSON(message: _183.EndHeight): unknown;
            fromPartial(object: Partial<_183.EndHeight>): _183.EndHeight;
        };
        WALMessage: {
            encode(message: _183.WALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.WALMessage;
            fromJSON(object: any): _183.WALMessage;
            toJSON(message: _183.WALMessage): unknown;
            fromPartial(object: Partial<_183.WALMessage>): _183.WALMessage;
        };
        TimedWALMessage: {
            encode(message: _183.TimedWALMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.TimedWALMessage;
            fromJSON(object: any): _183.TimedWALMessage;
            toJSON(message: _183.TimedWALMessage): unknown;
            fromPartial(object: Partial<_183.TimedWALMessage>): _183.TimedWALMessage;
        };
        NewRoundStep: {
            encode(message: _182.NewRoundStep, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.NewRoundStep;
            fromJSON(object: any): _182.NewRoundStep;
            toJSON(message: _182.NewRoundStep): unknown;
            fromPartial(object: Partial<_182.NewRoundStep>): _182.NewRoundStep;
        };
        NewValidBlock: {
            encode(message: _182.NewValidBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.NewValidBlock;
            fromJSON(object: any): _182.NewValidBlock;
            toJSON(message: _182.NewValidBlock): unknown;
            fromPartial(object: Partial<_182.NewValidBlock>): _182.NewValidBlock;
        };
        Proposal: {
            encode(message: _182.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Proposal;
            fromJSON(object: any): _182.Proposal;
            toJSON(message: _182.Proposal): unknown;
            fromPartial(object: Partial<_182.Proposal>): _182.Proposal;
        };
        ProposalPOL: {
            encode(message: _182.ProposalPOL, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.ProposalPOL;
            fromJSON(object: any): _182.ProposalPOL;
            toJSON(message: _182.ProposalPOL): unknown;
            fromPartial(object: Partial<_182.ProposalPOL>): _182.ProposalPOL;
        };
        BlockPart: {
            encode(message: _182.BlockPart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.BlockPart;
            fromJSON(object: any): _182.BlockPart;
            toJSON(message: _182.BlockPart): unknown;
            fromPartial(object: Partial<_182.BlockPart>): _182.BlockPart;
        };
        Vote: {
            encode(message: _182.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Vote;
            fromJSON(object: any): _182.Vote;
            toJSON(message: _182.Vote): unknown;
            fromPartial(object: Partial<_182.Vote>): _182.Vote;
        };
        HasVote: {
            encode(message: _182.HasVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.HasVote;
            fromJSON(object: any): _182.HasVote;
            toJSON(message: _182.HasVote): unknown;
            fromPartial(object: Partial<_182.HasVote>): _182.HasVote;
        };
        VoteSetMaj23: {
            encode(message: _182.VoteSetMaj23, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.VoteSetMaj23;
            fromJSON(object: any): _182.VoteSetMaj23;
            toJSON(message: _182.VoteSetMaj23): unknown;
            fromPartial(object: Partial<_182.VoteSetMaj23>): _182.VoteSetMaj23;
        };
        VoteSetBits: {
            encode(message: _182.VoteSetBits, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.VoteSetBits;
            fromJSON(object: any): _182.VoteSetBits;
            toJSON(message: _182.VoteSetBits): unknown;
            fromPartial(object: Partial<_182.VoteSetBits>): _182.VoteSetBits;
        };
        Message: {
            encode(message: _182.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Message;
            fromJSON(object: any): _182.Message;
            toJSON(message: _182.Message): unknown;
            fromPartial(object: Partial<_182.Message>): _182.Message;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _185.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Proof;
            fromJSON(object: any): _185.Proof;
            toJSON(message: _185.Proof): unknown;
            fromPartial(object: Partial<_185.Proof>): _185.Proof;
        };
        ValueOp: {
            encode(message: _185.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ValueOp;
            fromJSON(object: any): _185.ValueOp;
            toJSON(message: _185.ValueOp): unknown;
            fromPartial(object: Partial<_185.ValueOp>): _185.ValueOp;
        };
        DominoOp: {
            encode(message: _185.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.DominoOp;
            fromJSON(object: any): _185.DominoOp;
            toJSON(message: _185.DominoOp): unknown;
            fromPartial(object: Partial<_185.DominoOp>): _185.DominoOp;
        };
        ProofOp: {
            encode(message: _185.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ProofOp;
            fromJSON(object: any): _185.ProofOp;
            toJSON(message: _185.ProofOp): unknown;
            fromPartial(object: Partial<_185.ProofOp>): _185.ProofOp;
        };
        ProofOps: {
            encode(message: _185.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ProofOps;
            fromJSON(object: any): _185.ProofOps;
            toJSON(message: _185.ProofOps): unknown;
            fromPartial(object: Partial<_185.ProofOps>): _185.ProofOps;
        };
        PublicKey: {
            encode(message: _184.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.PublicKey;
            fromJSON(object: any): _184.PublicKey;
            toJSON(message: _184.PublicKey): unknown;
            fromPartial(object: Partial<_184.PublicKey>): _184.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _186.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.BitArray;
                fromJSON(object: any): _186.BitArray;
                toJSON(message: _186.BitArray): unknown;
                fromPartial(object: Partial<_186.BitArray>): _186.BitArray;
            };
        };
    }
    const mempool: {
        Txs: {
            encode(message: _187.Txs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Txs;
            fromJSON(object: any): _187.Txs;
            toJSON(message: _187.Txs): unknown;
            fromPartial(object: Partial<_187.Txs>): _187.Txs;
        };
        Message: {
            encode(message: _187.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Message;
            fromJSON(object: any): _187.Message;
            toJSON(message: _187.Message): unknown;
            fromPartial(object: Partial<_187.Message>): _187.Message;
        };
    };
    const p2p: {
        NetAddress: {
            encode(message: _190.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.NetAddress;
            fromJSON(object: any): _190.NetAddress;
            toJSON(message: _190.NetAddress): unknown;
            fromPartial(object: Partial<_190.NetAddress>): _190.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _190.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ProtocolVersion;
            fromJSON(object: any): _190.ProtocolVersion;
            toJSON(message: _190.ProtocolVersion): unknown;
            fromPartial(object: Partial<_190.ProtocolVersion>): _190.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _190.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.DefaultNodeInfo;
            fromJSON(object: any): _190.DefaultNodeInfo;
            toJSON(message: _190.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_190.DefaultNodeInfo>): _190.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _190.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.DefaultNodeInfoOther;
            fromJSON(object: any): _190.DefaultNodeInfoOther;
            toJSON(message: _190.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_190.DefaultNodeInfoOther>): _190.DefaultNodeInfoOther;
        };
        PexRequest: {
            encode(_: _189.PexRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.PexRequest;
            fromJSON(_: any): _189.PexRequest;
            toJSON(_: _189.PexRequest): unknown;
            fromPartial(_: Partial<_189.PexRequest>): _189.PexRequest;
        };
        PexAddrs: {
            encode(message: _189.PexAddrs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.PexAddrs;
            fromJSON(object: any): _189.PexAddrs;
            toJSON(message: _189.PexAddrs): unknown;
            fromPartial(object: Partial<_189.PexAddrs>): _189.PexAddrs;
        };
        Message: {
            encode(message: _189.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Message;
            fromJSON(object: any): _189.Message;
            toJSON(message: _189.Message): unknown;
            fromPartial(object: Partial<_189.Message>): _189.Message;
        };
        PacketPing: {
            encode(_: _188.PacketPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketPing;
            fromJSON(_: any): _188.PacketPing;
            toJSON(_: _188.PacketPing): unknown;
            fromPartial(_: Partial<_188.PacketPing>): _188.PacketPing;
        };
        PacketPong: {
            encode(_: _188.PacketPong, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketPong;
            fromJSON(_: any): _188.PacketPong;
            toJSON(_: _188.PacketPong): unknown;
            fromPartial(_: Partial<_188.PacketPong>): _188.PacketPong;
        };
        PacketMsg: {
            encode(message: _188.PacketMsg, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketMsg;
            fromJSON(object: any): _188.PacketMsg;
            toJSON(message: _188.PacketMsg): unknown;
            fromPartial(object: Partial<_188.PacketMsg>): _188.PacketMsg;
        };
        Packet: {
            encode(message: _188.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Packet;
            fromJSON(object: any): _188.Packet;
            toJSON(message: _188.Packet): unknown;
            fromPartial(object: Partial<_188.Packet>): _188.Packet;
        };
        AuthSigMessage: {
            encode(message: _188.AuthSigMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.AuthSigMessage;
            fromJSON(object: any): _188.AuthSigMessage;
            toJSON(message: _188.AuthSigMessage): unknown;
            fromPartial(object: Partial<_188.AuthSigMessage>): _188.AuthSigMessage;
        };
    };
    const privval: {
        errorsFromJSON(object: any): _191.Errors;
        errorsToJSON(object: _191.Errors): string;
        Errors: typeof _191.Errors;
        ErrorsSDKType: typeof _191.ErrorsSDKType;
        RemoteSignerError: {
            encode(message: _191.RemoteSignerError, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.RemoteSignerError;
            fromJSON(object: any): _191.RemoteSignerError;
            toJSON(message: _191.RemoteSignerError): unknown;
            fromPartial(object: Partial<_191.RemoteSignerError>): _191.RemoteSignerError;
        };
        PubKeyRequest: {
            encode(message: _191.PubKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PubKeyRequest;
            fromJSON(object: any): _191.PubKeyRequest;
            toJSON(message: _191.PubKeyRequest): unknown;
            fromPartial(object: Partial<_191.PubKeyRequest>): _191.PubKeyRequest;
        };
        PubKeyResponse: {
            encode(message: _191.PubKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PubKeyResponse;
            fromJSON(object: any): _191.PubKeyResponse;
            toJSON(message: _191.PubKeyResponse): unknown;
            fromPartial(object: Partial<_191.PubKeyResponse>): _191.PubKeyResponse;
        };
        SignVoteRequest: {
            encode(message: _191.SignVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.SignVoteRequest;
            fromJSON(object: any): _191.SignVoteRequest;
            toJSON(message: _191.SignVoteRequest): unknown;
            fromPartial(object: Partial<_191.SignVoteRequest>): _191.SignVoteRequest;
        };
        SignedVoteResponse: {
            encode(message: _191.SignedVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.SignedVoteResponse;
            fromJSON(object: any): _191.SignedVoteResponse;
            toJSON(message: _191.SignedVoteResponse): unknown;
            fromPartial(object: Partial<_191.SignedVoteResponse>): _191.SignedVoteResponse;
        };
        SignProposalRequest: {
            encode(message: _191.SignProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.SignProposalRequest;
            fromJSON(object: any): _191.SignProposalRequest;
            toJSON(message: _191.SignProposalRequest): unknown;
            fromPartial(object: Partial<_191.SignProposalRequest>): _191.SignProposalRequest;
        };
        SignedProposalResponse: {
            encode(message: _191.SignedProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.SignedProposalResponse;
            fromJSON(object: any): _191.SignedProposalResponse;
            toJSON(message: _191.SignedProposalResponse): unknown;
            fromPartial(object: Partial<_191.SignedProposalResponse>): _191.SignedProposalResponse;
        };
        PingRequest: {
            encode(_: _191.PingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PingRequest;
            fromJSON(_: any): _191.PingRequest;
            toJSON(_: _191.PingRequest): unknown;
            fromPartial(_: Partial<_191.PingRequest>): _191.PingRequest;
        };
        PingResponse: {
            encode(_: _191.PingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PingResponse;
            fromJSON(_: any): _191.PingResponse;
            toJSON(_: _191.PingResponse): unknown;
            fromPartial(_: Partial<_191.PingResponse>): _191.PingResponse;
        };
        Message: {
            encode(message: _191.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Message;
            fromJSON(object: any): _191.Message;
            toJSON(message: _191.Message): unknown;
            fromPartial(object: Partial<_191.Message>): _191.Message;
        };
    };
    namespace rpc {
        const grpc: {
            RequestPing: {
                encode(_: _192.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.RequestPing;
                fromJSON(_: any): _192.RequestPing;
                toJSON(_: _192.RequestPing): unknown;
                fromPartial(_: Partial<_192.RequestPing>): _192.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _192.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.RequestBroadcastTx;
                fromJSON(object: any): _192.RequestBroadcastTx;
                toJSON(message: _192.RequestBroadcastTx): unknown;
                fromPartial(object: Partial<_192.RequestBroadcastTx>): _192.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _192.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ResponsePing;
                fromJSON(_: any): _192.ResponsePing;
                toJSON(_: _192.ResponsePing): unknown;
                fromPartial(_: Partial<_192.ResponsePing>): _192.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _192.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ResponseBroadcastTx;
                fromJSON(object: any): _192.ResponseBroadcastTx;
                toJSON(message: _192.ResponseBroadcastTx): unknown;
                fromPartial(object: Partial<_192.ResponseBroadcastTx>): _192.ResponseBroadcastTx;
            };
        };
    }
    const state: {
        ABCIResponses: {
            encode(message: _193.ABCIResponses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ABCIResponses;
            fromJSON(object: any): _193.ABCIResponses;
            toJSON(message: _193.ABCIResponses): unknown;
            fromPartial(object: Partial<_193.ABCIResponses>): _193.ABCIResponses;
        };
        ValidatorsInfo: {
            encode(message: _193.ValidatorsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ValidatorsInfo;
            fromJSON(object: any): _193.ValidatorsInfo;
            toJSON(message: _193.ValidatorsInfo): unknown;
            fromPartial(object: Partial<_193.ValidatorsInfo>): _193.ValidatorsInfo;
        };
        ConsensusParamsInfo: {
            encode(message: _193.ConsensusParamsInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ConsensusParamsInfo;
            fromJSON(object: any): _193.ConsensusParamsInfo;
            toJSON(message: _193.ConsensusParamsInfo): unknown;
            fromPartial(object: Partial<_193.ConsensusParamsInfo>): _193.ConsensusParamsInfo;
        };
        ABCIResponsesInfo: {
            encode(message: _193.ABCIResponsesInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ABCIResponsesInfo;
            fromJSON(object: any): _193.ABCIResponsesInfo;
            toJSON(message: _193.ABCIResponsesInfo): unknown;
            fromPartial(object: Partial<_193.ABCIResponsesInfo>): _193.ABCIResponsesInfo;
        };
        Version: {
            encode(message: _193.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Version;
            fromJSON(object: any): _193.Version;
            toJSON(message: _193.Version): unknown;
            fromPartial(object: Partial<_193.Version>): _193.Version;
        };
        State: {
            encode(message: _193.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.State;
            fromJSON(object: any): _193.State;
            toJSON(message: _193.State): unknown;
            fromPartial(object: Partial<_193.State>): _193.State;
        };
    };
    const statesync: {
        Message: {
            encode(message: _194.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Message;
            fromJSON(object: any): _194.Message;
            toJSON(message: _194.Message): unknown;
            fromPartial(object: Partial<_194.Message>): _194.Message;
        };
        SnapshotsRequest: {
            encode(_: _194.SnapshotsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.SnapshotsRequest;
            fromJSON(_: any): _194.SnapshotsRequest;
            toJSON(_: _194.SnapshotsRequest): unknown;
            fromPartial(_: Partial<_194.SnapshotsRequest>): _194.SnapshotsRequest;
        };
        SnapshotsResponse: {
            encode(message: _194.SnapshotsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.SnapshotsResponse;
            fromJSON(object: any): _194.SnapshotsResponse;
            toJSON(message: _194.SnapshotsResponse): unknown;
            fromPartial(object: Partial<_194.SnapshotsResponse>): _194.SnapshotsResponse;
        };
        ChunkRequest: {
            encode(message: _194.ChunkRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.ChunkRequest;
            fromJSON(object: any): _194.ChunkRequest;
            toJSON(message: _194.ChunkRequest): unknown;
            fromPartial(object: Partial<_194.ChunkRequest>): _194.ChunkRequest;
        };
        ChunkResponse: {
            encode(message: _194.ChunkResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.ChunkResponse;
            fromJSON(object: any): _194.ChunkResponse;
            toJSON(message: _194.ChunkResponse): unknown;
            fromPartial(object: Partial<_194.ChunkResponse>): _194.ChunkResponse;
        };
    };
    const store: {
        BlockStoreState: {
            encode(message: _195.BlockStoreState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.BlockStoreState;
            fromJSON(object: any): _195.BlockStoreState;
            toJSON(message: _195.BlockStoreState): unknown;
            fromPartial(object: Partial<_195.BlockStoreState>): _195.BlockStoreState;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _202.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ValidatorSet;
            fromJSON(object: any): _202.ValidatorSet;
            toJSON(message: _202.ValidatorSet): unknown;
            fromPartial(object: Partial<_202.ValidatorSet>): _202.ValidatorSet;
        };
        Validator: {
            encode(message: _202.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Validator;
            fromJSON(object: any): _202.Validator;
            toJSON(message: _202.Validator): unknown;
            fromPartial(object: Partial<_202.Validator>): _202.Validator;
        };
        SimpleValidator: {
            encode(message: _202.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.SimpleValidator;
            fromJSON(object: any): _202.SimpleValidator;
            toJSON(message: _202.SimpleValidator): unknown;
            fromPartial(object: Partial<_202.SimpleValidator>): _202.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _201.BlockIDFlag;
        blockIDFlagToJSON(object: _201.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _201.SignedMsgType;
        signedMsgTypeToJSON(object: _201.SignedMsgType): string;
        BlockIDFlag: typeof _201.BlockIDFlag;
        BlockIDFlagSDKType: typeof _201.BlockIDFlagSDKType;
        SignedMsgType: typeof _201.SignedMsgType;
        SignedMsgTypeSDKType: typeof _201.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _201.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.PartSetHeader;
            fromJSON(object: any): _201.PartSetHeader;
            toJSON(message: _201.PartSetHeader): unknown;
            fromPartial(object: Partial<_201.PartSetHeader>): _201.PartSetHeader;
        };
        Part: {
            encode(message: _201.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Part;
            fromJSON(object: any): _201.Part;
            toJSON(message: _201.Part): unknown;
            fromPartial(object: Partial<_201.Part>): _201.Part;
        };
        BlockID: {
            encode(message: _201.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BlockID;
            fromJSON(object: any): _201.BlockID;
            toJSON(message: _201.BlockID): unknown;
            fromPartial(object: Partial<_201.BlockID>): _201.BlockID;
        };
        Header: {
            encode(message: _201.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Header;
            fromJSON(object: any): _201.Header;
            toJSON(message: _201.Header): unknown;
            fromPartial(object: Partial<_201.Header>): _201.Header;
        };
        Data: {
            encode(message: _201.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Data;
            fromJSON(object: any): _201.Data;
            toJSON(message: _201.Data): unknown;
            fromPartial(object: Partial<_201.Data>): _201.Data;
        };
        Vote: {
            encode(message: _201.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Vote;
            fromJSON(object: any): _201.Vote;
            toJSON(message: _201.Vote): unknown;
            fromPartial(object: Partial<_201.Vote>): _201.Vote;
        };
        Commit: {
            encode(message: _201.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Commit;
            fromJSON(object: any): _201.Commit;
            toJSON(message: _201.Commit): unknown;
            fromPartial(object: Partial<_201.Commit>): _201.Commit;
        };
        CommitSig: {
            encode(message: _201.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.CommitSig;
            fromJSON(object: any): _201.CommitSig;
            toJSON(message: _201.CommitSig): unknown;
            fromPartial(object: Partial<_201.CommitSig>): _201.CommitSig;
        };
        Proposal: {
            encode(message: _201.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Proposal;
            fromJSON(object: any): _201.Proposal;
            toJSON(message: _201.Proposal): unknown;
            fromPartial(object: Partial<_201.Proposal>): _201.Proposal;
        };
        SignedHeader: {
            encode(message: _201.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.SignedHeader;
            fromJSON(object: any): _201.SignedHeader;
            toJSON(message: _201.SignedHeader): unknown;
            fromPartial(object: Partial<_201.SignedHeader>): _201.SignedHeader;
        };
        LightBlock: {
            encode(message: _201.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.LightBlock;
            fromJSON(object: any): _201.LightBlock;
            toJSON(message: _201.LightBlock): unknown;
            fromPartial(object: Partial<_201.LightBlock>): _201.LightBlock;
        };
        BlockMeta: {
            encode(message: _201.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.BlockMeta;
            fromJSON(object: any): _201.BlockMeta;
            toJSON(message: _201.BlockMeta): unknown;
            fromPartial(object: Partial<_201.BlockMeta>): _201.BlockMeta;
        };
        TxProof: {
            encode(message: _201.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.TxProof;
            fromJSON(object: any): _201.TxProof;
            toJSON(message: _201.TxProof): unknown;
            fromPartial(object: Partial<_201.TxProof>): _201.TxProof;
        };
        ConsensusParams: {
            encode(message: _200.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ConsensusParams;
            fromJSON(object: any): _200.ConsensusParams;
            toJSON(message: _200.ConsensusParams): unknown;
            fromPartial(object: Partial<_200.ConsensusParams>): _200.ConsensusParams;
        };
        BlockParams: {
            encode(message: _200.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.BlockParams;
            fromJSON(object: any): _200.BlockParams;
            toJSON(message: _200.BlockParams): unknown;
            fromPartial(object: Partial<_200.BlockParams>): _200.BlockParams;
        };
        EvidenceParams: {
            encode(message: _200.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.EvidenceParams;
            fromJSON(object: any): _200.EvidenceParams;
            toJSON(message: _200.EvidenceParams): unknown;
            fromPartial(object: Partial<_200.EvidenceParams>): _200.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _200.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ValidatorParams;
            fromJSON(object: any): _200.ValidatorParams;
            toJSON(message: _200.ValidatorParams): unknown;
            fromPartial(object: Partial<_200.ValidatorParams>): _200.ValidatorParams;
        };
        VersionParams: {
            encode(message: _200.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.VersionParams;
            fromJSON(object: any): _200.VersionParams;
            toJSON(message: _200.VersionParams): unknown;
            fromPartial(object: Partial<_200.VersionParams>): _200.VersionParams;
        };
        HashedParams: {
            encode(message: _200.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.HashedParams;
            fromJSON(object: any): _200.HashedParams;
            toJSON(message: _200.HashedParams): unknown;
            fromPartial(object: Partial<_200.HashedParams>): _200.HashedParams;
        };
        Evidence: {
            encode(message: _199.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Evidence;
            fromJSON(object: any): _199.Evidence;
            toJSON(message: _199.Evidence): unknown;
            fromPartial(object: Partial<_199.Evidence>): _199.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _199.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.DuplicateVoteEvidence;
            fromJSON(object: any): _199.DuplicateVoteEvidence;
            toJSON(message: _199.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_199.DuplicateVoteEvidence>): _199.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _199.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.LightClientAttackEvidence;
            fromJSON(object: any): _199.LightClientAttackEvidence;
            toJSON(message: _199.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_199.LightClientAttackEvidence>): _199.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _199.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.EvidenceList;
            fromJSON(object: any): _199.EvidenceList;
            toJSON(message: _199.EvidenceList): unknown;
            fromPartial(object: Partial<_199.EvidenceList>): _199.EvidenceList;
        };
        EventDataRoundState: {
            encode(message: _198.EventDataRoundState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.EventDataRoundState;
            fromJSON(object: any): _198.EventDataRoundState;
            toJSON(message: _198.EventDataRoundState): unknown;
            fromPartial(object: Partial<_198.EventDataRoundState>): _198.EventDataRoundState;
        };
        CanonicalBlockID: {
            encode(message: _197.CanonicalBlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CanonicalBlockID;
            fromJSON(object: any): _197.CanonicalBlockID;
            toJSON(message: _197.CanonicalBlockID): unknown;
            fromPartial(object: Partial<_197.CanonicalBlockID>): _197.CanonicalBlockID;
        };
        CanonicalPartSetHeader: {
            encode(message: _197.CanonicalPartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CanonicalPartSetHeader;
            fromJSON(object: any): _197.CanonicalPartSetHeader;
            toJSON(message: _197.CanonicalPartSetHeader): unknown;
            fromPartial(object: Partial<_197.CanonicalPartSetHeader>): _197.CanonicalPartSetHeader;
        };
        CanonicalProposal: {
            encode(message: _197.CanonicalProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CanonicalProposal;
            fromJSON(object: any): _197.CanonicalProposal;
            toJSON(message: _197.CanonicalProposal): unknown;
            fromPartial(object: Partial<_197.CanonicalProposal>): _197.CanonicalProposal;
        };
        CanonicalVote: {
            encode(message: _197.CanonicalVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.CanonicalVote;
            fromJSON(object: any): _197.CanonicalVote;
            toJSON(message: _197.CanonicalVote): unknown;
            fromPartial(object: Partial<_197.CanonicalVote>): _197.CanonicalVote;
        };
        Block: {
            encode(message: _196.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Block;
            fromJSON(object: any): _196.Block;
            toJSON(message: _196.Block): unknown;
            fromPartial(object: Partial<_196.Block>): _196.Block;
        };
    };
    const version: {
        App: {
            encode(message: _203.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.App;
            fromJSON(object: any): _203.App;
            toJSON(message: _203.App): unknown;
            fromPartial(object: Partial<_203.App>): _203.App;
        };
        Consensus: {
            encode(message: _203.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.Consensus;
            fromJSON(object: any): _203.Consensus;
            toJSON(message: _203.Consensus): unknown;
            fromPartial(object: Partial<_203.Consensus>): _203.Consensus;
        };
    };
}
