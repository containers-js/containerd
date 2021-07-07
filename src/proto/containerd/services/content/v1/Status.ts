// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Status {
  startedAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
  ref?: string
  offset?: number | string | Long
  total?: number | string | Long
  expected?: string
}

export interface Status__Output {
  startedAt?: _google_protobuf_Timestamp__Output
  updatedAt?: _google_protobuf_Timestamp__Output
  ref?: string
  offset?: Long
  total?: Long
  expected?: string
}
