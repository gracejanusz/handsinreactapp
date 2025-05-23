import React from 'react';
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx';
import ProjectCard from './components/ProjectCard';
import thumbImg from './images/100days.png'; 
import HackteckImg from './images/HackTech.png';


function Blog() {
  return (
    <div className="App">
       <Navigation currentPage="blog" />
      <main className="App-header">
      <h1>Blog Posts</h1>
      <ProjectCard
        title="ILC 100 Days"
        description="A showcase of real-time hand detection and gesture tracking using MediaPipe and Three.js."
        date="May 2025"
        thumbnail={thumbImg}
        route="/blog/hand-detection"
        color="#ecfbff"
      />
      <ProjectCard
        title="HackTech"
        description="A showcase of real-time hand detection and gesture tracking using MediaPipe and Three.js."
        date="April 2025"
        thumbnail={HackteckImg}
        route="/blog/hand-detection"
        color="#ecfbff"
      />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;