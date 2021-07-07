// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {
  Info as _containerd_services_content_v1_Info,
  Info__Output as _containerd_services_content_v1_Info__Output,
} from '../../../../containerd/services/content/v1/Info'

export interface ListContentResponse {
  info?: _containerd_services_content_v1_Info[]
}

export interface ListContentResponse__Output {
  info: _containerd_services_content_v1_Info__Output[]
}
