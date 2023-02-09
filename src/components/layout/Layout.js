import React from 'react'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Rout from '../../routes/Rout';

function Layout() {
  return (
    <>
    <Header></Header>
    <div>
      <Rout></Rout>
    </div>
    <Footer></Footer>
  </>

  )
}

export default Layout