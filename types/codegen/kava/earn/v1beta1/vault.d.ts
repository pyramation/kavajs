import { StrategyType, StrategyTypeSDKType } from "./strategy";
import * as _m0 from "protobufjs/minimal";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    isPrivateVault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowedDepositors: Uint8Array[];
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultSDKType {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyTypeSDKType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    is_private_vault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowed_depositors: Uint8Array[];
}
/** VaultRecord is the state of a vault. */
export interface VaultRecord {
    /** TotalShares is the total distributed number of shares in the vault. */
    totalShares?: VaultShare;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordSDKType {
    /** TotalShares is the total distributed number of shares in the vault. */
    total_shares?: VaultShareSDKType;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
    /** Depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** Shares represent the vault shares owned by the depositor. */
    shares: VaultShare[];
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordSDKType {
    /** Depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** Shares represent the vault shares owned by the depositor. */
    shares: VaultShareSDKType[];
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShare {
    denom: string;
    amount: string;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareSDKType {
    denom: string;
    amount: string;
}
export declare const AllowedVault: {
    encode(message: AllowedVault, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedVault;
    fromJSON(object: any): AllowedVault;
    toJSON(message: AllowedVault): unknown;
    fromPartial(object: Partial<AllowedVault>): AllowedVault;
};
export declare const VaultRecord: {
    encode(message: VaultRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultRecord;
    fromJSON(object: any): VaultRecord;
    toJSON(message: VaultRecord): unknown;
    fromPartial(object: Partial<VaultRecord>): VaultRecord;
};
export declare const VaultShareRecord: {
    encode(message: VaultShareRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultShareRecord;
    fromJSON(object: any): VaultShareRecord;
    toJSON(message: VaultShareRecord): unknown;
    fromPartial(object: Partial<VaultShareRecord>): VaultShareRecord;
};
export declare const VaultShare: {
    encode(message: VaultShare, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultShare;
    fromJSON(object: any): VaultShare;
    toJSON(message: VaultShare): unknown;
    fromPartial(object: Partial<VaultShare>): VaultShare;
};
