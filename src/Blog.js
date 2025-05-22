import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="App">
      <nav className="simple-nav">
        <Link to="/">← Back to Home</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <main className="App-header">
        <h1>HandsIn Blog</h1>
        <p className="custom-font">This is the Blog page - read our latest posts.</p>
      </main>
    </div>
  );
}

export default Blog;