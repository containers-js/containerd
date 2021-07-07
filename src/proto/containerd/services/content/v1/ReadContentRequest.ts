// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'

export interface ReadContentRequest {
  digest?: string
  offset?: number | string | Long
  size?: number | string | Long
}

export interface ReadContentRequest__Output {
  digest: string
  offset: Long
  size: Long
}
