import React from "react";
import logo from "../images/HandShortLogo.png"; 
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ backgroundColor: '#063082', color: 'white', padding: '40px 20px 10px' }}>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
      borderBottom: '1px solid #17449c',
      paddingBottom: '30px',
      textAlign: 'left'
    }}>
      
      {/* Logo & Tagline */}
      <div style={{ width: '240px', alignItems: "center"}}>
        
        <img src={logo} alt="HandsIn Logo" style={{ height: '60px', marginBottom: '10px', marginTop: '20px' }} />
      </div>

      {/* Company Links */}
      <div style={{ width: '240px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Company</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Home</Link></li>
          <li><Link to="/blog" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>Blog</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>About Us</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ width: '240px' }}>
        <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Contact</h4>
        <p style={{ color: '#d1d5db', fontSize: '14px' }}>handsinlearningco@gmail.com</p>
      </div>
    </div>

    {/* Bottom Note */}
    <div style={{ textAlign: 'center', fontSize: '14px', color: '#9ca3af', paddingTop: '20px' }}>
      HandsIn, All Rights Reserved, 2025
    </div>
  </footer>
);

export default Footer;
