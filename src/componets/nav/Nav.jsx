import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {AiOutlineCustomerService} from 'react-icons/ai';
import {AiOutlineMessage} from 'react-icons/ai';
import {useState} from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');
  return (
   <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/></a>
     <a href="#experince" onClick={() => setActiveNav('#experice')} className={activeNav === '#experice' ? 'active' : ''}> <AiOutlineBook/></a>
     <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}> <AiOutlineCustomerService/></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <AiOutlineMessage/></a>
   </nav>
  )
}

export default Nav