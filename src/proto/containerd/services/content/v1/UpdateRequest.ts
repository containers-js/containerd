// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {
  Info as _containerd_services_content_v1_Info,
  Info__Output as _containerd_services_content_v1_Info__Output,
} from '../../../../containerd/services/content/v1/Info'
import type {
  FieldMask as _google_protobuf_FieldMask,
  FieldMask__Output as _google_protobuf_FieldMask__Output,
} from '../../../../google/protobuf/FieldMask'

export interface UpdateRequest {
  info?: _containerd_services_content_v1_Info | null
  updateMask?: _google_protobuf_FieldMask | null
}

export interface UpdateRequest__Output {
  info: _containerd_services_content_v1_Info__Output | null
  updateMask: _google_protobuf_FieldMask__Output | null
}
