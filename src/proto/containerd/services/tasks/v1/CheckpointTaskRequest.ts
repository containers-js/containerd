// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'

export interface CheckpointTaskRequest {
  containerId?: string
  parentCheckpoint?: string
  options?: _google_protobuf_Any | null
}

export interface CheckpointTaskRequest__Output {
  containerId: string
  parentCheckpoint: string
  options: _google_protobuf_Any__Output | null
}
