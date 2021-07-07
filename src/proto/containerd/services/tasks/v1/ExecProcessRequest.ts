// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'

export interface ExecProcessRequest {
  containerId?: string
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  spec?: _google_protobuf_Any | null
  execId?: string
}

export interface ExecProcessRequest__Output {
  containerId?: string
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  spec?: _google_protobuf_Any__Output
  execId?: string
}
