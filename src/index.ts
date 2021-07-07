import * as grpc from '@grpc/grpc-js'
import {ListContainersResponse__Output} from './proto/containerd/services/containers/v1/ListContainersResponse'
import {containersService, introspectionService} from './services'
import {promisify} from './util'

function memoize<T>(init: () => Promise<T>): () => Promise<T> {
  let value: Promise<T> | null = null
  return () => {
    if (value === null) {
      value = init()
    }
    return value
  }
}

class Client {
  #address: string
  #namespace: string

  #containersService = memoize(async () => {
    const service = await containersService()
    return new service.Containers(this.#address, grpc.credentials.createInsecure())
  })

  #introspectionService = memoize(async () => {
    const service = await introspectionService()
    return new service.Introspection(this.#address, grpc.credentials.createInsecure())
  })

  constructor(address: string, namespace: string) {
    this.#address = address
    this.#namespace = namespace
  }

  async containersList() {
    const svc = await this.#containersService()
    const metadata = new grpc.Metadata()
    metadata.set('containerd-namespace', this.#namespace)
    return promisify<ListContainersResponse__Output>((handler) => {
      svc.list({}, metadata, handler)
    })
  }

  async introspectionServer() {
    const svc = await this.#introspectionService()
    const metadata = new grpc.Metadata()
    metadata.set('namespace', this.#namespace)
    return new Promise((resolve, reject) => {
      svc.server({}, metadata, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

export async function createClient() {
  const service = await containersService()
  const client = new service.Containers('unix:/run/containerd/containerd.sock', grpc.credentials.createInsecure())
  return client
}

export async function createIntrospectionClient() {
  const service = await introspectionService()
  const client = new service.Introspection('unix:/run/containerd/containerd.sock', grpc.credentials.createInsecure())
  return client
}

async function run() {
  const metadata = new grpc.Metadata()
  metadata.set('containerd-namespace', 'example')

  const client = await createClient()
  client.list({}, metadata, (error, result) => {
    console.log({error, result})
    console.log(result)
  })

  const c = new Client('unix:/run/containerd/containerd.sock', 'example')
  console.log(await c.containersList())
}

run().catch((error) => {
  console.error(error.stack)
  process.exit(1)
})
