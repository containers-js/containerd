// Original file: proto/github.com/containerd/containerd/api/types/descriptor.proto

import type {Long} from '@grpc/proto-loader'

export interface Descriptor {
  mediaType?: string
  digest?: string
  size?: number | string | Long
  annotations?: {[key: string]: string}
}

export interface Descriptor__Output {
  mediaType: string
  digest: string
  size: Long
  annotations: {[key: string]: string}
}
