import type {MessageTypeDefinition} from '@grpc/proto-loader'

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition
    }
    rpc: {
      Status: MessageTypeDefinition
    }
  }
}
