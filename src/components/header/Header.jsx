import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

function Header() {
  return (
    <header>
      <div className='container header__container'>
          <h5>Hi I`m</h5>
          <h1>Ryan Mmbale</h1>
          <h5 className='text-light'>Software Developer</h5>
          <CTA />

          <div className='me'>
              <img src={ME} alt='me' />
          </div>
      </div>

    </header>
  )
}

export default Header