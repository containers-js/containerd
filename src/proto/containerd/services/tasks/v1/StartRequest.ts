// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface StartRequest {
  containerId?: string
  execId?: string
}

export interface StartRequest__Output {
  containerId: string
  execId: string
}
