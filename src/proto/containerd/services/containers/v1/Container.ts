// Original file: proto/github.com/containerd/containerd/api/services/containers/v1/containers.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface _containerd_services_containers_v1_Container_Runtime {
  name?: string
  options?: _google_protobuf_Any | null
}

export interface _containerd_services_containers_v1_Container_Runtime__Output {
  name?: string
  options?: _google_protobuf_Any__Output
}

export interface Container {
  id?: string
  labels?: {[key: string]: string}
  image?: string
  runtime?: _containerd_services_containers_v1_Container_Runtime | null
  spec?: _google_protobuf_Any | null
  snapshotter?: string
  snapshotKey?: string
  createdAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
  extensions?: {[key: string]: _google_protobuf_Any}
}

export interface Container__Output {
  id?: string
  labels?: {[key: string]: string}
  image?: string
  runtime?: _containerd_services_containers_v1_Container_Runtime__Output
  spec?: _google_protobuf_Any__Output
  snapshotter?: string
  snapshotKey?: string
  createdAt?: _google_protobuf_Timestamp__Output
  updatedAt?: _google_protobuf_Timestamp__Output
  extensions?: {[key: string]: _google_protobuf_Any__Output}
}
