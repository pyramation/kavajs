import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** RewardPeriod stores the state of an ongoing reward */

export interface RewardPeriod {
  active: boolean;
  collateralType: string;
  start?: Timestamp;
  end?: Timestamp;
  rewardsPerSecond?: Coin;
}
/** RewardPeriod stores the state of an ongoing reward */

export interface RewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start?: TimestampSDKType;
  end?: TimestampSDKType;
  rewards_per_second?: CoinSDKType;
}
/** MultiRewardPeriod supports multiple reward types */

export interface MultiRewardPeriod {
  active: boolean;
  collateralType: string;
  start?: Timestamp;
  end?: Timestamp;
  rewardsPerSecond: Coin[];
}
/** MultiRewardPeriod supports multiple reward types */

export interface MultiRewardPeriodSDKType {
  active: boolean;
  collateral_type: string;
  start?: TimestampSDKType;
  end?: TimestampSDKType;
  rewards_per_second: CoinSDKType[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */

export interface Multiplier {
  name: string;
  monthsLockup: Long;
  factor: Uint8Array;
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */

export interface MultiplierSDKType {
  name: string;
  months_lockup: Long;
  factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */

export interface MultipliersPerDenom {
  denom: string;
  multipliers: Multiplier[];
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */

export interface MultipliersPerDenomSDKType {
  denom: string;
  multipliers: MultiplierSDKType[];
}
/** Params */

export interface Params {
  usdxMintingRewardPeriods: RewardPeriod[];
  hardSupplyRewardPeriods: MultiRewardPeriod[];
  hardBorrowRewardPeriods: MultiRewardPeriod[];
  delegatorRewardPeriods: MultiRewardPeriod[];
  swapRewardPeriods: MultiRewardPeriod[];
  claimMultipliers: MultipliersPerDenom[];
  claimEnd?: Timestamp;
  savingsRewardPeriods: MultiRewardPeriod[];
  earnRewardPeriods: MultiRewardPeriod[];
}
/** Params */

export interface ParamsSDKType {
  usdx_minting_reward_periods: RewardPeriodSDKType[];
  hard_supply_reward_periods: MultiRewardPeriodSDKType[];
  hard_borrow_reward_periods: MultiRewardPeriodSDKType[];
  delegator_reward_periods: MultiRewardPeriodSDKType[];
  swap_reward_periods: MultiRewardPeriodSDKType[];
  claim_multipliers: MultipliersPerDenomSDKType[];
  claim_end?: TimestampSDKType;
  savings_reward_periods: MultiRewardPeriodSDKType[];
  earn_reward_periods: MultiRewardPeriodSDKType[];
}

function createBaseRewardPeriod(): RewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: undefined,
    end: undefined,
    rewardsPerSecond: undefined
  };
}

export const RewardPeriod = {
  encode(message: RewardPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(26).fork()).ldelim();
    }

    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(34).fork()).ldelim();
    }

    if (message.rewardsPerSecond !== undefined) {
      Coin.encode(message.rewardsPerSecond, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.start = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.rewardsPerSecond = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardPeriod {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      rewardsPerSecond: isSet(object.rewardsPerSecond) ? Coin.fromJSON(object.rewardsPerSecond) : undefined
    };
  },

  toJSON(message: RewardPeriod): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.start !== undefined && (obj.start = fromTimestamp(message.start).toISOString());
    message.end !== undefined && (obj.end = fromTimestamp(message.end).toISOString());
    message.rewardsPerSecond !== undefined && (obj.rewardsPerSecond = message.rewardsPerSecond ? Coin.toJSON(message.rewardsPerSecond) : undefined);
    return obj;
  },

  fromPartial(object: Partial<RewardPeriod>): RewardPeriod {
    const message = createBaseRewardPeriod();
    message.active = object.active ?? false;
    message.collateralType = object.collateralType ?? "";
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.rewardsPerSecond = object.rewardsPerSecond !== undefined && object.rewardsPerSecond !== null ? Coin.fromPartial(object.rewardsPerSecond) : undefined;
    return message;
  }

};

function createBaseMultiRewardPeriod(): MultiRewardPeriod {
  return {
    active: false,
    collateralType: "",
    start: undefined,
    end: undefined,
    rewardsPerSecond: []
  };
}

export const MultiRewardPeriod = {
  encode(message: MultiRewardPeriod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }

    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(26).fork()).ldelim();
    }

    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.rewardsPerSecond) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardPeriod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiRewardPeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;

        case 2:
          message.collateralType = reader.string();
          break;

        case 3:
          message.start = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.rewardsPerSecond.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MultiRewardPeriod {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      rewardsPerSecond: Array.isArray(object?.rewardsPerSecond) ? object.rewardsPerSecond.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MultiRewardPeriod): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.start !== undefined && (obj.start = fromTimestamp(message.start).toISOString());
    message.end !== undefined && (obj.end = fromTimestamp(message.end).toISOString());

    if (message.rewardsPerSecond) {
      obj.rewardsPerSecond = message.rewardsPerSecond.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardsPerSecond = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MultiRewardPeriod>): MultiRewardPeriod {
    const message = createBaseMultiRewardPeriod();
    message.active = object.active ?? false;
    message.collateralType = object.collateralType ?? "";
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.rewardsPerSecond = object.rewardsPerSecond?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMultiplier(): Multiplier {
  return {
    name: "",
    monthsLockup: Long.ZERO,
    factor: new Uint8Array()
  };
}

export const Multiplier = {
  encode(message: Multiplier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (!message.monthsLockup.isZero()) {
      writer.uint32(16).int64(message.monthsLockup);
    }

    if (message.factor.length !== 0) {
      writer.uint32(26).bytes(message.factor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Multiplier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiplier();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.monthsLockup = (reader.int64() as Long);
          break;

        case 3:
          message.factor = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Multiplier {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      monthsLockup: isSet(object.monthsLockup) ? Long.fromValue(object.monthsLockup) : Long.ZERO,
      factor: isSet(object.factor) ? bytesFromBase64(object.factor) : new Uint8Array()
    };
  },

  toJSON(message: Multiplier): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.monthsLockup !== undefined && (obj.monthsLockup = (message.monthsLockup || Long.ZERO).toString());
    message.factor !== undefined && (obj.factor = base64FromBytes(message.factor !== undefined ? message.factor : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Multiplier>): Multiplier {
    const message = createBaseMultiplier();
    message.name = object.name ?? "";
    message.monthsLockup = object.monthsLockup !== undefined && object.monthsLockup !== null ? Long.fromValue(object.monthsLockup) : Long.ZERO;
    message.factor = object.factor ?? new Uint8Array();
    return message;
  }

};

function createBaseMultipliersPerDenom(): MultipliersPerDenom {
  return {
    denom: "",
    multipliers: []
  };
}

export const MultipliersPerDenom = {
  encode(message: MultipliersPerDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.multipliers) {
      Multiplier.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultipliersPerDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultipliersPerDenom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.multipliers.push(Multiplier.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MultipliersPerDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      multipliers: Array.isArray(object?.multipliers) ? object.multipliers.map((e: any) => Multiplier.fromJSON(e)) : []
    };
  },

  toJSON(message: MultipliersPerDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);

    if (message.multipliers) {
      obj.multipliers = message.multipliers.map(e => e ? Multiplier.toJSON(e) : undefined);
    } else {
      obj.multipliers = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MultipliersPerDenom>): MultipliersPerDenom {
    const message = createBaseMultipliersPerDenom();
    message.denom = object.denom ?? "";
    message.multipliers = object.multipliers?.map(e => Multiplier.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    usdxMintingRewardPeriods: [],
    hardSupplyRewardPeriods: [],
    hardBorrowRewardPeriods: [],
    delegatorRewardPeriods: [],
    swapRewardPeriods: [],
    claimMultipliers: [],
    claimEnd: undefined,
    savingsRewardPeriods: [],
    earnRewardPeriods: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usdxMintingRewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.hardSupplyRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.hardBorrowRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.delegatorRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.swapRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.claimMultipliers) {
      MultipliersPerDenom.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.claimEnd !== undefined) {
      Timestamp.encode(message.claimEnd, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.savingsRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.earnRewardPeriods) {
      MultiRewardPeriod.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.usdxMintingRewardPeriods.push(RewardPeriod.decode(reader, reader.uint32()));
          break;

        case 2:
          message.hardSupplyRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        case 3:
          message.hardBorrowRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        case 4:
          message.delegatorRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        case 5:
          message.swapRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        case 6:
          message.claimMultipliers.push(MultipliersPerDenom.decode(reader, reader.uint32()));
          break;

        case 7:
          message.claimEnd = Timestamp.decode(reader, reader.uint32());
          break;

        case 8:
          message.savingsRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        case 9:
          message.earnRewardPeriods.push(MultiRewardPeriod.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      usdxMintingRewardPeriods: Array.isArray(object?.usdxMintingRewardPeriods) ? object.usdxMintingRewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : [],
      hardSupplyRewardPeriods: Array.isArray(object?.hardSupplyRewardPeriods) ? object.hardSupplyRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      hardBorrowRewardPeriods: Array.isArray(object?.hardBorrowRewardPeriods) ? object.hardBorrowRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      delegatorRewardPeriods: Array.isArray(object?.delegatorRewardPeriods) ? object.delegatorRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      swapRewardPeriods: Array.isArray(object?.swapRewardPeriods) ? object.swapRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      claimMultipliers: Array.isArray(object?.claimMultipliers) ? object.claimMultipliers.map((e: any) => MultipliersPerDenom.fromJSON(e)) : [],
      claimEnd: isSet(object.claimEnd) ? fromJsonTimestamp(object.claimEnd) : undefined,
      savingsRewardPeriods: Array.isArray(object?.savingsRewardPeriods) ? object.savingsRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : [],
      earnRewardPeriods: Array.isArray(object?.earnRewardPeriods) ? object.earnRewardPeriods.map((e: any) => MultiRewardPeriod.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.usdxMintingRewardPeriods) {
      obj.usdxMintingRewardPeriods = message.usdxMintingRewardPeriods.map(e => e ? RewardPeriod.toJSON(e) : undefined);
    } else {
      obj.usdxMintingRewardPeriods = [];
    }

    if (message.hardSupplyRewardPeriods) {
      obj.hardSupplyRewardPeriods = message.hardSupplyRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.hardSupplyRewardPeriods = [];
    }

    if (message.hardBorrowRewardPeriods) {
      obj.hardBorrowRewardPeriods = message.hardBorrowRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.hardBorrowRewardPeriods = [];
    }

    if (message.delegatorRewardPeriods) {
      obj.delegatorRewardPeriods = message.delegatorRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.delegatorRewardPeriods = [];
    }

    if (message.swapRewardPeriods) {
      obj.swapRewardPeriods = message.swapRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.swapRewardPeriods = [];
    }

    if (message.claimMultipliers) {
      obj.claimMultipliers = message.claimMultipliers.map(e => e ? MultipliersPerDenom.toJSON(e) : undefined);
    } else {
      obj.claimMultipliers = [];
    }

    message.claimEnd !== undefined && (obj.claimEnd = fromTimestamp(message.claimEnd).toISOString());

    if (message.savingsRewardPeriods) {
      obj.savingsRewardPeriods = message.savingsRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.savingsRewardPeriods = [];
    }

    if (message.earnRewardPeriods) {
      obj.earnRewardPeriods = message.earnRewardPeriods.map(e => e ? MultiRewardPeriod.toJSON(e) : undefined);
    } else {
      obj.earnRewardPeriods = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.usdxMintingRewardPeriods = object.usdxMintingRewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    message.hardSupplyRewardPeriods = object.hardSupplyRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.hardBorrowRewardPeriods = object.hardBorrowRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.delegatorRewardPeriods = object.delegatorRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.swapRewardPeriods = object.swapRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.claimMultipliers = object.claimMultipliers?.map(e => MultipliersPerDenom.fromPartial(e)) || [];
    message.claimEnd = object.claimEnd !== undefined && object.claimEnd !== null ? Timestamp.fromPartial(object.claimEnd) : undefined;
    message.savingsRewardPeriods = object.savingsRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    message.earnRewardPeriods = object.earnRewardPeriods?.map(e => MultiRewardPeriod.fromPartial(e)) || [];
    return message;
  }

};