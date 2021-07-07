// Original file: proto/github.com/containerd/containerd/api/services/namespaces/v1/namespace.proto

import type {
  Namespace as _containerd_services_namespaces_v1_Namespace,
  Namespace__Output as _containerd_services_namespaces_v1_Namespace__Output,
} from '../../../../containerd/services/namespaces/v1/Namespace'
import type {
  FieldMask as _google_protobuf_FieldMask,
  FieldMask__Output as _google_protobuf_FieldMask__Output,
} from '../../../../google/protobuf/FieldMask'

export interface UpdateNamespaceRequest {
  namespace?: _containerd_services_namespaces_v1_Namespace | null
  updateMask?: _google_protobuf_FieldMask | null
}

export interface UpdateNamespaceRequest__Output {
  namespace?: _containerd_services_namespaces_v1_Namespace__Output
  updateMask?: _google_protobuf_FieldMask__Output
}
