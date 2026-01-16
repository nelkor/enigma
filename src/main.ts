import { decrypt } from '@/features/decrypt'
import { encrypt } from '@/features/encrypt'
import { decryptButton, encryptButton } from '@/dom'

encryptButton.addEventListener('click', encrypt)
decryptButton.addEventListener('click', decrypt)
