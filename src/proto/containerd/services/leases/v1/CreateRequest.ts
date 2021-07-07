// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

export interface CreateRequest {
  id?: string
  labels?: {[key: string]: string}
}

export interface CreateRequest__Output {
  id: string
  labels: {[key: string]: string}
}
