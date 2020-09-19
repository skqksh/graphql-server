import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { Profile } from '@models/api'

export default {
  profileByUserId: async ({
    userId,
  }: {
    userId: number
  }): Promise<Profile | null> =>
    await prisma.profile.findOne({
      where: { userId },
      include: { user: {} },
    }),
}
