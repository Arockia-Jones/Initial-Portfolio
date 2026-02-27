import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        {/* <img src={profile_img} alt="profile" /> */}

        <h1>
          <span className="gradient-text">
            Hi, I'm Arockia Jones,
          </span>
          <br />
          MERN Stack Developer
          <br />
          {/* <span className="third-line">
            Building Modern Web Applications
          </span> */}
        </h1>

        <p>
          Passionate about building scalable full-stack web applications 
          using MongoDB, Express, React and Node.js.
          Focused on clean UI, performance and real-world problem solving.
        </p>

        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
            </div>
            <a href="/Resume.pdf" download className="hero-resume">
              My Resume
            </a>
        </div>
    </div>
  )
}

export default Hero