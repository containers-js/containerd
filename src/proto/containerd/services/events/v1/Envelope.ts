// Original file: proto/github.com/containerd/containerd/api/services/events/v1/events.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output,
} from '../../../../google/protobuf/Any'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../../../google/protobuf/Timestamp'

export interface Envelope {
  timestamp?: _google_protobuf_Timestamp | null
  namespace?: string
  topic?: string
  event?: _google_protobuf_Any | null
}

export interface Envelope__Output {
  timestamp: _google_protobuf_Timestamp__Output | null
  namespace: string
  topic: string
  event: _google_protobuf_Any__Output | null
}
