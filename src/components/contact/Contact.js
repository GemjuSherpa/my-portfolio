import React from 'react'

import './Contact.scss';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Get in touch</h1>
        <p>I am currently open for any junior/graduate AI/ML/software engineer or web developer position, please feel free to contact me. </p>
        <address>
          Mobile: 0414 419 954 <br />
          Email: Gemju.s1@gmail.com <br />
          Linkedin: <a href="https://www.linkedin.com/in/gemju-s1/" target="_blank" rel="noopener noreferrer"><i>LinkedIn</i></a>
        </address>
        <a href="mailto:gemju.s1@gmail.com" className='btn'>Contact Me</a>
      </div>
    </div>
  )
}
