import { PrismaClient, Profile } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  profileByUserId: async (
    parent: undefined,
    { userId }: { userId: number }
  ): Promise<Profile | null> =>
    await prisma.profile.findOne({
      where: { userId },
      include: { user: {} },
    }),
}
