import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Jones1 from '../../assets/Jones1.jpeg'
import footer_logo from '../../assets/footer_logo.svg'
import email_icon from '../../assets/email-icon.svg'
import github_icon from '../../assets/github-icon.svg'
import linkedin_icon from '../../assets/linkedin-icon.svg'

const Footer = () => {
  return (
    <div className='footer'>

      {/* -------- TOP SECTION -------- */}
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-top-left">
          <img src={Jones1} alt="logo" />
          <p>
            I’m a passionate MERN stack developer and recent graduate,
            eager to contribute to real-world projects and continuously
            grow as a full-stack developer.
          </p>
        </div>

        {/* RIGHT - QUICK LINKS */}
        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><AnchorLink offset={50} href="#home">Home</AnchorLink></li>
            <li><AnchorLink offset={50} href="#about">About</AnchorLink></li>
            <li><AnchorLink offset={50} href="#services">Services</AnchorLink></li>
            <li><AnchorLink offset={50} href="#work">Portfolio</AnchorLink></li>
            <li><AnchorLink offset={50} href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>

      </div>

      <hr />

      {/* -------- BOTTOM SECTION -------- */}
      <div className="footer-bottom">

        <p className='footer-bottom-left'>
          © {new Date().getFullYear()} Arockia Jones. All rights reserved.
        </p>

        <div className="footer-social-icons">

          <a href="mailto:arockiajones2003@gmail.com">
            <img src={email_icon} alt="Email" />
          </a>

          <a
            href="https://github.com/Arockia-Jones"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_icon} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/arockia-jones-c-887747361/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>

        </div>

      </div>

    </div>
  )
}

export default Footer