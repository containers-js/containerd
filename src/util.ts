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
