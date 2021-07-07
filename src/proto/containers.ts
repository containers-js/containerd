import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  ContainersClient as _containerd_services_containers_v1_ContainersClient,
  ContainersDefinition as _containerd_services_containers_v1_ContainersDefinition,
} from './containerd/services/containers/v1/Containers'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      containers: {
        v1: {
          Container: MessageTypeDefinition
          Containers: SubtypeConstructor<typeof grpc.Client, _containerd_services_containers_v1_ContainersClient> & {
            service: _containerd_services_containers_v1_ContainersDefinition
          }
          CreateContainerRequest: MessageTypeDefinition
          CreateContainerResponse: MessageTypeDefinition
          DeleteContainerRequest: MessageTypeDefinition
          GetContainerRequest: MessageTypeDefinition
          GetContainerResponse: MessageTypeDefinition
          ListContainerMessage: MessageTypeDefinition
          ListContainersRequest: MessageTypeDefinition
          ListContainersResponse: MessageTypeDefinition
          UpdateContainerRequest: MessageTypeDefinition
          UpdateContainerResponse: MessageTypeDefinition
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
