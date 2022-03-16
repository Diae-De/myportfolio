import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gl246w8', 'template_40oi8i9', form.current, 'jexAyx6Y2dTB8LNOs')
      
    e.target.reset();
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div class="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>diaeprsup@gmail.com</h5>
              <a href="mailto:diaeprsup@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messenger</h4>
              <h5>Dyae Edd</h5>
              <a href="https://m.me/profile.php?id=100069613555908" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiWhatsappLine className="contact__option-icon"/>
              <h4>Whatsapp</h4>
              <h5>+212639180277</h5>
              <a href="https://api.whatsapp.com/send?phone=+212639180277" target="_blank">Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
