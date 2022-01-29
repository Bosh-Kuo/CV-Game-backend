import { GraphQLServer, PubSub } from "graphql-yoga";
import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import User from "./resolvers/User.js";
import Score from "./resolvers/Score.js";
import Subscription from "./resolvers/Subscription.js";
import userModel from "./models/user.js";
import "dotenv-defaults/config.js";

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

const pubSub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Score,
  },
  context: {
    saltRounds: SALT_ROUNDS,
    userModel,
    pubSub,
  },
});

export default server;
