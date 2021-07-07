// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

export interface UsageRequest {
  snapshotter?: string
  key?: string
}

export interface UsageRequest__Output {
  snapshotter: string
  key: string
}
