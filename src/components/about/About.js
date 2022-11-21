import React from 'react';
import { getAllProfiles } from '../../features/profile/profileSlice';
import { useSelector } from 'react-redux';
import profilePicture from '../../images/profile.png';
import Moment from "react-moment";

import './About.scss';

export default function About() {

  // Get profile data from getAllProfiles action
  const profiles = useSelector(getAllProfiles);

  const education = profiles.education?.map(edu => (
    // <div className="card">
    //   <div className="card-body">
    //     <h3 className="card-title">{edu.level} in {edu.title}</h3>
    //     <h4 className="card-subtitle">{edu.university}</h4> 
    //     <h5 className="year"> 
    //       <Moment format="YYYY">{edu.from}</Moment> -
    //       {edu.to === "" ? (
    //         "Now"
    //       ) : (
    //         <Moment format="YYYY">{edu.to}</Moment>
    //       )} 
    //     </h5>
    //   </div>
    // </div>
    <tr key={edu.id}>
      <td>{edu.university}</td>
      <td>{edu.level}</td>
      <td>{edu.title}</td>
      <td>
        <Moment format="YYYY">{edu.from}</Moment> -
        {edu.to === "" ? (
          "Now"
        ) : (
          <Moment format="YYYY">{edu.to}</Moment>
        )}
      </td>
      
    </tr>
  ));

  return (
    
    <div className='about'>
      {/* About me section */}
      <div className="about-me">
        <div className="about-me-left">
          <h1 className='section-tag'>About Me</h1>
          <h3>Hello, </h3>
          <p>{profiles.about}</p>
          <h3>What I am working on?</h3>
          <p>{profiles.currentProject}</p>
        </div>
        <div className="about-me-right">
          <figure>
            <img src={profilePicture} alt="profile" />
          </figure>
        </div>
      </div>
      {/* End of about me sections ================================================================= */}

      {/* Education sections */}
      <div className="education">
        <h1 className='section-tag'>Educations</h1>
        {/* <div className="education-card">
          {education}
        </div> */}
        <table className="table">
          <thead>
            <tr>
              <th>University</th>
              <th>Level</th>
              <th>Degree Name</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>
            {education}
          </tbody>
        </table>
      </div>
      {/* End of Education section ================================================================= */}

      {/* Skills Sections */}
      <div className="skills">
        <h1 className='section-tag'>Skills</h1>
      </div>
      {/* End of skills sections =================================================================== */}

      {/* Projects sections */}
      <div className="projects">
        <h1 className='section-tag'>Projects</h1>
      </div>
      {/* End of projects section =================================================================== */}
    </div>
  )
}
