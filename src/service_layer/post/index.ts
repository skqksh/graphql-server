import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { Post } from '@models/api'

export default {
  postById: async ({ id }: { id: number }): Promise<Post | null> =>
    await prisma.post.findOne({
      where: { id },
      include: { author: {} },
    }),
}
