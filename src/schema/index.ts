import { buildSchema } from "graphql";
import { PostResolver } from "../modules/post/post.resolver";
import { UserResolver } from "../modules/user/user.resolver";

export const schema = buildSchema(`
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Query {
    posts: [Post]
    post(id: Int!): Post
    users: [User]
    user(id: Int!): User
  }
`);

export const resolvers = {
  ...PostResolver,
  ...UserResolver,
};
