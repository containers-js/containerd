import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  EventsClient as _containerd_services_events_ttrpc_v1_EventsClient,
  EventsDefinition as _containerd_services_events_ttrpc_v1_EventsDefinition,
} from './containerd/services/events/ttrpc/v1/Events'
import type {
  EventsClient as _containerd_services_events_v1_EventsClient,
  EventsDefinition as _containerd_services_events_v1_EventsDefinition,
} from './containerd/services/events/v1/Events'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    plugin: {}
    services: {
      events: {
        ttrpc: {
          v1: {
            Envelope: MessageTypeDefinition
            Events: SubtypeConstructor<typeof grpc.Client, _containerd_services_events_ttrpc_v1_EventsClient> & {
              service: _containerd_services_events_ttrpc_v1_EventsDefinition
            }
            ForwardRequest: MessageTypeDefinition
          }
        }
        v1: {
          Envelope: MessageTypeDefinition
          Events: SubtypeConstructor<typeof grpc.Client, _containerd_services_events_v1_EventsClient> & {
            service: _containerd_services_events_v1_EventsDefinition
          }
          ForwardRequest: MessageTypeDefinition
          PublishRequest: MessageTypeDefinition
          SubscribeRequest: MessageTypeDefinition
        }
      }
    }
  }
  gogoproto: {}
  google: {
    protobuf: {
      Any: MessageTypeDefinition
      DescriptorProto: MessageTypeDefinition
      Empty: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldOptions: MessageTypeDefinition
      FileDescriptorProto: MessageTypeDefinition
      FileDescriptorSet: MessageTypeDefinition
      FileOptions: MessageTypeDefinition
      GeneratedCodeInfo: MessageTypeDefinition
      MessageOptions: MessageTypeDefinition
      MethodDescriptorProto: MessageTypeDefinition
      MethodOptions: MessageTypeDefinition
      OneofDescriptorProto: MessageTypeDefinition
      OneofOptions: MessageTypeDefinition
      ServiceDescriptorProto: MessageTypeDefinition
      ServiceOptions: MessageTypeDefinition
      SourceCodeInfo: MessageTypeDefinition
      Timestamp: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
}
