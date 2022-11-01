import { Rpc } from "../../../helpers";
import { MsgConvertCoinToERC20, MsgConvertCoinToERC20Response, MsgConvertERC20ToCoin, MsgConvertERC20ToCoinResponse } from "./tx";
/** Msg defines the evmutil Msg service. */
export interface Msg {
    /** ConvertCoinToERC20 defines a method for converting sdk.Coin to Kava ERC20. */
    convertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
    /** ConvertERC20ToCoin defines a method for converting Kava ERC20 to sdk.Coin. */
    convertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    convertCoinToERC20(request: MsgConvertCoinToERC20): Promise<MsgConvertCoinToERC20Response>;
    convertERC20ToCoin(request: MsgConvertERC20ToCoin): Promise<MsgConvertERC20ToCoinResponse>;
}
