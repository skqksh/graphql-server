import { HmacSHA256, enc } from 'crypto-js'
import jwt from 'jsonwebtoken'
import { User } from '@models/api'

const ACCESS_TOKEN_EXPIRES = 60 * 60 // 1 hour
const JWT_SECRET = process.env.JWT_SECRET || '!@#^&*'

export default {
  hashPassword: ({ password }: { password: string }): string => {
    return enc.Base64.stringify(
      HmacSHA256(password, process.env.PW_SECRET)
    )
  },
  signAccessToken: ({ user }: { user: User }): string => {
    return jwt.sign(user, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES,
    })
  },
  verifyAccessToken: ({
    accessToken,
  }: {
    accessToken: string
  }): boolean | undefined => {
    try {
      return !!jwt.verify(accessToken, JWT_SECRET)
    } catch (error) {}
  },
  getUserByAccessToken: ({
    accessToken,
  }: {
    accessToken: string
  }): User | undefined => {
    try {
      return jwt.verify(accessToken, JWT_SECRET) as User
    } catch (error) {}
  },
  log({ msg }: { msg: string }): void {
    // eslint-disable-next-line
    console.log(msg)
  },
}
