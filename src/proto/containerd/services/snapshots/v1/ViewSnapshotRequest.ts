// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

export interface ViewSnapshotRequest {
  snapshotter?: string
  key?: string
  parent?: string
  labels?: {[key: string]: string}
}

export interface ViewSnapshotRequest__Output {
  snapshotter?: string
  key?: string
  parent?: string
  labels?: {[key: string]: string}
}
