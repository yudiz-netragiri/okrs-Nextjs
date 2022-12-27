import Header from './Header'
import Footer from './footer'
import React from 'react'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
