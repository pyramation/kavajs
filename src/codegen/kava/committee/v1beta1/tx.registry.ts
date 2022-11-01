import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kava.committee.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/kava.committee.v1beta1.MsgVote", MsgVote]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal",
        value
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgVote",
        value
      };
    }

  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgVote",
        value: MsgVote.toJSON(value)
      };
    }

  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },

    vote(value: any) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    }

  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },

    vote(value: MsgVote) {
      return {
        typeUrl: "/kava.committee.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    }

  }
};