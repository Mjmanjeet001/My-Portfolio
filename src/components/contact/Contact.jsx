import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine } from 'react-icons/ri'
import {PiWhatsappLogoLight  } from 'react-icons/pi'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_96xaxc9', 'template_7cajomb', form.current, 'UkQsGgvT1bsmCmJJN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>mjmanjeet001@gmail.com</h5>
              <a href="mailto:mjmanjeet001@gmail.com"target="_blank" >Send a message</a>
           </article>
           <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>Facebook</h4>
              <h5>Manjeet Raj</h5>
              <a href="https://www.facebook.com/" target="_blank">Send a message</a>
           </article>
           <article className='contact__option'>
              <PiWhatsappLogoLight className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>+91 8294144586</h5>
              <a href="https://api.whatsapp.com/send?phone=8294144586" target="_blank">Send a message</a>
           </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Meassage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact