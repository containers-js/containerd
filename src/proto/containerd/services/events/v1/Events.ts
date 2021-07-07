// Original file: proto/github.com/containerd/containerd/api/services/events/v1/events.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  Envelope as _containerd_services_events_v1_Envelope,
  Envelope__Output as _containerd_services_events_v1_Envelope__Output,
} from '../../../../containerd/services/events/v1/Envelope'
import type {
  ForwardRequest as _containerd_services_events_v1_ForwardRequest,
  ForwardRequest__Output as _containerd_services_events_v1_ForwardRequest__Output,
} from '../../../../containerd/services/events/v1/ForwardRequest'
import type {
  PublishRequest as _containerd_services_events_v1_PublishRequest,
  PublishRequest__Output as _containerd_services_events_v1_PublishRequest__Output,
} from '../../../../containerd/services/events/v1/PublishRequest'
import type {
  SubscribeRequest as _containerd_services_events_v1_SubscribeRequest,
  SubscribeRequest__Output as _containerd_services_events_v1_SubscribeRequest__Output,
} from '../../../../containerd/services/events/v1/SubscribeRequest'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface EventsClient extends grpc.Client {
  Forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  forward(
    argument: _containerd_services_events_v1_ForwardRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Publish(
    argument: _containerd_services_events_v1_PublishRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Publish(
    argument: _containerd_services_events_v1_PublishRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Publish(
    argument: _containerd_services_events_v1_PublishRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Publish(
    argument: _containerd_services_events_v1_PublishRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  publish(
    argument: _containerd_services_events_v1_PublishRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  publish(
    argument: _containerd_services_events_v1_PublishRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  publish(
    argument: _containerd_services_events_v1_PublishRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  publish(
    argument: _containerd_services_events_v1_PublishRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Subscribe(
    argument: _containerd_services_events_v1_SubscribeRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_events_v1_Envelope__Output>
  Subscribe(
    argument: _containerd_services_events_v1_SubscribeRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_events_v1_Envelope__Output>
  subscribe(
    argument: _containerd_services_events_v1_SubscribeRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_events_v1_Envelope__Output>
  subscribe(
    argument: _containerd_services_events_v1_SubscribeRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_events_v1_Envelope__Output>
}

export interface EventsHandlers extends grpc.UntypedServiceImplementation {
  Forward: grpc.handleUnaryCall<_containerd_services_events_v1_ForwardRequest__Output, _google_protobuf_Empty>

  Publish: grpc.handleUnaryCall<_containerd_services_events_v1_PublishRequest__Output, _google_protobuf_Empty>

  Subscribe: grpc.handleServerStreamingCall<
    _containerd_services_events_v1_SubscribeRequest__Output,
    _containerd_services_events_v1_Envelope
  >
}

export interface EventsDefinition extends grpc.ServiceDefinition {
  Forward: MethodDefinition<
    _containerd_services_events_v1_ForwardRequest,
    _google_protobuf_Empty,
    _containerd_services_events_v1_ForwardRequest__Output,
    _google_protobuf_Empty__Output
  >
  Publish: MethodDefinition<
    _containerd_services_events_v1_PublishRequest,
    _google_protobuf_Empty,
    _containerd_services_events_v1_PublishRequest__Output,
    _google_protobuf_Empty__Output
  >
  Subscribe: MethodDefinition<
    _containerd_services_events_v1_SubscribeRequest,
    _containerd_services_events_v1_Envelope,
    _containerd_services_events_v1_SubscribeRequest__Output,
    _containerd_services_events_v1_Envelope__Output
  >
}
