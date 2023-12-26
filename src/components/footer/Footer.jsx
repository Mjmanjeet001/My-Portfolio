import React from 'react'
import { icons } from 'react-icons'
import './footer.css'
import {FaFacebookSquare } from 'react-icons/fa'
import {FaInstagramSquare  } from 'react-icons/fa'
import {FaTwitterSquare   } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MANJEET</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://twitter.com"><FaTwitterSquare/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MANJEET, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer