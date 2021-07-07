// Original file: proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  CheckpointTaskRequest as _containerd_services_tasks_v1_CheckpointTaskRequest,
  CheckpointTaskRequest__Output as _containerd_services_tasks_v1_CheckpointTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/CheckpointTaskRequest'
import type {
  CheckpointTaskResponse as _containerd_services_tasks_v1_CheckpointTaskResponse,
  CheckpointTaskResponse__Output as _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
} from '../../../../containerd/services/tasks/v1/CheckpointTaskResponse'
import type {
  CloseIORequest as _containerd_services_tasks_v1_CloseIORequest,
  CloseIORequest__Output as _containerd_services_tasks_v1_CloseIORequest__Output,
} from '../../../../containerd/services/tasks/v1/CloseIORequest'
import type {
  CreateTaskRequest as _containerd_services_tasks_v1_CreateTaskRequest,
  CreateTaskRequest__Output as _containerd_services_tasks_v1_CreateTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/CreateTaskRequest'
import type {
  CreateTaskResponse as _containerd_services_tasks_v1_CreateTaskResponse,
  CreateTaskResponse__Output as _containerd_services_tasks_v1_CreateTaskResponse__Output,
} from '../../../../containerd/services/tasks/v1/CreateTaskResponse'
import type {
  DeleteProcessRequest as _containerd_services_tasks_v1_DeleteProcessRequest,
  DeleteProcessRequest__Output as _containerd_services_tasks_v1_DeleteProcessRequest__Output,
} from '../../../../containerd/services/tasks/v1/DeleteProcessRequest'
import type {
  DeleteResponse as _containerd_services_tasks_v1_DeleteResponse,
  DeleteResponse__Output as _containerd_services_tasks_v1_DeleteResponse__Output,
} from '../../../../containerd/services/tasks/v1/DeleteResponse'
import type {
  DeleteTaskRequest as _containerd_services_tasks_v1_DeleteTaskRequest,
  DeleteTaskRequest__Output as _containerd_services_tasks_v1_DeleteTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/DeleteTaskRequest'
import type {
  ExecProcessRequest as _containerd_services_tasks_v1_ExecProcessRequest,
  ExecProcessRequest__Output as _containerd_services_tasks_v1_ExecProcessRequest__Output,
} from '../../../../containerd/services/tasks/v1/ExecProcessRequest'
import type {
  GetRequest as _containerd_services_tasks_v1_GetRequest,
  GetRequest__Output as _containerd_services_tasks_v1_GetRequest__Output,
} from '../../../../containerd/services/tasks/v1/GetRequest'
import type {
  GetResponse as _containerd_services_tasks_v1_GetResponse,
  GetResponse__Output as _containerd_services_tasks_v1_GetResponse__Output,
} from '../../../../containerd/services/tasks/v1/GetResponse'
import type {
  KillRequest as _containerd_services_tasks_v1_KillRequest,
  KillRequest__Output as _containerd_services_tasks_v1_KillRequest__Output,
} from '../../../../containerd/services/tasks/v1/KillRequest'
import type {
  ListPidsRequest as _containerd_services_tasks_v1_ListPidsRequest,
  ListPidsRequest__Output as _containerd_services_tasks_v1_ListPidsRequest__Output,
} from '../../../../containerd/services/tasks/v1/ListPidsRequest'
import type {
  ListPidsResponse as _containerd_services_tasks_v1_ListPidsResponse,
  ListPidsResponse__Output as _containerd_services_tasks_v1_ListPidsResponse__Output,
} from '../../../../containerd/services/tasks/v1/ListPidsResponse'
import type {
  ListTasksRequest as _containerd_services_tasks_v1_ListTasksRequest,
  ListTasksRequest__Output as _containerd_services_tasks_v1_ListTasksRequest__Output,
} from '../../../../containerd/services/tasks/v1/ListTasksRequest'
import type {
  ListTasksResponse as _containerd_services_tasks_v1_ListTasksResponse,
  ListTasksResponse__Output as _containerd_services_tasks_v1_ListTasksResponse__Output,
} from '../../../../containerd/services/tasks/v1/ListTasksResponse'
import type {
  MetricsRequest as _containerd_services_tasks_v1_MetricsRequest,
  MetricsRequest__Output as _containerd_services_tasks_v1_MetricsRequest__Output,
} from '../../../../containerd/services/tasks/v1/MetricsRequest'
import type {
  MetricsResponse as _containerd_services_tasks_v1_MetricsResponse,
  MetricsResponse__Output as _containerd_services_tasks_v1_MetricsResponse__Output,
} from '../../../../containerd/services/tasks/v1/MetricsResponse'
import type {
  PauseTaskRequest as _containerd_services_tasks_v1_PauseTaskRequest,
  PauseTaskRequest__Output as _containerd_services_tasks_v1_PauseTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/PauseTaskRequest'
import type {
  ResizePtyRequest as _containerd_services_tasks_v1_ResizePtyRequest,
  ResizePtyRequest__Output as _containerd_services_tasks_v1_ResizePtyRequest__Output,
} from '../../../../containerd/services/tasks/v1/ResizePtyRequest'
import type {
  ResumeTaskRequest as _containerd_services_tasks_v1_ResumeTaskRequest,
  ResumeTaskRequest__Output as _containerd_services_tasks_v1_ResumeTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/ResumeTaskRequest'
import type {
  StartRequest as _containerd_services_tasks_v1_StartRequest,
  StartRequest__Output as _containerd_services_tasks_v1_StartRequest__Output,
} from '../../../../containerd/services/tasks/v1/StartRequest'
import type {
  StartResponse as _containerd_services_tasks_v1_StartResponse,
  StartResponse__Output as _containerd_services_tasks_v1_StartResponse__Output,
} from '../../../../containerd/services/tasks/v1/StartResponse'
import type {
  UpdateTaskRequest as _containerd_services_tasks_v1_UpdateTaskRequest,
  UpdateTaskRequest__Output as _containerd_services_tasks_v1_UpdateTaskRequest__Output,
} from '../../../../containerd/services/tasks/v1/UpdateTaskRequest'
import type {
  WaitRequest as _containerd_services_tasks_v1_WaitRequest,
  WaitRequest__Output as _containerd_services_tasks_v1_WaitRequest__Output,
} from '../../../../containerd/services/tasks/v1/WaitRequest'
import type {
  WaitResponse as _containerd_services_tasks_v1_WaitResponse,
  WaitResponse__Output as _containerd_services_tasks_v1_WaitResponse__Output,
} from '../../../../containerd/services/tasks/v1/WaitResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface TasksClient extends grpc.Client {
  Checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  checkpoint(
    argument: _containerd_services_tasks_v1_CheckpointTaskRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_tasks_v1_CheckpointTaskResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  CloseIO(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  CloseIO(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  CloseIO(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  CloseIO(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  closeIo(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  closeIo(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  closeIo(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  closeIo(
    argument: _containerd_services_tasks_v1_CloseIORequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall
  create(
    argument: _containerd_services_tasks_v1_CreateTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_CreateTaskResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  delete(
    argument: _containerd_services_tasks_v1_DeleteTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall

  DeleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  DeleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  deleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  deleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  deleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall
  deleteProcess(
    argument: _containerd_services_tasks_v1_DeleteProcessRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_DeleteResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  exec(
    argument: _containerd_services_tasks_v1_ExecProcessRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Get(
    argument: _containerd_services_tasks_v1_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_tasks_v1_GetRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_tasks_v1_GetRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Get(
    argument: _containerd_services_tasks_v1_GetRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_tasks_v1_GetRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_tasks_v1_GetRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_tasks_v1_GetRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall
  get(
    argument: _containerd_services_tasks_v1_GetRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_GetResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  kill(
    argument: _containerd_services_tasks_v1_KillRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  List(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall
  list(
    argument: _containerd_services_tasks_v1_ListTasksRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListTasksResponse__Output) => void,
  ): grpc.ClientUnaryCall

  ListPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  ListPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  ListPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  ListPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  listPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  listPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  listPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  listPids(
    argument: _containerd_services_tasks_v1_ListPidsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_ListPidsResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  metrics(
    argument: _containerd_services_tasks_v1_MetricsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_MetricsResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  pause(
    argument: _containerd_services_tasks_v1_PauseTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  ResizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  ResizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  ResizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  ResizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resizePty(
    argument: _containerd_services_tasks_v1_ResizePtyRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  resume(
    argument: _containerd_services_tasks_v1_ResumeTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Start(
    argument: _containerd_services_tasks_v1_StartRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Start(
    argument: _containerd_services_tasks_v1_StartRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Start(
    argument: _containerd_services_tasks_v1_StartRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Start(
    argument: _containerd_services_tasks_v1_StartRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  start(
    argument: _containerd_services_tasks_v1_StartRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  start(
    argument: _containerd_services_tasks_v1_StartRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  start(
    argument: _containerd_services_tasks_v1_StartRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall
  start(
    argument: _containerd_services_tasks_v1_StartRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_StartResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_tasks_v1_UpdateTaskRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
  wait(
    argument: _containerd_services_tasks_v1_WaitRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_tasks_v1_WaitResponse__Output) => void,
  ): grpc.ClientUnaryCall
}

export interface TasksHandlers extends grpc.UntypedServiceImplementation {
  Checkpoint: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_CheckpointTaskRequest__Output,
    _containerd_services_tasks_v1_CheckpointTaskResponse
  >

  CloseIO: grpc.handleUnaryCall<_containerd_services_tasks_v1_CloseIORequest__Output, _google_protobuf_Empty>

  Create: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_CreateTaskRequest__Output,
    _containerd_services_tasks_v1_CreateTaskResponse
  >

  Delete: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_DeleteTaskRequest__Output,
    _containerd_services_tasks_v1_DeleteResponse
  >

  DeleteProcess: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_DeleteProcessRequest__Output,
    _containerd_services_tasks_v1_DeleteResponse
  >

  Exec: grpc.handleUnaryCall<_containerd_services_tasks_v1_ExecProcessRequest__Output, _google_protobuf_Empty>

  Get: grpc.handleUnaryCall<_containerd_services_tasks_v1_GetRequest__Output, _containerd_services_tasks_v1_GetResponse>

  Kill: grpc.handleUnaryCall<_containerd_services_tasks_v1_KillRequest__Output, _google_protobuf_Empty>

  List: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_ListTasksRequest__Output,
    _containerd_services_tasks_v1_ListTasksResponse
  >

  ListPids: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_ListPidsRequest__Output,
    _containerd_services_tasks_v1_ListPidsResponse
  >

  Metrics: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_MetricsRequest__Output,
    _containerd_services_tasks_v1_MetricsResponse
  >

  Pause: grpc.handleUnaryCall<_containerd_services_tasks_v1_PauseTaskRequest__Output, _google_protobuf_Empty>

  ResizePty: grpc.handleUnaryCall<_containerd_services_tasks_v1_ResizePtyRequest__Output, _google_protobuf_Empty>

  Resume: grpc.handleUnaryCall<_containerd_services_tasks_v1_ResumeTaskRequest__Output, _google_protobuf_Empty>

  Start: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_StartRequest__Output,
    _containerd_services_tasks_v1_StartResponse
  >

  Update: grpc.handleUnaryCall<_containerd_services_tasks_v1_UpdateTaskRequest__Output, _google_protobuf_Empty>

  Wait: grpc.handleUnaryCall<
    _containerd_services_tasks_v1_WaitRequest__Output,
    _containerd_services_tasks_v1_WaitResponse
  >
}

export interface TasksDefinition extends grpc.ServiceDefinition {
  Checkpoint: MethodDefinition<
    _containerd_services_tasks_v1_CheckpointTaskRequest,
    _containerd_services_tasks_v1_CheckpointTaskResponse,
    _containerd_services_tasks_v1_CheckpointTaskRequest__Output,
    _containerd_services_tasks_v1_CheckpointTaskResponse__Output
  >
  CloseIO: MethodDefinition<
    _containerd_services_tasks_v1_CloseIORequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_CloseIORequest__Output,
    _google_protobuf_Empty__Output
  >
  Create: MethodDefinition<
    _containerd_services_tasks_v1_CreateTaskRequest,
    _containerd_services_tasks_v1_CreateTaskResponse,
    _containerd_services_tasks_v1_CreateTaskRequest__Output,
    _containerd_services_tasks_v1_CreateTaskResponse__Output
  >
  Delete: MethodDefinition<
    _containerd_services_tasks_v1_DeleteTaskRequest,
    _containerd_services_tasks_v1_DeleteResponse,
    _containerd_services_tasks_v1_DeleteTaskRequest__Output,
    _containerd_services_tasks_v1_DeleteResponse__Output
  >
  DeleteProcess: MethodDefinition<
    _containerd_services_tasks_v1_DeleteProcessRequest,
    _containerd_services_tasks_v1_DeleteResponse,
    _containerd_services_tasks_v1_DeleteProcessRequest__Output,
    _containerd_services_tasks_v1_DeleteResponse__Output
  >
  Exec: MethodDefinition<
    _containerd_services_tasks_v1_ExecProcessRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_ExecProcessRequest__Output,
    _google_protobuf_Empty__Output
  >
  Get: MethodDefinition<
    _containerd_services_tasks_v1_GetRequest,
    _containerd_services_tasks_v1_GetResponse,
    _containerd_services_tasks_v1_GetRequest__Output,
    _containerd_services_tasks_v1_GetResponse__Output
  >
  Kill: MethodDefinition<
    _containerd_services_tasks_v1_KillRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_KillRequest__Output,
    _google_protobuf_Empty__Output
  >
  List: MethodDefinition<
    _containerd_services_tasks_v1_ListTasksRequest,
    _containerd_services_tasks_v1_ListTasksResponse,
    _containerd_services_tasks_v1_ListTasksRequest__Output,
    _containerd_services_tasks_v1_ListTasksResponse__Output
  >
  ListPids: MethodDefinition<
    _containerd_services_tasks_v1_ListPidsRequest,
    _containerd_services_tasks_v1_ListPidsResponse,
    _containerd_services_tasks_v1_ListPidsRequest__Output,
    _containerd_services_tasks_v1_ListPidsResponse__Output
  >
  Metrics: MethodDefinition<
    _containerd_services_tasks_v1_MetricsRequest,
    _containerd_services_tasks_v1_MetricsResponse,
    _containerd_services_tasks_v1_MetricsRequest__Output,
    _containerd_services_tasks_v1_MetricsResponse__Output
  >
  Pause: MethodDefinition<
    _containerd_services_tasks_v1_PauseTaskRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_PauseTaskRequest__Output,
    _google_protobuf_Empty__Output
  >
  ResizePty: MethodDefinition<
    _containerd_services_tasks_v1_ResizePtyRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_ResizePtyRequest__Output,
    _google_protobuf_Empty__Output
  >
  Resume: MethodDefinition<
    _containerd_services_tasks_v1_ResumeTaskRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_ResumeTaskRequest__Output,
    _google_protobuf_Empty__Output
  >
  Start: MethodDefinition<
    _containerd_services_tasks_v1_StartRequest,
    _containerd_services_tasks_v1_StartResponse,
    _containerd_services_tasks_v1_StartRequest__Output,
    _containerd_services_tasks_v1_StartResponse__Output
  >
  Update: MethodDefinition<
    _containerd_services_tasks_v1_UpdateTaskRequest,
    _google_protobuf_Empty,
    _containerd_services_tasks_v1_UpdateTaskRequest__Output,
    _google_protobuf_Empty__Output
  >
  Wait: MethodDefinition<
    _containerd_services_tasks_v1_WaitRequest,
    _containerd_services_tasks_v1_WaitResponse,
    _containerd_services_tasks_v1_WaitRequest__Output,
    _containerd_services_tasks_v1_WaitResponse__Output
  >
}
