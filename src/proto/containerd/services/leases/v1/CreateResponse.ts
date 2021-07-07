// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

import type {
  Lease as _containerd_services_leases_v1_Lease,
  Lease__Output as _containerd_services_leases_v1_Lease__Output,
} from '../../../../containerd/services/leases/v1/Lease'

export interface CreateResponse {
  lease?: _containerd_services_leases_v1_Lease | null
}

export interface CreateResponse__Output {
  lease?: _containerd_services_leases_v1_Lease__Output
}
