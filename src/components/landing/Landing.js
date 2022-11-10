import React from 'react'
import {Link} from 'react-router-dom'


import './Landing.scss';

const Landing = () => {
  return (
    <div className="home">
      <div className="name">
        <h1>Gemju Sherpa</h1>
        <h2>Software Developer</h2>
      </div>

      <div className="about">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus tempora error perspiciatis? Ex quam, vero harum facere, quas saepe modi dignissimos quae autem, error consequuntur assumenda delectus? Adipisci, labore porro?</p>

        <ul>
          <h3>Area of Expertise</h3>

          <li>Web Development</li>
          <li>Data Analysis</li>
          <li>AI and Machine Learning</li>

        </ul>
        
      </div>

      {/* Contact link */}
      <Link to="/contact">
        <li className='btn'>Contact</li>
      </Link>
      
    </div>
  )
}

export default Landing;

