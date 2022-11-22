import React from 'react';
import Moment from "react-moment";
import { useSelector } from 'react-redux';
import {getAllProfiles} from '../../features/profile/profileSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import './Experience.scss';

export default function Experience() {

  const profile = useSelector(getAllProfiles);

  const experiences = profile.experience;

  const workExperiences = experiences?.map((experience) => (
    <div className="card" key={experience.id}>
      <div className="card-header">
        <h3>{experience.role} @ <a href={experience.url} target="_blank" rel="noopener noreferrer">{experience.company}</a></h3>
        <h4><Moment format="YYYY">{experience.from}</Moment> -
          {experience.to === "" ? (
            "Now"
          ) : (
            <Moment format="YYYY">{experience.to}</Moment>
          )}
        </h4>
      </div>
      <div className="card-body">
        {experience.responsibilities?.map((item)=>(
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} className="carret-icon"></FontAwesomeIcon>{item}</li>
          </ul>
        ))}
      </div>
      <div className="card-footer">
        <h5>Skills utilised:</h5>
        <p>{experience.skills}</p>
      </div>
    </div>
  ));


  return (
    <div className="experiences">
      <h1>My professional experiences</h1>
      {workExperiences}
    </div>
  )
}
