// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'
import type {WriteAction as _containerd_services_content_v1_WriteAction} from '../../../../containerd/services/content/v1/WriteAction'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface WriteContentResponse {
  action?: _containerd_services_content_v1_WriteAction | keyof typeof _containerd_services_content_v1_WriteAction
  startedAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
  offset?: number | string | Long
  total?: number | string | Long
  digest?: string
}

export interface WriteContentResponse__Output {
  action: _containerd_services_content_v1_WriteAction
  startedAt: _google_protobuf_Timestamp__Output | null
  updatedAt: _google_protobuf_Timestamp__Output | null
  offset: Long
  total: Long
  digest: string
}
