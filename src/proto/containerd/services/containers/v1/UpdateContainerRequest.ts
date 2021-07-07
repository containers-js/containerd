// Original file: proto/github.com/containerd/containerd/api/services/containers/v1/containers.proto

import type {
  Container as _containerd_services_containers_v1_Container,
  Container__Output as _containerd_services_containers_v1_Container__Output,
} from '../../../../containerd/services/containers/v1/Container'
import type {
  FieldMask as _google_protobuf_FieldMask,
  FieldMask__Output as _google_protobuf_FieldMask__Output,
} from '../../../../google/protobuf/FieldMask'

export interface UpdateContainerRequest {
  container?: _containerd_services_containers_v1_Container | null
  updateMask?: _google_protobuf_FieldMask | null
}

export interface UpdateContainerRequest__Output {
  container: _containerd_services_containers_v1_Container__Output | null
  updateMask: _google_protobuf_FieldMask__Output | null
}
