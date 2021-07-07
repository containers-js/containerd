import type {} from '@grpc/grpc-js'
import path from 'path'
import {CheckpointTaskRequest} from '../proto/containerd/services/tasks/v1/CheckpointTaskRequest'
import {CloseIORequest} from '../proto/containerd/services/tasks/v1/CloseIORequest'
import {CreateTaskRequest} from '../proto/containerd/services/tasks/v1/CreateTaskRequest'
import {DeleteProcessRequest} from '../proto/containerd/services/tasks/v1/DeleteProcessRequest'
import {DeleteTaskRequest} from '../proto/containerd/services/tasks/v1/DeleteTaskRequest'
import {ExecProcessRequest} from '../proto/containerd/services/tasks/v1/ExecProcessRequest'
import {GetRequest} from '../proto/containerd/services/tasks/v1/GetRequest'
import {KillRequest} from '../proto/containerd/services/tasks/v1/KillRequest'
import {ListPidsRequest} from '../proto/containerd/services/tasks/v1/ListPidsRequest'
import {ListTasksRequest} from '../proto/containerd/services/tasks/v1/ListTasksRequest'
import {MetricsRequest} from '../proto/containerd/services/tasks/v1/MetricsRequest'
import {PauseTaskRequest} from '../proto/containerd/services/tasks/v1/PauseTaskRequest'
import {ResizePtyRequest} from '../proto/containerd/services/tasks/v1/ResizePtyRequest'
import {ResumeTaskRequest} from '../proto/containerd/services/tasks/v1/ResumeTaskRequest'
import {StartRequest} from '../proto/containerd/services/tasks/v1/StartRequest'
import {TasksClient} from '../proto/containerd/services/tasks/v1/Tasks'
import {UpdateTaskRequest} from '../proto/containerd/services/tasks/v1/UpdateTaskRequest'
import {WaitRequest} from '../proto/containerd/services/tasks/v1/WaitRequest'
import {ProtoGrpcType} from '../proto/tasks'
import {BaseService} from './BaseService'

function getClientConstructor(proto: ProtoGrpcType) {
  return proto.containerd.services.tasks.v1.Tasks
}

export class TasksService extends BaseService<ProtoGrpcType, TasksClient> {
  constructor(address: string, namespace: string) {
    super(
      address,
      namespace,
      path.join(__dirname, '../../proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto'),
      getClientConstructor,
    )
  }

  async checkpoint(request: CheckpointTaskRequest) {
    return this.callUnary('checkpoint', request)
  }

  async closeIO(request: CloseIORequest) {
    return this.callUnary('closeIo', request)
  }

  async create(request: CreateTaskRequest) {
    return this.callUnary('create', request)
  }

  async delete(request: DeleteTaskRequest) {
    return this.callUnary('delete', request)
  }

  async deleteProcess(request: DeleteProcessRequest) {
    return this.callUnary('deleteProcess', request)
  }

  async exec(request: ExecProcessRequest) {
    return this.callUnary('exec', request)
  }

  async get(request: GetRequest) {
    return this.callUnary('get', request)
  }

  async kill(request: KillRequest) {
    return this.callUnary('kill', request)
  }

  async list(request: ListTasksRequest) {
    return this.callUnary('list', request)
  }

  async listPids(request: ListPidsRequest) {
    return this.callUnary('listPids', request)
  }

  async metrics(request: MetricsRequest) {
    return this.callUnary('metrics', request)
  }

  async pause(request: PauseTaskRequest) {
    return this.callUnary('pause', request)
  }

  async resizePty(request: ResizePtyRequest) {
    return this.callUnary('resizePty', request)
  }

  async resume(request: ResumeTaskRequest) {
    return this.callUnary('resume', request)
  }

  async start(request: StartRequest) {
    return this.callUnary('start', request)
  }

  async update(request: UpdateTaskRequest) {
    return this.callUnary('update', request)
  }

  async wait(request: WaitRequest) {
    return this.callUnary('wait', request)
  }
}
