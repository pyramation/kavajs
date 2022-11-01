import { Params, ParamsSDKType, Deposit, DepositSDKType, Borrow, BorrowSDKType } from "./hard";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
/** GenesisState defines the hard module's genesis state. */

export interface GenesisState {
  params?: Params;
  previousAccumulationTimes: GenesisAccumulationTime[];
  deposits: Deposit[];
  borrows: Borrow[];
  totalSupplied: Coin[];
  totalBorrowed: Coin[];
  totalReserves: Coin[];
}
/** GenesisState defines the hard module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  previous_accumulation_times: GenesisAccumulationTimeSDKType[];
  deposits: DepositSDKType[];
  borrows: BorrowSDKType[];
  total_supplied: CoinSDKType[];
  total_borrowed: CoinSDKType[];
  total_reserves: CoinSDKType[];
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */

export interface GenesisAccumulationTime {
  collateralType: string;
  previousAccumulationTime?: Timestamp;
  supplyInterestFactor: string;
  borrowInterestFactor: string;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */

export interface GenesisAccumulationTimeSDKType {
  collateral_type: string;
  previous_accumulation_time?: TimestampSDKType;
  supply_interest_factor: string;
  borrow_interest_factor: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    previousAccumulationTimes: [],
    deposits: [],
    borrows: [],
    totalSupplied: [],
    totalBorrowed: [],
    totalReserves: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.previousAccumulationTimes) {
      GenesisAccumulationTime.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.borrows) {
      Borrow.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.totalSupplied) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.totalBorrowed) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.totalReserves) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.previousAccumulationTimes.push(GenesisAccumulationTime.decode(reader, reader.uint32()));
          break;

        case 3:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 4:
          message.borrows.push(Borrow.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalSupplied.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.totalBorrowed.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.totalReserves.push(Coin.decode(reader, reader.uint32()));
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
      previousAccumulationTimes: Array.isArray(object?.previousAccumulationTimes) ? object.previousAccumulationTimes.map((e: any) => GenesisAccumulationTime.fromJSON(e)) : [],
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      borrows: Array.isArray(object?.borrows) ? object.borrows.map((e: any) => Borrow.fromJSON(e)) : [],
      totalSupplied: Array.isArray(object?.totalSupplied) ? object.totalSupplied.map((e: any) => Coin.fromJSON(e)) : [],
      totalBorrowed: Array.isArray(object?.totalBorrowed) ? object.totalBorrowed.map((e: any) => Coin.fromJSON(e)) : [],
      totalReserves: Array.isArray(object?.totalReserves) ? object.totalReserves.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.previousAccumulationTimes) {
      obj.previousAccumulationTimes = message.previousAccumulationTimes.map(e => e ? GenesisAccumulationTime.toJSON(e) : undefined);
    } else {
      obj.previousAccumulationTimes = [];
    }

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    if (message.borrows) {
      obj.borrows = message.borrows.map(e => e ? Borrow.toJSON(e) : undefined);
    } else {
      obj.borrows = [];
    }

    if (message.totalSupplied) {
      obj.totalSupplied = message.totalSupplied.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalSupplied = [];
    }

    if (message.totalBorrowed) {
      obj.totalBorrowed = message.totalBorrowed.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalBorrowed = [];
    }

    if (message.totalReserves) {
      obj.totalReserves = message.totalReserves.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalReserves = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.previousAccumulationTimes = object.previousAccumulationTimes?.map(e => GenesisAccumulationTime.fromPartial(e)) || [];
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.borrows = object.borrows?.map(e => Borrow.fromPartial(e)) || [];
    message.totalSupplied = object.totalSupplied?.map(e => Coin.fromPartial(e)) || [];
    message.totalBorrowed = object.totalBorrowed?.map(e => Coin.fromPartial(e)) || [];
    message.totalReserves = object.totalReserves?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisAccumulationTime(): GenesisAccumulationTime {
  return {
    collateralType: "",
    previousAccumulationTime: undefined,
    supplyInterestFactor: "",
    borrowInterestFactor: ""
  };
}

export const GenesisAccumulationTime = {
  encode(message: GenesisAccumulationTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }

    if (message.previousAccumulationTime !== undefined) {
      Timestamp.encode(message.previousAccumulationTime, writer.uint32(18).fork()).ldelim();
    }

    if (message.supplyInterestFactor !== "") {
      writer.uint32(26).string(message.supplyInterestFactor);
    }

    if (message.borrowInterestFactor !== "") {
      writer.uint32(34).string(message.borrowInterestFactor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccumulationTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisAccumulationTime();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.collateralType = reader.string();
          break;

        case 2:
          message.previousAccumulationTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.supplyInterestFactor = reader.string();
          break;

        case 4:
          message.borrowInterestFactor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisAccumulationTime {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      previousAccumulationTime: isSet(object.previousAccumulationTime) ? fromJsonTimestamp(object.previousAccumulationTime) : undefined,
      supplyInterestFactor: isSet(object.supplyInterestFactor) ? String(object.supplyInterestFactor) : "",
      borrowInterestFactor: isSet(object.borrowInterestFactor) ? String(object.borrowInterestFactor) : ""
    };
  },

  toJSON(message: GenesisAccumulationTime): unknown {
    const obj: any = {};
    message.collateralType !== undefined && (obj.collateralType = message.collateralType);
    message.previousAccumulationTime !== undefined && (obj.previousAccumulationTime = fromTimestamp(message.previousAccumulationTime).toISOString());
    message.supplyInterestFactor !== undefined && (obj.supplyInterestFactor = message.supplyInterestFactor);
    message.borrowInterestFactor !== undefined && (obj.borrowInterestFactor = message.borrowInterestFactor);
    return obj;
  },

  fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime {
    const message = createBaseGenesisAccumulationTime();
    message.collateralType = object.collateralType ?? "";
    message.previousAccumulationTime = object.previousAccumulationTime !== undefined && object.previousAccumulationTime !== null ? Timestamp.fromPartial(object.previousAccumulationTime) : undefined;
    message.supplyInterestFactor = object.supplyInterestFactor ?? "";
    message.borrowInterestFactor = object.borrowInterestFactor ?? "";
    return message;
  }

};