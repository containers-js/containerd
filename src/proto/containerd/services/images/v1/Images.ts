// Original file: proto/github.com/containerd/containerd/api/services/images/v1/images.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  CreateImageRequest as _containerd_services_images_v1_CreateImageRequest,
  CreateImageRequest__Output as _containerd_services_images_v1_CreateImageRequest__Output,
} from '../../../../containerd/services/images/v1/CreateImageRequest'
import type {
  CreateImageResponse as _containerd_services_images_v1_CreateImageResponse,
  CreateImageResponse__Output as _containerd_services_images_v1_CreateImageResponse__Output,
} from '../../../../containerd/services/images/v1/CreateImageResponse'
import type {
  DeleteImageRequest as _containerd_services_images_v1_DeleteImageRequest,
  DeleteImageRequest__Output as _containerd_services_images_v1_DeleteImageRequest__Output,
} from '../../../../containerd/services/images/v1/DeleteImageRequest'
import type {
  GetImageRequest as _containerd_services_images_v1_GetImageRequest,
  GetImageRequest__Output as _containerd_services_images_v1_GetImageRequest__Output,
} from '../../../../containerd/services/images/v1/GetImageRequest'
import type {
  GetImageResponse as _containerd_services_images_v1_GetImageResponse,
  GetImageResponse__Output as _containerd_services_images_v1_GetImageResponse__Output,
} from '../../../../containerd/services/images/v1/GetImageResponse'
import type {
  ListImagesRequest as _containerd_services_images_v1_ListImagesRequest,
  ListImagesRequest__Output as _containerd_services_images_v1_ListImagesRequest__Output,
} from '../../../../containerd/services/images/v1/ListImagesRequest'
import type {
  ListImagesResponse as _containerd_services_images_v1_ListImagesResponse,
  ListImagesResponse__Output as _containerd_services_images_v1_ListImagesResponse__Output,
} from '../../../../containerd/services/images/v1/ListImagesResponse'
import type {
  UpdateImageRequest as _containerd_services_images_v1_UpdateImageRequest,
  UpdateImageRequest__Output as _containerd_services_images_v1_UpdateImageRequest__Output,
} from '../../../../containerd/services/images/v1/UpdateImageRequest'
import type {
  UpdateImageResponse as _containerd_services_images_v1_UpdateImageResponse,
  UpdateImageResponse__Output as _containerd_services_images_v1_UpdateImageResponse__Output,
} from '../../../../containerd/services/images/v1/UpdateImageResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface ImagesClient extends grpc.Client {
  Create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_images_v1_CreateImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_CreateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_images_v1_DeleteImageRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Get(
    argument: _containerd_services_images_v1_GetImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_images_v1_GetImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_images_v1_GetImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_images_v1_GetImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_images_v1_GetImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_images_v1_GetImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_images_v1_GetImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_images_v1_GetImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_GetImageResponse__Output) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_images_v1_ListImagesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_images_v1_ListImagesRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_images_v1_ListImagesRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_images_v1_ListImagesRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_images_v1_ListImagesRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_images_v1_ListImagesRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_images_v1_ListImagesRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_images_v1_ListImagesRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_ListImagesResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_images_v1_UpdateImageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_images_v1_UpdateImageResponse__Output) => void,
  ): grpc.ClientUnaryCall
}

export interface ImagesHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<
    _containerd_services_images_v1_CreateImageRequest__Output,
    _containerd_services_images_v1_CreateImageResponse
  >

  Delete: grpc.handleUnaryCall<_containerd_services_images_v1_DeleteImageRequest__Output, _google_protobuf_Empty>

  Get: grpc.handleUnaryCall<
    _containerd_services_images_v1_GetImageRequest__Output,
    _containerd_services_images_v1_GetImageResponse
  >

  List: grpc.handleUnaryCall<
    _containerd_services_images_v1_ListImagesRequest__Output,
    _containerd_services_images_v1_ListImagesResponse
  >

  Update: grpc.handleUnaryCall<
    _containerd_services_images_v1_UpdateImageRequest__Output,
    _containerd_services_images_v1_UpdateImageResponse
  >
}

export interface ImagesDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<
    _containerd_services_images_v1_CreateImageRequest,
    _containerd_services_images_v1_CreateImageResponse,
    _containerd_services_images_v1_CreateImageRequest__Output,
    _containerd_services_images_v1_CreateImageResponse__Output
  >
  Delete: MethodDefinition<
    _containerd_services_images_v1_DeleteImageRequest,
    _google_protobuf_Empty,
    _containerd_services_images_v1_DeleteImageRequest__Output,
    _google_protobuf_Empty__Output
  >
  Get: MethodDefinition<
    _containerd_services_images_v1_GetImageRequest,
    _containerd_services_images_v1_GetImageResponse,
    _containerd_services_images_v1_GetImageRequest__Output,
    _containerd_services_images_v1_GetImageResponse__Output
  >
  List: MethodDefinition<
    _containerd_services_images_v1_ListImagesRequest,
    _containerd_services_images_v1_ListImagesResponse,
    _containerd_services_images_v1_ListImagesRequest__Output,
    _containerd_services_images_v1_ListImagesResponse__Output
  >
  Update: MethodDefinition<
    _containerd_services_images_v1_UpdateImageRequest,
    _containerd_services_images_v1_UpdateImageResponse,
    _containerd_services_images_v1_UpdateImageRequest__Output,
    _containerd_services_images_v1_UpdateImageResponse__Output
  >
}
