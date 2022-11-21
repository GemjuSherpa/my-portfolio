import React from 'react';
import { getAllProfiles } from '../../features/profile/profileSlice';
import { getAllProjects } from '../../features/project/projectSlice';
import { useSelector } from 'react-redux';
import profilePicture from '../../images/profile.png';
import Moment from "react-moment";

import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons';


export default function About() {

  // Get profile data from getAllProfiles action
  const profiles = useSelector(getAllProfiles);

  // get github repos
  const { project } = useSelector(getAllProjects);

  // Education data displaying in table 
  const education = profiles.education?.map(edu => (
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

  // project lists
  const projectList = project.map(item => (
    <li className='btn'> <a href={item.svn_url} target="_blank" rel="noopener noreferrer">{item.name}</a> </li>
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

      {/* Skills Sections */}
      <div className="skills">
        <h1 className='section-tag'>Skills</h1>
        <ul>
          {profiles.skills?.map(skill => (
            <li key={skill}><FontAwesomeIcon icon={faArrowTurnRight} className="fa-arrow"></FontAwesomeIcon>{skill}</li>
          ))}
        </ul>

      </div>
      {/* End of skills sections =================================================================== */}

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

      {/* Projects sections */}
      <div className="projects">
        <h1 className='section-tag'>Projects</h1>
        <div className="project-lists">
          <ul>
            {projectList}
          </ul>
        </div>
        
      </div>
      {/* End of projects section =================================================================== */}
    </div>
  )
}
