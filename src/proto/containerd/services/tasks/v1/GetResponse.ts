// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Process as _containerd_v1_types_Process,
  Process__Output as _containerd_v1_types_Process__Output,
} from '../../../../containerd/v1/types/Process'

export interface GetResponse {
  process?: _containerd_v1_types_Process | null
}

export interface GetResponse__Output {
  process: _containerd_v1_types_Process__Output | null
}
