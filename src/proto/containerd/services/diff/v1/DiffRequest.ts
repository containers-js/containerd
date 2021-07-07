// Original file: proto/github.com/containerd/containerd/api/services/diff/v1/diff.proto

import type {
  Mount as _containerd_types_Mount,
  Mount__Output as _containerd_types_Mount__Output,
} from '../../../../containerd/types/Mount'

export interface DiffRequest {
  left?: _containerd_types_Mount[]
  right?: _containerd_types_Mount[]
  mediaType?: string
  ref?: string
  labels?: {[key: string]: string}
}

export interface DiffRequest__Output {
  left?: _containerd_types_Mount__Output[]
  right?: _containerd_types_Mount__Output[]
  mediaType?: string
  ref?: string
  labels?: {[key: string]: string}
}
