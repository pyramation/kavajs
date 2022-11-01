import * as _72 from "./crypto/v1/ethsecp256k1/keys";
import * as _73 from "./evm/v1/evm";
import * as _74 from "./evm/v1/genesis";
import * as _75 from "./evm/v1/query";
import * as _76 from "./evm/v1/tx";
import * as _77 from "./feemarket/v1/feemarket";
import * as _78 from "./feemarket/v1/genesis";
import * as _79 from "./feemarket/v1/query";
import * as _80 from "./types/v1/account";
import * as _81 from "./types/v1/web3";
import * as _248 from "./evm/v1/tx.amino";
import * as _249 from "./evm/v1/tx.registry";
import * as _250 from "./evm/v1/query.rpc.Query";
import * as _251 from "./feemarket/v1/query.rpc.Query";
import * as _252 from "./evm/v1/tx.rpc.msg";
import * as _328 from "./rpc.query";
import * as _329 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = { ..._72
      };
    }
  }
  export namespace evm {
    export const v1 = { ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._248,
      ..._249,
      ..._250,
      ..._252
    };
  }
  export namespace feemarket {
    export const v1 = { ..._77,
      ..._78,
      ..._79,
      ..._251
    };
  }
  export namespace types {
    export const v1 = { ..._80,
      ..._81
    };
  }
  export const ClientFactory = { ..._328,
    ..._329
  };
}