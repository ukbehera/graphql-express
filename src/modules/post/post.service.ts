import { apiClient } from "../../config/http.client";
import { Post } from "./post.model";

export class PostService {
  static async getPosts(): Promise<Post[]> {
    const { data } = await apiClient.get("/posts");
    return data;
  }

  static async getPostById(id: number): Promise<Post> {
    const { data } = await apiClient.get(`/posts/${id}`);
    return data;
  }
}
