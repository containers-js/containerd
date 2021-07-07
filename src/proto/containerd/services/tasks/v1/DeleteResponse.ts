// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface DeleteResponse {
  id?: string
  pid?: number
  exitStatus?: number
  exitedAt?: _google_protobuf_Timestamp | null
}

export interface DeleteResponse__Output {
  id?: string
  pid?: number
  exitStatus?: number
  exitedAt?: _google_protobuf_Timestamp__Output
}
