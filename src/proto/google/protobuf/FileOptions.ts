// Original file: null

import type {
  UninterpretedOption as _google_protobuf_UninterpretedOption,
  UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output,
} from '../../google/protobuf/UninterpretedOption'

// Original file: null

export enum _google_protobuf_FileOptions_OptimizeMode {
  SPEED = 1,
  CODE_SIZE = 2,
  LITE_RUNTIME = 3,
}

export interface FileOptions {
  javaPackage?: string
  javaOuterClassname?: string
  optimizeFor?: _google_protobuf_FileOptions_OptimizeMode | keyof typeof _google_protobuf_FileOptions_OptimizeMode
  javaMultipleFiles?: boolean
  goPackage?: string
  ccGenericServices?: boolean
  javaGenericServices?: boolean
  pyGenericServices?: boolean
  javaGenerateEqualsAndHash?: boolean
  deprecated?: boolean
  javaStringCheckUtf8?: boolean
  ccEnableArenas?: boolean
  objcClassPrefix?: string
  csharpNamespace?: string
  uninterpretedOption?: _google_protobuf_UninterpretedOption[]
  '.gogoproto.goprotoGettersAll'?: boolean
  '.gogoproto.goprotoEnumPrefixAll'?: boolean
  '.gogoproto.goprotoStringerAll'?: boolean
  '.gogoproto.verboseEqualAll'?: boolean
  '.gogoproto.faceAll'?: boolean
  '.gogoproto.gostringAll'?: boolean
  '.gogoproto.populateAll'?: boolean
  '.gogoproto.stringerAll'?: boolean
  '.gogoproto.onlyoneAll'?: boolean
  '.gogoproto.equalAll'?: boolean
  '.gogoproto.descriptionAll'?: boolean
  '.gogoproto.testgenAll'?: boolean
  '.gogoproto.benchgenAll'?: boolean
  '.gogoproto.marshalerAll'?: boolean
  '.gogoproto.unmarshalerAll'?: boolean
  '.gogoproto.stableMarshalerAll'?: boolean
  '.gogoproto.sizerAll'?: boolean
  '.gogoproto.goprotoEnumStringerAll'?: boolean
  '.gogoproto.enumStringerAll'?: boolean
  '.gogoproto.unsafeMarshalerAll'?: boolean
  '.gogoproto.unsafeUnmarshalerAll'?: boolean
  '.gogoproto.goprotoExtensionsMapAll'?: boolean
  '.gogoproto.goprotoUnrecognizedAll'?: boolean
  '.gogoproto.gogoprotoImport'?: boolean
  '.gogoproto.protosizerAll'?: boolean
  '.gogoproto.compareAll'?: boolean
  '.gogoproto.typedeclAll'?: boolean
  '.gogoproto.enumdeclAll'?: boolean
  '.gogoproto.goprotoRegistration'?: boolean
  '.gogoproto.messagenameAll'?: boolean
  '.gogoproto.goprotoSizecacheAll'?: boolean
  '.gogoproto.goprotoUnkeyedAll'?: boolean
}

export interface FileOptions__Output {
  javaPackage: string
  javaOuterClassname: string
  optimizeFor: _google_protobuf_FileOptions_OptimizeMode
  javaMultipleFiles: boolean
  goPackage: string
  ccGenericServices: boolean
  javaGenericServices: boolean
  pyGenericServices: boolean
  javaGenerateEqualsAndHash: boolean
  deprecated: boolean
  javaStringCheckUtf8: boolean
  ccEnableArenas: boolean
  objcClassPrefix: string
  csharpNamespace: string
  uninterpretedOption: _google_protobuf_UninterpretedOption__Output[]
  '.gogoproto.goprotoGettersAll': boolean
  '.gogoproto.goprotoEnumPrefixAll': boolean
  '.gogoproto.goprotoStringerAll': boolean
  '.gogoproto.verboseEqualAll': boolean
  '.gogoproto.faceAll': boolean
  '.gogoproto.gostringAll': boolean
  '.gogoproto.populateAll': boolean
  '.gogoproto.stringerAll': boolean
  '.gogoproto.onlyoneAll': boolean
  '.gogoproto.equalAll': boolean
  '.gogoproto.descriptionAll': boolean
  '.gogoproto.testgenAll': boolean
  '.gogoproto.benchgenAll': boolean
  '.gogoproto.marshalerAll': boolean
  '.gogoproto.unmarshalerAll': boolean
  '.gogoproto.stableMarshalerAll': boolean
  '.gogoproto.sizerAll': boolean
  '.gogoproto.goprotoEnumStringerAll': boolean
  '.gogoproto.enumStringerAll': boolean
  '.gogoproto.unsafeMarshalerAll': boolean
  '.gogoproto.unsafeUnmarshalerAll': boolean
  '.gogoproto.goprotoExtensionsMapAll': boolean
  '.gogoproto.goprotoUnrecognizedAll': boolean
  '.gogoproto.gogoprotoImport': boolean
  '.gogoproto.protosizerAll': boolean
  '.gogoproto.compareAll': boolean
  '.gogoproto.typedeclAll': boolean
  '.gogoproto.enumdeclAll': boolean
  '.gogoproto.goprotoRegistration': boolean
  '.gogoproto.messagenameAll': boolean
  '.gogoproto.goprotoSizecacheAll': boolean
  '.gogoproto.goprotoUnkeyedAll': boolean
}
