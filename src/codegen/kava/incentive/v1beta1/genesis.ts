import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { MultiRewardIndex, MultiRewardIndexSDKType, USDXMintingClaim, USDXMintingClaimSDKType, HardLiquidityProviderClaim, HardLiquidityProviderClaimSDKType, DelegatorClaim, DelegatorClaimSDKType, SwapClaim, SwapClaimSDKType, SavingsClaim, SavingsClaimSDKType, EarnClaim, EarnClaimSDKType } from "./claims";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */

export interface AccumulationTime {
  collateralType: string;
  previousAccumulationTime?: Timestamp;
}
/** AccumulationTime stores the previous reward distribution time and its corresponding collateral type */

export interface AccumulationTimeSDKType {
  collateral_type: string;
  previous_accumulation_time?: TimestampSDKType;
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */

export interface GenesisRewardState {
  accumulationTimes: AccumulationTime[];
  multiRewardIndexes: MultiRewardIndex[];
}
/** GenesisRewardState groups together the global state for a particular reward so it can be exported in genesis. */

export interface GenesisRewardStateSDKType {
  accumulation_times: AccumulationTimeSDKType[];
  multi_reward_indexes: MultiRewardIndexSDKType[];
}
/** GenesisState is the state that must be provided at genesis. */

export interface GenesisState {
  params?: Params;
  usdxRewardState?: GenesisRewardState;
  hardSupplyRewardState?: GenesisRewardState;
  hardBorrowRewardState?: GenesisRewardState;
  delegatorRewardState?: GenesisRewardState;
  swapRewardState?: GenesisRewardState;
  usdxMintingClaims: USDXMintingClaim[];
  hardLiquidityProviderClaims: HardLiquidityProviderClaim[];
  delegatorClaims: DelegatorClaim[];
  swapClaims: SwapClaim[];
  savingsRewardState?: GenesisRewardState;
  savingsClaims: SavingsClaim[];
  earnRewardState?: GenesisRewardState;
  earnClaims: EarnClaim[];
}
/** GenesisState is the state that must be provided at genesis. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  usdx_reward_state?: GenesisRewardStateSDKType;
  hard_supply_reward_state?: GenesisRewardStateSDKType;
  hard_borrow_reward_state?: GenesisRewardStateSDKType;
  delegator_reward_state?: GenesisRewardStateSDKType;
  swap_reward_state?: GenesisRewardStateSDKType;
  usdx_minting_claims: USDXMintingClaimSDKType[];
  hard_liquidity_provider_claims: HardLiquidityProviderClaimSDKType[];
  delegator_claims: DelegatorClaimSDKType[];
  swap_claims: SwapClaimSDKType[];
  savings_reward_state?: GenesisRewardStateSDKType;
  savings_claims: SavingsClaimSDKType[];
  earn_reward_state?: GenesisRewardStateSDKType;
  earn_claims: EarnClaimSDKType[];
}

function createBaseAccumulationTime(): AccumulationTime {
  return {
    collateralType: "",
    previousAccumulationTime: undefined
  };
}

export const AccumulationTime = {
  encode(message: AccumulationTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    if (message.previousAccumulationTime !== undefined) {
      Timestamp.encode(message.previousAccumulationTime, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulationTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulationTime();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        case 2:
          message.previousAccumulationTime = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AccumulationTime {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      previousAccumulationTime: isSet(object.previousAccumulationTime) ? fromJsonTimestamp(object.previousAccumulationTime) : undefined
    };
  },

  toJSON(message: AccumulationTime): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.previousAccumulationTime !== undefined && (obj.previousAccumulationTime = fromTimestamp(message.previousAccumulationTime).toISOString());
    return obj;
  },

  fromPartial(object: Partial<AccumulationTime>): AccumulationTime {
    const message = createBaseAccumulationTime();
    message.collateralType = object.collateralType ?? "";
    message.previousAccumulationTime = object.previousAccumulationTime !== undefined && object.previousAccumulationTime !== null ? Timestamp.fromPartial(object.previousAccumulationTime) : undefined;
    return message;
  }

};

function createBaseGenesisRewardState(): GenesisRewardState {
  return {
    accumulationTimes: [],
    multiRewardIndexes: []
  };
}

export const GenesisRewardState = {
  encode(message: GenesisRewardState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumulationTimes) {
      AccumulationTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.multiRewardIndexes) {
      MultiRewardIndex.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRewardState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisRewardState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accumulationTimes.push(AccumulationTime.decode(reader, reader.uint32()));
          break;

        case 2:
          message.multiRewardIndexes.push(MultiRewardIndex.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisRewardState {
    return {
      accumulationTimes: Array.isArray(object?.accumulationTimes) ? object.accumulationTimes.map((e: any) => AccumulationTime.fromJSON(e)) : [],
      multiRewardIndexes: Array.isArray(object?.multiRewardIndexes) ? object.multiRewardIndexes.map((e: any) => MultiRewardIndex.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisRewardState): unknown {
    const obj: any = {};

    if (message.accumulationTimes) {
      obj.accumulationTimes = message.accumulationTimes.map(e => e ? AccumulationTime.toJSON(e) : undefined);
    } else {
      obj.accumulationTimes = [];
    }

    if (message.multiRewardIndexes) {
      obj.multiRewardIndexes = message.multiRewardIndexes.map(e => e ? MultiRewardIndex.toJSON(e) : undefined);
    } else {
      obj.multiRewardIndexes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisRewardState>): GenesisRewardState {
    const message = createBaseGenesisRewardState();
    message.accumulationTimes = object.accumulationTimes?.map(e => AccumulationTime.fromPartial(e)) || [];
    message.multiRewardIndexes = object.multiRewardIndexes?.map(e => MultiRewardIndex.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    usdxRewardState: undefined,
    hardSupplyRewardState: undefined,
    hardBorrowRewardState: undefined,
    delegatorRewardState: undefined,
    swapRewardState: undefined,
    usdxMintingClaims: [],
    hardLiquidityProviderClaims: [],
    delegatorClaims: [],
    swapClaims: [],
    savingsRewardState: undefined,
    savingsClaims: [],
    earnRewardState: undefined,
    earnClaims: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.usdxRewardState !== undefined) {
      GenesisRewardState.encode(message.usdxRewardState, writer.uint32(18).fork()).ldelim();
    }

    if (message.hardSupplyRewardState !== undefined) {
      GenesisRewardState.encode(message.hardSupplyRewardState, writer.uint32(26).fork()).ldelim();
    }

    if (message.hardBorrowRewardState !== undefined) {
      GenesisRewardState.encode(message.hardBorrowRewardState, writer.uint32(34).fork()).ldelim();
    }

    if (message.delegatorRewardState !== undefined) {
      GenesisRewardState.encode(message.delegatorRewardState, writer.uint32(42).fork()).ldelim();
    }

    if (message.swapRewardState !== undefined) {
      GenesisRewardState.encode(message.swapRewardState, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.usdxMintingClaims) {
      USDXMintingClaim.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.hardLiquidityProviderClaims) {
      HardLiquidityProviderClaim.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.delegatorClaims) {
      DelegatorClaim.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.swapClaims) {
      SwapClaim.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.savingsRewardState !== undefined) {
      GenesisRewardState.encode(message.savingsRewardState, writer.uint32(90).fork()).ldelim();
    }

    for (const v of message.savingsClaims) {
      SavingsClaim.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.earnRewardState !== undefined) {
      GenesisRewardState.encode(message.earnRewardState, writer.uint32(106).fork()).ldelim();
    }

    for (const v of message.earnClaims) {
      EarnClaim.encode(v!, writer.uint32(114).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.usdxRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 3:
          message.hardSupplyRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 4:
          message.hardBorrowRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 5:
          message.delegatorRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 6:
          message.swapRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 7:
          message.usdxMintingClaims.push(USDXMintingClaim.decode(reader, reader.uint32()));
          break;

        case 8:
          message.hardLiquidityProviderClaims.push(HardLiquidityProviderClaim.decode(reader, reader.uint32()));
          break;

        case 9:
          message.delegatorClaims.push(DelegatorClaim.decode(reader, reader.uint32()));
          break;

        case 10:
          message.swapClaims.push(SwapClaim.decode(reader, reader.uint32()));
          break;

        case 11:
          message.savingsRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 12:
          message.savingsClaims.push(SavingsClaim.decode(reader, reader.uint32()));
          break;

        case 13:
          message.earnRewardState = GenesisRewardState.decode(reader, reader.uint32());
          break;

        case 14:
          message.earnClaims.push(EarnClaim.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      usdxRewardState: isSet(object.usdxRewardState) ? GenesisRewardState.fromJSON(object.usdxRewardState) : undefined,
      hardSupplyRewardState: isSet(object.hardSupplyRewardState) ? GenesisRewardState.fromJSON(object.hardSupplyRewardState) : undefined,
      hardBorrowRewardState: isSet(object.hardBorrowRewardState) ? GenesisRewardState.fromJSON(object.hardBorrowRewardState) : undefined,
      delegatorRewardState: isSet(object.delegatorRewardState) ? GenesisRewardState.fromJSON(object.delegatorRewardState) : undefined,
      swapRewardState: isSet(object.swapRewardState) ? GenesisRewardState.fromJSON(object.swapRewardState) : undefined,
      usdxMintingClaims: Array.isArray(object?.usdxMintingClaims) ? object.usdxMintingClaims.map((e: any) => USDXMintingClaim.fromJSON(e)) : [],
      hardLiquidityProviderClaims: Array.isArray(object?.hardLiquidityProviderClaims) ? object.hardLiquidityProviderClaims.map((e: any) => HardLiquidityProviderClaim.fromJSON(e)) : [],
      delegatorClaims: Array.isArray(object?.delegatorClaims) ? object.delegatorClaims.map((e: any) => DelegatorClaim.fromJSON(e)) : [],
      swapClaims: Array.isArray(object?.swapClaims) ? object.swapClaims.map((e: any) => SwapClaim.fromJSON(e)) : [],
      savingsRewardState: isSet(object.savingsRewardState) ? GenesisRewardState.fromJSON(object.savingsRewardState) : undefined,
      savingsClaims: Array.isArray(object?.savingsClaims) ? object.savingsClaims.map((e: any) => SavingsClaim.fromJSON(e)) : [],
      earnRewardState: isSet(object.earnRewardState) ? GenesisRewardState.fromJSON(object.earnRewardState) : undefined,
      earnClaims: Array.isArray(object?.earnClaims) ? object.earnClaims.map((e: any) => EarnClaim.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.usdxRewardState !== undefined && (obj.usdxRewardState = message.usdxRewardState ? GenesisRewardState.toJSON(message.usdxRewardState) : undefined);
    message.hardSupplyRewardState !== undefined && (obj.hardSupplyRewardState = message.hardSupplyRewardState ? GenesisRewardState.toJSON(message.hardSupplyRewardState) : undefined);
    message.hardBorrowRewardState !== undefined && (obj.hardBorrowRewardState = message.hardBorrowRewardState ? GenesisRewardState.toJSON(message.hardBorrowRewardState) : undefined);
    message.delegatorRewardState !== undefined && (obj.delegatorRewardState = message.delegatorRewardState ? GenesisRewardState.toJSON(message.delegatorRewardState) : undefined);
    message.swapRewardState !== undefined && (obj.swapRewardState = message.swapRewardState ? GenesisRewardState.toJSON(message.swapRewardState) : undefined);

    if (message.usdxMintingClaims) {
      obj.usdxMintingClaims = message.usdxMintingClaims.map(e => e ? USDXMintingClaim.toJSON(e) : undefined);
    } else {
      obj.usdxMintingClaims = [];
    }

    if (message.hardLiquidityProviderClaims) {
      obj.hardLiquidityProviderClaims = message.hardLiquidityProviderClaims.map(e => e ? HardLiquidityProviderClaim.toJSON(e) : undefined);
    } else {
      obj.hardLiquidityProviderClaims = [];
    }

    if (message.delegatorClaims) {
      obj.delegatorClaims = message.delegatorClaims.map(e => e ? DelegatorClaim.toJSON(e) : undefined);
    } else {
      obj.delegatorClaims = [];
    }

    if (message.swapClaims) {
      obj.swapClaims = message.swapClaims.map(e => e ? SwapClaim.toJSON(e) : undefined);
    } else {
      obj.swapClaims = [];
    }

    message.savingsRewardState !== undefined && (obj.savingsRewardState = message.savingsRewardState ? GenesisRewardState.toJSON(message.savingsRewardState) : undefined);

    if (message.savingsClaims) {
      obj.savingsClaims = message.savingsClaims.map(e => e ? SavingsClaim.toJSON(e) : undefined);
    } else {
      obj.savingsClaims = [];
    }

    message.earnRewardState !== undefined && (obj.earnRewardState = message.earnRewardState ? GenesisRewardState.toJSON(message.earnRewardState) : undefined);

    if (message.earnClaims) {
      obj.earnClaims = message.earnClaims.map(e => e ? EarnClaim.toJSON(e) : undefined);
    } else {
      obj.earnClaims = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.usdxRewardState = object.usdxRewardState !== undefined && object.usdxRewardState !== null ? GenesisRewardState.fromPartial(object.usdxRewardState) : undefined;
    message.hardSupplyRewardState = object.hardSupplyRewardState !== undefined && object.hardSupplyRewardState !== null ? GenesisRewardState.fromPartial(object.hardSupplyRewardState) : undefined;
    message.hardBorrowRewardState = object.hardBorrowRewardState !== undefined && object.hardBorrowRewardState !== null ? GenesisRewardState.fromPartial(object.hardBorrowRewardState) : undefined;
    message.delegatorRewardState = object.delegatorRewardState !== undefined && object.delegatorRewardState !== null ? GenesisRewardState.fromPartial(object.delegatorRewardState) : undefined;
    message.swapRewardState = object.swapRewardState !== undefined && object.swapRewardState !== null ? GenesisRewardState.fromPartial(object.swapRewardState) : undefined;
    message.usdxMintingClaims = object.usdxMintingClaims?.map(e => USDXMintingClaim.fromPartial(e)) || [];
    message.hardLiquidityProviderClaims = object.hardLiquidityProviderClaims?.map(e => HardLiquidityProviderClaim.fromPartial(e)) || [];
    message.delegatorClaims = object.delegatorClaims?.map(e => DelegatorClaim.fromPartial(e)) || [];
    message.swapClaims = object.swapClaims?.map(e => SwapClaim.fromPartial(e)) || [];
    message.savingsRewardState = object.savingsRewardState !== undefined && object.savingsRewardState !== null ? GenesisRewardState.fromPartial(object.savingsRewardState) : undefined;
    message.savingsClaims = object.savingsClaims?.map(e => SavingsClaim.fromPartial(e)) || [];
    message.earnRewardState = object.earnRewardState !== undefined && object.earnRewardState !== null ? GenesisRewardState.fromPartial(object.earnRewardState) : undefined;
    message.earnClaims = object.earnClaims?.map(e => EarnClaim.fromPartial(e)) || [];
    return message;
  }

};