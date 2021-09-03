import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
function MainLayout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout
