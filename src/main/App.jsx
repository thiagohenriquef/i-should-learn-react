import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Home from '../components/Home'
import Nav from '../components/template/Nav'

export default props => (
  <div className='app'>
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>

)