import type * as grpc from '@grpc/grpc-js'
import type {MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  ImagesClient as _containerd_services_images_v1_ImagesClient,
  ImagesDefinition as _containerd_services_images_v1_ImagesDefinition,
} from './containerd/services/images/v1/Images'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      images: {
        v1: {
          CreateImageRequest: MessageTypeDefinition
          CreateImageResponse: MessageTypeDefinition
          DeleteImageRequest: MessageTypeDefinition
          GetImageRequest: MessageTypeDefinition
          GetImageResponse: MessageTypeDefinition
          Image: MessageTypeDefinition
          Images: SubtypeConstructor<typeof grpc.Client, _containerd_services_images_v1_ImagesClient> & {
            service: _containerd_services_images_v1_ImagesDefinition
          }
          ListImagesRequest: MessageTypeDefinition
          ListImagesResponse: MessageTypeDefinition
          UpdateImageRequest: MessageTypeDefinition
          UpdateImageResponse: MessageTypeDefinition
        }
      }
    }
    types: {
      Descriptor: MessageTypeDefinition
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
