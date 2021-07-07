// Original file: proto/github.com/containerd/containerd/api/services/namespaces/v1/namespace.proto

import type {
  Namespace as _containerd_services_namespaces_v1_Namespace,
  Namespace__Output as _containerd_services_namespaces_v1_Namespace__Output,
} from '../../../../containerd/services/namespaces/v1/Namespace'

export interface CreateNamespaceRequest {
  namespace?: _containerd_services_namespaces_v1_Namespace | null
}

export interface CreateNamespaceRequest__Output {
  namespace: _containerd_services_namespaces_v1_Namespace__Output | null
}
