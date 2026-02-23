import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import Jones1 from '../../assets/Jones1.jpeg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsOpen(true);
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
    setIsOpen(false);
  }

  return (
    <div className='navbar'>

      <img src={Jones1} alt="" />

      {/* Hide hamburger when open */}
      {!isOpen && (
        <img 
          src={menu_open} 
          onClick={openMenu} 
          alt="" 
          className='nav-mob-open'
        />
      )}

      <ul ref={menuRef} className="nav-menu">

        <img 
          src={menu_close}  
          onClick={closeMenu} 
          alt="" 
          className="nav-mob-close" 
        />

        <li>
          <AnchorLink className='anchor-link' href="#home" onClick={closeMenu}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#about" onClick={closeMenu}>
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#services" onClick={closeMenu}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#work" onClick={closeMenu}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#contact" onClick={closeMenu}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>

      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

    </div>
  )
}

export default Navbar