import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  kava: {
    auction: {
      v1beta1: new (await import("./auction/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bep3: {
      v1beta1: new (await import("./bep3/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    cdp: {
      v1beta1: new (await import("./cdp/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    committee: {
      v1beta1: new (await import("./committee/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    earn: {
      v1beta1: new (await import("./earn/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evmutil: {
      v1beta1: new (await import("./evmutil/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    hard: {
      v1beta1: new (await import("./hard/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    incentive: {
      v1beta1: new (await import("./incentive/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    issuance: {
      v1beta1: new (await import("./issuance/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    liquid: {
      v1beta1: new (await import("./liquid/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    pricefeed: {
      v1beta1: new (await import("./pricefeed/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    router: {
      v1beta1: new (await import("./router/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    savings: {
      v1beta1: new (await import("./savings/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    swap: {
      v1beta1: new (await import("./swap/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});