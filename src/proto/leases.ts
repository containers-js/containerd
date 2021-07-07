import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  LeasesClient as _containerd_services_leases_v1_LeasesClient,
  LeasesDefinition as _containerd_services_leases_v1_LeasesDefinition,
} from './containerd/services/leases/v1/Leases'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      leases: {
        v1: {
          AddResourceRequest: MessageTypeDefinition
          CreateRequest: MessageTypeDefinition
          CreateResponse: MessageTypeDefinition
          DeleteRequest: MessageTypeDefinition
          DeleteResourceRequest: MessageTypeDefinition
          Lease: MessageTypeDefinition
          Leases: SubtypeConstructor<typeof grpc.Client, _containerd_services_leases_v1_LeasesClient> & {
            service: _containerd_services_leases_v1_LeasesDefinition
          }
          ListRequest: MessageTypeDefinition
          ListResourcesRequest: MessageTypeDefinition
          ListResourcesResponse: MessageTypeDefinition
          ListResponse: MessageTypeDefinition
          Resource: MessageTypeDefinition
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
      Timestamp: MessageTypeDefinition
      UninterpretedOption: MessageTypeDefinition
    }
  }
}
