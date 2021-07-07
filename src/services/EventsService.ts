import type {} from '@grpc/grpc-js'
import path from 'path'
import {ForwardRequest} from '../proto/containerd/services/events/ttrpc/v1/ForwardRequest'
import {EventsClient} from '../proto/containerd/services/events/v1/Events'
import {PublishRequest} from '../proto/containerd/services/events/v1/PublishRequest'
import {SubscribeRequest} from '../proto/containerd/services/events/v1/SubscribeRequest'
import {ProtoGrpcType} from '../proto/events'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.events.v1.Events
}

export class EventsService extends BaseService<ProtoGrpcType, EventsClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/events/v1/events.proto'),
      getClientConstructor,
    )
  }

  async forward(request: ForwardRequest) {
    return await this.callUnary('forward', request)
  }

  async publish(request: PublishRequest) {
    return await this.callUnary('publish', request)
  }

  async subscribe(request: SubscribeRequest) {
    const client = await this.getClient()
    return client.subscribe(request)
  }
}
