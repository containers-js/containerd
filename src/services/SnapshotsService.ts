import path from 'path'
import {CleanupRequest} from '../proto/containerd/services/snapshots/v1/CleanupRequest'
import {CommitSnapshotRequest} from '../proto/containerd/services/snapshots/v1/CommitSnapshotRequest'
import {ListSnapshotsRequest} from '../proto/containerd/services/snapshots/v1/ListSnapshotsRequest'
import {MountsRequest} from '../proto/containerd/services/snapshots/v1/MountsRequest'
import {PrepareSnapshotRequest} from '../proto/containerd/services/snapshots/v1/PrepareSnapshotRequest'
import {RemoveSnapshotRequest} from '../proto/containerd/services/snapshots/v1/RemoveSnapshotRequest'
import {SnapshotsClient} from '../proto/containerd/services/snapshots/v1/Snapshots'
import {StatSnapshotRequest} from '../proto/containerd/services/snapshots/v1/StatSnapshotRequest'
import {UpdateSnapshotRequest} from '../proto/containerd/services/snapshots/v1/UpdateSnapshotRequest'
import {UsageRequest} from '../proto/containerd/services/snapshots/v1/UsageRequest'
import {ViewSnapshotRequest} from '../proto/containerd/services/snapshots/v1/ViewSnapshotRequest'
import {ProtoGrpcType} from '../proto/snapshots'
import {BaseService} from './BaseService'

export class SnapshotsService extends BaseService<ProtoGrpcType, SnapshotsClient> {
  constructor(address: string, namespace: string) {
    super(
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto'),
      address,
      namespace,
    )
  }

  async cleanup(request: CleanupRequest) {
    return this.callUnary('cleanup', request)
  }

  async commit(request: CommitSnapshotRequest) {
    return this.callUnary('commit', request)
  }

  async list(request: ListSnapshotsRequest) {
    const client = await this.getClient()
    return client.list(request)
  }

  async mounts(request: MountsRequest) {
    return this.callUnary('mounts', request)
  }

  async prepare(request: PrepareSnapshotRequest) {
    return this.callUnary('prepare', request)
  }

  async remove(request: RemoveSnapshotRequest) {
    return this.callUnary('remove', request)
  }

  async stat(request: StatSnapshotRequest) {
    return this.callUnary('stat', request)
  }

  async update(request: UpdateSnapshotRequest) {
    return this.callUnary('update', request)
  }

  async usage(request: UsageRequest) {
    return this.callUnary('usage', request)
  }

  async view(request: ViewSnapshotRequest) {
    return this.callUnary('view', request)
  }

  protected getClientConstructor(proto: ProtoGrpcType) {
    return proto.containerd.services.snapshots.v1.Snapshots
  }
}
