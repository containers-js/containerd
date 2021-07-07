// Original file: proto/github.com/containerd/containerd/api/services/events/v1/events.proto

import type {
  Envelope as _containerd_services_events_v1_Envelope,
  Envelope__Output as _containerd_services_events_v1_Envelope__Output,
} from '../../../../containerd/services/events/v1/Envelope'

export interface ForwardRequest {
  envelope?: _containerd_services_events_v1_Envelope | null
}

export interface ForwardRequest__Output {
  envelope?: _containerd_services_events_v1_Envelope__Output
}
