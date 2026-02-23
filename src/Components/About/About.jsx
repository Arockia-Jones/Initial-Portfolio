import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            {/* <div className="about-left">
                <img src={profile_img} alt="" />
            </div> */}
            <div className="about-right">
                <div className="about-para">
                    <p>As a MERN Stack Developer, I build modern web applications that are fast, scalable, and user-friendly. I focus on creating clean and efficient solutions using MongoDB, Express, React, and Node.js.</p>
                    <p>I have hands-on experience developing full-stack projects with authentication, payment integration, and admin dashboards. I am committed to continuous learning, writing clean architecture, and solving real-world problems through code.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"85%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>REST APIs</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JWT Authentication</p><hr style={{width:"70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-acheivements">
            <div className="about-acheivement">
                <h1>AUTH</h1>
                <p>IMPLEMENTATION</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>MERN</h1>
                <p>STACK FOCUSED</p>
            </div>
            <hr />
            <div className="about-acheivement">
                <h1>CLEAN</h1>
                <p>ARCHITECTURE</p>
            </div>

        </div>
    </div>
  )
}

export default About