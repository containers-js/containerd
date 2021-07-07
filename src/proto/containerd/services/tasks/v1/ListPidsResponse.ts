// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  ProcessInfo as _containerd_v1_types_ProcessInfo,
  ProcessInfo__Output as _containerd_v1_types_ProcessInfo__Output,
} from '../../../../containerd/v1/types/ProcessInfo'

export interface ListPidsResponse {
  processes?: _containerd_v1_types_ProcessInfo[]
}

export interface ListPidsResponse__Output {
  processes: _containerd_v1_types_ProcessInfo__Output[]
}
