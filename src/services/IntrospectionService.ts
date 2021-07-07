import type {} from '@grpc/grpc-js'
import path from 'path'
import {IntrospectionClient} from '../proto/containerd/services/introspection/v1/Introspection'
import {PluginsRequest} from '../proto/containerd/services/introspection/v1/PluginsRequest'
import {ProtoGrpcType} from '../proto/introspection'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.introspection.v1.Introspection
}

export class IntrospectionService extends BaseService<ProtoGrpcType, IntrospectionClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(
        __dirname,
        '../../proto/github.com/containerd/containerd/api/services/introspection/v1/introspection.proto',
      ),
      getClientConstructor,
    )
  }

  async plugins(request: PluginsRequest) {
    return await this.callUnary('plugins', request)
  }

  async server() {
    return await this.callUnary('server', {})
  }
}
