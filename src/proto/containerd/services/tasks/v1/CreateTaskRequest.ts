// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Descriptor as _containerd_types_Descriptor,
  Descriptor__Output as _containerd_types_Descriptor__Output,
} from '../../../../containerd/types/Descriptor'
import type {
  Mount as _containerd_types_Mount,
  Mount__Output as _containerd_types_Mount__Output,
} from '../../../../containerd/types/Mount'
import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'

export interface CreateTaskRequest {
  containerId?: string
  rootfs?: _containerd_types_Mount[]
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  checkpoint?: _containerd_types_Descriptor | null
  options?: _google_protobuf_Any | null
}

export interface CreateTaskRequest__Output {
  containerId?: string
  rootfs?: _containerd_types_Mount__Output[]
  stdin?: string
  stdout?: string
  stderr?: string
  terminal?: boolean
  checkpoint?: _containerd_types_Descriptor__Output
  options?: _google_protobuf_Any__Output
}
