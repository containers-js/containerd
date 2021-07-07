// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

export interface ListSnapshotsRequest {
  snapshotter?: string
  filters?: string[]
}

export interface ListSnapshotsRequest__Output {
  snapshotter: string
  filters: string[]
}
