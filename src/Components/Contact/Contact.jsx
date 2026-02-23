import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

import { toast } from "react-toastify";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "d578a871-48f6-4acf-933c-ad7e74518495");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully ✅");
        event.target.reset();
      } else {
        toast.error("Something went wrong ❌");
      }

    } catch (error) {
      toast.error("Network error ❌");
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let’s Connect</h1>
                <p>
                  I’m a passionate MERN stack developer and recent graduate, eager to contribute to real-world projects and continuously grow as a full-stack developer.
                </p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>arockiajones2003@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>9150186733</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Trichy, Tamil Nadu</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label>Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />

                <label>Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required />

                <label>Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

                <button type='submit' className='contact-submit'>
                  Submit now
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact