// Original file: proto/github.com/containerd/containerd/api/types/mount.proto

export interface Mount {
  type?: string
  source?: string
  target?: string
  options?: string[]
}

export interface Mount__Output {
  type: string
  source: string
  target: string
  options: string[]
}
