import ProfileService, { Profile } from '@service/profile'

export default {
  profileByUserId: async (
    parent: undefined,
    { userId }: { userId: number }
  ): Promise<Profile | null> =>
    await ProfileService.profileByUserId({ userId }),
}
