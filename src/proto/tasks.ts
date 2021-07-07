import type * as grpc from '@grpc/grpc-js'
import type {EnumTypeDefinition, MessageTypeDefinition} from '@grpc/proto-loader'
import type {
  TasksClient as _containerd_services_tasks_v1_TasksClient,
  TasksDefinition as _containerd_services_tasks_v1_TasksDefinition,
} from './containerd/services/tasks/v1/Tasks'

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  containerd: {
    services: {
      tasks: {
        v1: {
          CheckpointTaskRequest: MessageTypeDefinition
          CheckpointTaskResponse: MessageTypeDefinition
          CloseIORequest: MessageTypeDefinition
          CreateTaskRequest: MessageTypeDefinition
          CreateTaskResponse: MessageTypeDefinition
          DeleteProcessRequest: MessageTypeDefinition
          DeleteResponse: MessageTypeDefinition
          DeleteTaskRequest: MessageTypeDefinition
          ExecProcessRequest: MessageTypeDefinition
          ExecProcessResponse: MessageTypeDefinition
          GetRequest: MessageTypeDefinition
          GetResponse: MessageTypeDefinition
          KillRequest: MessageTypeDefinition
          ListPidsRequest: MessageTypeDefinition
          ListPidsResponse: MessageTypeDefinition
          ListTasksRequest: MessageTypeDefinition
          ListTasksResponse: MessageTypeDefinition
          MetricsRequest: MessageTypeDefinition
          MetricsResponse: MessageTypeDefinition
          PauseTaskRequest: MessageTypeDefinition
          ResizePtyRequest: MessageTypeDefinition
          ResumeTaskRequest: MessageTypeDefinition
          StartRequest: MessageTypeDefinition
          StartResponse: MessageTypeDefinition
          Tasks: SubtypeConstructor<typeof grpc.Client, _containerd_services_tasks_v1_TasksClient> & {
            service: _containerd_services_tasks_v1_TasksDefinition
          }
          UpdateTaskRequest: MessageTypeDefinition
          WaitRequest: MessageTypeDefinition
          WaitResponse: MessageTypeDefinition
        }
      }
    }
    types: {
      Descriptor: MessageTypeDefinition
      Metric: MessageTypeDefinition
      Mount: MessageTypeDefinition
    }
    v1: {
      types: {
        Process: MessageTypeDefinition
        ProcessInfo: MessageTypeDefinition
        Status: EnumTypeDefinition
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
