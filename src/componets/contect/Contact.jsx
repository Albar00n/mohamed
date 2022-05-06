import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k5vjrah', 'template_razchah', form.current, 'e2S4DcJNxPge4El9X')
     e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
           
            <a href="albaron.net" target="_blank">Send me</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>

            <a href="albaron.net" target="_blank">Send me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>

            <a href="https://api.whatsapp.com/send?phone=123456" target="_blank">Send me</a>
          </article>
        </div>
        {/* END conatct Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Your Full Name' required/>
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea name="massage" id="" rows="10" placeholder="Your massage" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact