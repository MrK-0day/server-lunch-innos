const { ApolloServer, AuthenticationError } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')

const server = new ApolloServer({
  typeDefs, resolvers,
  playground: true,
  introspection: true,
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context
    } else {
      let token = req.headers.authorization || null
      return { token }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
