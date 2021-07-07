import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  IntrospectionClient as _containerd_services_introspection_v1_IntrospectionClient,
  IntrospectionDefinition as _containerd_services_introspection_v1_IntrospectionDefinition,
} from './containerd/services/introspection/v1/Introspection'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      introspection: {
        v1: {
          Introspection: SubtypeConstructor<
            typeof grpc.Client,
            _containerd_services_introspection_v1_IntrospectionClient
          > & {service: _containerd_services_introspection_v1_IntrospectionDefinition}
          Plugin: MessageTypeDefinition
          PluginsRequest: MessageTypeDefinition
          PluginsResponse: MessageTypeDefinition
          ServerResponse: MessageTypeDefinition
        }
      }
    }
    types: {
      Platform: MessageTypeDefinition
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
      UninterpretedOption: MessageTypeDefinition
    }
    rpc: {
      Status: MessageTypeDefinition
    }
  }
}
