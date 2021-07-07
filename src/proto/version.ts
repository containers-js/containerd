import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  VersionClient as _containerd_services_version_v1_VersionClient,
  VersionDefinition as _containerd_services_version_v1_VersionDefinition,
} from './containerd/services/version/v1/Version'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      version: {
        v1: {
          Version: SubtypeConstructor<typeof grpc.Client, _containerd_services_version_v1_VersionClient> & {
            service: _containerd_services_version_v1_VersionDefinition
          }
          VersionResponse: MessageTypeDefinition
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
      UninterpretedOption: MessageTypeDefinition
    }
  }
}
