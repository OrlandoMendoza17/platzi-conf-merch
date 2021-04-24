import React from 'react'
import Header from '../widgets/Header'

const Layout = (props) => {
  return (
    <>
      <Header/>
      {props.children}
    </>
  )
}

export default Layout
