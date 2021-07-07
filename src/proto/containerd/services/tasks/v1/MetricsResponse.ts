// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type {
  Metric as _containerd_types_Metric,
  Metric__Output as _containerd_types_Metric__Output,
} from '../../../../containerd/types/Metric'

export interface MetricsResponse {
  metrics?: _containerd_types_Metric[]
}

export interface MetricsResponse__Output {
  metrics: _containerd_types_Metric__Output[]
}
