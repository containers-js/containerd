// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface WaitRequest {
  containerId?: string
  execId?: string
}

export interface WaitRequest__Output {
  containerId: string
  execId: string
}
