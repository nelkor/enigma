import { parseKey, base64ToBytes } from '@/shared'
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
  }

  const encryptedBuffer = base64ToBytes(encryptedText)

  if (!encryptedBuffer) {
    decryptedTextDiv.innerHTML = 'Invalid decrypted text format'
  }
}
