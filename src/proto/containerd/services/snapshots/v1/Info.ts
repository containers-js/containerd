// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {Kind as _containerd_services_snapshots_v1_Kind} from '../../../../containerd/services/snapshots/v1/Kind'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Info {
  name?: string
  parent?: string
  kind?: _containerd_services_snapshots_v1_Kind | keyof typeof _containerd_services_snapshots_v1_Kind
  createdAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
  labels?: {[key: string]: string}
}

export interface Info__Output {
  name: string
  parent: string
  kind: _containerd_services_snapshots_v1_Kind
  createdAt: _google_protobuf_Timestamp__Output | null
  updatedAt: _google_protobuf_Timestamp__Output | null
  labels: {[key: string]: string}
}
