import type * as grpc from '@grpc/grpc-js'
import type {EnumTypeDefinition, MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  SnapshotsClient as _containerd_services_snapshots_v1_SnapshotsClient,
  SnapshotsDefinition as _containerd_services_snapshots_v1_SnapshotsDefinition,
} from './containerd/services/snapshots/v1/Snapshots'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      snapshots: {
        v1: {
          CleanupRequest: MessageTypeDefinition
          CommitSnapshotRequest: MessageTypeDefinition
          Info: MessageTypeDefinition
          Kind: EnumTypeDefinition
          ListSnapshotsRequest: MessageTypeDefinition
          ListSnapshotsResponse: MessageTypeDefinition
          MountsRequest: MessageTypeDefinition
          MountsResponse: MessageTypeDefinition
          PrepareSnapshotRequest: MessageTypeDefinition
          PrepareSnapshotResponse: MessageTypeDefinition
          RemoveSnapshotRequest: MessageTypeDefinition
          Snapshots: SubtypeConstructor<typeof grpc.Client, _containerd_services_snapshots_v1_SnapshotsClient> & {
            service: _containerd_services_snapshots_v1_SnapshotsDefinition
          }
          StatSnapshotRequest: MessageTypeDefinition
          StatSnapshotResponse: MessageTypeDefinition
          UpdateSnapshotRequest: MessageTypeDefinition
          UpdateSnapshotResponse: MessageTypeDefinition
          UsageRequest: MessageTypeDefinition
          UsageResponse: MessageTypeDefinition
          ViewSnapshotRequest: MessageTypeDefinition
          ViewSnapshotResponse: MessageTypeDefinition
        }
      }
    }
    types: {
      Mount: MessageTypeDefinition
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
