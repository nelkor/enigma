import { decrypt } from '@/features/decrypt'
import { encrypt } from '@/features/encrypt'
import { decryptButton, encryptButton } from '@/dom'

// Const recipientPrivateKeyHex =
//   '0e3359aba1c304bc7eb0bc5b6ce5f2b899a165e2b6dfd36f5bf579353cdc7022'

// const recipientPrivate = hexToUint8Array(recipientPrivateKeyHex)

// --------------------
// РАСШИФРОВЫВАНИЕ
// --------------------
// const unpackEncrypted = base64ToUint8Array(packetEncrypted)

// const recipientSharedSecret = getSharedSecret(
//   recipientPrivate,
//   ephemeralPubkey,
//   true,
// )
//
// const recipientKeyBytes = await sha256(recipientSharedSecret)
//
// const decryptedText = await decryptString(
//   encrypted,
//   recipientKeyBytes,
//   iv,
//   ephemeralPubkey,
// )
//
// console.log('--- РАСШИФРОВАНО ---')
// console.log(decryptedText)

encryptButton.addEventListener('click', encrypt)
decryptButton.addEventListener('click', decrypt)
