import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Header from './component/Header'
import Footer from './component/Footer'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MyApp ({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://gateway-dev.crictracker.ml/graphql',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
    {/* <Layout> */}

    <Header />
      <Component {...pageProps} />
      <Footer />

    {/* </Layout> */}
     </ApolloProvider>
  )
}
