import { getDivById, getInputById, getButtonById, getTextareaById } from './lib'

export const encryptButton = getButtonById('encrypt-button')
export const sourceTextarea = getTextareaById('source-text')
export const resultTextDiv = getDivById('result-text')
export const recipientPubkeyInput = getInputById('recipient-pubkey')

export const decryptButton = getButtonById('decrypt-button')
export const encryptedTextarea = getTextareaById('encrypted-text')
export const decryptedTextDiv = getDivById('decrypted-text')
export const recipientPrivateInput = getInputById('recipient-private')
