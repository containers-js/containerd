import {Client} from './Client'

async function run() {
  const client = new Client('unix:/run/containerd/containerd.sock', 'example')
  console.log(await client.containers.list({}))
}

run().catch((error) => {
  console.error(error.stack)
  process.exit(1)
})
