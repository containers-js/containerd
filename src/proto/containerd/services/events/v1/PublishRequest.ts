// Original file: proto/github.com/containerd/containerd/api/services/events/v1/events.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'

export interface PublishRequest {
  topic?: string
  event?: _google_protobuf_Any | null
}

export interface PublishRequest__Output {
  topic: string
  event: _google_protobuf_Any__Output | null
}
