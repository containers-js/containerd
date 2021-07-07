// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type {Long} from '@grpc/proto-loader'

export interface UsageResponse {
  size?: number | string | Long
  inodes?: number | string | Long
}

export interface UsageResponse__Output {
  size: Long
  inodes: Long
}
