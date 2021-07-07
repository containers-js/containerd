import type {} from '@grpc/grpc-js'
import path from 'path'
import {VersionClient} from '../proto/containerd/services/version/v1/Version'
import {ProtoGrpcType} from '../proto/version'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.version.v1.Version
}

export class VersionService extends BaseService<ProtoGrpcType, VersionClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/version/v1/version.proto'),
      getClientConstructor,
    )
  }

  async version() {
    return this.callUnary('version', {})
  }
}
