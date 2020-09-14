import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
})

export default {
  users: async (): Promise<User[]> =>
    await prisma.user.findMany({
      include: { profile: {}, writtenPosts: {} },
    }),
  userById: async (
    parent: undefined,
    { id }: { id: number }
  ): Promise<User | null> =>
    await prisma.user.findOne({
      where: { id },
      include: {
        writtenPosts: { where: { authorId: id } },
        profile: {},
      },
    }),
}
