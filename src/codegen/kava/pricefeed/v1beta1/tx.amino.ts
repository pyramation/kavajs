import { AminoMsg } from "@cosmjs/amino";
import { MsgPostPrice } from "./tx";
export interface AminoMsgPostPrice extends AminoMsg {
  type: "/kava.pricefeed.v1beta1.MsgPostPrice";
  value: {
    from: string;
    market_id: string;
    price: string;
    expiry: {
      seconds: string;
      nanos: number;
    };
  };
}
export const AminoConverter = {
  "/kava.pricefeed.v1beta1.MsgPostPrice": {
    aminoType: "/kava.pricefeed.v1beta1.MsgPostPrice",
    toAmino: ({
      from,
      marketId,
      price,
      expiry
    }: MsgPostPrice): AminoMsgPostPrice["value"] => {
      return {
        from,
        market_id: marketId,
        price,
        expiry
      };
    },
    fromAmino: ({
      from,
      market_id,
      price,
      expiry
    }: AminoMsgPostPrice["value"]): MsgPostPrice => {
      return {
        from,
        marketId: market_id,
        price,
        expiry
      };
    }
  }
};