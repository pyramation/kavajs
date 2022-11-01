import * as _84 from "./api/http";
import * as _85 from "./api/httpbody";
import * as _86 from "./protobuf/any";
import * as _87 from "./protobuf/descriptor";
import * as _88 from "./protobuf/timestamp";
import * as _89 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _85.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.HttpBody;
            fromJSON(object: any): _85.HttpBody;
            toJSON(message: _85.HttpBody): unknown;
            fromPartial(object: Partial<_85.HttpBody>): _85.HttpBody;
        };
        Http: {
            encode(message: _84.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Http;
            fromJSON(object: any): _84.Http;
            toJSON(message: _84.Http): unknown;
            fromPartial(object: Partial<_84.Http>): _84.Http;
        };
        HttpRule: {
            encode(message: _84.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.HttpRule;
            fromJSON(object: any): _84.HttpRule;
            toJSON(message: _84.HttpRule): unknown;
            fromPartial(object: Partial<_84.HttpRule>): _84.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _84.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.CustomHttpPattern;
            fromJSON(object: any): _84.CustomHttpPattern;
            toJSON(message: _84.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_84.CustomHttpPattern>): _84.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _89.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Duration;
            fromJSON(object: any): _89.Duration;
            toJSON(message: _89.Duration): unknown;
            fromPartial(object: Partial<_89.Duration>): _89.Duration;
        };
        Timestamp: {
            encode(message: _88.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Timestamp;
            fromJSON(object: any): _88.Timestamp;
            toJSON(message: _88.Timestamp): unknown;
            fromPartial(object: Partial<_88.Timestamp>): _88.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _87.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _87.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _87.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _87.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _87.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _87.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _87.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _87.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _87.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _87.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _87.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _87.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _87.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _87.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _87.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _87.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _87.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _87.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _87.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _87.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _87.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _87.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _87.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _87.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _87.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.FileDescriptorSet;
            fromJSON(object: any): _87.FileDescriptorSet;
            toJSON(message: _87.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_87.FileDescriptorSet>): _87.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _87.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.FileDescriptorProto;
            fromJSON(object: any): _87.FileDescriptorProto;
            toJSON(message: _87.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_87.FileDescriptorProto>): _87.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _87.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DescriptorProto;
            fromJSON(object: any): _87.DescriptorProto;
            toJSON(message: _87.DescriptorProto): unknown;
            fromPartial(object: Partial<_87.DescriptorProto>): _87.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _87.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _87.DescriptorProto_ExtensionRange;
            toJSON(message: _87.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_87.DescriptorProto_ExtensionRange>): _87.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _87.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DescriptorProto_ReservedRange;
            fromJSON(object: any): _87.DescriptorProto_ReservedRange;
            toJSON(message: _87.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_87.DescriptorProto_ReservedRange>): _87.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _87.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ExtensionRangeOptions;
            fromJSON(object: any): _87.ExtensionRangeOptions;
            toJSON(message: _87.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_87.ExtensionRangeOptions>): _87.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _87.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.FieldDescriptorProto;
            fromJSON(object: any): _87.FieldDescriptorProto;
            toJSON(message: _87.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_87.FieldDescriptorProto>): _87.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _87.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.OneofDescriptorProto;
            fromJSON(object: any): _87.OneofDescriptorProto;
            toJSON(message: _87.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_87.OneofDescriptorProto>): _87.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _87.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EnumDescriptorProto;
            fromJSON(object: any): _87.EnumDescriptorProto;
            toJSON(message: _87.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_87.EnumDescriptorProto>): _87.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _87.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _87.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _87.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_87.EnumDescriptorProto_EnumReservedRange>): _87.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _87.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EnumValueDescriptorProto;
            fromJSON(object: any): _87.EnumValueDescriptorProto;
            toJSON(message: _87.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_87.EnumValueDescriptorProto>): _87.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _87.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ServiceDescriptorProto;
            fromJSON(object: any): _87.ServiceDescriptorProto;
            toJSON(message: _87.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_87.ServiceDescriptorProto>): _87.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _87.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MethodDescriptorProto;
            fromJSON(object: any): _87.MethodDescriptorProto;
            toJSON(message: _87.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_87.MethodDescriptorProto>): _87.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _87.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.FileOptions;
            fromJSON(object: any): _87.FileOptions;
            toJSON(message: _87.FileOptions): unknown;
            fromPartial(object: Partial<_87.FileOptions>): _87.FileOptions;
        };
        MessageOptions: {
            encode(message: _87.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MessageOptions;
            fromJSON(object: any): _87.MessageOptions;
            toJSON(message: _87.MessageOptions): unknown;
            fromPartial(object: Partial<_87.MessageOptions>): _87.MessageOptions;
        };
        FieldOptions: {
            encode(message: _87.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.FieldOptions;
            fromJSON(object: any): _87.FieldOptions;
            toJSON(message: _87.FieldOptions): unknown;
            fromPartial(object: Partial<_87.FieldOptions>): _87.FieldOptions;
        };
        OneofOptions: {
            encode(message: _87.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.OneofOptions;
            fromJSON(object: any): _87.OneofOptions;
            toJSON(message: _87.OneofOptions): unknown;
            fromPartial(object: Partial<_87.OneofOptions>): _87.OneofOptions;
        };
        EnumOptions: {
            encode(message: _87.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EnumOptions;
            fromJSON(object: any): _87.EnumOptions;
            toJSON(message: _87.EnumOptions): unknown;
            fromPartial(object: Partial<_87.EnumOptions>): _87.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _87.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.EnumValueOptions;
            fromJSON(object: any): _87.EnumValueOptions;
            toJSON(message: _87.EnumValueOptions): unknown;
            fromPartial(object: Partial<_87.EnumValueOptions>): _87.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _87.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ServiceOptions;
            fromJSON(object: any): _87.ServiceOptions;
            toJSON(message: _87.ServiceOptions): unknown;
            fromPartial(object: Partial<_87.ServiceOptions>): _87.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _87.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MethodOptions;
            fromJSON(object: any): _87.MethodOptions;
            toJSON(message: _87.MethodOptions): unknown;
            fromPartial(object: Partial<_87.MethodOptions>): _87.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _87.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UninterpretedOption;
            fromJSON(object: any): _87.UninterpretedOption;
            toJSON(message: _87.UninterpretedOption): unknown;
            fromPartial(object: Partial<_87.UninterpretedOption>): _87.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _87.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UninterpretedOption_NamePart;
            fromJSON(object: any): _87.UninterpretedOption_NamePart;
            toJSON(message: _87.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_87.UninterpretedOption_NamePart>): _87.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _87.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SourceCodeInfo;
            fromJSON(object: any): _87.SourceCodeInfo;
            toJSON(message: _87.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_87.SourceCodeInfo>): _87.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _87.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SourceCodeInfo_Location;
            fromJSON(object: any): _87.SourceCodeInfo_Location;
            toJSON(message: _87.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_87.SourceCodeInfo_Location>): _87.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _87.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GeneratedCodeInfo;
            fromJSON(object: any): _87.GeneratedCodeInfo;
            toJSON(message: _87.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_87.GeneratedCodeInfo>): _87.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _87.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _87.GeneratedCodeInfo_Annotation;
            toJSON(message: _87.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_87.GeneratedCodeInfo_Annotation>): _87.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _86.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Any;
            fromJSON(object: any): _86.Any;
            toJSON(message: _86.Any): unknown;
            fromPartial(object: Partial<_86.Any>): _86.Any;
        };
    };
}
