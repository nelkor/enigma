import { getSharedSecret } from '@noble/secp256k1'

import { sha256, parseKey, base64ToBytes, decryptString } from '@/shared'
import {
  decryptedTextDiv,
  encryptedTextarea,
  recipientPrivateInput,
} from '@/dom'

export const decrypt = async () => {
  const recipientPrivate = parseKey(recipientPrivateInput.value)
  const encryptedText = encryptedTextarea.value

  if (!recipientPrivate) {
    decryptedTextDiv.innerHTML = 'Invalid private key hex'

    return
  }

  if (!encryptedText) {
    decryptedTextDiv.innerHTML = 'Enter some text for decryption'

    return
  }

  const encryptedBuffer = base64ToBytes(encryptedText)

  if (!encryptedBuffer) {
    decryptedTextDiv.innerHTML = 'Invalid decrypted text format'

    return
  }

  // 33b, ephemeralPubkey
  // 12b, iv
  // The rest, encrypted
  if (encryptedBuffer.length < 33 + 12 + 1) {
    decryptedTextDiv.innerHTML = 'Invalid decrypted text length'

    return
  }

  const ephemeralPubkey = encryptedBuffer.slice(0, 33)
  const iv = encryptedBuffer.slice(33, 33 + 12)
  const encrypted = encryptedBuffer.slice(33 + 12)
  const sharedSecret = getSharedSecret(recipientPrivate, ephemeralPubkey, true)

  const key = await sha256(sharedSecret)

  decryptString(encrypted, key, iv, ephemeralPubkey)
    .then(decrypted => {
      decryptedTextDiv.innerHTML = decrypted
    })
    .catch(() => {
      decryptedTextDiv.innerHTML = 'Cannot decrypt'
    })
}
