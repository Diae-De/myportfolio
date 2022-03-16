import React from 'react'
import {AiFillGithub,AiFillInstagram} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"

export default function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://github.com/Diae-De" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/dyae_ed/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100069613555908" target="_blank"><FiFacebook/></a>
    </div>
  )
}
