// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {
  Info as _containerd_services_snapshots_v1_Info,
  Info__Output as _containerd_services_snapshots_v1_Info__Output,
} from '../../../../containerd/services/snapshots/v1/Info'

export interface ListSnapshotsResponse {
  info?: _containerd_services_snapshots_v1_Info[]
}

export interface ListSnapshotsResponse__Output {
  info: _containerd_services_snapshots_v1_Info__Output[]
}
