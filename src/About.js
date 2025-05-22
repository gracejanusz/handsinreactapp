import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <nav className="simple-nav">
        <Link to="/">← Back to Home</Link>
        <span> | </span>
        <Link to="/blog">Blog</Link>
        <span> | </span>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <main className="App-header">
        <h1>About HandsIn</h1>
        <p className="custom-font">This is the About page - learn more about our mission.</p>
      </main>
    </div>
  );
}

export default About;