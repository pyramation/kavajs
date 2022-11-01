import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/kv/v1beta1/kv";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v1beta1/reflection";
import * as _19 from "./base/reflection/v2alpha1/reflection";
import * as _20 from "./base/snapshots/v1beta1/snapshot";
import * as _21 from "./base/store/v1beta1/commit_info";
import * as _22 from "./base/store/v1beta1/listening";
import * as _23 from "./base/store/v1beta1/snapshot";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./crypto/secp256r1/keys";
import * as _34 from "./distribution/v1beta1/distribution";
import * as _35 from "./distribution/v1beta1/genesis";
import * as _36 from "./distribution/v1beta1/query";
import * as _37 from "./distribution/v1beta1/tx";
import * as _38 from "./evidence/v1beta1/evidence";
import * as _39 from "./evidence/v1beta1/genesis";
import * as _40 from "./evidence/v1beta1/query";
import * as _41 from "./evidence/v1beta1/tx";
import * as _42 from "./feegrant/v1beta1/feegrant";
import * as _43 from "./feegrant/v1beta1/genesis";
import * as _44 from "./feegrant/v1beta1/query";
import * as _45 from "./feegrant/v1beta1/tx";
import * as _46 from "./genutil/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/genesis";
import * as _48 from "./gov/v1beta1/gov";
import * as _49 from "./gov/v1beta1/query";
import * as _50 from "./gov/v1beta1/tx";
import * as _51 from "./mint/v1beta1/genesis";
import * as _52 from "./mint/v1beta1/mint";
import * as _53 from "./mint/v1beta1/query";
import * as _54 from "./params/v1beta1/params";
import * as _55 from "./params/v1beta1/query";
import * as _56 from "./slashing/v1beta1/genesis";
import * as _57 from "./slashing/v1beta1/query";
import * as _58 from "./slashing/v1beta1/slashing";
import * as _59 from "./slashing/v1beta1/tx";
import * as _60 from "./staking/v1beta1/authz";
import * as _61 from "./staking/v1beta1/genesis";
import * as _62 from "./staking/v1beta1/query";
import * as _63 from "./staking/v1beta1/staking";
import * as _64 from "./staking/v1beta1/tx";
import * as _65 from "./tx/signing/v1beta1/signing";
import * as _66 from "./tx/v1beta1/service";
import * as _67 from "./tx/v1beta1/tx";
import * as _68 from "./upgrade/v1beta1/query";
import * as _69 from "./upgrade/v1beta1/upgrade";
import * as _70 from "./vesting/v1beta1/tx";
import * as _71 from "./vesting/v1beta1/vesting";
import * as _204 from "./authz/v1beta1/tx.amino";
import * as _205 from "./bank/v1beta1/tx.amino";
import * as _206 from "./crisis/v1beta1/tx.amino";
import * as _207 from "./distribution/v1beta1/tx.amino";
import * as _208 from "./evidence/v1beta1/tx.amino";
import * as _209 from "./feegrant/v1beta1/tx.amino";
import * as _210 from "./gov/v1beta1/tx.amino";
import * as _211 from "./slashing/v1beta1/tx.amino";
import * as _212 from "./staking/v1beta1/tx.amino";
import * as _213 from "./vesting/v1beta1/tx.amino";
import * as _214 from "./authz/v1beta1/tx.registry";
import * as _215 from "./bank/v1beta1/tx.registry";
import * as _216 from "./crisis/v1beta1/tx.registry";
import * as _217 from "./distribution/v1beta1/tx.registry";
import * as _218 from "./evidence/v1beta1/tx.registry";
import * as _219 from "./feegrant/v1beta1/tx.registry";
import * as _220 from "./gov/v1beta1/tx.registry";
import * as _221 from "./slashing/v1beta1/tx.registry";
import * as _222 from "./staking/v1beta1/tx.registry";
import * as _223 from "./vesting/v1beta1/tx.registry";
import * as _224 from "./auth/v1beta1/query.rpc.Query";
import * as _225 from "./authz/v1beta1/query.rpc.Query";
import * as _226 from "./bank/v1beta1/query.rpc.Query";
import * as _227 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _228 from "./distribution/v1beta1/query.rpc.Query";
import * as _229 from "./evidence/v1beta1/query.rpc.Query";
import * as _230 from "./feegrant/v1beta1/query.rpc.Query";
import * as _231 from "./gov/v1beta1/query.rpc.Query";
import * as _232 from "./mint/v1beta1/query.rpc.Query";
import * as _233 from "./params/v1beta1/query.rpc.Query";
import * as _234 from "./slashing/v1beta1/query.rpc.Query";
import * as _235 from "./staking/v1beta1/query.rpc.Query";
import * as _236 from "./tx/v1beta1/service.rpc.Service";
import * as _237 from "./upgrade/v1beta1/query.rpc.Query";
import * as _238 from "./authz/v1beta1/tx.rpc.msg";
import * as _239 from "./bank/v1beta1/tx.rpc.msg";
import * as _240 from "./crisis/v1beta1/tx.rpc.msg";
import * as _241 from "./distribution/v1beta1/tx.rpc.msg";
import * as _242 from "./evidence/v1beta1/tx.rpc.msg";
import * as _243 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _244 from "./gov/v1beta1/tx.rpc.msg";
import * as _245 from "./slashing/v1beta1/tx.rpc.msg";
import * as _246 from "./staking/v1beta1/tx.rpc.msg";
import * as _247 from "./vesting/v1beta1/tx.rpc.msg";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._2,
      ..._3,
      ..._4,
      ..._224
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._204,
      ..._214,
      ..._225,
      ..._238
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._205,
      ..._215,
      ..._226,
      ..._239
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._15
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._16
      };
    }
    export namespace query {
      export const v1beta1 = { ..._17
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._18
      };
      export const v2alpha1 = { ..._19
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._20
      };
    }
    export namespace store {
      export const v1beta1 = { ..._21,
        ..._22,
        ..._23
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._24,
        ..._227
      };
    }
    export const v1beta1 = { ..._25
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._26,
      ..._27
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._28,
      ..._29,
      ..._206,
      ..._216,
      ..._240
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._30
    };
    export const multisig = { ..._31
    };
    export const secp256k1 = { ..._32
    };
    export const secp256r1 = { ..._33
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._207,
      ..._217,
      ..._228,
      ..._241
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._208,
      ..._218,
      ..._229,
      ..._242
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._209,
      ..._219,
      ..._230,
      ..._243
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._46
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._210,
      ..._220,
      ..._231,
      ..._244
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._51,
      ..._52,
      ..._53,
      ..._232
    };
  }
  export namespace params {
    export const v1beta1 = { ..._54,
      ..._55,
      ..._233
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._211,
      ..._221,
      ..._234,
      ..._245
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._212,
      ..._222,
      ..._235,
      ..._246
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._65
      };
    }
    export const v1beta1 = { ..._66,
      ..._67,
      ..._236
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._68,
      ..._69,
      ..._237
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._70,
      ..._71,
      ..._213,
      ..._223,
      ..._247
    };
  }
  export const ClientFactory = { ..._326,
    ..._327
  };
}