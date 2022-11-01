import * as _m0 from "protobufjs/minimal";
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermission {
}
/** GodPermission allows any governance proposal. It is used mainly for testing. */
export interface GodPermissionSDKType {
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermission {
}
/** SoftwareUpgradePermission permission type for software upgrade proposals */
export interface SoftwareUpgradePermissionSDKType {
}
/** TextPermission allows any text governance proposal. */
export interface TextPermission {
}
/** TextPermission allows any text governance proposal. */
export interface TextPermissionSDKType {
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermission {
    allowedParamsChanges: AllowedParamsChange[];
}
/** ParamsChangePermission allows any parameter or sub parameter change proposal. */
export interface ParamsChangePermissionSDKType {
    allowed_params_changes: AllowedParamsChangeSDKType[];
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChange {
    subspace: string;
    key: string;
    /**
     * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
     * be changed on the subparam record.
     */
    singleSubparamAllowedAttrs: string[];
    /**
     * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
     * record in the list.
     */
    multiSubparamsRequirements: SubparamRequirement[];
}
/** AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements. */
export interface AllowedParamsChangeSDKType {
    subspace: string;
    key: string;
    /**
     * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
     * be changed on the subparam record.
     */
    single_subparam_allowed_attrs: string[];
    /**
     * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
     * record in the list.
     */
    multi_subparams_requirements: SubparamRequirementSDKType[];
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirement {
    /** The required attr key of the param record. */
    key: string;
    /** The required param value for the param record key. The key and value is used to match to the target param record. */
    val: string;
    /** The sub param attrs that are allowed to be changed. */
    allowedSubparamAttrChanges: string[];
}
/** SubparamRequirement contains requirements for a single record in a subparam value list */
export interface SubparamRequirementSDKType {
    /** The required attr key of the param record. */
    key: string;
    /** The required param value for the param record key. The key and value is used to match to the target param record. */
    val: string;
    /** The sub param attrs that are allowed to be changed. */
    allowed_subparam_attr_changes: string[];
}
export declare const GodPermission: {
    encode(_: GodPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GodPermission;
    fromJSON(_: any): GodPermission;
    toJSON(_: GodPermission): unknown;
    fromPartial(_: Partial<GodPermission>): GodPermission;
};
export declare const SoftwareUpgradePermission: {
    encode(_: SoftwareUpgradePermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpgradePermission;
    fromJSON(_: any): SoftwareUpgradePermission;
    toJSON(_: SoftwareUpgradePermission): unknown;
    fromPartial(_: Partial<SoftwareUpgradePermission>): SoftwareUpgradePermission;
};
export declare const TextPermission: {
    encode(_: TextPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TextPermission;
    fromJSON(_: any): TextPermission;
    toJSON(_: TextPermission): unknown;
    fromPartial(_: Partial<TextPermission>): TextPermission;
};
export declare const ParamsChangePermission: {
    encode(message: ParamsChangePermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsChangePermission;
    fromJSON(object: any): ParamsChangePermission;
    toJSON(message: ParamsChangePermission): unknown;
    fromPartial(object: Partial<ParamsChangePermission>): ParamsChangePermission;
};
export declare const AllowedParamsChange: {
    encode(message: AllowedParamsChange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedParamsChange;
    fromJSON(object: any): AllowedParamsChange;
    toJSON(message: AllowedParamsChange): unknown;
    fromPartial(object: Partial<AllowedParamsChange>): AllowedParamsChange;
};
export declare const SubparamRequirement: {
    encode(message: SubparamRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubparamRequirement;
    fromJSON(object: any): SubparamRequirement;
    toJSON(message: SubparamRequirement): unknown;
    fromPartial(object: Partial<SubparamRequirement>): SubparamRequirement;
};
