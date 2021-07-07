// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {
  Mount as _containerd_types_Mount,
  Mount__Output as _containerd_types_Mount__Output,
} from '../../../../containerd/types/Mount'

export interface MountsResponse {
  mounts?: _containerd_types_Mount[]
}

export interface MountsResponse__Output {
  mounts: _containerd_types_Mount__Output[]
}
