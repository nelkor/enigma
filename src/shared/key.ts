import { hexToUint8Array } from 'uint8array-extras'

export const parseKey = (keyHex: string) => {
  try {
    return hexToUint8Array(keyHex.startsWith('0x') ? keyHex.slice(2) : keyHex)
  } catch {
    return null
  }
}
