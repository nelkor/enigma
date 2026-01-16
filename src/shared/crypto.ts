import { getPublicKey } from '@noble/secp256k1'

import { randomBytes } from './bytes'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

const importAesKey = async (rawKey: Uint8Array) => {
  if (rawKey.length !== 32) {
    throw new Error('AES-256 key must be 32 bytes')
  }

  return crypto.subtle.importKey(
    'raw',
    rawKey as BufferSource,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt'],
  )
}

const getAesAlgorithm = (iv: Uint8Array, ephemeralPubkey: Uint8Array) => ({
  iv,
  tagLength: 128,
  name: 'AES-GCM',
  additionalData: ephemeralPubkey,
})

export const sha256 = async (buffer: Uint8Array) =>
  new Uint8Array(await crypto.subtle.digest('SHA-256', buffer as BufferSource))

export const createKeypair = () => {
  const privateKey = randomBytes(32)

  return [privateKey, getPublicKey(privateKey)]
}

export const encryptString = async (
  source: string,
  key: Uint8Array,
  iv: Uint8Array,
  ephemeralPubkey: Uint8Array,
) => {
  const aesKey = await importAesKey(key)

  return new Uint8Array(
    await crypto.subtle.encrypt(
      getAesAlgorithm(iv, ephemeralPubkey),
      aesKey,
      encoder.encode(source),
    ),
  )
}

export const decryptString = async (
  source: Uint8Array,
  key: Uint8Array,
  iv: Uint8Array,
  ephemeralPubkey: Uint8Array,
) => {
  const aesKey = await importAesKey(key)

  const decrypted = new Uint8Array(
    await crypto.subtle.decrypt(
      getAesAlgorithm(iv, ephemeralPubkey),
      aesKey,
      source as BufferSource,
    ),
  )

  return decoder.decode(decrypted)
}
