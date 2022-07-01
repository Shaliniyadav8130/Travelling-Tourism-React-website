import React from 'react'
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css"
const Footer = () => {
  return (
    <footerContainer id="container">
      <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social_links">
        <li>
          <BsFacebook/>
        </li>
        <li>
          <AiFillInstagram/>
        </li>
        <li>
          <BsLinkedin/>
        </li>
      </ul>
    </footerContainer>
  )
}

export default Footer
