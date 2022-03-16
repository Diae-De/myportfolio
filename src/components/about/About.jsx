import React from 'react'
import './about.css'

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src="" alt="about image"/>  
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__content">
                <p>Hi! I'm Diae Eddine, I'm an IT Developer, My Goal is to become a 
                  full stack web developer.To reached my goal I start learning the 
                  basics, I start with HTML, CSS and JavaScript and when I get familiar
                  and more comfortable with this three languages I start learning
                  one of the most popular javascript framework witch is ReactJS
                  and after it I start learning Redux witch is is an open-source JavaScript library.
                  I've been working on a lot of projects in process to improve my skills,
                  I never give up until I get to the think that I want it, I'm still learning
                  and I keep learning until I get better and better.
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </article>  
            </div>
          </div>
      </div>  
    </section>
  )
}
