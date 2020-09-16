import { HmacSHA256, enc } from 'crypto-js'

export default {
  HashPassword: ({ password }: { password: string }): string => {
    return enc.Base64.stringify(
      HmacSHA256(password, process.env.PW_SECRET)
    )
  },
}
