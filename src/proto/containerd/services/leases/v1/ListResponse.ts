// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

import type {
  Lease as _containerd_services_leases_v1_Lease,
  Lease__Output as _containerd_services_leases_v1_Lease__Output,
} from '../../../../containerd/services/leases/v1/Lease'

export interface ListResponse {
  leases?: _containerd_services_leases_v1_Lease[]
}

export interface ListResponse__Output {
  leases: _containerd_services_leases_v1_Lease__Output[]
}
