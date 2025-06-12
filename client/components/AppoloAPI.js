import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // or your deployed server
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          // projects: {
          //   merge(existing = [], incoming) {
          //     return [...existing, ...incoming];
          //   },
          // },
        },
      },
    },
  }),
});

export default client;
