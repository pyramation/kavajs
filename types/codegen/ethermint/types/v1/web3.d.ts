import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface ExtensionOptionsWeb3Tx {
    /**
     * typed data chain id used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typedDataChainId: Long;
    /**
     * fee payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     */
    feePayer: string;
    /**
     * fee payer sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     */
    feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxSDKType {
    /**
     * typed data chain id used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typed_data_chain_id: Long;
    /**
     * fee payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     */
    fee_payer: string;
    /**
     * fee payer sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     */
    fee_payer_sig: Uint8Array;
}
export declare const ExtensionOptionsWeb3Tx: {
    encode(message: ExtensionOptionsWeb3Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx;
    fromJSON(object: any): ExtensionOptionsWeb3Tx;
    toJSON(message: ExtensionOptionsWeb3Tx): unknown;
    fromPartial(object: Partial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx;
};
