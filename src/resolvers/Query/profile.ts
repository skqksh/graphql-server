import ProfileService from '@service/profile'

import { Profile } from '@models/api'

export default {
  profileByUserId: async (
    parent: undefined,
    { userId }: { userId: number }
  ): Promise<Profile | null> =>
    await ProfileService.profileByUserId({ userId }),
}
