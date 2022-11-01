import { AminoMsg } from "@cosmjs/amino";
import { MsgMintDerivative, MsgBurnDerivative } from "./tx";
export interface AminoMsgMintDerivative extends AminoMsg {
    type: "/kava.liquid.v1beta1.MsgMintDerivative";
    value: {
        sender: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgBurnDerivative extends AminoMsg {
    type: "/kava.liquid.v1beta1.MsgBurnDerivative";
    value: {
        sender: string;
        validator: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export declare const AminoConverter: {
    "/kava.liquid.v1beta1.MsgMintDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: MsgMintDerivative) => AminoMsgMintDerivative["value"];
        fromAmino: ({ sender, validator, amount }: AminoMsgMintDerivative["value"]) => MsgMintDerivative;
    };
    "/kava.liquid.v1beta1.MsgBurnDerivative": {
        aminoType: string;
        toAmino: ({ sender, validator, amount }: MsgBurnDerivative) => AminoMsgBurnDerivative["value"];
        fromAmino: ({ sender, validator, amount }: AminoMsgBurnDerivative["value"]) => MsgBurnDerivative;
    };
};
