// Original file: proto/github.com/containerd/containerd/api/services/namespaces/v1/namespace.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  CreateNamespaceRequest as _containerd_services_namespaces_v1_CreateNamespaceRequest,
  CreateNamespaceRequest__Output as _containerd_services_namespaces_v1_CreateNamespaceRequest__Output,
} from '../../../../containerd/services/namespaces/v1/CreateNamespaceRequest'
import type {
  CreateNamespaceResponse as _containerd_services_namespaces_v1_CreateNamespaceResponse,
  CreateNamespaceResponse__Output as _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
} from '../../../../containerd/services/namespaces/v1/CreateNamespaceResponse'
import type {
  DeleteNamespaceRequest as _containerd_services_namespaces_v1_DeleteNamespaceRequest,
  DeleteNamespaceRequest__Output as _containerd_services_namespaces_v1_DeleteNamespaceRequest__Output,
} from '../../../../containerd/services/namespaces/v1/DeleteNamespaceRequest'
import type {
  GetNamespaceRequest as _containerd_services_namespaces_v1_GetNamespaceRequest,
  GetNamespaceRequest__Output as _containerd_services_namespaces_v1_GetNamespaceRequest__Output,
} from '../../../../containerd/services/namespaces/v1/GetNamespaceRequest'
import type {
  GetNamespaceResponse as _containerd_services_namespaces_v1_GetNamespaceResponse,
  GetNamespaceResponse__Output as _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
} from '../../../../containerd/services/namespaces/v1/GetNamespaceResponse'
import type {
  ListNamespacesRequest as _containerd_services_namespaces_v1_ListNamespacesRequest,
  ListNamespacesRequest__Output as _containerd_services_namespaces_v1_ListNamespacesRequest__Output,
} from '../../../../containerd/services/namespaces/v1/ListNamespacesRequest'
import type {
  ListNamespacesResponse as _containerd_services_namespaces_v1_ListNamespacesResponse,
  ListNamespacesResponse__Output as _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
} from '../../../../containerd/services/namespaces/v1/ListNamespacesResponse'
import type {
  UpdateNamespaceRequest as _containerd_services_namespaces_v1_UpdateNamespaceRequest,
  UpdateNamespaceRequest__Output as _containerd_services_namespaces_v1_UpdateNamespaceRequest__Output,
} from '../../../../containerd/services/namespaces/v1/UpdateNamespaceRequest'
import type {
  UpdateNamespaceResponse as _containerd_services_namespaces_v1_UpdateNamespaceResponse,
  UpdateNamespaceResponse__Output as _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
} from '../../../../containerd/services/namespaces/v1/UpdateNamespaceResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface NamespacesClient extends grpc.Client {
  Create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_namespaces_v1_CreateNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_CreateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_namespaces_v1_GetNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_GetNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_namespaces_v1_ListNamespacesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_ListNamespacesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
}

export interface NamespacesHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _containerd_services_namespaces_v1_CreateNamespaceRequest__Output,
    _containerd_services_namespaces_v1_CreateNamespaceResponse
  >

  Delete: grpc.handleUnaryCall<
    _containerd_services_namespaces_v1_DeleteNamespaceRequest__Output,
    _google_protobuf_Empty
  >

  Get: grpc.handleUnaryCall<
    _containerd_services_namespaces_v1_GetNamespaceRequest__Output,
    _containerd_services_namespaces_v1_GetNamespaceResponse
  >

  List: grpc.handleUnaryCall<
    _containerd_services_namespaces_v1_ListNamespacesRequest__Output,
    _containerd_services_namespaces_v1_ListNamespacesResponse
  >

  Update: grpc.handleUnaryCall<
    _containerd_services_namespaces_v1_UpdateNamespaceRequest__Output,
    _containerd_services_namespaces_v1_UpdateNamespaceResponse
  >
}

export interface NamespacesDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _containerd_services_namespaces_v1_CreateNamespaceRequest,
    _containerd_services_namespaces_v1_CreateNamespaceResponse,
    _containerd_services_namespaces_v1_CreateNamespaceRequest__Output,
    _containerd_services_namespaces_v1_CreateNamespaceResponse__Output
  >
  Delete: MethodDefinition<
    _containerd_services_namespaces_v1_DeleteNamespaceRequest,
    _google_protobuf_Empty,
    _containerd_services_namespaces_v1_DeleteNamespaceRequest__Output,
    _google_protobuf_Empty__Output
  >
  Get: MethodDefinition<
    _containerd_services_namespaces_v1_GetNamespaceRequest,
    _containerd_services_namespaces_v1_GetNamespaceResponse,
    _containerd_services_namespaces_v1_GetNamespaceRequest__Output,
    _containerd_services_namespaces_v1_GetNamespaceResponse__Output
  >
  List: MethodDefinition<
    _containerd_services_namespaces_v1_ListNamespacesRequest,
    _containerd_services_namespaces_v1_ListNamespacesResponse,
    _containerd_services_namespaces_v1_ListNamespacesRequest__Output,
    _containerd_services_namespaces_v1_ListNamespacesResponse__Output
  >
  Update: MethodDefinition<
    _containerd_services_namespaces_v1_UpdateNamespaceRequest,
    _containerd_services_namespaces_v1_UpdateNamespaceResponse,
    _containerd_services_namespaces_v1_UpdateNamespaceRequest__Output,
    _containerd_services_namespaces_v1_UpdateNamespaceResponse__Output
  >
}
