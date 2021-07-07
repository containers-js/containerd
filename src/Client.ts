import {ContainersService} from './services/ContainersService'
import {ContentService} from './services/ContentService'
import {DiffService} from './services/DiffService'
import {EventsService} from './services/EventsService'
import {ImagesService} from './services/ImagesService'
import {IntrospectionService} from './services/IntrospectionService'
import {LeasesService} from './services/LeasesService'
import {NamespacesService} from './services/NamespacesService'
import {SnapshotsService} from './services/SnapshotsService'
import {TasksService} from './services/TasksService'
import {VersionService} from './services/VersionService'

export class Client {
  containers: ContainersService
  content: ContentService
  diff: DiffService
  events: EventsService
  images: ImagesService
  introspection: IntrospectionService
  leases: LeasesService
  namespaces: NamespacesService
  snapshots: SnapshotsService
  tasks: TasksService
  version: VersionService

  constructor(address: string, namespace: string) {
    this.containers = new ContainersService(address, namespace)
    this.content = new ContentService(address, namespace)
    this.diff = new DiffService(address, namespace)
    this.events = new EventsService(address, namespace)
    this.images = new ImagesService(address, namespace)
    this.introspection = new IntrospectionService(address, namespace)
    this.leases = new LeasesService(address, namespace)
    this.namespaces = new NamespacesService(address, namespace)
    this.snapshots = new SnapshotsService(address, namespace)
    this.tasks = new TasksService(address, namespace)
    this.version = new VersionService(address, namespace)
  }
}
