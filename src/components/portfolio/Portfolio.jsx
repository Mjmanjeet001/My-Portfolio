import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/expense.png'
import IMG2 from '../../assets/voice_assistant.jpeg'
import IMG3 from '../../assets/Traveladvisor.png'
import IMG4 from '../../assets/passgenpro.jpeg'
import IMG5 from '../../assets/razorpay.jpg'
import IMG6 from '../../assets/portfolio1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Expense-Tracker-Pro',
    github: 'https://github.com/Mjmanjeet001/Expense-Tracker-Master',
    demo: 'https://figma.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'VoiceX-A Voice Assistant',
    github: 'https://github.com/Mjmanjeet001/VoiceX',
    demo: 'https://figma.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Buddy',
    github: 'https://github.com/Mjmanjeet001/Travel-Buddy',
    demo: 'https://figma.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PassGenPro-Password Generator',
    github: 'https://github.com/Mjmanjeet001/PassGenPro',
    demo: 'https://figma.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Razorpay Website Clone',
    github: 'https://github.com/Mjmanjeet001/Razorpay-Clone',
    demo: 'https://figma.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://figma.com'
  }
]
 
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
           })   
        }
      </div>
    </section>
  )
}

export default Portfolio