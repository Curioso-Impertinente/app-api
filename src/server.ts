import { ApolloServer } from 'apollo-server';
import { default as Resolvers } from './resolvers';
import { default as TypeDefs } from './typeDefs';

async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(TypeDefs, Resolvers);
