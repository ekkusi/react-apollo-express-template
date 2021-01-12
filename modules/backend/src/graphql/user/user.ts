import { readFileSync } from "fs";
import path from "path";

// Construct a schema, using GraphQL schema language
export const typeDef = readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf-8"
);

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: () => ({ name: "User name" }),
  },
};
