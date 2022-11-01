import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.issuance.v1beta1.MsgIssueTokens", MsgIssueTokens], ["/kava.issuance.v1beta1.MsgRedeemTokens", MsgRedeemTokens], ["/kava.issuance.v1beta1.MsgBlockAddress", MsgBlockAddress], ["/kava.issuance.v1beta1.MsgUnblockAddress", MsgUnblockAddress], ["/kava.issuance.v1beta1.MsgSetPauseStatus", MsgSetPauseStatus]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issueTokens(value: MsgIssueTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
        value: MsgIssueTokens.encode(value).finish()
      };
    },

    redeemTokens(value: MsgRedeemTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
        value: MsgRedeemTokens.encode(value).finish()
      };
    },

    blockAddress(value: MsgBlockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
        value: MsgBlockAddress.encode(value).finish()
      };
    },

    unblockAddress(value: MsgUnblockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
        value: MsgUnblockAddress.encode(value).finish()
      };
    },

    setPauseStatus(value: MsgSetPauseStatus) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
        value: MsgSetPauseStatus.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    issueTokens(value: MsgIssueTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
        value
      };
    },

    redeemTokens(value: MsgRedeemTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
        value
      };
    },

    blockAddress(value: MsgBlockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
        value
      };
    },

    unblockAddress(value: MsgUnblockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
        value
      };
    },

    setPauseStatus(value: MsgSetPauseStatus) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
        value
      };
    }

  },
  toJSON: {
    issueTokens(value: MsgIssueTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
        value: MsgIssueTokens.toJSON(value)
      };
    },

    redeemTokens(value: MsgRedeemTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
        value: MsgRedeemTokens.toJSON(value)
      };
    },

    blockAddress(value: MsgBlockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
        value: MsgBlockAddress.toJSON(value)
      };
    },

    unblockAddress(value: MsgUnblockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
        value: MsgUnblockAddress.toJSON(value)
      };
    },

    setPauseStatus(value: MsgSetPauseStatus) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
        value: MsgSetPauseStatus.toJSON(value)
      };
    }

  },
  fromJSON: {
    issueTokens(value: any) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
        value: MsgIssueTokens.fromJSON(value)
      };
    },

    redeemTokens(value: any) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
        value: MsgRedeemTokens.fromJSON(value)
      };
    },

    blockAddress(value: any) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
        value: MsgBlockAddress.fromJSON(value)
      };
    },

    unblockAddress(value: any) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
        value: MsgUnblockAddress.fromJSON(value)
      };
    },

    setPauseStatus(value: any) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
        value: MsgSetPauseStatus.fromJSON(value)
      };
    }

  },
  fromPartial: {
    issueTokens(value: MsgIssueTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgIssueTokens",
        value: MsgIssueTokens.fromPartial(value)
      };
    },

    redeemTokens(value: MsgRedeemTokens) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgRedeemTokens",
        value: MsgRedeemTokens.fromPartial(value)
      };
    },

    blockAddress(value: MsgBlockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgBlockAddress",
        value: MsgBlockAddress.fromPartial(value)
      };
    },

    unblockAddress(value: MsgUnblockAddress) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgUnblockAddress",
        value: MsgUnblockAddress.fromPartial(value)
      };
    },

    setPauseStatus(value: MsgSetPauseStatus) {
      return {
        typeUrl: "/kava.issuance.v1beta1.MsgSetPauseStatus",
        value: MsgSetPauseStatus.fromPartial(value)
      };
    }

  }
};