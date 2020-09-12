import { PrismaClient, User, Profile, Post } from '@prisma/client'
const prisma = new PrismaClient()

export const Query = {
  hello: (): string => 'Hello world~!',
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
  profileByUserId: async (
    parent: undefined,
    { userId }: { userId: number }
  ): Promise<Profile | null> =>
    await prisma.profile.findOne({
      where: { userId },
      include: { user: {} },
    }),
  postById: async (
    parent: undefined,
    { id }: { id: number }
  ): Promise<Post | null> =>
    await prisma.post.findOne({
      where: { id },
      include: { author: {} },
    }),
}
