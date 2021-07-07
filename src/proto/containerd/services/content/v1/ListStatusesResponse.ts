// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {
  Status as _containerd_services_content_v1_Status,
  Status__Output as _containerd_services_content_v1_Status__Output,
} from '../../../../containerd/services/content/v1/Status'

export interface ListStatusesResponse {
  statuses?: _containerd_services_content_v1_Status[]
}

export interface ListStatusesResponse__Output {
  statuses: _containerd_services_content_v1_Status__Output[]
}
