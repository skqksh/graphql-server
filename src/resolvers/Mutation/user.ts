import { PrismaClient, User, UserCreateInput } from '@prisma/client'
import { HmacSHA256, enc } from 'crypto-js'
const prisma = new PrismaClient()

export default {
  createUser: async (
    parent: undefined,
    { data: { name, email, password } }: { data: UserCreateInput }
  ): Promise<User> => {
    const encPw = enc.Base64.stringify(
      HmacSHA256(password, process.env.PW_SECRET)
    )
    return await prisma.user.create({
      data: { name, email, password: encPw },
    })
  },
}
