// Original file: proto/github.com/containerd/containerd/api/types/task/task.proto

import type {Status as _containerd_v1_types_Status} from '../../../containerd/v1/types/Status'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../google/protobuf/Timestamp'

export interface Process {
  containerId?: string
  id?: string
  pid?: number
  status?: _containerd_v1_types_Status | keyof typeof _containerd_v1_types_Status
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  exitStatus?: number
  exitedAt?: _google_protobuf_Timestamp | null
}

export interface Process__Output {
  containerId?: string
  id?: string
  pid?: number
  status?: _containerd_v1_types_Status
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  exitStatus?: number
  exitedAt?: _google_protobuf_Timestamp__Output
}
