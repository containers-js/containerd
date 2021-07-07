// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'

export interface UpdateTaskRequest {
  containerId?: string
  resources?: _google_protobuf_Any | null
  annotations?: {[key: string]: string}
}

export interface UpdateTaskRequest__Output {
  containerId: string
  resources: _google_protobuf_Any__Output | null
  annotations: {[key: string]: string}
}
