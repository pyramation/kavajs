import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    kava: {
        auction: {
            v1beta1: import("./auction/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bep3: {
            v1beta1: import("./bep3/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        cdp: {
            v1beta1: import("./cdp/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        committee: {
            v1beta1: import("./committee/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        earn: {
            v1beta1: import("./earn/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evmutil: {
            v1beta1: import("./evmutil/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        hard: {
            v1beta1: import("./hard/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        incentive: {
            v1beta1: import("./incentive/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        issuance: {
            v1beta1: import("./issuance/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        liquid: {
            v1beta1: import("./liquid/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        pricefeed: {
            v1beta1: import("./pricefeed/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        router: {
            v1beta1: import("./router/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        savings: {
            v1beta1: import("./savings/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        swap: {
            v1beta1: import("./swap/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
