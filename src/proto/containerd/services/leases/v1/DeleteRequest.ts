// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

export interface DeleteRequest {
  id?: string
  sync?: boolean
}

export interface DeleteRequest__Output {
  id: string
  sync: boolean
}
