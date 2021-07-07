import path from 'path'
import {CreateNamespaceRequest} from '../proto/containerd/services/namespaces/v1/CreateNamespaceRequest'
import {DeleteNamespaceRequest} from '../proto/containerd/services/namespaces/v1/DeleteNamespaceRequest'
import {GetNamespaceRequest} from '../proto/containerd/services/namespaces/v1/GetNamespaceRequest'
import {ListNamespacesRequest} from '../proto/containerd/services/namespaces/v1/ListNamespacesRequest'
import {NamespacesClient} from '../proto/containerd/services/namespaces/v1/Namespaces'
import {UpdateNamespaceRequest} from '../proto/containerd/services/namespaces/v1/UpdateNamespaceRequest'
import {ProtoGrpcType} from '../proto/namespace'
import {BaseService} from './BaseService'

export class NamespacesService extends BaseService<ProtoGrpcType, NamespacesClient> {
  constructor(address: string, namespace: string) {
    super(
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/namespaces/v1/namespaces.proto'),
      address,
      namespace,
    )
  }

  async create(request: CreateNamespaceRequest) {
    return await this.callUnary('create', request)
  }

  async delete(request: DeleteNamespaceRequest) {
    return await this.callUnary('delete', request)
  }

  async get(request: GetNamespaceRequest) {
    return await this.callUnary('get', request)
  }

  async list(request: ListNamespacesRequest) {
    return await this.callUnary('list', request)
  }

  async update(request: UpdateNamespaceRequest) {
    return await this.callUnary('update', request)
  }

  protected getClientConstructor(proto: ProtoGrpcType) {
    return proto.containerd.services.namespaces.v1.Namespaces
  }
}
