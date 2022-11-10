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
        <p>A motivated software developer with in-depth knowledge of development, testing, debugging and deployment in a different environment, seeking a position in a growth oriented, dynamic, and progressive company where my skills are utilised in the maximum way possible to the advantage of the company while having the scope to further enhance my skills.</p>

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

