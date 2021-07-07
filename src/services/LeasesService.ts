import type {} from '@grpc/grpc-js'
import path from 'path'
import {AddResourceRequest} from '../proto/containerd/services/leases/v1/AddResourceRequest'
import {CreateRequest} from '../proto/containerd/services/leases/v1/CreateRequest'
import {DeleteRequest} from '../proto/containerd/services/leases/v1/DeleteRequest'
import {DeleteResourceRequest} from '../proto/containerd/services/leases/v1/DeleteResourceRequest'
import {LeasesClient} from '../proto/containerd/services/leases/v1/Leases'
import {ListRequest} from '../proto/containerd/services/leases/v1/ListRequest'
import {ListResourcesRequest} from '../proto/containerd/services/leases/v1/ListResourcesRequest'
import {ProtoGrpcType} from '../proto/leases'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.leases.v1.Leases
}

export class LeasesService extends BaseService<ProtoGrpcType, LeasesClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto'),
      getClientConstructor,
    )
  }

  async addResource(request: AddResourceRequest) {
    return await this.callUnary('addResource', request)
  }

  async create(request: CreateRequest) {
    return await this.callUnary('create', request)
  }

  async delete(request: DeleteRequest) {
    return await this.callUnary('delete', request)
  }

  async deleteResource(request: DeleteResourceRequest) {
    return await this.callUnary('deleteResource', request)
  }

  async list(request: ListRequest) {
    return await this.callUnary('list', request)
  }

  async listResources(request: ListResourcesRequest) {
    return await this.callUnary('listResources', request)
  }
}
