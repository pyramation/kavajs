import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const ethermintAminoConverters: {
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: ({ data, size, hash, from }: import("./evm/v1/tx").MsgEthereumTx) => {
            data: {
                type_url: string;
                value: Uint8Array;
            };
            size: number;
            hash: string;
            from: string;
        };
        fromAmino: ({ data, size, hash, from }: {
            data: {
                type_url: string;
                value: Uint8Array;
            };
            size: number;
            hash: string;
            from: string;
        }) => import("./evm/v1/tx").MsgEthereumTx;
    };
};
export declare const ethermintProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEthermintClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEthermintClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
