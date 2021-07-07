// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

export interface ResizePtyRequest {
  containerId?: string
  execId?: string
  width?: number
  height?: number
}

export interface ResizePtyRequest__Output {
  containerId: string
  execId: string
  width: number
  height: number
}
