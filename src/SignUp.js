import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="App">
      <nav className="simple-nav">
        <Link to="/">← Back to Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/blog">Blog</Link>
      </nav>
      <main className="App-header">
        <h1>Sign Up for HandsIn</h1>
        <p className="custom-font">This is the Sign Up page - join our learning platform.</p>
      </main>
    </div>
  );
}

export default SignUp;