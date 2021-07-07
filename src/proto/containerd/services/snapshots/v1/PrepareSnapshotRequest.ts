// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

export interface PrepareSnapshotRequest {
  snapshotter?: string
  key?: string
  parent?: string
  labels?: {[key: string]: string}
}

export interface PrepareSnapshotRequest__Output {
  snapshotter: string
  key: string
  parent: string
  labels: {[key: string]: string}
}
