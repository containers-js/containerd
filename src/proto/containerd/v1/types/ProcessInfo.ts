// Original file: proto/github.com/containerd/containerd/api/types/task/task.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../google/protobuf/Any'

export interface ProcessInfo {
  pid?: number
  info?: _google_protobuf_Any | null
}

export interface ProcessInfo__Output {
  pid: number
  info: _google_protobuf_Any__Output | null
}
