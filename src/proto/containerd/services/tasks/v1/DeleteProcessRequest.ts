// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface DeleteProcessRequest {
  containerId?: string
  execId?: string
}

export interface DeleteProcessRequest__Output {
  containerId: string
  execId: string
}
