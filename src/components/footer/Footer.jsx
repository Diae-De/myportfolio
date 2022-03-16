import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">DIAE EDDINE</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100069613555908" target="_blank"><BsFacebook/></a>
        <a href="https://www.instagram.com/dyae_ed/" target="_blank"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DEPR. All rights reserved.</small>
      </div>
    </footer>
  )
}
