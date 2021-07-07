import path from 'path'
import {IntrospectionClient} from '../proto/containerd/services/introspection/v1/Introspection'
import {PluginsRequest} from '../proto/containerd/services/introspection/v1/PluginsRequest'
import {ProtoGrpcType} from '../proto/introspection'
import {BaseService} from './BaseService'

export class IntrospectionService extends BaseService<ProtoGrpcType, IntrospectionClient> {
  constructor(address: string, namespace: string) {
    super(
      path.join(
        __dirname,
        '../../proto/github.com/containerd/containerd/api/services/introspection/v1/introspection.proto',
      ),
      address,
      namespace,
    )
  }

  async plugins(request: PluginsRequest) {
    return await this.callUnary('plugins', request)
  }

  async server() {
    return await this.callUnary('server', {})
  }

  protected getClientConstructor(proto: ProtoGrpcType) {
    return proto.containerd.services.introspection.v1.Introspection
  }
}
