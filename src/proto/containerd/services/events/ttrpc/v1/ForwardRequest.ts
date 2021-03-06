// Original file: proto/github.com/containerd/containerd/api/services/ttrpc/events/v1/events.proto

import type {
  Envelope as _containerd_services_events_ttrpc_v1_Envelope,
  Envelope__Output as _containerd_services_events_ttrpc_v1_Envelope__Output,
} from '../../../../../containerd/services/events/ttrpc/v1/Envelope'

export interface ForwardRequest {
  envelope?: _containerd_services_events_ttrpc_v1_Envelope | null
}

export interface ForwardRequest__Output {
  envelope: _containerd_services_events_ttrpc_v1_Envelope__Output | null
}
