import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDeposit {
    /** depositor represents the owner of the delegation to convert */
    depositor: string;
    /** validator is the validator for the depositor's delegation */
    validator: string;
    /** amount is the delegation balance to convert */
    amount?: Coin;
}
/** MsgMintDeposit converts a delegation into staking derivatives and deposits it all into an earn vault. */
export interface MsgMintDepositSDKType {
    /** depositor represents the owner of the delegation to convert */
    depositor: string;
    /** validator is the validator for the depositor's delegation */
    validator: string;
    /** amount is the delegation balance to convert */
    amount?: CoinSDKType;
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponse {
}
/** MsgMintDepositResponse defines the Msg/MsgMintDeposit response type. */
export interface MsgMintDepositResponseSDKType {
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDeposit {
    /** depositor represents the owner of the tokens to delegate */
    depositor: string;
    /** validator is the address of the validator to delegate to */
    validator: string;
    /** amount is the tokens to delegate */
    amount?: Coin;
}
/**
 * MsgDelegateMintDeposit delegates tokens to a validator, then converts them into staking derivatives,
 * then deposits to an earn vault.
 */
export interface MsgDelegateMintDepositSDKType {
    /** depositor represents the owner of the tokens to delegate */
    depositor: string;
    /** validator is the address of the validator to delegate to */
    validator: string;
    /** amount is the tokens to delegate */
    amount?: CoinSDKType;
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponse {
}
/** MsgDelegateMintDepositResponse defines the Msg/MsgDelegateMintDeposit response type. */
export interface MsgDelegateMintDepositResponseSDKType {
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurn {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: Coin;
}
/** MsgWithdrawBurn removes staking derivatives from an earn vault and converts them back to a staking delegation. */
export interface MsgWithdrawBurnSDKType {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: CoinSDKType;
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponse {
}
/** MsgWithdrawBurnResponse defines the Msg/MsgWithdrawBurn response type. */
export interface MsgWithdrawBurnResponseSDKType {
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegate {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: Coin;
}
/**
 * MsgWithdrawBurnUndelegate removes staking derivatives from an earn vault, converts them to a staking delegation,
 * then undelegates them from their validator.
 */
export interface MsgWithdrawBurnUndelegateSDKType {
    /** from is the owner of the earn vault to withdraw from */
    from: string;
    /** validator is the address to select the derivative denom to withdraw */
    validator: string;
    /** amount is the staked token equivalent to withdraw */
    amount?: CoinSDKType;
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponse {
}
/** MsgWithdrawBurnUndelegateResponse defines the Msg/MsgWithdrawBurnUndelegate response type. */
export interface MsgWithdrawBurnUndelegateResponseSDKType {
}
export declare const MsgMintDeposit: {
    encode(message: MsgMintDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDeposit;
    fromJSON(object: any): MsgMintDeposit;
    toJSON(message: MsgMintDeposit): unknown;
    fromPartial(object: Partial<MsgMintDeposit>): MsgMintDeposit;
};
export declare const MsgMintDepositResponse: {
    encode(_: MsgMintDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintDepositResponse;
    fromJSON(_: any): MsgMintDepositResponse;
    toJSON(_: MsgMintDepositResponse): unknown;
    fromPartial(_: Partial<MsgMintDepositResponse>): MsgMintDepositResponse;
};
export declare const MsgDelegateMintDeposit: {
    encode(message: MsgDelegateMintDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateMintDeposit;
    fromJSON(object: any): MsgDelegateMintDeposit;
    toJSON(message: MsgDelegateMintDeposit): unknown;
    fromPartial(object: Partial<MsgDelegateMintDeposit>): MsgDelegateMintDeposit;
};
export declare const MsgDelegateMintDepositResponse: {
    encode(_: MsgDelegateMintDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateMintDepositResponse;
    fromJSON(_: any): MsgDelegateMintDepositResponse;
    toJSON(_: MsgDelegateMintDepositResponse): unknown;
    fromPartial(_: Partial<MsgDelegateMintDepositResponse>): MsgDelegateMintDepositResponse;
};
export declare const MsgWithdrawBurn: {
    encode(message: MsgWithdrawBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurn;
    fromJSON(object: any): MsgWithdrawBurn;
    toJSON(message: MsgWithdrawBurn): unknown;
    fromPartial(object: Partial<MsgWithdrawBurn>): MsgWithdrawBurn;
};
export declare const MsgWithdrawBurnResponse: {
    encode(_: MsgWithdrawBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnResponse;
    fromJSON(_: any): MsgWithdrawBurnResponse;
    toJSON(_: MsgWithdrawBurnResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawBurnResponse>): MsgWithdrawBurnResponse;
};
export declare const MsgWithdrawBurnUndelegate: {
    encode(message: MsgWithdrawBurnUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnUndelegate;
    fromJSON(object: any): MsgWithdrawBurnUndelegate;
    toJSON(message: MsgWithdrawBurnUndelegate): unknown;
    fromPartial(object: Partial<MsgWithdrawBurnUndelegate>): MsgWithdrawBurnUndelegate;
};
export declare const MsgWithdrawBurnUndelegateResponse: {
    encode(_: MsgWithdrawBurnUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBurnUndelegateResponse;
    fromJSON(_: any): MsgWithdrawBurnUndelegateResponse;
    toJSON(_: MsgWithdrawBurnUndelegateResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawBurnUndelegateResponse>): MsgWithdrawBurnUndelegateResponse;
};
