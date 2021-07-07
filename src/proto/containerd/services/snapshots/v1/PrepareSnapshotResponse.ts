// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {
  Mount as _containerd_types_Mount,
  Mount__Output as _containerd_types_Mount__Output,
} from '../../../../containerd/types/Mount'

export interface PrepareSnapshotResponse {
  mounts?: _containerd_types_Mount[]
}

export interface PrepareSnapshotResponse__Output {
  mounts?: _containerd_types_Mount__Output[]
}
