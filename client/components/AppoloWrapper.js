'use client';

import { ApolloProvider } from '@apollo/client';
import client from './AppoloAPI';

const ApolloWrapper=({ children }) =>{
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper