# @containers-js/containerd

TypeScript client for [`containerd`](https://github.com/containerd/containerd).

## Installation

First, ensure you have installed the `containerd` command-line interface.

Next, install with your preferred package manager:

```shell
$ yarn add @containers-js/containerd
$ npm install @containers-js/containerd
$ pnpm add @containers-js/containerd
```

## Usage

```typescript
import {Client} from '@containers-js/containerd'

const client = new Client('unix:/run/containerd/containerd.sock', 'example-namespace')
const res = await client.containers.list({})
```

## License

MIT License, see `LICENSE`
