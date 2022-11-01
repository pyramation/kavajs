import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GodPermission allows any governance proposal. It is used mainly for testing. */

export interface GodPermission {}
/** GodPermission allows any governance proposal. It is used mainly for testing. */

export interface GodPermissionSDKType {}
/** SoftwareUpgradePermission permission type for software upgrade proposals */

export interface SoftwareUpgradePermission {}
/** SoftwareUpgradePermission permission type for software upgrade proposals */

export interface SoftwareUpgradePermissionSDKType {}
/** TextPermission allows any text governance proposal. */

export interface TextPermission {}
/** TextPermission allows any text governance proposal. */

export interface TextPermissionSDKType {}
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

function createBaseGodPermission(): GodPermission {
  return {};
}

export const GodPermission = {
  encode(_: GodPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GodPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGodPermission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): GodPermission {
    return {};
  },

  toJSON(_: GodPermission): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<GodPermission>): GodPermission {
    const message = createBaseGodPermission();
    return message;
  }

};

function createBaseSoftwareUpgradePermission(): SoftwareUpgradePermission {
  return {};
}

export const SoftwareUpgradePermission = {
  encode(_: SoftwareUpgradePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpgradePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSoftwareUpgradePermission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): SoftwareUpgradePermission {
    return {};
  },

  toJSON(_: SoftwareUpgradePermission): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<SoftwareUpgradePermission>): SoftwareUpgradePermission {
    const message = createBaseSoftwareUpgradePermission();
    return message;
  }

};

function createBaseTextPermission(): TextPermission {
  return {};
}

export const TextPermission = {
  encode(_: TextPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextPermission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): TextPermission {
    return {};
  },

  toJSON(_: TextPermission): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<TextPermission>): TextPermission {
    const message = createBaseTextPermission();
    return message;
  }

};

function createBaseParamsChangePermission(): ParamsChangePermission {
  return {
    allowedParamsChanges: []
  };
}

export const ParamsChangePermission = {
  encode(message: ParamsChangePermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedParamsChanges) {
      AllowedParamsChange.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsChangePermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsChangePermission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowedParamsChanges.push(AllowedParamsChange.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParamsChangePermission {
    return {
      allowedParamsChanges: Array.isArray(object?.allowedParamsChanges) ? object.allowedParamsChanges.map((e: any) => AllowedParamsChange.fromJSON(e)) : []
    };
  },

  toJSON(message: ParamsChangePermission): unknown {
    const obj: any = {};

    if (message.allowedParamsChanges) {
      obj.allowedParamsChanges = message.allowedParamsChanges.map(e => e ? AllowedParamsChange.toJSON(e) : undefined);
    } else {
      obj.allowedParamsChanges = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ParamsChangePermission>): ParamsChangePermission {
    const message = createBaseParamsChangePermission();
    message.allowedParamsChanges = object.allowedParamsChanges?.map(e => AllowedParamsChange.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAllowedParamsChange(): AllowedParamsChange {
  return {
    subspace: "",
    key: "",
    singleSubparamAllowedAttrs: [],
    multiSubparamsRequirements: []
  };
}

export const AllowedParamsChange = {
  encode(message: AllowedParamsChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }

    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }

    for (const v of message.singleSubparamAllowedAttrs) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.multiSubparamsRequirements) {
      SubparamRequirement.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedParamsChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedParamsChange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;

        case 2:
          message.key = reader.string();
          break;

        case 3:
          message.singleSubparamAllowedAttrs.push(reader.string());
          break;

        case 4:
          message.multiSubparamsRequirements.push(SubparamRequirement.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllowedParamsChange {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      singleSubparamAllowedAttrs: Array.isArray(object?.singleSubparamAllowedAttrs) ? object.singleSubparamAllowedAttrs.map((e: any) => String(e)) : [],
      multiSubparamsRequirements: Array.isArray(object?.multiSubparamsRequirements) ? object.multiSubparamsRequirements.map((e: any) => SubparamRequirement.fromJSON(e)) : []
    };
  },

  toJSON(message: AllowedParamsChange): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);

    if (message.singleSubparamAllowedAttrs) {
      obj.singleSubparamAllowedAttrs = message.singleSubparamAllowedAttrs.map(e => e);
    } else {
      obj.singleSubparamAllowedAttrs = [];
    }

    if (message.multiSubparamsRequirements) {
      obj.multiSubparamsRequirements = message.multiSubparamsRequirements.map(e => e ? SubparamRequirement.toJSON(e) : undefined);
    } else {
      obj.multiSubparamsRequirements = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AllowedParamsChange>): AllowedParamsChange {
    const message = createBaseAllowedParamsChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.singleSubparamAllowedAttrs = object.singleSubparamAllowedAttrs?.map(e => e) || [];
    message.multiSubparamsRequirements = object.multiSubparamsRequirements?.map(e => SubparamRequirement.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSubparamRequirement(): SubparamRequirement {
  return {
    key: "",
    val: "",
    allowedSubparamAttrChanges: []
  };
}

export const SubparamRequirement = {
  encode(message: SubparamRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }

    for (const v of message.allowedSubparamAttrChanges) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubparamRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubparamRequirement();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.val = reader.string();
          break;

        case 3:
          message.allowedSubparamAttrChanges.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubparamRequirement {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      val: isSet(object.val) ? String(object.val) : "",
      allowedSubparamAttrChanges: Array.isArray(object?.allowedSubparamAttrChanges) ? object.allowedSubparamAttrChanges.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: SubparamRequirement): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.val !== undefined && (obj.val = message.val);

    if (message.allowedSubparamAttrChanges) {
      obj.allowedSubparamAttrChanges = message.allowedSubparamAttrChanges.map(e => e);
    } else {
      obj.allowedSubparamAttrChanges = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SubparamRequirement>): SubparamRequirement {
    const message = createBaseSubparamRequirement();
    message.key = object.key ?? "";
    message.val = object.val ?? "";
    message.allowedSubparamAttrChanges = object.allowedSubparamAttrChanges?.map(e => e) || [];
    return message;
  }

};