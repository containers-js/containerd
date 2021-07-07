// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Process as _containerd_v1_types_Process,
  Process__Output as _containerd_v1_types_Process__Output,
} from '../../../../containerd/v1/types/Process'

export interface ListTasksResponse {
  tasks?: _containerd_v1_types_Process[]
}

export interface ListTasksResponse__Output {
  tasks: _containerd_v1_types_Process__Output[]
}
