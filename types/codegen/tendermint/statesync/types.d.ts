import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
export interface Message {
    snapshotsRequest?: SnapshotsRequest;
    snapshotsResponse?: SnapshotsResponse;
    chunkRequest?: ChunkRequest;
    chunkResponse?: ChunkResponse;
}
export interface MessageSDKType {
    snapshots_request?: SnapshotsRequestSDKType;
    snapshots_response?: SnapshotsResponseSDKType;
    chunk_request?: ChunkRequestSDKType;
    chunk_response?: ChunkResponseSDKType;
}
export interface SnapshotsRequest {
}
export interface SnapshotsRequestSDKType {
}
export interface SnapshotsResponse {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface SnapshotsResponseSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface ChunkRequest {
    height: Long;
    format: number;
    index: number;
}
export interface ChunkRequestSDKType {
    height: Long;
    format: number;
    index: number;
}
export interface ChunkResponse {
    height: Long;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export interface ChunkResponseSDKType {
    height: Long;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
export declare const SnapshotsRequest: {
    encode(_: SnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsRequest;
    fromJSON(_: any): SnapshotsRequest;
    toJSON(_: SnapshotsRequest): unknown;
    fromPartial(_: Partial<SnapshotsRequest>): SnapshotsRequest;
};
export declare const SnapshotsResponse: {
    encode(message: SnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotsResponse;
    fromJSON(object: any): SnapshotsResponse;
    toJSON(message: SnapshotsResponse): unknown;
    fromPartial(object: Partial<SnapshotsResponse>): SnapshotsResponse;
};
export declare const ChunkRequest: {
    encode(message: ChunkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChunkRequest;
    fromJSON(object: any): ChunkRequest;
    toJSON(message: ChunkRequest): unknown;
    fromPartial(object: Partial<ChunkRequest>): ChunkRequest;
};
export declare const ChunkResponse: {
    encode(message: ChunkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChunkResponse;
    fromJSON(object: any): ChunkResponse;
    toJSON(message: ChunkResponse): unknown;
    fromPartial(object: Partial<ChunkResponse>): ChunkResponse;
};
