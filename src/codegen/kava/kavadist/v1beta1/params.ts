import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** Params governance parameters for kavadist module */

export interface Params {
  active: boolean;
  periods: Period[];
  infrastructureParams?: InfrastructureParams;
}
/** Params governance parameters for kavadist module */

export interface ParamsSDKType {
  active: boolean;
  periods: PeriodSDKType[];
  infrastructure_params?: InfrastructureParamsSDKType;
}
/** InfrastructureParams define the parameters for infrastructure rewards. */

export interface InfrastructureParams {
  infrastructurePeriods: Period[];
  coreRewards: CoreReward[];
  partnerRewards: PartnerReward[];
}
/** InfrastructureParams define the parameters for infrastructure rewards. */

export interface InfrastructureParamsSDKType {
  infrastructure_periods: PeriodSDKType[];
  core_rewards: CoreRewardSDKType[];
  partner_rewards: PartnerRewardSDKType[];
}
/** CoreReward defines the reward weights for core infrastructure providers. */

export interface CoreReward {
  address: Uint8Array;
  weight: string;
}
/** CoreReward defines the reward weights for core infrastructure providers. */

export interface CoreRewardSDKType {
  address: Uint8Array;
  weight: string;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */

export interface PartnerReward {
  address: Uint8Array;
  rewardsPerSecond?: Coin;
}
/** PartnerRewards defines the reward schedule for partner infrastructure providers. */

export interface PartnerRewardSDKType {
  address: Uint8Array;
  rewards_per_second?: CoinSDKType;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */

export interface Period {
  /** example "2020-03-01T15:20:00Z" */
  start?: Timestamp;
  /** example "2020-06-01T15:20:00Z" */

  end?: Timestamp;
  /** example "1.000000003022265980"  - 10% inflation */

  inflation: Uint8Array;
}
/**
 * Period stores the specified start and end dates, and the inflation, expressed as a decimal
 * representing the yearly APR of KAVA tokens that will be minted during that period
 */

export interface PeriodSDKType {
  /** example "2020-03-01T15:20:00Z" */
  start?: TimestampSDKType;
  /** example "2020-06-01T15:20:00Z" */

  end?: TimestampSDKType;
  /** example "1.000000003022265980"  - 10% inflation */

  inflation: Uint8Array;
}

function createBaseParams(): Params {
  return {
    active: false,
    periods: [],
    infrastructureParams: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.infrastructureParams !== undefined) {
      InfrastructureParams.encode(message.infrastructureParams, writer.uint32(34).fork()).ldelim();
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
          message.active = reader.bool();
          break;

        case 3:
          message.periods.push(Period.decode(reader, reader.uint32()));
          break;

        case 4:
          message.infrastructureParams = InfrastructureParams.decode(reader, reader.uint32());
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
      active: isSet(object.active) ? Boolean(object.active) : false,
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromJSON(e)) : [],
      infrastructureParams: isSet(object.infrastructureParams) ? InfrastructureParams.fromJSON(object.infrastructureParams) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);

    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.periods = [];
    }

    message.infrastructureParams !== undefined && (obj.infrastructureParams = message.infrastructureParams ? InfrastructureParams.toJSON(message.infrastructureParams) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.active = object.active ?? false;
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    message.infrastructureParams = object.infrastructureParams !== undefined && object.infrastructureParams !== null ? InfrastructureParams.fromPartial(object.infrastructureParams) : undefined;
    return message;
  }

};

function createBaseInfrastructureParams(): InfrastructureParams {
  return {
    infrastructurePeriods: [],
    coreRewards: [],
    partnerRewards: []
  };
}

export const InfrastructureParams = {
  encode(message: InfrastructureParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infrastructurePeriods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.coreRewards) {
      CoreReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.partnerRewards) {
      PartnerReward.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfrastructureParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfrastructureParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.infrastructurePeriods.push(Period.decode(reader, reader.uint32()));
          break;

        case 2:
          message.coreRewards.push(CoreReward.decode(reader, reader.uint32()));
          break;

        case 3:
          message.partnerRewards.push(PartnerReward.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InfrastructureParams {
    return {
      infrastructurePeriods: Array.isArray(object?.infrastructurePeriods) ? object.infrastructurePeriods.map((e: any) => Period.fromJSON(e)) : [],
      coreRewards: Array.isArray(object?.coreRewards) ? object.coreRewards.map((e: any) => CoreReward.fromJSON(e)) : [],
      partnerRewards: Array.isArray(object?.partnerRewards) ? object.partnerRewards.map((e: any) => PartnerReward.fromJSON(e)) : []
    };
  },

  toJSON(message: InfrastructureParams): unknown {
    const obj: any = {};

    if (message.infrastructurePeriods) {
      obj.infrastructurePeriods = message.infrastructurePeriods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.infrastructurePeriods = [];
    }

    if (message.coreRewards) {
      obj.coreRewards = message.coreRewards.map(e => e ? CoreReward.toJSON(e) : undefined);
    } else {
      obj.coreRewards = [];
    }

    if (message.partnerRewards) {
      obj.partnerRewards = message.partnerRewards.map(e => e ? PartnerReward.toJSON(e) : undefined);
    } else {
      obj.partnerRewards = [];
    }

    return obj;
  },

  fromPartial(object: Partial<InfrastructureParams>): InfrastructureParams {
    const message = createBaseInfrastructureParams();
    message.infrastructurePeriods = object.infrastructurePeriods?.map(e => Period.fromPartial(e)) || [];
    message.coreRewards = object.coreRewards?.map(e => CoreReward.fromPartial(e)) || [];
    message.partnerRewards = object.partnerRewards?.map(e => PartnerReward.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCoreReward(): CoreReward {
  return {
    address: new Uint8Array(),
    weight: ""
  };
}

export const CoreReward = {
  encode(message: CoreReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoreReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoreReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CoreReward {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: CoreReward): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: Partial<CoreReward>): CoreReward {
    const message = createBaseCoreReward();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? "";
    return message;
  }

};

function createBasePartnerReward(): PartnerReward {
  return {
    address: new Uint8Array(),
    rewardsPerSecond: undefined
  };
}

export const PartnerReward = {
  encode(message: PartnerReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.rewardsPerSecond !== undefined) {
      Coin.encode(message.rewardsPerSecond, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartnerReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartnerReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.rewardsPerSecond = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PartnerReward {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      rewardsPerSecond: isSet(object.rewardsPerSecond) ? Coin.fromJSON(object.rewardsPerSecond) : undefined
    };
  },

  toJSON(message: PartnerReward): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.rewardsPerSecond !== undefined && (obj.rewardsPerSecond = message.rewardsPerSecond ? Coin.toJSON(message.rewardsPerSecond) : undefined);
    return obj;
  },

  fromPartial(object: Partial<PartnerReward>): PartnerReward {
    const message = createBasePartnerReward();
    message.address = object.address ?? new Uint8Array();
    message.rewardsPerSecond = object.rewardsPerSecond !== undefined && object.rewardsPerSecond !== null ? Coin.fromPartial(object.rewardsPerSecond) : undefined;
    return message;
  }

};

function createBasePeriod(): Period {
  return {
    start: undefined,
    end: undefined,
    inflation: new Uint8Array()
  };
}

export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined) {
      Timestamp.encode(message.start, writer.uint32(10).fork()).ldelim();
    }

    if (message.end !== undefined) {
      Timestamp.encode(message.end, writer.uint32(18).fork()).ldelim();
    }

    if (message.inflation.length !== 0) {
      writer.uint32(26).bytes(message.inflation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.start = Timestamp.decode(reader, reader.uint32());
          break;

        case 2:
          message.end = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.inflation = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Period {
    return {
      start: isSet(object.start) ? fromJsonTimestamp(object.start) : undefined,
      end: isSet(object.end) ? fromJsonTimestamp(object.end) : undefined,
      inflation: isSet(object.inflation) ? bytesFromBase64(object.inflation) : new Uint8Array()
    };
  },

  toJSON(message: Period): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = fromTimestamp(message.start).toISOString());
    message.end !== undefined && (obj.end = fromTimestamp(message.end).toISOString());
    message.inflation !== undefined && (obj.inflation = base64FromBytes(message.inflation !== undefined ? message.inflation : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Period>): Period {
    const message = createBasePeriod();
    message.start = object.start !== undefined && object.start !== null ? Timestamp.fromPartial(object.start) : undefined;
    message.end = object.end !== undefined && object.end !== null ? Timestamp.fromPartial(object.end) : undefined;
    message.inflation = object.inflation ?? new Uint8Array();
    return message;
  }

};