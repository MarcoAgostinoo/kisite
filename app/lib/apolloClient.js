import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = "http://localhost:1337"; // URL do servidor Strapi

const apolloClient = new ApolloClient({
  uri: `${BASE_URL}/graphql`, // Endpoint GraphQL do Strapi
  cache: new InMemoryCache(),
});

export default apolloClient;