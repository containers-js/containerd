// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface CloseIORequest {
  containerId?: string
  execId?: string
  stdin?: boolean
}

export interface CloseIORequest__Output {
  containerId?: string
  execId?: string
  stdin?: boolean
}
