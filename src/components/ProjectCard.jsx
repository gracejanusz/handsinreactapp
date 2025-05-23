import React from 'react';


const ProjectCard = ({ title, description, date, thumbnail, route }) => {
  return (
    <div className="blog-card">
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <a className="blog-button" href={route}>
          Read More →
        </a>
      </div>
      <div className="blog-image">
        <img src={thumbnail} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
