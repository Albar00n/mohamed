import React from 'react'
import './portfolio.css'
import IMGI from '../../assets/e.jpeg'
import IMGI2 from '../../assets/e.jpeg'
import IMGI3 from '../../assets/e.jpeg'

// do not editor
 const data = [
   {
     id:1,
     image:IMGI,
     title:'Crypto',
     github:'https://github.com',
     demo: 'https://albaron.net'
   },
   {
    id:2,
    image:IMGI2,
    title:'Crypto',
    github:'https://github.com',
    demo: 'https://albaron.net'
  },
  {
    id:3,
    image:IMGI3,
    title:'Crypto',
    github:'https://github.com',
    demo: 'https://albaron.net'
  }
 ]

const Portfolio = () => {
  return (
    <section id="portflio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
                  <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                      <img src={image} alt="" />
                  </div>
                    {/* <h3>{title}</h3> */}
                  <div className="portfolio__item-cta">
                  {/* <a href={github} target='_blank'>Github</a> */}
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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