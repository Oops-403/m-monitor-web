import { AES, enc, mode, pad } from 'crypto-js'

const iv = enc.Utf8.parse('ABCDEF1234567890')

/**
 * decrypt
 * @param val
 * @param secret
 */
export const decrypt = (val: string, secret: string) => {
  const decrypt = AES.decrypt(val, secret)
  return decrypt.toString(enc.Utf8)
}

/**
 * encrypt
 * @param val
 * @param secret
 */
export const encrypt = (val: string, secret: string) => {
  return AES.encrypt(val, secret).toString()
}


/**
 * Decrypt by AES with iv
 * @param word
 * @param secret
 * @description Reminder! characters that are not multiples of 8 will report an error using this method
 */
export const decryptWithIV = (word: string, secret: string) => {
  const encryptedHexStr = enc.Hex.parse(word)
  const str = enc.Base64.stringify(encryptedHexStr)
  const decrypt = AES.decrypt(str, enc.Utf8.parse(secret), {
    iv: iv,
    mode: mode.CBC,
    padding: pad.Iso10126
  })
  const decryptedStr = decrypt.toString(enc.Utf8)
  return decryptedStr.toString()
}

/**
 * Encrypt by AES with iv
 * @param word
 * @param secret
 * @description Reminder! characters that are not multiples of 8 will report an error using this method
 */
export const encryptWithIV = (word: string, secret: string) => {
  const str = enc.Utf8.parse(word)
  const encrypted = AES.encrypt(str, enc.Utf8.parse(secret), {
    iv: iv,
    mode: mode.CBC,
    padding: pad.Iso10126
  })
  return encrypted.ciphertext.toString().toUpperCase()
}

