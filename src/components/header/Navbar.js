import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo1.png";

import "./Navbar.scss";

const Navbar = () => {

  // Set isExpanded and setIsExpanded boolean flag
  const [ isExpanded, setIsExpanded ] = useState(false);

  return (
    <nav className="navigation">
      <Link to="/" className="brand-name">
        <img src={logo} alt="logo" />
      </Link>

      {/* hamburger button for nav menu toggling */}
      <button 
        className="hamburger" 
        onClick={()=> {
          setIsExpanded(!isExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#ccd6f6"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Nav Menus */}
      <div
        className={
          isExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <Link to="/">
             <li>Home</li>
           </Link>
           <Link to="/about">
             <li>About</li>
           </Link>
           <Link to="/experience">
             <li>Experiences</li>
           </Link>
           <Link to="/contact">
             <li>Contact</li>
           </Link>
          {/* resume button */}
          <li>
            <a href="https://www.linkedin.com/in/gemjusherpa/" target="_blank" rel="noreferrer" className="btn">My Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
