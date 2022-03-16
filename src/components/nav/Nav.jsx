import React, { useState } from 'react'
import './nav.css'
import {FiHome} from "react-icons/fi"
import {BiUser,BiMessageSquareDetail} from "react-icons/bi"
import {RiPassportFill} from "react-icons/ri"

export default function Nav() {
  const [activeNav,setActiveNav] = useState("#") 
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FiHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUser/></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><RiPassportFill/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}
