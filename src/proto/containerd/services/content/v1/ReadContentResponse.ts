// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'

export interface ReadContentResponse {
  offset?: number | string | Long
  data?: Buffer | Uint8Array | string
}

export interface ReadContentResponse__Output {
  offset: Long
  data: Buffer
}
