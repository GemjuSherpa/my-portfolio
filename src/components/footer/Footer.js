import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Social media links */}
      <div className="social">
        <ul>
          <li>
            <a href="https://twitter.com/Gemju_sherpa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </li>
          <li> 
            <a href="https://www.facebook.com/gemju.sherpa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
          </li>
          <li> 
            <a href="https://github.com/GemjuSherpa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gemjusherpa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon"/>
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright tag */}
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} Gemju Sherpa
      </div>
      
    </footer>
  )
}

