import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
              <img src={ME} alt='me' />
          </div>
          </div>
      

          <div className='about__me-content'>
            <div className='about__cards'>

              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Users</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
              </div>
              <p>
              The technology world is continuously evolving. So, as a frontend/Backend developer, I am working in a dynamic field where opportunities come up continuously. New tools and frameworks are continuously evolving, allowing me to achieve more with less effort. This also has challanged me to work toward being as flexible as in this line of work. 

              </p>
              <a href='#contact' className='btn btn-primary'>lets Talk</a>

            </div>
          </div>
    </section>
  )
}

export default About