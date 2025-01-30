import { schema, resolvers } from "../schema";

export const graphqlLoader = {
  schema,
  rootValue: resolvers,
};
