import { base64ToUint8Array } from 'uint8array-extras'

export const randomBytes = (length: number) => {
  const bytes = new Uint8Array(length)

  crypto.getRandomValues(bytes)

  return bytes
}

export const base64ToBytes = (base64: string) => {
  try {
    return base64ToUint8Array(base64)
  } catch {
    return null
  }
}
