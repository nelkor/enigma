import { getSharedSecret } from '@noble/secp256k1'
import { concatUint8Arrays, uint8ArrayToBase64 } from 'uint8array-extras'

import { resultTextDiv, sourceTextarea, recipientPubkeyInput } from '@/dom'
import {
  sha256,
  parseKey,
  randomBytes,
  createKeypair,
  encryptString,
} from '@/shared'

export const encrypt = async () => {
  const recipientPubkey = parseKey(recipientPubkeyInput.value)
  const plaintext = sourceTextarea.value

  if (!recipientPubkey) {
    resultTextDiv.innerHTML = 'Invalid public key hex'

    return
  }

  if (!plaintext) {
    resultTextDiv.innerHTML = 'Enter some text for encryption'

    return
  }

  const iv = randomBytes(12)
  const [ephemeralPrivate, ephemeralPubkey] = createKeypair()
  const sharedSecret = getSharedSecret(ephemeralPrivate, recipientPubkey, true)

  const key = await sha256(sharedSecret)
  const encrypted = await encryptString(plaintext, key, iv, ephemeralPubkey)

  resultTextDiv.innerHTML = uint8ArrayToBase64(
    concatUint8Arrays([ephemeralPubkey, iv, encrypted]),
  )
}
