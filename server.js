const { ApolloServer, PubSub } =require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub}),
    introspection: true,
  playground: true,
})

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MONGODB')
    return server.listen({port: process.env.PORT || 5000})
}).then((res) => {
    console.log(`Server running at ${res.url}`)
})
