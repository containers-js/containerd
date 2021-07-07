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

export abstract class BaseService<PackageDefinition, Client extends grpc.Client> {
  #packageDefinition: PackageDefinition | null = null
  #protoPath: string

  #client: Client | null = null
  protected address: string
  protected namespace: string
  protected credentials = grpc.credentials.createInsecure()
  protected clientOptions: grpc.ClientOptions = {
    callInvocationTransformer: (callProperties) => {
      callProperties.metadata.set('containerd-namespace', this.namespace)
      return callProperties
    },
  }

  constructor(protoPath: string, address: string, namespace: string) {
    this.#protoPath = protoPath
    this.address = address
    this.namespace = namespace
  }

  protected async packageDefinition(): Promise<PackageDefinition> {
    if (this.#packageDefinition) return this.#packageDefinition as PackageDefinition
    const proto = await protoLoader.load(this.#protoPath, {includeDirs: [path.join(__dirname, '../../proto')]})
    const packageDefinition = grpc.loadPackageDefinition(proto) as unknown as PackageDefinition
    this.#packageDefinition = packageDefinition
    return packageDefinition
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
    const Client = this.getClientConstructor(await this.packageDefinition())
    const client = new Client(this.address, this.credentials, this.clientOptions)
    this.#client = client
    return client
  }

  protected abstract getClientConstructor(
    packageDefinition: PackageDefinition,
  ): new (address: string, credentials: grpc.ChannelCredentials, options?: grpc.ClientOptions | undefined) => Client
}
