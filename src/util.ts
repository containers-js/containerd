export function memoize<T>(init: () => Promise<T>): () => Promise<T> {
  let value: Promise<T> | null = null
  return () => {
    if (value === null) {
      value = init()
    }
    return value
  }
}

export function promisify<T>(cb: (handler: (error: Error | null | undefined, result?: T) => void) => void): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    cb((error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result!)
      }
    })
  })
}
