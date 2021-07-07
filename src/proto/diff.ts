import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  DiffClient as _containerd_services_diff_v1_DiffClient,
  DiffDefinition as _containerd_services_diff_v1_DiffDefinition,
} from './containerd/services/diff/v1/Diff'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      diff: {
        v1: {
          ApplyRequest: MessageTypeDefinition
          ApplyResponse: MessageTypeDefinition
          Diff: SubtypeConstructor<typeof grpc.Client, _containerd_services_diff_v1_DiffClient> & {
            service: _containerd_services_diff_v1_DiffDefinition
          }
          DiffRequest: MessageTypeDefinition
          DiffResponse: MessageTypeDefinition
        }
      }
    }
    types: {
      Descriptor: MessageTypeDefinition
      Mount: MessageTypeDefinition
    }
  }
  gogoproto: {}
  google: {
    protobuf: {
      Any: MessageTypeDefinition
      DescriptorProto: MessageTypeDefinition
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
