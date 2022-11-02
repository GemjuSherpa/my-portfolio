import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo1.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* nav links */}
      <ul className="nav-items">
        {/* For toggle */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="nav-list">
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

          {/* resume button */}
          <li>
            <a href="#" className="btn">My Resume</a>
          </li>
          
        </div>

       
      </ul>
    </nav>

    // <nav class="navbar">
    //   {/* <!-- LOGO --> */}
    //   <div class="logo">MUO</div>
    //   {/* <!-- NAVIGATION MENU --> */}
    //   <ul class="nav-links">
    //     {/* <!-- USING CHECKBOX HACK --> */}
    //     <input type="checkbox" id="checkbox_toggle" />
    //     <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    //     {/* <!-- NAVIGATION MENUS --> */}
    //     <div class="menu">
    //       <li><a href="/">Home</a></li>
    //       <li><a href="/">About</a></li>
    //       <li><a href="/">Pricing</a></li>
    //       <li><a href="/">Contact</a></li>
    //     </div>
    //   </ul>
    // </nav>

  )
}

export default Navbar;
