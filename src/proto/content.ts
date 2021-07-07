import type * as grpc from '@grpc/grpc-js'
import type {EnumTypeDefinition, MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  ContentClient as _containerd_services_content_v1_ContentClient,
  ContentDefinition as _containerd_services_content_v1_ContentDefinition,
} from './containerd/services/content/v1/Content'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      content: {
        v1: {
          AbortRequest: MessageTypeDefinition
          Content: SubtypeConstructor<typeof grpc.Client, _containerd_services_content_v1_ContentClient> & {
            service: _containerd_services_content_v1_ContentDefinition
          }
          DeleteContentRequest: MessageTypeDefinition
          Info: MessageTypeDefinition
          InfoRequest: MessageTypeDefinition
          InfoResponse: MessageTypeDefinition
          ListContentRequest: MessageTypeDefinition
          ListContentResponse: MessageTypeDefinition
          ListStatusesRequest: MessageTypeDefinition
          ListStatusesResponse: MessageTypeDefinition
          ReadContentRequest: MessageTypeDefinition
          ReadContentResponse: MessageTypeDefinition
          Status: MessageTypeDefinition
          StatusRequest: MessageTypeDefinition
          StatusResponse: MessageTypeDefinition
          UpdateRequest: MessageTypeDefinition
          UpdateResponse: MessageTypeDefinition
          WriteAction: EnumTypeDefinition
          WriteContentRequest: MessageTypeDefinition
          WriteContentResponse: MessageTypeDefinition
        }
      }
    }
  }
  gogoproto: {}
  google: {
    protobuf: {
      DescriptorProto: MessageTypeDefinition
      Empty: MessageTypeDefinition
      EnumDescriptorProto: MessageTypeDefinition
      EnumOptions: MessageTypeDefinition
      EnumValueDescriptorProto: MessageTypeDefinition
      EnumValueOptions: MessageTypeDefinition
      FieldDescriptorProto: MessageTypeDefinition
      FieldMask: MessageTypeDefinition
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
