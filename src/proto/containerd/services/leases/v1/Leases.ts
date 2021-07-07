// Original file: proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  AddResourceRequest as _containerd_services_leases_v1_AddResourceRequest,
  AddResourceRequest__Output as _containerd_services_leases_v1_AddResourceRequest__Output,
} from '../../../../containerd/services/leases/v1/AddResourceRequest'
import type {
  CreateRequest as _containerd_services_leases_v1_CreateRequest,
  CreateRequest__Output as _containerd_services_leases_v1_CreateRequest__Output,
} from '../../../../containerd/services/leases/v1/CreateRequest'
import type {
  CreateResponse as _containerd_services_leases_v1_CreateResponse,
  CreateResponse__Output as _containerd_services_leases_v1_CreateResponse__Output,
} from '../../../../containerd/services/leases/v1/CreateResponse'
import type {
  DeleteRequest as _containerd_services_leases_v1_DeleteRequest,
  DeleteRequest__Output as _containerd_services_leases_v1_DeleteRequest__Output,
} from '../../../../containerd/services/leases/v1/DeleteRequest'
import type {
  DeleteResourceRequest as _containerd_services_leases_v1_DeleteResourceRequest,
  DeleteResourceRequest__Output as _containerd_services_leases_v1_DeleteResourceRequest__Output,
} from '../../../../containerd/services/leases/v1/DeleteResourceRequest'
import type {
  ListRequest as _containerd_services_leases_v1_ListRequest,
  ListRequest__Output as _containerd_services_leases_v1_ListRequest__Output,
} from '../../../../containerd/services/leases/v1/ListRequest'
import type {
  ListResourcesRequest as _containerd_services_leases_v1_ListResourcesRequest,
  ListResourcesRequest__Output as _containerd_services_leases_v1_ListResourcesRequest__Output,
} from '../../../../containerd/services/leases/v1/ListResourcesRequest'
import type {
  ListResourcesResponse as _containerd_services_leases_v1_ListResourcesResponse,
  ListResourcesResponse__Output as _containerd_services_leases_v1_ListResourcesResponse__Output,
} from '../../../../containerd/services/leases/v1/ListResourcesResponse'
import type {
  ListResponse as _containerd_services_leases_v1_ListResponse,
  ListResponse__Output as _containerd_services_leases_v1_ListResponse__Output,
} from '../../../../containerd/services/leases/v1/ListResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface LeasesClient extends grpc.Client {
  AddResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  AddResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  AddResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  AddResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  addResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  addResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  addResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  addResource(
    argument: _containerd_services_leases_v1_AddResourceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Create(
    argument: _containerd_services_leases_v1_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_leases_v1_CreateRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_leases_v1_CreateRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_leases_v1_CreateRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_leases_v1_CreateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_leases_v1_CreateRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_leases_v1_CreateRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_leases_v1_CreateRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_CreateResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_leases_v1_DeleteRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  DeleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  deleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  deleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  deleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  deleteResource(
    argument: _containerd_services_leases_v1_DeleteResourceRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_leases_v1_ListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_leases_v1_ListRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_leases_v1_ListRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_leases_v1_ListRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_leases_v1_ListRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_leases_v1_ListRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_leases_v1_ListRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_leases_v1_ListRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_leases_v1_ListResponse__Output) => void,
  ): grpc.ClientUnaryCall

  ListResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listResources(
    argument: _containerd_services_leases_v1_ListResourcesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_leases_v1_ListResourcesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
}

export interface LeasesHandlers extends grpc.UntypedServiceImplementation {
  AddResource: grpc.handleUnaryCall<_containerd_services_leases_v1_AddResourceRequest__Output, _google_protobuf_Empty>

  Create: grpc.handleUnaryCall<
    _containerd_services_leases_v1_CreateRequest__Output,
    _containerd_services_leases_v1_CreateResponse
  >

  Delete: grpc.handleUnaryCall<_containerd_services_leases_v1_DeleteRequest__Output, _google_protobuf_Empty>

  DeleteResource: grpc.handleUnaryCall<
    _containerd_services_leases_v1_DeleteResourceRequest__Output,
    _google_protobuf_Empty
  >

  List: grpc.handleUnaryCall<
    _containerd_services_leases_v1_ListRequest__Output,
    _containerd_services_leases_v1_ListResponse
  >

  ListResources: grpc.handleUnaryCall<
    _containerd_services_leases_v1_ListResourcesRequest__Output,
    _containerd_services_leases_v1_ListResourcesResponse
  >
}

export interface LeasesDefinition extends grpc.ServiceDefinition {
  AddResource: MethodDefinition<
    _containerd_services_leases_v1_AddResourceRequest,
    _google_protobuf_Empty,
    _containerd_services_leases_v1_AddResourceRequest__Output,
    _google_protobuf_Empty__Output
  >
  Create: MethodDefinition<
    _containerd_services_leases_v1_CreateRequest,
    _containerd_services_leases_v1_CreateResponse,
    _containerd_services_leases_v1_CreateRequest__Output,
    _containerd_services_leases_v1_CreateResponse__Output
  >
  Delete: MethodDefinition<
    _containerd_services_leases_v1_DeleteRequest,
    _google_protobuf_Empty,
    _containerd_services_leases_v1_DeleteRequest__Output,
    _google_protobuf_Empty__Output
  >
  DeleteResource: MethodDefinition<
    _containerd_services_leases_v1_DeleteResourceRequest,
    _google_protobuf_Empty,
    _containerd_services_leases_v1_DeleteResourceRequest__Output,
    _google_protobuf_Empty__Output
  >
  List: MethodDefinition<
    _containerd_services_leases_v1_ListRequest,
    _containerd_services_leases_v1_ListResponse,
    _containerd_services_leases_v1_ListRequest__Output,
    _containerd_services_leases_v1_ListResponse__Output
  >
  ListResources: MethodDefinition<
    _containerd_services_leases_v1_ListResourcesRequest,
    _containerd_services_leases_v1_ListResourcesResponse,
    _containerd_services_leases_v1_ListResourcesRequest__Output,
    _containerd_services_leases_v1_ListResourcesResponse__Output
  >
}
