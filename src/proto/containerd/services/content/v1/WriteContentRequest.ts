// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type {Long} from '@grpc/proto-loader'
import type {WriteAction as _containerd_services_content_v1_WriteAction} from '../../../../containerd/services/content/v1/WriteAction'

export interface WriteContentRequest {
  action?: _containerd_services_content_v1_WriteAction | keyof typeof _containerd_services_content_v1_WriteAction
  ref?: string
  total?: number | string | Long
  expected?: string
  offset?: number | string | Long
  data?: Buffer | Uint8Array | string
  labels?: {[key: string]: string}
}

export interface WriteContentRequest__Output {
  action: _containerd_services_content_v1_WriteAction
  ref: string
  total: Long
  expected: string
  offset: Long
  data: Buffer
  labels: {[key: string]: string}
}
