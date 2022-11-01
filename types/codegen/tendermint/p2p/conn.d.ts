import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
export interface PacketPing {
}
export interface PacketPingSDKType {
}
export interface PacketPong {
}
export interface PacketPongSDKType {
}
export interface PacketMsg {
    channelId: number;
    eof: boolean;
    data: Uint8Array;
}
export interface PacketMsgSDKType {
    channel_id: number;
    eof: boolean;
    data: Uint8Array;
}
export interface Packet {
    packetPing?: PacketPing;
    packetPong?: PacketPong;
    packetMsg?: PacketMsg;
}
export interface PacketSDKType {
    packet_ping?: PacketPingSDKType;
    packet_pong?: PacketPongSDKType;
    packet_msg?: PacketMsgSDKType;
}
export interface AuthSigMessage {
    pubKey?: PublicKey;
    sig: Uint8Array;
}
export interface AuthSigMessageSDKType {
    pub_key?: PublicKeySDKType;
    sig: Uint8Array;
}
export declare const PacketPing: {
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing;
    fromJSON(_: any): PacketPing;
    toJSON(_: PacketPing): unknown;
    fromPartial(_: Partial<PacketPing>): PacketPing;
};
export declare const PacketPong: {
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong;
    fromJSON(_: any): PacketPong;
    toJSON(_: PacketPong): unknown;
    fromPartial(_: Partial<PacketPong>): PacketPong;
};
export declare const PacketMsg: {
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg;
    fromJSON(object: any): PacketMsg;
    toJSON(message: PacketMsg): unknown;
    fromPartial(object: Partial<PacketMsg>): PacketMsg;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Packet;
    fromJSON(object: any): Packet;
    toJSON(message: Packet): unknown;
    fromPartial(object: Partial<Packet>): Packet;
};
export declare const AuthSigMessage: {
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage;
    fromJSON(object: any): AuthSigMessage;
    toJSON(message: AuthSigMessage): unknown;
    fromPartial(object: Partial<AuthSigMessage>): AuthSigMessage;
};
