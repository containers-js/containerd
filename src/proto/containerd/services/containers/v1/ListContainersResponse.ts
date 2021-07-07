// Original file: proto/github.com/containerd/containerd/api/services/containers/v1/containers.proto

import type {
  Container as _containerd_services_containers_v1_Container,
  Container__Output as _containerd_services_containers_v1_Container__Output,
} from '../../../../containerd/services/containers/v1/Container'

export interface ListContainersResponse {
  containers?: _containerd_services_containers_v1_Container[]
}

export interface ListContainersResponse__Output {
  containers?: _containerd_services_containers_v1_Container__Output[]
}
