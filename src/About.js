import React from 'react';
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const teamMembers = [
    {
      name: 'Grace',
      img: '/images/Grace_Headshot.png',
      github: 'https://github.com/gracejanusz',
      linkedin: 'www.linkedin.com/in/grace-janusz-301a88288',
    },
    {
      name: 'Marlena',
      img: '/images/Marlena_Headshot.jpeg',
      linkedin: 'https://www.linkedin.com/in/marlena-leuz/',
    },
    {
      name: 'Aeliya',
      img: '/images/Aeliya_Headshot.png',
      github: 'https://github.com/aeliya',
      linkedin: 'https://www.linkedin.com/in/aeliya-grover-50307b201/',
    },
  ];
  const About = () => {
    return (
      <div className="about-page bg-blue-50 text-blue-900">
        <Navigation currentPage="about"/>
  
        <div className="about-container px-6 py-10 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About HandsIn</h1>
          <p className="subtitle text-lg mb-10">
            HandsIn is an AI-powered training platform that equips healthcare providers with foundational American Sign Language 
            (ASL) skills through interactive, avatar-based simulations. By promoting ASL as a primary language rather than relying 
            solely on translation tools, our platform empowers institutions to offer more respectful and effective care to D/HoH 
            patients. HandsIn fills a critical gap in medical communication by providing staff with the confidence and competence
            to engage meaningfully when an interpreter is not immediately available.
          </p>
          <p className="subtitle text-lg mb-10">
            Although we are in the early stages of development, we already have so much under our belt! Follow along on our 
            journey on our Blog, or sign up to our email list for updates!
          </p>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Note</h2>
            <p className="mb-4">
              We recognize that conversations around ASL education and AI can bring up important and valid concerns,
              so we would like to provide more detailed information about our approach. We are not aiming to replace D/HoH professionals,
              including interpreters, whose work is vital and irreplaceable. Our platform is designed to provide basic 
              ASL literacy to service providers, particularly in healthcare and similar settings.
            </p>
            <p>
              We also fully acknowledge that ASL is an expressive language where emotion, facial expressions, and cultural
              context carry deep meaning. No AI can fully replicate that. Our goal is not to teach fluency, but to equip
              service providers with enough understanding to approach interactions with more respect and effectiveness.
              Most tools in this space translate Deaf individuals into the hearing world — we flip that approach by building a tool
              to help institutions adapt to ASL as a primary language.
            </p>
          </section>
  
          {/* Carousel Section */}
          <section className="mb-16">
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              showStatus={false}
              interval={3000}
            >
              <div>
                <img src="/images/Hands-in-A.jpg" alt="Slide 1" />
                <p className="legend">Interactive ASL Training</p>
              </div>
              <div>
                <img src="/images/3D-Avatar.jpg" alt="Slide 2" />
                <p className="legend">Avatar-Based Simulations</p>
              </div>
            </Carousel>
          </section>
  
          {/* Team Section */}
            <section className="team-section">
            <h1 className="text-3xl font-bold">Our Team</h1>
            <div className="team-grid">
                {teamMembers.map((member) => (
                <div key={member.name} className="team-member">
                    <img 
                    src={member.img} 
                    alt={`${member.name}'s profile`} 
                    />
                    <h3>{member.name}</h3>
                    <div className="social-icons">
                    {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                     <FaGithub />
                        </a>
                     )}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default About;