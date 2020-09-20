import { PrismaClient } from '@prisma/client'
import { User, UserCreateInput } from '@models/api'

const prisma = new PrismaClient()

export default {
  users: async (): Promise<User[]> =>
    await prisma.user.findMany({
      include: { profile: {}, writtenPosts: {} },
    }),
  userByEmail: async ({
    email,
  }: {
    email: string
  }): Promise<User | null> =>
    await prisma.user.findOne({
      where: { email },
    }),
  createUser: async ({
    data,
  }: {
    data: UserCreateInput
  }): Promise<User> => {
    return await prisma.user.create({ data })
  },
}
