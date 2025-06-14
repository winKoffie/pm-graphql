import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Client: {
        keyFields: ['id'], // normalize Client entities by ID
      },
      Query: {
        fields: {
          clients: {
            // Do not merge old and new clients data — always replace
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
