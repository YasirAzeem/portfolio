"use client";
import React, { useEffect } from "react";
// import feather from "feather-icons";
import "./navbar.css"; // Assuming you have a separate CSS file for styles

const Navbar = () => {
 

  return (
    <div className="header">
      {/* <div className="header__logo">
        <strong>LOGO</strong>
      </div> */}
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              {/* <i data-feather="home"></i> */}
              <span>Home</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              {/* <i data-feather="message-square"></i> */}
              <span>Blogs</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              {/* <i data-feather="users"></i> */}
              <span>Portfolio</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              {/* <i data-feather="folder"></i> */}
              <span>Services</span>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              {/* <i data-feather="archive"></i> */}
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
