import React from 'react';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Grace',
    img: '/images/Grace_Headshot.png',
    github: 'https://github.com/gracejanusz',
    linkedin: 'https://www.linkedin.com/in/grace-janusz-301a88288',
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
    <div className="about-page">
      <Navigation />
          
      <section
          style={{
            height: '480px',
            backgroundImage:`url(/images/Aboutheaderbackground.png)`,
            backgroundPosition: 'center',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >


          {/* Text content */}
          <div style={{ maxWidth: '900px', zIndex: 2 }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>About HandsIn</h1>
            <p style={{ fontSize: '20px', lineHeight: '1.8' }}>
            HandsIn is an AI-powered training platform that teaches and allows healthcare providers to 
            practice foundational ASL through interactive simulations with a virtual avatar. Designed
             to be implemented as part of institutional training, our tool promotes ASL as a primary 
             language and equips service providers with the basic communication skills needed to offer
              more inclusive, respectful, and effective care to D/HoH patients.
            </p>
          </div>
        </section>
        <section
  
  
  style={{
        backgroundColor: '#f9fafb', 
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '6px',
              height: '40px',
              backgroundColor: '#2d5cb2',
              borderRadius: '3px',
              marginRight: '16px',
            }}
          />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>Important Note</h2>
        </div>

        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: "black", textAlign: 'left' }}>
          We recognize that conversations around ASL education and AI can bring up important and valid concerns,
          so we would like to provide more detailed information about our approach.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: "black", textAlign: 'left' }}>
          We would like to note that we are not aiming to replace D/HoH professionals, including interpreters, whose work is vital and
          irreplaceable. Our platform is designed to provide basic ASL literacy to service providers, particularly in healthcare and
          similar settings, where communication difficulties with D/HoH individuals are still far too common.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: "black", textAlign: 'left' }}>
          We believe that a foundational understanding of ASL among staff can complement the expertise of interpreters and help bridge the gap during moments when an interpreter is not immediately available.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px', color: "black", textAlign: 'left' }}>
          We also fully acknowledge that ASL is an expressive language where emotion, facial expressions, and cultural context carry deep meaning.
          No AI can fully replicate that. Our goal is not to teach fluency or to mimic the full experience of human communication,
          but rather to equip service providers with a space to practice communication and with enough of an understanding to approach
          interactions with more respect and effectiveness.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: "black", textAlign: 'left' }}>
          Most tools in this space are built to translate Deaf individuals into the hearing world (e.g., voice-to-text or sign-to-speech).
          We are flipping that approach by building a tool that helps institutions adapt to and respect ASL as a primary language,
          rather than expecting the D/HoH community to adapt.
        </p>
      </div>
    </section>


      

      {/* Full Width Team Section */}
      <section className="team-section-wrapper">
        <div className="team-section-container">
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
            Our Team
          </h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <img src={member.img} alt={`${member.name}'s profile`} />
                <h3>{member.name}</h3>
                <p className="course-description">
                  {member.name === 'Grace' && (
                    <>
                      Pursuing a degree in Computer Science and Economics at the University of Chicago, Grace founded HandsIn with hope to help make the world more accessible for native ASL signers. With a background in Web Development and a passion to do something to help ease the community’s stress of increased technical dependence, Grace is excited to continue working with and for the Deaf and HoH community.
                    </>
                  )}
                  {member.name === 'Marlena' && (
                    <>
                      Driven by a desire to approach problems and build solutions through an interdisciplinary lens—an approach she has been fortunate to deepen through her academic experience at UChicago—Marlena is pursuing a degree in Business Economics and Comparative Human Development. She also engages with communities like Trott, Women in Business, and ILC to strengthen her business acumen and grow as both a thinker and a leader.
                    </>
                  )}
                  {member.name === 'Aeliya' && (
                    <>
                      Aeliya is a first year at the University of Chicago studying Computer Science and Economics. Previously, she was CEO of a high school startup, EduNATION, where she led a team to make E-courses for business training needs using the microlearning methodology. This summer she will be working with Akool, an avatar platform ranked on G2's top AI apps of 2025.
                    </>
                  )}
                </p>
                <div className="social-icons">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
