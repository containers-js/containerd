// Original file: null

import type {
  UninterpretedOption as _google_protobuf_UninterpretedOption,
  UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output,
} from '../../google/protobuf/UninterpretedOption'

// Original file: null

export enum _google_protobuf_FieldOptions_CType {
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
}

// Original file: null

export enum _google_protobuf_FieldOptions_JSType {
  JS_NORMAL = 0,
  JS_STRING = 1,
  JS_NUMBER = 2,
}

export interface FieldOptions {
  ctype?: _google_protobuf_FieldOptions_CType | keyof typeof _google_protobuf_FieldOptions_CType
  packed?: boolean
  deprecated?: boolean
  lazy?: boolean
  jstype?: _google_protobuf_FieldOptions_JSType | keyof typeof _google_protobuf_FieldOptions_JSType
  weak?: boolean
  uninterpretedOption?: _google_protobuf_UninterpretedOption[]
  '.gogoproto.nullable'?: boolean
  '.gogoproto.embed'?: boolean
  '.gogoproto.customtype'?: string
  '.gogoproto.customname'?: string
  '.gogoproto.jsontag'?: string
  '.gogoproto.moretags'?: string
  '.gogoproto.casttype'?: string
  '.gogoproto.castkey'?: string
  '.gogoproto.castvalue'?: string
  '.gogoproto.stdtime'?: boolean
  '.gogoproto.stdduration'?: boolean
  '.gogoproto.wktpointer'?: boolean
}

export interface FieldOptions__Output {
  ctype: _google_protobuf_FieldOptions_CType
  packed: boolean
  deprecated: boolean
  lazy: boolean
  jstype: _google_protobuf_FieldOptions_JSType
  weak: boolean
  uninterpretedOption: _google_protobuf_UninterpretedOption__Output[]
  '.gogoproto.nullable': boolean
  '.gogoproto.embed': boolean
  '.gogoproto.customtype': string
  '.gogoproto.customname': string
  '.gogoproto.jsontag': string
  '.gogoproto.moretags': string
  '.gogoproto.casttype': string
  '.gogoproto.castkey': string
  '.gogoproto.castvalue': string
  '.gogoproto.stdtime': boolean
  '.gogoproto.stdduration': boolean
  '.gogoproto.wktpointer': boolean
}
