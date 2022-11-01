import { Rpc } from "../../../helpers";
import { MsgPostPrice, MsgPostPriceResponse } from "./tx";
/** Msg defines the pricefeed Msg service. */
export interface Msg {
    /** PostPrice defines a method for creating a new post price */
    postPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    postPrice(request: MsgPostPrice): Promise<MsgPostPriceResponse>;
}
