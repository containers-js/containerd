// Original file: proto/github.com/containerd/containerd/api/services/namespaces/v1/namespace.proto

export interface Namespace {
  name?: string
  labels?: {[key: string]: string}
}

export interface Namespace__Output {
  name: string
  labels: {[key: string]: string}
}
