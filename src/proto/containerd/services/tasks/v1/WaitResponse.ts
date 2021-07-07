// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface WaitResponse {
  exitStatus?: number
  exitedAt?: _google_protobuf_Timestamp | null
}

export interface WaitResponse__Output {
  exitStatus: number
  exitedAt: _google_protobuf_Timestamp__Output | null
}
