import {Client} from './Client'

async function run() {
  const client = new Client('unix:/run/containerd/containerd.sock', 'example')
  const res = await client.containers.list({})
  console.log(res)
}

run().catch((error) => {
  console.error(error.stack)
  process.exit(1)
})
