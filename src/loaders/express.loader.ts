import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema, resolvers } from "../schema";
import { logger } from "../config/logger";

export const expressLoader = () => {
  const app = express();

  app.all(
    "/graphql",
    createHandler({
      schema,
      rootValue: resolvers,
    })
  );

  return app;
};
