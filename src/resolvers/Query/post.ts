import PostService from '@service/post'

import { Post } from '@models/api'

export default {
  postById: async (
    parent: undefined,
    { id }: { id: number }
  ): Promise<Post | null> => await PostService.postById({ id }),
}
