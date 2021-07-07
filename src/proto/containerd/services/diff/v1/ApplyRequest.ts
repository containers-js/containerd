// Original file: proto/github.com/containerd/containerd/api/services/diff/v1/diff.proto

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

export interface ApplyRequest {
  diff?: _containerd_types_Descriptor | null
  mounts?: _containerd_types_Mount[]
  payloads?: {[key: string]: _google_protobuf_Any}
}

export interface ApplyRequest__Output {
  diff: _containerd_types_Descriptor__Output | null
  mounts: _containerd_types_Mount__Output[]
  payloads: {[key: string]: _google_protobuf_Any__Output}
}
