import React from "react";
import "./navbar.css";
import Logo from "../../media/Group6.png";
import { Route, Routes, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-menu">
          <ul>
            <Link to={`/`}>
              <li className="nav-items">
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <Link to={`/aboutus`}>
              <li className="nav-items">
                <a className="nav-link">About Us</a>
              </li>
            </Link>
            <Link to={`/theapp`}>
              <li className="nav-items">
                <a className="nav-link">The App</a>
              </li>
            </Link>
            <Link to={`/blogs`}>
              <li className="nav-items">
                <a className="nav-link">Blog</a>
              </li>
            </Link>
            <Link to={`/contactus`}>
              <li className="nav-items">
                <a className="nav-link">Contact US</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="hamburger active">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
