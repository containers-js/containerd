// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

export interface CommitSnapshotRequest {
  snapshotter?: string
  name?: string
  key?: string
  labels?: {[key: string]: string}
}

export interface CommitSnapshotRequest__Output {
  snapshotter?: string
  name?: string
  key?: string
  labels?: {[key: string]: string}
}
