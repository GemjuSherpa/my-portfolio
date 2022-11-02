import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* nav links */}
      <div className="nav-items">
        <ul className="nav-list">
          <Link to="/">
            <li className="active">Home</li>
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
        </ul>

        {/* resume button */}
        <a href="#" className="resume">Resume</a>
      </div>
    </div>
  )
}

export default Navbar;
