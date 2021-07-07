import type {} from '@grpc/grpc-js'
import path from 'path'
import {AbortRequest} from '../proto/containerd/services/content/v1/AbortRequest'
import {ContentClient} from '../proto/containerd/services/content/v1/Content'
import {DeleteContentRequest} from '../proto/containerd/services/content/v1/DeleteContentRequest'
import {InfoRequest} from '../proto/containerd/services/content/v1/InfoRequest'
import {ListStatusesRequest} from '../proto/containerd/services/content/v1/ListStatusesRequest'
import {ReadContentRequest} from '../proto/containerd/services/content/v1/ReadContentRequest'
import {StatusRequest} from '../proto/containerd/services/content/v1/StatusRequest'
import {UpdateRequest} from '../proto/containerd/services/content/v1/UpdateRequest'
import {ListRequest} from '../proto/containerd/services/leases/v1/ListRequest'
import {ProtoGrpcType} from '../proto/content'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.content.v1.Content
}

export class ContentService extends BaseService<ProtoGrpcType, ContentClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/content/v1/content.proto'),
      getClientConstructor,
    )
  }

  async abort(request: AbortRequest) {
    return await this.callUnary('abort', request)
  }

  async delete(request: DeleteContentRequest) {
    return await this.callUnary('delete', request)
  }

  async info(request: InfoRequest) {
    return await this.callUnary('info', request)
  }

  async list(request: ListRequest) {
    const client = await this.getClient()
    return client.list(request)
  }

  async listStatuses(request: ListStatusesRequest) {
    return await this.callUnary('listStatuses', request)
  }

  async read(request: ReadContentRequest) {
    const client = await this.getClient()
    return client.read(request)
  }

  async status(request: StatusRequest) {
    return await this.callUnary('status', request)
  }

  async update(request: UpdateRequest) {
    return await this.callUnary('update', request)
  }

  async write() {
    const client = await this.getClient()
    return client.write()
  }
}
