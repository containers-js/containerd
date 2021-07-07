// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface KillRequest {
  containerId?: string
  execId?: string
  signal?: number
  all?: boolean
}

export interface KillRequest__Output {
  containerId?: string
  execId?: string
  signal?: number
  all?: boolean
}
