import React from "react";
import { Link } from "react-router-dom";
import nav_logo from "/src/assets/images/ssglogo-nav.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src={nav_logo} alt='nav logo'></img>
          </Link>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
