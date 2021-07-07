// Original file: proto/github.com/containerd/containerd/api/services/snapshots/v1/snapshots.proto

import type * as grpc from '@grpc/grpc-js'
import type {MethodDefinition} from '@grpc/proto-loader'
import type {
  CleanupRequest as _containerd_services_snapshots_v1_CleanupRequest,
  CleanupRequest__Output as _containerd_services_snapshots_v1_CleanupRequest__Output,
} from '../../../../containerd/services/snapshots/v1/CleanupRequest'
import type {
  CommitSnapshotRequest as _containerd_services_snapshots_v1_CommitSnapshotRequest,
  CommitSnapshotRequest__Output as _containerd_services_snapshots_v1_CommitSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/CommitSnapshotRequest'
import type {
  ListSnapshotsRequest as _containerd_services_snapshots_v1_ListSnapshotsRequest,
  ListSnapshotsRequest__Output as _containerd_services_snapshots_v1_ListSnapshotsRequest__Output,
} from '../../../../containerd/services/snapshots/v1/ListSnapshotsRequest'
import type {
  ListSnapshotsResponse as _containerd_services_snapshots_v1_ListSnapshotsResponse,
  ListSnapshotsResponse__Output as _containerd_services_snapshots_v1_ListSnapshotsResponse__Output,
} from '../../../../containerd/services/snapshots/v1/ListSnapshotsResponse'
import type {
  MountsRequest as _containerd_services_snapshots_v1_MountsRequest,
  MountsRequest__Output as _containerd_services_snapshots_v1_MountsRequest__Output,
} from '../../../../containerd/services/snapshots/v1/MountsRequest'
import type {
  MountsResponse as _containerd_services_snapshots_v1_MountsResponse,
  MountsResponse__Output as _containerd_services_snapshots_v1_MountsResponse__Output,
} from '../../../../containerd/services/snapshots/v1/MountsResponse'
import type {
  PrepareSnapshotRequest as _containerd_services_snapshots_v1_PrepareSnapshotRequest,
  PrepareSnapshotRequest__Output as _containerd_services_snapshots_v1_PrepareSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/PrepareSnapshotRequest'
import type {
  PrepareSnapshotResponse as _containerd_services_snapshots_v1_PrepareSnapshotResponse,
  PrepareSnapshotResponse__Output as _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
} from '../../../../containerd/services/snapshots/v1/PrepareSnapshotResponse'
import type {
  RemoveSnapshotRequest as _containerd_services_snapshots_v1_RemoveSnapshotRequest,
  RemoveSnapshotRequest__Output as _containerd_services_snapshots_v1_RemoveSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/RemoveSnapshotRequest'
import type {
  StatSnapshotRequest as _containerd_services_snapshots_v1_StatSnapshotRequest,
  StatSnapshotRequest__Output as _containerd_services_snapshots_v1_StatSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/StatSnapshotRequest'
import type {
  StatSnapshotResponse as _containerd_services_snapshots_v1_StatSnapshotResponse,
  StatSnapshotResponse__Output as _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
} from '../../../../containerd/services/snapshots/v1/StatSnapshotResponse'
import type {
  UpdateSnapshotRequest as _containerd_services_snapshots_v1_UpdateSnapshotRequest,
  UpdateSnapshotRequest__Output as _containerd_services_snapshots_v1_UpdateSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/UpdateSnapshotRequest'
import type {
  UpdateSnapshotResponse as _containerd_services_snapshots_v1_UpdateSnapshotResponse,
  UpdateSnapshotResponse__Output as _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
} from '../../../../containerd/services/snapshots/v1/UpdateSnapshotResponse'
import type {
  UsageRequest as _containerd_services_snapshots_v1_UsageRequest,
  UsageRequest__Output as _containerd_services_snapshots_v1_UsageRequest__Output,
} from '../../../../containerd/services/snapshots/v1/UsageRequest'
import type {
  UsageResponse as _containerd_services_snapshots_v1_UsageResponse,
  UsageResponse__Output as _containerd_services_snapshots_v1_UsageResponse__Output,
} from '../../../../containerd/services/snapshots/v1/UsageResponse'
import type {
  ViewSnapshotRequest as _containerd_services_snapshots_v1_ViewSnapshotRequest,
  ViewSnapshotRequest__Output as _containerd_services_snapshots_v1_ViewSnapshotRequest__Output,
} from '../../../../containerd/services/snapshots/v1/ViewSnapshotRequest'
import type {
  ViewSnapshotResponse as _containerd_services_snapshots_v1_ViewSnapshotResponse,
  ViewSnapshotResponse__Output as _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
} from '../../../../containerd/services/snapshots/v1/ViewSnapshotResponse'
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output,
} from '../../../../google/protobuf/Empty'

export interface SnapshotsClient extends grpc.Client {
  Cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  cleanup(
    argument: _containerd_services_snapshots_v1_CleanupRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  commit(
    argument: _containerd_services_snapshots_v1_CommitSnapshotRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  List(
    argument: _containerd_services_snapshots_v1_ListSnapshotsRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_snapshots_v1_ListSnapshotsResponse__Output>
  List(
    argument: _containerd_services_snapshots_v1_ListSnapshotsRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_snapshots_v1_ListSnapshotsResponse__Output>
  list(
    argument: _containerd_services_snapshots_v1_ListSnapshotsRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_snapshots_v1_ListSnapshotsResponse__Output>
  list(
    argument: _containerd_services_snapshots_v1_ListSnapshotsRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_containerd_services_snapshots_v1_ListSnapshotsResponse__Output>

  Mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall
  mounts(
    argument: _containerd_services_snapshots_v1_MountsRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_MountsResponse__Output) => void,
  ): grpc.ClientUnaryCall

  Prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  prepare(
    argument: _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  Remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall
  remove(
    argument: _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void,
  ): grpc.ClientUnaryCall

  Stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  stat(
    argument: _containerd_services_snapshots_v1_StatSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_StatSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  Update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  update(
    argument: _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall

  Usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  Usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    metadata: grpc.Metadata,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    options: grpc.CallOptions,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall
  usage(
    argument: _containerd_services_snapshots_v1_UsageRequest,
    callback: (error?: grpc.ServiceError, result?: _containerd_services_snapshots_v1_UsageResponse__Output) => void,
  ): grpc.ClientUnaryCall

  View(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  View(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  View(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  View(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  view(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  view(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    metadata: grpc.Metadata,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  view(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    options: grpc.CallOptions,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
  view(
    argument: _containerd_services_snapshots_v1_ViewSnapshotRequest,
    callback: (
      error?: grpc.ServiceError,
      result?: _containerd_services_snapshots_v1_ViewSnapshotResponse__Output,
    ) => void,
  ): grpc.ClientUnaryCall
}

export interface SnapshotsHandlers extends grpc.UntypedServiceImplementation {
  Cleanup: grpc.handleUnaryCall<_containerd_services_snapshots_v1_CleanupRequest__Output, _google_protobuf_Empty>

  Commit: grpc.handleUnaryCall<_containerd_services_snapshots_v1_CommitSnapshotRequest__Output, _google_protobuf_Empty>

  List: grpc.handleServerStreamingCall<
    _containerd_services_snapshots_v1_ListSnapshotsRequest__Output,
    _containerd_services_snapshots_v1_ListSnapshotsResponse
  >

  Mounts: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_MountsRequest__Output,
    _containerd_services_snapshots_v1_MountsResponse
  >

  Prepare: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_PrepareSnapshotRequest__Output,
    _containerd_services_snapshots_v1_PrepareSnapshotResponse
  >

  Remove: grpc.handleUnaryCall<_containerd_services_snapshots_v1_RemoveSnapshotRequest__Output, _google_protobuf_Empty>

  Stat: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_StatSnapshotRequest__Output,
    _containerd_services_snapshots_v1_StatSnapshotResponse
  >

  Update: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_UpdateSnapshotRequest__Output,
    _containerd_services_snapshots_v1_UpdateSnapshotResponse
  >

  Usage: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_UsageRequest__Output,
    _containerd_services_snapshots_v1_UsageResponse
  >

  View: grpc.handleUnaryCall<
    _containerd_services_snapshots_v1_ViewSnapshotRequest__Output,
    _containerd_services_snapshots_v1_ViewSnapshotResponse
  >
}

export interface SnapshotsDefinition extends grpc.ServiceDefinition {
  Cleanup: MethodDefinition<
    _containerd_services_snapshots_v1_CleanupRequest,
    _google_protobuf_Empty,
    _containerd_services_snapshots_v1_CleanupRequest__Output,
    _google_protobuf_Empty__Output
  >
  Commit: MethodDefinition<
    _containerd_services_snapshots_v1_CommitSnapshotRequest,
    _google_protobuf_Empty,
    _containerd_services_snapshots_v1_CommitSnapshotRequest__Output,
    _google_protobuf_Empty__Output
  >
  List: MethodDefinition<
    _containerd_services_snapshots_v1_ListSnapshotsRequest,
    _containerd_services_snapshots_v1_ListSnapshotsResponse,
    _containerd_services_snapshots_v1_ListSnapshotsRequest__Output,
    _containerd_services_snapshots_v1_ListSnapshotsResponse__Output
  >
  Mounts: MethodDefinition<
    _containerd_services_snapshots_v1_MountsRequest,
    _containerd_services_snapshots_v1_MountsResponse,
    _containerd_services_snapshots_v1_MountsRequest__Output,
    _containerd_services_snapshots_v1_MountsResponse__Output
  >
  Prepare: MethodDefinition<
    _containerd_services_snapshots_v1_PrepareSnapshotRequest,
    _containerd_services_snapshots_v1_PrepareSnapshotResponse,
    _containerd_services_snapshots_v1_PrepareSnapshotRequest__Output,
    _containerd_services_snapshots_v1_PrepareSnapshotResponse__Output
  >
  Remove: MethodDefinition<
    _containerd_services_snapshots_v1_RemoveSnapshotRequest,
    _google_protobuf_Empty,
    _containerd_services_snapshots_v1_RemoveSnapshotRequest__Output,
    _google_protobuf_Empty__Output
  >
  Stat: MethodDefinition<
    _containerd_services_snapshots_v1_StatSnapshotRequest,
    _containerd_services_snapshots_v1_StatSnapshotResponse,
    _containerd_services_snapshots_v1_StatSnapshotRequest__Output,
    _containerd_services_snapshots_v1_StatSnapshotResponse__Output
  >
  Update: MethodDefinition<
    _containerd_services_snapshots_v1_UpdateSnapshotRequest,
    _containerd_services_snapshots_v1_UpdateSnapshotResponse,
    _containerd_services_snapshots_v1_UpdateSnapshotRequest__Output,
    _containerd_services_snapshots_v1_UpdateSnapshotResponse__Output
  >
  Usage: MethodDefinition<
    _containerd_services_snapshots_v1_UsageRequest,
    _containerd_services_snapshots_v1_UsageResponse,
    _containerd_services_snapshots_v1_UsageRequest__Output,
    _containerd_services_snapshots_v1_UsageResponse__Output
  >
  View: MethodDefinition<
    _containerd_services_snapshots_v1_ViewSnapshotRequest,
    _containerd_services_snapshots_v1_ViewSnapshotResponse,
    _containerd_services_snapshots_v1_ViewSnapshotRequest__Output,
    _containerd_services_snapshots_v1_ViewSnapshotResponse__Output
  >
}
