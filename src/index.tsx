import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

import App from './App';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
