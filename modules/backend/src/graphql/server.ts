import { ApolloServer, gql, makeExecutableSchema } from "apollo-server-express";
import { Application } from "express";
import { PrismaClient } from "@prisma/client";
import merge from "lodash.merge";

import {
  typeDef as userTypeDef,
  resolvers as userResolvers,
} from "./user/user";

const prisma = new PrismaClient();

export default (app: Application): ApolloServer => {
  const context = { prisma };

  const queryTypeDef = gql`
    type Query {
      _empty: String
    }
    type Mutation {
      _empty: String
    }
  `;

  const typeDefs = [queryTypeDef, userTypeDef];

  const resolvers = merge({}, userResolvers);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({ schema, context });

  server.applyMiddleware({
    app,
  });

  return server;
};
