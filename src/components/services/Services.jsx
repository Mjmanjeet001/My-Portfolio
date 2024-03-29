import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Html</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Css</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ReactJs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma</p>
            </li>
          </ul>
        </article>

        {/* <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article> */}

        <article className='service'>
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Node.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Docker</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services