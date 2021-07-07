import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import {ProtoGrpcType as ContainersProtoGrcpType} from './proto/containers'
import {ProtoGrpcType as ContentProtoGrcpType} from './proto/content'
import {ProtoGrpcType as DiffProtoGrcpType} from './proto/diff'
import {ProtoGrpcType as EventsProtoGrcpType} from './proto/events'
import {ProtoGrpcType as ImagesProtoGrcpType} from './proto/images'
import {ProtoGrpcType as IntrospectionProtoGrcpType} from './proto/introspection'
import {ProtoGrpcType as LeasesProtoGrcpType} from './proto/leases'
import {ProtoGrpcType as NamespaceProtoGrcpType} from './proto/namespace'
import {ProtoGrpcType as SnapshotsProtoGrcpType} from './proto/snapshots'
import {ProtoGrpcType as TasksProtoGrcpType} from './proto/tasks'
import {ProtoGrpcType as VersionProtoGrcpType} from './proto/version'

function memoize<T>(init: () => Promise<T>): () => Promise<T> {
  let value: Promise<T> | null = null
  return () => {
    if (value === null) {
      value = init()
    }
    return value
  }
}

async function loadPackageDefinition<T>(filepath: string): Promise<T> {
  const packageDefinition = await protoLoader.load(filepath, {
    includeDirs: [path.join(__dirname, '../proto')],
  })
  return grpc.loadPackageDefinition(packageDefinition) as unknown as T
}

export const containersService = memoize(async () => {
  const def = await loadPackageDefinition<ContainersProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/containers/v1/containers.proto'),
  )
  return def.containerd.services.containers.v1
})

export const contentService = memoize(async () => {
  const def = await loadPackageDefinition<ContentProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/content/v1/content.proto'),
  )
  return def.containerd.services.content.v1
})

export const diffService = memoize(async () => {
  const def = await loadPackageDefinition<DiffProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/diff/v1/diff.proto'),
  )
  return def.containerd.services.diff.v1
})

export const eventsService = memoize(async () => {
  const def = await loadPackageDefinition<EventsProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/events/v1/events.proto'),
  )
  return def.containerd.services.events.v1
})

export const imagesService = memoize(async () => {
  const def = await loadPackageDefinition<ImagesProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/images/v1/images.proto'),
  )
  return def.containerd.services.images.v1
})

export const introspectionService = memoize(async () => {
  const def = await loadPackageDefinition<IntrospectionProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/introspection/v1/introspection.proto'),
  )
  return def.containerd.services.introspection.v1
})

export const leasesService = memoize(async () => {
  const def = await loadPackageDefinition<LeasesProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/leases/v1/leases.proto'),
  )
  return def.containerd.services.leases.v1
})

export const namespacesService = memoize(async () => {
  const def = await loadPackageDefinition<NamespaceProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/namespaces/v1/namespaces.proto'),
  )
  return def.containerd.services.namespaces.v1
})

export const snapshotsService = memoize(async () => {
  const def = await loadPackageDefinition<SnapshotsProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto'),
  )
  return def.containerd.services.snapshots.v1
})

export const tasksService = memoize(async () => {
  const def = await loadPackageDefinition<TasksProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/tasks/v1/tasks.proto'),
  )
  return def.containerd.services.tasks.v1
})

export const versionService = memoize(async () => {
  const def = await loadPackageDefinition<VersionProtoGrcpType>(
    path.join(__dirname, '../proto/github.com/containerd/containerd/api/services/version/v1/version.proto'),
  )
  return def.containerd.services.version.v1
})
