import React from 'react'
import './About.css'
import Me from '../../assets/22.jpeg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderAdd} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      {/* <h4>Get To Know</h4> */}
      <h2>About Me</h2>

      <div className="container about_container">
      {/* <div className="about__me">
      <div className="about__me-image">
        <img src={Me} alt="albaron" />
      </div>
      </div> */}
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <BsAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worlwide</small>
          </article>
          <article className="about__card">
            <AiOutlineFolderAdd className="about__icon" />
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>
        <p>
          Albaron Mohamed
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About