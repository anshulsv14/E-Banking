import React from 'react'

import Footer from './components/Footer'
import TopNav from './components/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     
      <TopNav />

        <div className="wrapper">
        <Outlet />
        </div>
    
      <Footer />
    </>
  )
}

export default Layout