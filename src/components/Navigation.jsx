import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/HandShortLogo.png';

const Navigation = ({ currentPage }) => {
  return (
    <nav className="simple-nav">
      {/* Logo linking to home */}
      <Link to="/">
        <img
          src={logo}
          alt="Hands In Logo"
          style={{
            height: '70px',
            verticalAlign: 'middle',
            marginRight: '20px'
          }}
        />
      </Link>

      {/* Navigation links */}
      <span> | </span>
      {currentPage !== 'about' && (
        <>
          <Link to="/about">About</Link>
          <span> | </span>
        </>
      )}
      {currentPage !== 'blog' && (
        <>
          <Link to="/blog">Blog</Link>
          <span> | </span>
        </>
      )}
      {currentPage !== 'signup' && (
        <Link to="/signup">Sign Up</Link>
      )}
    </nav>
  );
};

export default Navigation;
