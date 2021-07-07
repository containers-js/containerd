// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Lease {
  id?: string
  createdAt?: _google_protobuf_Timestamp | null
  labels?: {[key: string]: string}
}

export interface Lease__Output {
  id: string
  createdAt: _google_protobuf_Timestamp__Output | null
  labels: {[key: string]: string}
}
