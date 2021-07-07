// Original file: proto/github.com/containerd/containerd/api/services/introspection/v1/introspection.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  PluginsRequest as _containerd_services_introspection_v1_PluginsRequest,
  PluginsRequest__Output as _containerd_services_introspection_v1_PluginsRequest__Output,
} from '../../../../containerd/services/introspection/v1/PluginsRequest'
import type {
  PluginsResponse as _containerd_services_introspection_v1_PluginsResponse,
  PluginsResponse__Output as _containerd_services_introspection_v1_PluginsResponse__Output,
} from '../../../../containerd/services/introspection/v1/PluginsResponse'
import type {
  ServerResponse as _containerd_services_introspection_v1_ServerResponse,
  ServerResponse__Output as _containerd_services_introspection_v1_ServerResponse__Output,
} from '../../../../containerd/services/introspection/v1/ServerResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface IntrospectionClient extends grpc.Client {
  Plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  plugins(
    argument: _containerd_services_introspection_v1_PluginsRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_PluginsResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Server(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Server(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Server(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Server(
    argument: _google_protobuf_Empty,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  server(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  server(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  server(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  server(
    argument: _google_protobuf_Empty,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_introspection_v1_ServerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
}

export interface IntrospectionHandlers extends grpc.UntypedServiceImplementation {
  Plugins: grpc.handleUnaryCall<
    _containerd_services_introspection_v1_PluginsRequest__Output,
    _containerd_services_introspection_v1_PluginsResponse
  >

  Server: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _containerd_services_introspection_v1_ServerResponse>
}

export interface IntrospectionDefinition extends grpc.ServiceDefinition {
  Plugins: MethodDefinition<
    _containerd_services_introspection_v1_PluginsRequest,
    _containerd_services_introspection_v1_PluginsResponse,
    _containerd_services_introspection_v1_PluginsRequest__Output,
    _containerd_services_introspection_v1_PluginsResponse__Output
  >
  Server: MethodDefinition<
    _google_protobuf_Empty,
    _containerd_services_introspection_v1_ServerResponse,
    _google_protobuf_Empty__Output,
    _containerd_services_introspection_v1_ServerResponse__Output
  >
}
