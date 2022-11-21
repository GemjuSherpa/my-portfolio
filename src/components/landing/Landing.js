import React from 'react';
import {Link} from 'react-router-dom';
import { getAllProfiles } from '../../features/profile/profileSlice';
import { useSelector } from 'react-redux';

import './Landing.scss';


const Landing = () => {

  // Get profile data from getAllProfiles action
  const profile = useSelector(getAllProfiles);
  const expertise = profile.expertise
  console.log(profile);
  return (
    <div className="home">

      <div className="name">
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
      </div>

      <div className="about">
        <p>{profile.description}</p>
        <h3>Area of Expertise</h3>

        <ul>
          
          {expertise?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        
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

