// Original file: proto/github.com/containerd/containerd/api/services/containers/v1/containers.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  CreateContainerRequest as _containerd_services_containers_v1_CreateContainerRequest,
  CreateContainerRequest__Output as _containerd_services_containers_v1_CreateContainerRequest__Output,
} from '../../../../containerd/services/containers/v1/CreateContainerRequest'
import type {
  CreateContainerResponse as _containerd_services_containers_v1_CreateContainerResponse,
  CreateContainerResponse__Output as _containerd_services_containers_v1_CreateContainerResponse__Output,
} from '../../../../containerd/services/containers/v1/CreateContainerResponse'
import type {
  DeleteContainerRequest as _containerd_services_containers_v1_DeleteContainerRequest,
  DeleteContainerRequest__Output as _containerd_services_containers_v1_DeleteContainerRequest__Output,
} from '../../../../containerd/services/containers/v1/DeleteContainerRequest'
import type {
  GetContainerRequest as _containerd_services_containers_v1_GetContainerRequest,
  GetContainerRequest__Output as _containerd_services_containers_v1_GetContainerRequest__Output,
} from '../../../../containerd/services/containers/v1/GetContainerRequest'
import type {
  GetContainerResponse as _containerd_services_containers_v1_GetContainerResponse,
  GetContainerResponse__Output as _containerd_services_containers_v1_GetContainerResponse__Output,
} from '../../../../containerd/services/containers/v1/GetContainerResponse'
import type {
  ListContainerMessage as _containerd_services_containers_v1_ListContainerMessage,
  ListContainerMessage__Output as _containerd_services_containers_v1_ListContainerMessage__Output,
} from '../../../../containerd/services/containers/v1/ListContainerMessage'
import type {
  ListContainersRequest as _containerd_services_containers_v1_ListContainersRequest,
  ListContainersRequest__Output as _containerd_services_containers_v1_ListContainersRequest__Output,
} from '../../../../containerd/services/containers/v1/ListContainersRequest'
import type {
  ListContainersResponse as _containerd_services_containers_v1_ListContainersResponse,
  ListContainersResponse__Output as _containerd_services_containers_v1_ListContainersResponse__Output,
} from '../../../../containerd/services/containers/v1/ListContainersResponse'
import type {
  UpdateContainerRequest as _containerd_services_containers_v1_UpdateContainerRequest,
  UpdateContainerRequest__Output as _containerd_services_containers_v1_UpdateContainerRequest__Output,
} from '../../../../containerd/services/containers/v1/UpdateContainerRequest'
import type {
  UpdateContainerResponse as _containerd_services_containers_v1_UpdateContainerResponse,
  UpdateContainerResponse__Output as _containerd_services_containers_v1_UpdateContainerResponse__Output,
} from '../../../../containerd/services/containers/v1/UpdateContainerResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface ContainersClient extends grpc.Client {
  Create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_containers_v1_CreateContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_CreateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_containers_v1_DeleteContainerRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_containers_v1_GetContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_GetContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_ListContainersResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  ListStream(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_containers_v1_ListContainerMessage__Output>
  ListStream(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_containers_v1_ListContainerMessage__Output>
  listStream(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_containers_v1_ListContainerMessage__Output>
  listStream(
    argument: _containerd_services_containers_v1_ListContainersRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_containers_v1_ListContainerMessage__Output>

  Update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_containers_v1_UpdateContainerRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_containers_v1_UpdateContainerResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
}

export interface ContainersHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _containerd_services_containers_v1_CreateContainerRequest__Output,
    _containerd_services_containers_v1_CreateContainerResponse
  >

  Delete: grpc.handleUnaryCall<
    _containerd_services_containers_v1_DeleteContainerRequest__Output,
    _google_protobuf_Empty
  >

  Get: grpc.handleUnaryCall<
    _containerd_services_containers_v1_GetContainerRequest__Output,
    _containerd_services_containers_v1_GetContainerResponse
  >

  List: grpc.handleUnaryCall<
    _containerd_services_containers_v1_ListContainersRequest__Output,
    _containerd_services_containers_v1_ListContainersResponse
  >

  ListStream: grpc.handleServerStreamingCall<
    _containerd_services_containers_v1_ListContainersRequest__Output,
    _containerd_services_containers_v1_ListContainerMessage
  >

  Update: grpc.handleUnaryCall<
    _containerd_services_containers_v1_UpdateContainerRequest__Output,
    _containerd_services_containers_v1_UpdateContainerResponse
  >
}

export interface ContainersDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _containerd_services_containers_v1_CreateContainerRequest,
    _containerd_services_containers_v1_CreateContainerResponse,
    _containerd_services_containers_v1_CreateContainerRequest__Output,
    _containerd_services_containers_v1_CreateContainerResponse__Output
  >
  Delete: MethodDefinition<
    _containerd_services_containers_v1_DeleteContainerRequest,
    _google_protobuf_Empty,
    _containerd_services_containers_v1_DeleteContainerRequest__Output,
    _google_protobuf_Empty__Output
  >
  Get: MethodDefinition<
    _containerd_services_containers_v1_GetContainerRequest,
    _containerd_services_containers_v1_GetContainerResponse,
    _containerd_services_containers_v1_GetContainerRequest__Output,
    _containerd_services_containers_v1_GetContainerResponse__Output
  >
  List: MethodDefinition<
    _containerd_services_containers_v1_ListContainersRequest,
    _containerd_services_containers_v1_ListContainersResponse,
    _containerd_services_containers_v1_ListContainersRequest__Output,
    _containerd_services_containers_v1_ListContainersResponse__Output
  >
  ListStream: MethodDefinition<
    _containerd_services_containers_v1_ListContainersRequest,
    _containerd_services_containers_v1_ListContainerMessage,
    _containerd_services_containers_v1_ListContainersRequest__Output,
    _containerd_services_containers_v1_ListContainerMessage__Output
  >
  Update: MethodDefinition<
    _containerd_services_containers_v1_UpdateContainerRequest,
    _containerd_services_containers_v1_UpdateContainerResponse,
    _containerd_services_containers_v1_UpdateContainerRequest__Output,
    _containerd_services_containers_v1_UpdateContainerResponse__Output
  >
}
