import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** SwapStatus is the status of an AtomicSwap */
export declare enum SwapStatus {
    /** SWAP_STATUS_UNSPECIFIED - SWAP_STATUS_UNSPECIFIED represents an unspecified status */
    SWAP_STATUS_UNSPECIFIED = 0,
    /** SWAP_STATUS_OPEN - SWAP_STATUS_OPEN represents an open swap */
    SWAP_STATUS_OPEN = 1,
    /** SWAP_STATUS_COMPLETED - SWAP_STATUS_COMPLETED represents a completed swap */
    SWAP_STATUS_COMPLETED = 2,
    /** SWAP_STATUS_EXPIRED - SWAP_STATUS_EXPIRED represents an expired swap */
    SWAP_STATUS_EXPIRED = 3,
    UNRECOGNIZED = -1
}
/** SwapStatus is the status of an AtomicSwap */
export declare enum SwapStatusSDKType {
    /** SWAP_STATUS_UNSPECIFIED - SWAP_STATUS_UNSPECIFIED represents an unspecified status */
    SWAP_STATUS_UNSPECIFIED = 0,
    /** SWAP_STATUS_OPEN - SWAP_STATUS_OPEN represents an open swap */
    SWAP_STATUS_OPEN = 1,
    /** SWAP_STATUS_COMPLETED - SWAP_STATUS_COMPLETED represents a completed swap */
    SWAP_STATUS_COMPLETED = 2,
    /** SWAP_STATUS_EXPIRED - SWAP_STATUS_EXPIRED represents an expired swap */
    SWAP_STATUS_EXPIRED = 3,
    UNRECOGNIZED = -1
}
export declare function swapStatusFromJSON(object: any): SwapStatus;
export declare function swapStatusToJSON(object: SwapStatus): string;
/** SwapDirection is the direction of an AtomicSwap */
export declare enum SwapDirection {
    /** SWAP_DIRECTION_UNSPECIFIED - SWAP_DIRECTION_UNSPECIFIED represents unspecified or invalid swap direcation */
    SWAP_DIRECTION_UNSPECIFIED = 0,
    /** SWAP_DIRECTION_INCOMING - SWAP_DIRECTION_INCOMING represents is incoming swap (to the kava chain) */
    SWAP_DIRECTION_INCOMING = 1,
    /** SWAP_DIRECTION_OUTGOING - SWAP_DIRECTION_OUTGOING represents an outgoing swap (from the kava chain) */
    SWAP_DIRECTION_OUTGOING = 2,
    UNRECOGNIZED = -1
}
/** SwapDirection is the direction of an AtomicSwap */
export declare enum SwapDirectionSDKType {
    /** SWAP_DIRECTION_UNSPECIFIED - SWAP_DIRECTION_UNSPECIFIED represents unspecified or invalid swap direcation */
    SWAP_DIRECTION_UNSPECIFIED = 0,
    /** SWAP_DIRECTION_INCOMING - SWAP_DIRECTION_INCOMING represents is incoming swap (to the kava chain) */
    SWAP_DIRECTION_INCOMING = 1,
    /** SWAP_DIRECTION_OUTGOING - SWAP_DIRECTION_OUTGOING represents an outgoing swap (from the kava chain) */
    SWAP_DIRECTION_OUTGOING = 2,
    UNRECOGNIZED = -1
}
export declare function swapDirectionFromJSON(object: any): SwapDirection;
export declare function swapDirectionToJSON(object: SwapDirection): string;
/** Params defines the parameters for the bep3 module. */
export interface Params {
    /** asset_params define the parameters for each bep3 asset */
    assetParams: AssetParam[];
}
/** Params defines the parameters for the bep3 module. */
export interface ParamsSDKType {
    /** asset_params define the parameters for each bep3 asset */
    asset_params: AssetParamSDKType[];
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParam {
    /** denom represents the denominatin for this asset */
    denom: string;
    /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
    coinId: Long;
    /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
    supplyLimit?: SupplyLimit;
    /** active specifies if the asset is live or paused */
    active: boolean;
    /** deputy_address the kava address of the deputy */
    deputyAddress: Uint8Array;
    /** fixed_fee defines the fee for incoming swaps */
    fixedFee: string;
    /** min_swap_amount defines the minimum amount able to be swapped in a single message */
    minSwapAmount: string;
    /** max_swap_amount defines the maximum amount able to be swapped in a single message */
    maxSwapAmount: string;
    /** min_block_lock defined the minimum blocks to lock */
    minBlockLock: Long;
    /** min_block_lock defined the maximum blocks to lock */
    maxBlockLock: Long;
}
/** AssetParam defines parameters for each bep3 asset. */
export interface AssetParamSDKType {
    /** denom represents the denominatin for this asset */
    denom: string;
    /** coin_id represents the registered coin type to use (https://github.com/satoshilabs/slips/blob/master/slip-0044.md) */
    coin_id: Long;
    /** supply_limit defines the maximum supply allowed for the asset - a total or time based rate limit */
    supply_limit?: SupplyLimitSDKType;
    /** active specifies if the asset is live or paused */
    active: boolean;
    /** deputy_address the kava address of the deputy */
    deputy_address: Uint8Array;
    /** fixed_fee defines the fee for incoming swaps */
    fixed_fee: string;
    /** min_swap_amount defines the minimum amount able to be swapped in a single message */
    min_swap_amount: string;
    /** max_swap_amount defines the maximum amount able to be swapped in a single message */
    max_swap_amount: string;
    /** min_block_lock defined the minimum blocks to lock */
    min_block_lock: Long;
    /** min_block_lock defined the maximum blocks to lock */
    max_block_lock: Long;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimit {
    /** limit defines the total supply allowed */
    limit: string;
    /** time_limited enables or disables time based supply limiting */
    timeLimited: boolean;
    /** time_period specifies the duration that time_based_limit is evalulated */
    timePeriod?: Duration;
    /** time_based_limit defines the maximum supply that can be swapped within time_period */
    timeBasedLimit: string;
}
/** SupplyLimit define the absolute and time-based limits for an assets's supply. */
export interface SupplyLimitSDKType {
    /** limit defines the total supply allowed */
    limit: string;
    /** time_limited enables or disables time based supply limiting */
    time_limited: boolean;
    /** time_period specifies the duration that time_based_limit is evalulated */
    time_period?: DurationSDKType;
    /** time_based_limit defines the maximum supply that can be swapped within time_period */
    time_based_limit: string;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwap {
    /** amount represents the amount being swapped */
    amount: Coin[];
    /** random_number_hash represents the hash of the random number */
    randomNumberHash: Uint8Array;
    /** expire_height represents the height when the swap expires */
    expireHeight: Long;
    /** timestamp represents the timestamp of the swap */
    timestamp: Long;
    /** sender is the kava chain sender of the swap */
    sender: Uint8Array;
    /** recipient is the kava chain recipient of the swap */
    recipient: Uint8Array;
    /** sender_other_chain is the sender on the other chain */
    senderOtherChain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipientOtherChain: string;
    /** closed_block is the block when the swap is closed */
    closedBlock: Long;
    /** status represents the current status of the swap */
    status: SwapStatus;
    /** cross_chain identifies whether the atomic swap is cross chain */
    crossChain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirection;
}
/** AtomicSwap defines an atomic swap between chains for the pricefeed module. */
export interface AtomicSwapSDKType {
    /** amount represents the amount being swapped */
    amount: CoinSDKType[];
    /** random_number_hash represents the hash of the random number */
    random_number_hash: Uint8Array;
    /** expire_height represents the height when the swap expires */
    expire_height: Long;
    /** timestamp represents the timestamp of the swap */
    timestamp: Long;
    /** sender is the kava chain sender of the swap */
    sender: Uint8Array;
    /** recipient is the kava chain recipient of the swap */
    recipient: Uint8Array;
    /** sender_other_chain is the sender on the other chain */
    sender_other_chain: string;
    /** recipient_other_chain is the recipient on the other chain */
    recipient_other_chain: string;
    /** closed_block is the block when the swap is closed */
    closed_block: Long;
    /** status represents the current status of the swap */
    status: SwapStatusSDKType;
    /** cross_chain identifies whether the atomic swap is cross chain */
    cross_chain: boolean;
    /** direction identifies if the swap is incoming or outgoing */
    direction: SwapDirectionSDKType;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupply {
    /** incoming_supply represents the incoming supply of an asset */
    incomingSupply?: Coin;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoingSupply?: Coin;
    /** current_supply represents the current on-chain supply of an asset */
    currentSupply?: Coin;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    timeLimitedCurrentSupply?: Coin;
    /** time_elapsed represents the time elapsed */
    timeElapsed?: Duration;
}
/** AssetSupply defines information about an asset's supply. */
export interface AssetSupplySDKType {
    /** incoming_supply represents the incoming supply of an asset */
    incoming_supply?: CoinSDKType;
    /** outgoing_supply represents the outgoing supply of an asset */
    outgoing_supply?: CoinSDKType;
    /** current_supply represents the current on-chain supply of an asset */
    current_supply?: CoinSDKType;
    /** time_limited_current_supply represents the time limited current supply of an asset */
    time_limited_current_supply?: CoinSDKType;
    /** time_elapsed represents the time elapsed */
    time_elapsed?: DurationSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const AssetParam: {
    encode(message: AssetParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetParam;
    fromJSON(object: any): AssetParam;
    toJSON(message: AssetParam): unknown;
    fromPartial(object: Partial<AssetParam>): AssetParam;
};
export declare const SupplyLimit: {
    encode(message: SupplyLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SupplyLimit;
    fromJSON(object: any): SupplyLimit;
    toJSON(message: SupplyLimit): unknown;
    fromPartial(object: Partial<SupplyLimit>): SupplyLimit;
};
export declare const AtomicSwap: {
    encode(message: AtomicSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicSwap;
    fromJSON(object: any): AtomicSwap;
    toJSON(message: AtomicSwap): unknown;
    fromPartial(object: Partial<AtomicSwap>): AtomicSwap;
};
export declare const AssetSupply: {
    encode(message: AssetSupply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupply;
    fromJSON(object: any): AssetSupply;
    toJSON(message: AssetSupply): unknown;
    fromPartial(object: Partial<AssetSupply>): AssetSupply;
};
