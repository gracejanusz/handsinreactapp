import React from 'react';
import Footer from '../components/Footer.jsx'
import Navigation from '../components/Navigation.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import thumbImg from '../images/100days.png'; 
import HackteckImg from '../images/HackTech.png';


function Blog() {
  return (
    <div className="App">
       <Navigation currentPage="blog" />
      <main className="App-header">
      <h1>Blog Posts</h1>
      <ProjectCard
        title="ILC 100 Days"
        description="How we won first place at UChicago's ILC Competition"
        date="May 2025"
        thumbnail={thumbImg}
        route="https://www.linkedin.com/posts/grace-janusz-301a88288_roughly-100-days-ago-marlena-leuz-aeliya-activity-7333592128213680128-CagA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXtN7EBy7qbYjs4KxlwOmUqEweOQLc-vyk"
        color="#ecfbff"
      />
      <ProjectCard
        title="HackTech"
        description="A showcase of real-time hand detection and gesture tracking using MediaPipe and Three.js."
        date="April 2025"
        thumbnail={HackteckImg}
        route="https://www.linkedin.com/posts/grace-janusz-301a88288_hacktech2025-activity-7325341937371078656-S5lO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXtN7EBy7qbYjs4KxlwOmUqEweOQLc-vyk"
        color="#ecfbff"
      />
      </main>
      <Footer />
    </div>
  );
}

export default Blog;