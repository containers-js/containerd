import path from 'path'
import {ApplyRequest} from '../proto/containerd/services/diff/v1/ApplyRequest'
import {DiffClient} from '../proto/containerd/services/diff/v1/Diff'
import {DiffRequest} from '../proto/containerd/services/diff/v1/DiffRequest'
import {ProtoGrpcType} from '../proto/diff'
import {BaseService} from './BaseService'

export class DiffService extends BaseService<ProtoGrpcType, DiffClient> {
  constructor(address: string, namespace: string) {
    super(
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/diff/v1/diff.proto'),
      address,
      namespace,
    )
  }

  async apply(request: ApplyRequest) {
    return await this.callUnary('apply', request)
  }

  async diff(request: DiffRequest) {
    return await this.callUnary('diff', request)
  }

  protected getClientConstructor(proto: ProtoGrpcType) {
    return proto.containerd.services.diff.v1.Diff
  }
}
