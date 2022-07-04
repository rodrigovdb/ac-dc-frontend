import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import GetAlbums from './Components/GetAlbums';

import { ErrorLink, onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://ac-dc.herokuapp.com/graphql' })
])

/*
const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3000/graphql' })
])
*/

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GetAlbums />
    </ApolloProvider>
  );
}

export default App;