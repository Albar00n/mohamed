import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/albaron-mohamed-baa42622a/" target="_blank"> <BsLinkedin/></a>
        <a href="https://www.facebook.com/albaro00n/" target="_blank">< BsFacebook/></a>
        <a href="https://google.com" target="_blank">< FcGoogle /> </a>
        </div>
  )
}

export default HeaderSocials;