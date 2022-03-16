import React from 'react'
import './portfolio.css'
import {portData} from './Data'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portData.map(({id,img,title,github,website}) =>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={img} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">  
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={website} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article> 
            )
          })
        }
      </div>
    </section>
  )
}
