import { Rpc } from "../../../helpers";
import { MsgMintDerivative, MsgMintDerivativeResponse, MsgBurnDerivative, MsgBurnDerivativeResponse } from "./tx";
/** Msg defines the liquid Msg service. */
export interface Msg {
    /** MintDerivative defines a method for converting a delegation into staking deriviatives. */
    mintDerivative(request: MsgMintDerivative): Promise<MsgMintDerivativeResponse>;
    /** BurnDerivative defines a method for converting staking deriviatives into a delegation. */
    burnDerivative(request: MsgBurnDerivative): Promise<MsgBurnDerivativeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    mintDerivative(request: MsgMintDerivative): Promise<MsgMintDerivativeResponse>;
    burnDerivative(request: MsgBurnDerivative): Promise<MsgBurnDerivativeResponse>;
}
