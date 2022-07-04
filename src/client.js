import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { ErrorLink, onError } from '@apollo/client/link/error'  

import config from './config'
  
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: config.apiUrl })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

export default client;