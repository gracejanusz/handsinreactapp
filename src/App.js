import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './images/HandShortLogo.png';
import Footer from './components/Footer.jsx'

import About from './About';
import Blog from './Blog';
import SignUp from './SignUp';

function Home() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='subtitle-home'>
          A new way to learn.
        </p>
        <div className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/blog" className="nav-button">Blog</Link>
          <Link to="/signup" className="nav-button">Sign up</Link>
        </div>
      </header>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;