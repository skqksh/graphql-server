import { PrismaClient, Post } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  postById: async (
    parent: undefined,
    { id }: { id: number }
  ): Promise<Post | null> =>
    await prisma.post.findOne({
      where: { id },
      include: { author: {} },
    }),
}
