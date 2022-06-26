import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='https://github.com' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'><BsTwitter /> </a>

    </div>
  )
}

export default HeaderSocials