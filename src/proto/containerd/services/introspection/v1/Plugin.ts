// Original file: proto/github.com/containerd/containerd/api/services/introspection/v1/introspection.proto

import type {
  Platform as _containerd_types_Platform,
  Platform__Output as _containerd_types_Platform__Output,
} from '../../../../containerd/types/Platform'
import type {
  Status as _google_rpc_Status,
  Status__Output as _google_rpc_Status__Output,
} from '../../../../google/rpc/Status'

export interface Plugin {
  type?: string
  id?: string
  requires?: string[]
  platforms?: _containerd_types_Platform[]
  exports?: {[key: string]: string}
  capabilities?: string[]
  initErr?: _google_rpc_Status | null
}

export interface Plugin__Output {
  type?: string
  id?: string
  requires?: string[]
  platforms?: _containerd_types_Platform__Output[]
  exports?: {[key: string]: string}
  capabilities?: string[]
  initErr?: _google_rpc_Status__Output
}
