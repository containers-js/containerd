// Original file: proto/github.com/containerd/containerd/api/types/metrics.proto

import type {Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output} from '../../google/protobuf/Any'
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output,
} from '../../google/protobuf/Timestamp'

export interface Metric {
  timestamp?: _google_protobuf_Timestamp | null
  id?: string
  data?: _google_protobuf_Any | null
}

export interface Metric__Output {
  timestamp?: _google_protobuf_Timestamp__Output
  id?: string
  data?: _google_protobuf_Any__Output
}
