// Original file: proto/github.com/containerd/containerd/api/services/diff/v1/diff.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  ApplyRequest as _containerd_services_diff_v1_ApplyRequest,
  ApplyRequest__Output as _containerd_services_diff_v1_ApplyRequest__Output,
} from '../../../../containerd/services/diff/v1/ApplyRequest'
import type {
  ApplyResponse as _containerd_services_diff_v1_ApplyResponse,
  ApplyResponse__Output as _containerd_services_diff_v1_ApplyResponse__Output,
} from '../../../../containerd/services/diff/v1/ApplyResponse'
import type {
  DiffRequest as _containerd_services_diff_v1_DiffRequest,
  DiffRequest__Output as _containerd_services_diff_v1_DiffRequest__Output,
} from '../../../../containerd/services/diff/v1/DiffRequest'
import type {
  DiffResponse as _containerd_services_diff_v1_DiffResponse,
  DiffResponse__Output as _containerd_services_diff_v1_DiffResponse__Output,
} from '../../../../containerd/services/diff/v1/DiffResponse'

export interface DiffClient extends grpc.Client {
  Apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall
  apply(
    argument: _containerd_services_diff_v1_ApplyRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_ApplyResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
  diff(
    argument: _containerd_services_diff_v1_DiffRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_diff_v1_DiffResponse__Output) => void,
  ): grpc.ClientUnaryCall
}

export interface DiffHandlers extends grpc.UntypedServiceImplementation {
  Apply: grpc.handleUnaryCall<
    _containerd_services_diff_v1_ApplyRequest__Output,
    _containerd_services_diff_v1_ApplyResponse
  >

  Diff: grpc.handleUnaryCall<
    _containerd_services_diff_v1_DiffRequest__Output,
    _containerd_services_diff_v1_DiffResponse
  >
}

export interface DiffDefinition extends grpc.ServiceDefinition {
  Apply: MethodDefinition<
    _containerd_services_diff_v1_ApplyRequest,
    _containerd_services_diff_v1_ApplyResponse,
    _containerd_services_diff_v1_ApplyRequest__Output,
    _containerd_services_diff_v1_ApplyResponse__Output
  >
  Diff: MethodDefinition<
    _containerd_services_diff_v1_DiffRequest,
    _containerd_services_diff_v1_DiffResponse,
    _containerd_services_diff_v1_DiffRequest__Output,
    _containerd_services_diff_v1_DiffResponse__Output
  >
}
