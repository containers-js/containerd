import type {} from '@grpc/grpc-js'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'

type MethodRequestType<T> = T extends (argument: infer U, ...other: any[]) => any ? U : never

type CallbackReturnType<T> = T extends (
  argument: object,
  callback: (error?: grpc.ServiceError, result?: infer U) => void,
) => grpc.ClientUnaryCall
  ? U
  : never

type UniaryMethodsOf<T extends grpc.Client> = {
  [K in keyof T]: T[K] extends (
    argument: object,
    callback: (error?: grpc.ServiceError, result?: object) => void,
  ) => grpc.ClientUnaryCall
    ? K
    : never
}[keyof T]

type ClientConstructor<PackageDefinition, Client extends grpc.Client> = (
  packageDefinition: PackageDefinition,
) => new (address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions | undefined) => Client

export abstract class BaseService<PackageDefinition, Client extends grpc.Client> {
  #address: string
  #namespace: string
  #protoPath: string

  #packageDefinition: PackageDefinition | null = null
  #getClientConstructor: ClientConstructor<PackageDefinition, Client>
  #client: Client | null = null
  #clientOptions: grpc.ClientOptions = {
    callInvocationTransformer: (callProperties) => {
      callProperties.metadata.set('containerd-namespace', this.#namespace)
      return callProperties
    },
  }

  constructor(
    address: string,
    namespace: string,
    protoPath: string,
    getClientConstructor: ClientConstructor<PackageDefinition, Client>,
  ) {
    this.#address = address
    this.#namespace = namespace
    this.#protoPath = protoPath
    this.#getClientConstructor = getClientConstructor
  }

  protected async callUnary<Method extends UniaryMethodsOf<Client>, Resp = CallbackReturnType<Client[Method]>>(
    method: Method,
    request: MethodRequestType<Client[Method]>,
  ) {
    const client = await this.getClient()
    return await new Promise<Resp>((resolve, reject) => {
      client[method](request, (error?: Error, result?: Resp) => {
        if (error) reject(error)
        else resolve(result!)
      })
    })
  }

  protected async getClient(): Promise<Client> {
    if (this.#client) return this.#client

    let packageDefinition = this.#packageDefinition
    if (!packageDefinition) {
      const proto = await protoLoader.load(this.#protoPath, {
        includeDirs: [path.join(__dirname, '../../proto')],
        defaults: true,
      })
      packageDefinition = grpc.loadPackageDefinition(proto) as unknown as PackageDefinition
      this.#packageDefinition = packageDefinition
    }

    const Client = this.#getClientConstructor(packageDefinition)
    const client = new Client(this.#address, grpc.credentials.createInsecure(), this.#clientOptions)
    this.#client = client
    return client
  }
}
