// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {
  Info as _containerd_services_snapshots_v1_Info,
  Info__Output as _containerd_services_snapshots_v1_Info__Output,
} from '../../../../containerd/services/snapshots/v1/Info'
import type {
  FieldMask as _google_protobuf_FieldMask,
  FieldMask__Output as _google_protobuf_FieldMask__Output,
} from '../../../../google/protobuf/FieldMask'

export interface UpdateSnapshotRequest {
  snapshotter?: string
  info?: _containerd_services_snapshots_v1_Info | null
  updateMask?: _google_protobuf_FieldMask | null
}

export interface UpdateSnapshotRequest__Output {
  snapshotter: string
  info: _containerd_services_snapshots_v1_Info__Output | null
  updateMask: _google_protobuf_FieldMask__Output | null
}
