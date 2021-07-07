import type {} from '@grpc/grpc-js'
import path from 'path'
import {CreateImageRequest} from '../proto/containerd/services/images/v1/CreateImageRequest'
import {DeleteImageRequest} from '../proto/containerd/services/images/v1/DeleteImageRequest'
import {GetImageRequest} from '../proto/containerd/services/images/v1/GetImageRequest'
import {ImagesClient} from '../proto/containerd/services/images/v1/Images'
import {ListImagesRequest} from '../proto/containerd/services/images/v1/ListImagesRequest'
import {UpdateImageRequest} from '../proto/containerd/services/images/v1/UpdateImageRequest'
import {ProtoGrpcType} from '../proto/images'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.images.v1.Images
}

export class ImagesService extends BaseService<ProtoGrpcType, ImagesClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/images/v1/images.proto'),
      getClientConstructor,
    )
  }

  async create(request: CreateImageRequest) {
    return await this.callUnary('create', request)
  }

  async delete(request: DeleteImageRequest) {
    return await this.callUnary('delete', request)
  }

  async get(request: GetImageRequest) {
    return await this.callUnary('get', request)
  }

  async list(request: ListImagesRequest) {
    return await this.callUnary('list', request)
  }

  async update(request: UpdateImageRequest) {
    return await this.callUnary('update', request)
  }
}
