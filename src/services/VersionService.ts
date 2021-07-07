import path from 'path'
import {VersionClient} from '../proto/containerd/services/version/v1/Version'
import {ProtoGrpcType} from '../proto/version'
import {BaseService} from './BaseService'

export class VersionService extends BaseService<ProtoGrpcType, VersionClient> {
  constructor(address: string, namespace: string) {
    super(
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/version/v1/version.proto'),
      address,
      namespace,
    )
  }

  async version() {
    return this.callUnary('version', {})
  }

  protected getClientConstructor(proto: ProtoGrpcType) {
    return proto.containerd.services.version.v1.Version
  }
}
