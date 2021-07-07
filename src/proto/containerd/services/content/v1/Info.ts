// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Info {
  digest?: string
  size?: number | string | Long
  createdAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
  labels?: {[key: string]: string}
}

export interface Info__Output {
  digest: string
  size: Long
  createdAt: _google_protobuf_Timestamp__Output | null
  updatedAt: _google_protobuf_Timestamp__Output | null
  labels: {[key: string]: string}
}
