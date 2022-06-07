import React from 'react'
import Header from './componets/header/Header';
import Nav from './componets/nav/Nav'
import About from './componets/about/about'
import Experince from './componets/experince/Experince'
import Service from './componets/service/Service'
import Portfolio from './componets/portfolio/Portfolio'
import TestMuneu from './componets/test/TestMuneu'
import Contact from './componets/contect/Contact'
import Footer from './componets/footer/Footer'

const App = () => {
  return (
    <div>
    <Header />
    <Nav />
    <About />
    <Experince />
    <Service/>
    <Portfolio />
    {/* <TestMuneu /> */}
    <Contact />
    <Footer />


    </div>
  )
}

export default App