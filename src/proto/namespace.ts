import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  NamespacesClient as _containerd_services_namespaces_v1_NamespacesClient,
  NamespacesDefinition as _containerd_services_namespaces_v1_NamespacesDefinition,
} from './containerd/services/namespaces/v1/Namespaces'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      namespaces: {
        v1: {
          CreateNamespaceRequest: MessageTypeDefinition
          CreateNamespaceResponse: MessageTypeDefinition
          DeleteNamespaceRequest: MessageTypeDefinition
          GetNamespaceRequest: MessageTypeDefinition
          GetNamespaceResponse: MessageTypeDefinition
          ListNamespacesRequest: MessageTypeDefinition
          ListNamespacesResponse: MessageTypeDefinition
          Namespace: MessageTypeDefinition
          Namespaces: SubtypeConstructor<typeof grpc.Client, _containerd_services_namespaces_v1_NamespacesClient> & {
            service: _containerd_services_namespaces_v1_NamespacesDefinition
          }
          UpdateNamespaceRequest: MessageTypeDefinition
          UpdateNamespaceResponse: MessageTypeDefinition
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
      UninterpretedOption: MessageTypeDefinition
    }
  }
}
