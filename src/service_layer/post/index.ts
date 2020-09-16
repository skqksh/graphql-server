import { PrismaClient, Post as _Post } from '@prisma/client'
const prisma = new PrismaClient()

export type Post = _Post

export default {
  postById: async ({ id }: { id: number }): Promise<Post | null> =>
    await prisma.post.findOne({
      where: { id },
      include: { author: {} },
    }),
}
