import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/22.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
         <h1> Albaron</h1>
         <h4 className="text-light">Full Stack developers</h4>
         <CTA />
        <HeaderSocials />
         <div className="me">
           <img src={me} alt="me" />
         </div>

         <a href="#contact" className="scroll_down">Scrol Down</a>
      </div>
    </header>
  )
}

export default Header