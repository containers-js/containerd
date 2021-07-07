// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

import type {
  Resource as _containerd_services_leases_v1_Resource,
  Resource__Output as _containerd_services_leases_v1_Resource__Output,
} from '../../../../containerd/services/leases/v1/Resource'

export interface DeleteResourceRequest {
  id?: string
  resource?: _containerd_services_leases_v1_Resource | null
}

export interface DeleteResourceRequest__Output {
  id?: string
  resource?: _containerd_services_leases_v1_Resource__Output
}
