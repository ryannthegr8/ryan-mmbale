import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header id='home'>
      <div className='container header__container'>
          <h5>Hi I`m</h5>
          <h1>Ryan Mmbale</h1>
          <h5 className='text-light'>Software Developer</h5>
          <CTA />

          <HeaderSocials />

          <div className='me'>
              <img src={ME} alt='me' />
          </div>

          <a href='#contact' className='scroll__down'>Scroll ~~~ </a>
      </div>

    </header>
  )
}

export default Header