import React from 'react'
import './about.css'
import ME from '../../assets/About_me.jpg'
import {FiAward} from 'react-icons/fi'
import {MdOutlineScience } from 'react-icons/md'
import {ImFolderOpen} from 'react-icons/im'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <MdOutlineScience  className='about__icon'/>
              <h5>Technologies</h5>
              <small>10+ </small>
            </article>

            <article className='about__card'>
              <ImFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Greetings! I am a passionate and motivated individual embarking on my journey as a Software Engineer and Web Developer. I am eager to leverage my academic foundation and hands-on experience to contribute to innovative projects and make a positive impact in the tech world.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About