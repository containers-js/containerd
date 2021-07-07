// Original file: proto/github.com/containerd/containerd/api/services/content/v1/content.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  AbortRequest as _containerd_services_content_v1_AbortRequest,
  AbortRequest__Output as _containerd_services_content_v1_AbortRequest__Output,
} from '../../../../containerd/services/content/v1/AbortRequest'
import type {
  DeleteContentRequest as _containerd_services_content_v1_DeleteContentRequest,
  DeleteContentRequest__Output as _containerd_services_content_v1_DeleteContentRequest__Output,
} from '../../../../containerd/services/content/v1/DeleteContentRequest'
import type {
  InfoRequest as _containerd_services_content_v1_InfoRequest,
  InfoRequest__Output as _containerd_services_content_v1_InfoRequest__Output,
} from '../../../../containerd/services/content/v1/InfoRequest'
import type {
  InfoResponse as _containerd_services_content_v1_InfoResponse,
  InfoResponse__Output as _containerd_services_content_v1_InfoResponse__Output,
} from '../../../../containerd/services/content/v1/InfoResponse'
import type {
  ListContentRequest as _containerd_services_content_v1_ListContentRequest,
  ListContentRequest__Output as _containerd_services_content_v1_ListContentRequest__Output,
} from '../../../../containerd/services/content/v1/ListContentRequest'
import type {
  ListContentResponse as _containerd_services_content_v1_ListContentResponse,
  ListContentResponse__Output as _containerd_services_content_v1_ListContentResponse__Output,
} from '../../../../containerd/services/content/v1/ListContentResponse'
import type {
  ListStatusesRequest as _containerd_services_content_v1_ListStatusesRequest,
  ListStatusesRequest__Output as _containerd_services_content_v1_ListStatusesRequest__Output,
} from '../../../../containerd/services/content/v1/ListStatusesRequest'
import type {
  ListStatusesResponse as _containerd_services_content_v1_ListStatusesResponse,
  ListStatusesResponse__Output as _containerd_services_content_v1_ListStatusesResponse__Output,
} from '../../../../containerd/services/content/v1/ListStatusesResponse'
import type {
  ReadContentRequest as _containerd_services_content_v1_ReadContentRequest,
  ReadContentRequest__Output as _containerd_services_content_v1_ReadContentRequest__Output,
} from '../../../../containerd/services/content/v1/ReadContentRequest'
import type {
  ReadContentResponse as _containerd_services_content_v1_ReadContentResponse,
  ReadContentResponse__Output as _containerd_services_content_v1_ReadContentResponse__Output,
} from '../../../../containerd/services/content/v1/ReadContentResponse'
import type {
  StatusRequest as _containerd_services_content_v1_StatusRequest,
  StatusRequest__Output as _containerd_services_content_v1_StatusRequest__Output,
} from '../../../../containerd/services/content/v1/StatusRequest'
import type {
  StatusResponse as _containerd_services_content_v1_StatusResponse,
  StatusResponse__Output as _containerd_services_content_v1_StatusResponse__Output,
} from '../../../../containerd/services/content/v1/StatusResponse'
import type {
  UpdateRequest as _containerd_services_content_v1_UpdateRequest,
  UpdateRequest__Output as _containerd_services_content_v1_UpdateRequest__Output,
} from '../../../../containerd/services/content/v1/UpdateRequest'
import type {
  UpdateResponse as _containerd_services_content_v1_UpdateResponse,
  UpdateResponse__Output as _containerd_services_content_v1_UpdateResponse__Output,
} from '../../../../containerd/services/content/v1/UpdateResponse'
import type {
  WriteContentRequest as _containerd_services_content_v1_WriteContentRequest,
  WriteContentRequest__Output as _containerd_services_content_v1_WriteContentRequest__Output,
} from '../../../../containerd/services/content/v1/WriteContentRequest'
import type {
  WriteContentResponse as _containerd_services_content_v1_WriteContentResponse,
  WriteContentResponse__Output as _containerd_services_content_v1_WriteContentResponse__Output,
} from '../../../../containerd/services/content/v1/WriteContentResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface ContentClient extends grpc.Client {
  Abort(
    argument: _containerd_services_content_v1_AbortRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Abort(
    argument: _containerd_services_content_v1_AbortRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Abort(
    argument: _containerd_services_content_v1_AbortRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Abort(
    argument: _containerd_services_content_v1_AbortRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  abort(
    argument: _containerd_services_content_v1_AbortRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  abort(
    argument: _containerd_services_content_v1_AbortRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  abort(
    argument: _containerd_services_content_v1_AbortRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  abort(
    argument: _containerd_services_content_v1_AbortRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_content_v1_DeleteContentRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Info(
    argument: _containerd_services_content_v1_InfoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Info(
    argument: _containerd_services_content_v1_InfoRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Info(
    argument: _containerd_services_content_v1_InfoRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Info(
    argument: _containerd_services_content_v1_InfoRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  info(
    argument: _containerd_services_content_v1_InfoRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  info(
    argument: _containerd_services_content_v1_InfoRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  info(
    argument: _containerd_services_content_v1_InfoRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall
  info(
    argument: _containerd_services_content_v1_InfoRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_InfoResponse__Output) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_content_v1_ListContentRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ListContentResponse__Output>
  List(
    argument: _containerd_services_content_v1_ListContentRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ListContentResponse__Output>
  list(
    argument: _containerd_services_content_v1_ListContentRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ListContentResponse__Output>
  list(
    argument: _containerd_services_content_v1_ListContentRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ListContentResponse__Output>

  ListStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  ListStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  listStatuses(
    argument: _containerd_services_content_v1_ListStatusesRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_content_v1_ListStatusesResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Read(
    argument: _containerd_services_content_v1_ReadContentRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ReadContentResponse__Output>
  Read(
    argument: _containerd_services_content_v1_ReadContentRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ReadContentResponse__Output>
  read(
    argument: _containerd_services_content_v1_ReadContentRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ReadContentResponse__Output>
  read(
    argument: _containerd_services_content_v1_ReadContentRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_content_v1_ReadContentResponse__Output>

  Status(
    argument: _containerd_services_content_v1_StatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Status(
    argument: _containerd_services_content_v1_StatusRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Status(
    argument: _containerd_services_content_v1_StatusRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Status(
    argument: _containerd_services_content_v1_StatusRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  status(
    argument: _containerd_services_content_v1_StatusRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  status(
    argument: _containerd_services_content_v1_StatusRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  status(
    argument: _containerd_services_content_v1_StatusRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall
  status(
    argument: _containerd_services_content_v1_StatusRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_StatusResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Update(
    argument: _containerd_services_content_v1_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_content_v1_UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_content_v1_UpdateRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_content_v1_UpdateRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_content_v1_UpdateRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_content_v1_UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_content_v1_UpdateRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_content_v1_UpdateRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_content_v1_UpdateResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Write(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _containerd_services_content_v1_WriteContentRequest,
    _containerd_services_content_v1_WriteContentResponse__Output
  >
  Write(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _containerd_services_content_v1_WriteContentRequest,
    _containerd_services_content_v1_WriteContentResponse__Output
  >
  write(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _containerd_services_content_v1_WriteContentRequest,
    _containerd_services_content_v1_WriteContentResponse__Output
  >
  write(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _containerd_services_content_v1_WriteContentRequest,
    _containerd_services_content_v1_WriteContentResponse__Output
  >
}

export interface ContentHandlers extends grpc.UntypedServiceImplementation {
  Abort: grpc.handleUnaryCall<_containerd_services_content_v1_AbortRequest__Output, _google_protobuf_Empty>

  Delete: grpc.handleUnaryCall<_containerd_services_content_v1_DeleteContentRequest__Output, _google_protobuf_Empty>

  Info: grpc.handleUnaryCall<
    _containerd_services_content_v1_InfoRequest__Output,
    _containerd_services_content_v1_InfoResponse
  >

  List: grpc.handleServerStreamingCall<
    _containerd_services_content_v1_ListContentRequest__Output,
    _containerd_services_content_v1_ListContentResponse
  >

  ListStatuses: grpc.handleUnaryCall<
    _containerd_services_content_v1_ListStatusesRequest__Output,
    _containerd_services_content_v1_ListStatusesResponse
  >

  Read: grpc.handleServerStreamingCall<
    _containerd_services_content_v1_ReadContentRequest__Output,
    _containerd_services_content_v1_ReadContentResponse
  >

  Status: grpc.handleUnaryCall<
    _containerd_services_content_v1_StatusRequest__Output,
    _containerd_services_content_v1_StatusResponse
  >

  Update: grpc.handleUnaryCall<
    _containerd_services_content_v1_UpdateRequest__Output,
    _containerd_services_content_v1_UpdateResponse
  >

  Write: grpc.handleBidiStreamingCall<
    _containerd_services_content_v1_WriteContentRequest__Output,
    _containerd_services_content_v1_WriteContentResponse
  >
}

export interface ContentDefinition extends grpc.ServiceDefinition {
  Abort: MethodDefinition<
    _containerd_services_content_v1_AbortRequest,
    _google_protobuf_Empty,
    _containerd_services_content_v1_AbortRequest__Output,
    _google_protobuf_Empty__Output
  >
  Delete: MethodDefinition<
    _containerd_services_content_v1_DeleteContentRequest,
    _google_protobuf_Empty,
    _containerd_services_content_v1_DeleteContentRequest__Output,
    _google_protobuf_Empty__Output
  >
  Info: MethodDefinition<
    _containerd_services_content_v1_InfoRequest,
    _containerd_services_content_v1_InfoResponse,
    _containerd_services_content_v1_InfoRequest__Output,
    _containerd_services_content_v1_InfoResponse__Output
  >
  List: MethodDefinition<
    _containerd_services_content_v1_ListContentRequest,
    _containerd_services_content_v1_ListContentResponse,
    _containerd_services_content_v1_ListContentRequest__Output,
    _containerd_services_content_v1_ListContentResponse__Output
  >
  ListStatuses: MethodDefinition<
    _containerd_services_content_v1_ListStatusesRequest,
    _containerd_services_content_v1_ListStatusesResponse,
    _containerd_services_content_v1_ListStatusesRequest__Output,
    _containerd_services_content_v1_ListStatusesResponse__Output
  >
  Read: MethodDefinition<
    _containerd_services_content_v1_ReadContentRequest,
    _containerd_services_content_v1_ReadContentResponse,
    _containerd_services_content_v1_ReadContentRequest__Output,
    _containerd_services_content_v1_ReadContentResponse__Output
  >
  Status: MethodDefinition<
    _containerd_services_content_v1_StatusRequest,
    _containerd_services_content_v1_StatusResponse,
    _containerd_services_content_v1_StatusRequest__Output,
    _containerd_services_content_v1_StatusResponse__Output
  >
  Update: MethodDefinition<
    _containerd_services_content_v1_UpdateRequest,
    _containerd_services_content_v1_UpdateResponse,
    _containerd_services_content_v1_UpdateRequest__Output,
    _containerd_services_content_v1_UpdateResponse__Output
  >
  Write: MethodDefinition<
    _containerd_services_content_v1_WriteContentRequest,
    _containerd_services_content_v1_WriteContentResponse,
    _containerd_services_content_v1_WriteContentRequest__Output,
    _containerd_services_content_v1_WriteContentResponse__Output
  >
}
