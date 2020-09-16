import PostService, { Post } from '@service/post'

export default {
  postById: async (
    parent: undefined,
    { id }: { id: number }
  ): Promise<Post | null> => await PostService.postById({ id }),
}
