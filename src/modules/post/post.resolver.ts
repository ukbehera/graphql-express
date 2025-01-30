import { PostService } from "./post.service";

export const PostResolver = {
  posts: async () => await PostService.getPosts(),
  post: async ({ id }: { id: number }) => await PostService.getPostById(id),
};
