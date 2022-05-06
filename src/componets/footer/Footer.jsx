import React from 'react'
import './footer.css';
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import IMW from '../../assets/22.png'
const Footer = () => {
  return (
    <footer>
      <div className="aaa">
          <div className="bg">
            <img className="ai"  src={IMW} alt=""/>
              </div>
          </div>
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experince">Experince</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#protfolio">Portfolio</a></li>
            <li><a href="#contect">Contect</a></li>
          </ul>
          <div className="footer__socials">
            <a href="https://facebook.com"><BsFacebook/></a>
            <a href="https://twitter.com"><AiFillTwitterCircle/></a>
            <a href="https://instagram.com"><AiOutlineInstagram/></a>
          </div>
          <div className="footer__copyright">
            <small>&copy; Albaron .All right reseved</small>
          </div>
    </footer>
  )
}

export default Footer