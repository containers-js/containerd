// Original file: proto/github.com/containerd/containerd/api/services/ttrpc/events/v1/events.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  ForwardRequest as _containerd_services_events_ttrpc_v1_ForwardRequest,
  ForwardRequest__Output as _containerd_services_events_ttrpc_v1_ForwardRequest__Output,
} from '../../../../../containerd/services/events/ttrpc/v1/ForwardRequest'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../../google/protobuf/Empty'

export interface EventsClient extends grpc.Client {
  Forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_ttrpc_v1_ForwardRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
}

export interface EventsHandlers extends grpc.UntypedServiceImplementation {
  Forward: grpc.handleUnaryCall<_containerd_services_events_ttrpc_v1_ForwardRequest__Output, _google_protobuf_Empty>
}

export interface EventsDefinition extends grpc.ServiceDefinition {
  Forward: MethodDefinition<
    _containerd_services_events_ttrpc_v1_ForwardRequest,
    _google_protobuf_Empty,
    _containerd_services_events_ttrpc_v1_ForwardRequest__Output,
    _google_protobuf_Empty__Output
  >
}
