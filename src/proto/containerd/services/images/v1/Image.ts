// Original file: proto/github.com/containerd/containerd/api/services/images/v1/images.proto

import type {
  Descriptor as _containerd_types_Descriptor,
  Descriptor__Output as _containerd_types_Descriptor__Output,
} from '../../../../containerd/types/Descriptor'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Image {
  name?: string
  labels?: {[key: string]: string}
  target?: _containerd_types_Descriptor | null
  createdAt?: _google_protobuf_Timestamp | null
  updatedAt?: _google_protobuf_Timestamp | null
}

export interface Image__Output {
  name?: string
  labels?: {[key: string]: string}
  target?: _containerd_types_Descriptor__Output
  createdAt?: _google_protobuf_Timestamp__Output
  updatedAt?: _google_protobuf_Timestamp__Output
}
