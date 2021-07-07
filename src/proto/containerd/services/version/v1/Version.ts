// Original file: proto/github.com/containerd/containerd/api/services/version/v1/version.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  VersionResponse as _containerd_services_version_v1_VersionResponse,
  VersionResponse__Output as _containerd_services_version_v1_VersionResponse__Output,
} from '../../../../containerd/services/version/v1/VersionResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface VersionClient extends grpc.Client {
  Version(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Version(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Version(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Version(
    argument: _google_protobuf_Empty,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  version(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  version(
    argument: _google_protobuf_Empty,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  version(
    argument: _google_protobuf_Empty,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
  version(
    argument: _google_protobuf_Empty,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_version_v1_VersionResponse__Output) => void,
  ): grpc.ClientUnaryCall
}

export interface VersionHandlers extends grpc.UntypedServiceImplementation {
  Version: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _containerd_services_version_v1_VersionResponse>
}

export interface VersionDefinition extends grpc.ServiceDefinition {
  Version: MethodDefinition<
    _google_protobuf_Empty,
    _containerd_services_version_v1_VersionResponse,
    _google_protobuf_Empty__Output,
    _containerd_services_version_v1_VersionResponse__Output
  >
}
