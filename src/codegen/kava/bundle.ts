import * as _121 from "./auction/v1beta1/auction";
import * as _122 from "./auction/v1beta1/genesis";
import * as _123 from "./auction/v1beta1/query";
import * as _124 from "./auction/v1beta1/tx";
import * as _125 from "./bep3/v1beta1/bep3";
import * as _126 from "./bep3/v1beta1/genesis";
import * as _127 from "./bep3/v1beta1/query";
import * as _128 from "./bep3/v1beta1/tx";
import * as _129 from "./cdp/v1beta1/cdp";
import * as _130 from "./cdp/v1beta1/genesis";
import * as _131 from "./cdp/v1beta1/query";
import * as _132 from "./cdp/v1beta1/tx";
import * as _133 from "./committee/v1beta1/committee";
import * as _134 from "./committee/v1beta1/genesis";
import * as _135 from "./committee/v1beta1/permissions";
import * as _136 from "./committee/v1beta1/proposal";
import * as _137 from "./committee/v1beta1/query";
import * as _138 from "./committee/v1beta1/tx";
import * as _139 from "./earn/v1beta1/genesis";
import * as _140 from "./earn/v1beta1/params";
import * as _141 from "./earn/v1beta1/proposal";
import * as _142 from "./earn/v1beta1/query";
import * as _143 from "./earn/v1beta1/strategy";
import * as _144 from "./earn/v1beta1/tx";
import * as _145 from "./earn/v1beta1/vault";
import * as _146 from "./evmutil/v1beta1/conversion_pair";
import * as _147 from "./evmutil/v1beta1/genesis";
import * as _148 from "./evmutil/v1beta1/query";
import * as _149 from "./evmutil/v1beta1/tx";
import * as _150 from "./hard/v1beta1/genesis";
import * as _151 from "./hard/v1beta1/hard";
import * as _152 from "./hard/v1beta1/query";
import * as _153 from "./hard/v1beta1/tx";
import * as _154 from "./incentive/v1beta1/claims";
import * as _155 from "./incentive/v1beta1/genesis";
import * as _156 from "./incentive/v1beta1/params";
import * as _157 from "./incentive/v1beta1/tx";
import * as _158 from "./issuance/v1beta1/genesis";
import * as _159 from "./issuance/v1beta1/query";
import * as _160 from "./issuance/v1beta1/tx";
import * as _161 from "./kavadist/v1beta1/genesis";
import * as _162 from "./kavadist/v1beta1/params";
import * as _163 from "./kavadist/v1beta1/proposal";
import * as _164 from "./kavadist/v1beta1/query";
import * as _165 from "./liquid/v1beta1/query";
import * as _166 from "./liquid/v1beta1/tx";
import * as _167 from "./pricefeed/v1beta1/genesis";
import * as _168 from "./pricefeed/v1beta1/query";
import * as _169 from "./pricefeed/v1beta1/store";
import * as _170 from "./pricefeed/v1beta1/tx";
import * as _171 from "./router/v1beta1/tx";
import * as _172 from "./savings/v1beta1/genesis";
import * as _173 from "./savings/v1beta1/query";
import * as _174 from "./savings/v1beta1/store";
import * as _175 from "./savings/v1beta1/tx";
import * as _176 from "./swap/v1beta1/genesis";
import * as _177 from "./swap/v1beta1/query";
import * as _178 from "./swap/v1beta1/swap";
import * as _179 from "./swap/v1beta1/tx";
import * as _271 from "./auction/v1beta1/tx.amino";
import * as _272 from "./bep3/v1beta1/tx.amino";
import * as _273 from "./cdp/v1beta1/tx.amino";
import * as _274 from "./committee/v1beta1/tx.amino";
import * as _275 from "./earn/v1beta1/tx.amino";
import * as _276 from "./evmutil/v1beta1/tx.amino";
import * as _277 from "./hard/v1beta1/tx.amino";
import * as _278 from "./incentive/v1beta1/tx.amino";
import * as _279 from "./issuance/v1beta1/tx.amino";
import * as _280 from "./liquid/v1beta1/tx.amino";
import * as _281 from "./pricefeed/v1beta1/tx.amino";
import * as _282 from "./router/v1beta1/tx.amino";
import * as _283 from "./savings/v1beta1/tx.amino";
import * as _284 from "./swap/v1beta1/tx.amino";
import * as _285 from "./auction/v1beta1/tx.registry";
import * as _286 from "./bep3/v1beta1/tx.registry";
import * as _287 from "./cdp/v1beta1/tx.registry";
import * as _288 from "./committee/v1beta1/tx.registry";
import * as _289 from "./earn/v1beta1/tx.registry";
import * as _290 from "./evmutil/v1beta1/tx.registry";
import * as _291 from "./hard/v1beta1/tx.registry";
import * as _292 from "./incentive/v1beta1/tx.registry";
import * as _293 from "./issuance/v1beta1/tx.registry";
import * as _294 from "./liquid/v1beta1/tx.registry";
import * as _295 from "./pricefeed/v1beta1/tx.registry";
import * as _296 from "./router/v1beta1/tx.registry";
import * as _297 from "./savings/v1beta1/tx.registry";
import * as _298 from "./swap/v1beta1/tx.registry";
import * as _299 from "./auction/v1beta1/query.rpc.Query";
import * as _300 from "./bep3/v1beta1/query.rpc.Query";
import * as _301 from "./cdp/v1beta1/query.rpc.Query";
import * as _302 from "./committee/v1beta1/query.rpc.Query";
import * as _303 from "./earn/v1beta1/query.rpc.Query";
import * as _304 from "./evmutil/v1beta1/query.rpc.Query";
import * as _305 from "./hard/v1beta1/query.rpc.Query";
import * as _306 from "./issuance/v1beta1/query.rpc.Query";
import * as _307 from "./kavadist/v1beta1/query.rpc.Query";
import * as _308 from "./liquid/v1beta1/query.rpc.Query";
import * as _309 from "./pricefeed/v1beta1/query.rpc.Query";
import * as _310 from "./savings/v1beta1/query.rpc.Query";
import * as _311 from "./swap/v1beta1/query.rpc.Query";
import * as _312 from "./auction/v1beta1/tx.rpc.msg";
import * as _313 from "./bep3/v1beta1/tx.rpc.msg";
import * as _314 from "./cdp/v1beta1/tx.rpc.msg";
import * as _315 from "./committee/v1beta1/tx.rpc.msg";
import * as _316 from "./earn/v1beta1/tx.rpc.msg";
import * as _317 from "./evmutil/v1beta1/tx.rpc.msg";
import * as _318 from "./hard/v1beta1/tx.rpc.msg";
import * as _319 from "./incentive/v1beta1/tx.rpc.msg";
import * as _320 from "./issuance/v1beta1/tx.rpc.msg";
import * as _321 from "./liquid/v1beta1/tx.rpc.msg";
import * as _322 from "./pricefeed/v1beta1/tx.rpc.msg";
import * as _323 from "./router/v1beta1/tx.rpc.msg";
import * as _324 from "./savings/v1beta1/tx.rpc.msg";
import * as _325 from "./swap/v1beta1/tx.rpc.msg";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace kava {
  export namespace auction {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._271,
      ..._285,
      ..._299,
      ..._312
    };
  }
  export namespace bep3 {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._272,
      ..._286,
      ..._300,
      ..._313
    };
  }
  export namespace cdp {
    export const v1beta1 = { ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._273,
      ..._287,
      ..._301,
      ..._314
    };
  }
  export namespace committee {
    export const v1beta1 = { ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._274,
      ..._288,
      ..._302,
      ..._315
    };
  }
  export namespace earn {
    export const v1beta1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._275,
      ..._289,
      ..._303,
      ..._316
    };
  }
  export namespace evmutil {
    export const v1beta1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._276,
      ..._290,
      ..._304,
      ..._317
    };
  }
  export namespace hard {
    export const v1beta1 = { ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._277,
      ..._291,
      ..._305,
      ..._318
    };
  }
  export namespace incentive {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._278,
      ..._292,
      ..._319
    };
  }
  export namespace issuance {
    export const v1beta1 = { ..._158,
      ..._159,
      ..._160,
      ..._279,
      ..._293,
      ..._306,
      ..._320
    };
  }
  export namespace kavadist {
    export const v1beta1 = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._307
    };
  }
  export namespace liquid {
    export const v1beta1 = { ..._165,
      ..._166,
      ..._280,
      ..._294,
      ..._308,
      ..._321
    };
  }
  export namespace pricefeed {
    export const v1beta1 = { ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._281,
      ..._295,
      ..._309,
      ..._322
    };
  }
  export namespace router {
    export const v1beta1 = { ..._171,
      ..._282,
      ..._296,
      ..._323
    };
  }
  export namespace savings {
    export const v1beta1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._283,
      ..._297,
      ..._310,
      ..._324
    };
  }
  export namespace swap {
    export const v1beta1 = { ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._284,
      ..._298,
      ..._311,
      ..._325
    };
  }
  export const ClientFactory = { ..._332,
    ..._333
  };
}