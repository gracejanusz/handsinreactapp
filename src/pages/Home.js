// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';

import '../App.css';
import logo from '../images/HandShortLogo.png';
import features from '../images/FeaturesBar.png';
import heroImg from '../images/landingpagephoto.png';
import icon1 from '../images/premiumlearningicon1.png';
import icon2 from '../images/premiumlearningicon2.png';

import { auth, db } from '../firebase';
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

const courses = [
  {
    name: 'Learn the Basics',
    img: '/images/stockphoto2.png',
    description: 'Start your ASL journey with core vocabulary and signs.',
    duration: '1hr 30min',
    count: 24,
    sales: 180
  },
  {
    name: 'Talk About You!',
    img: '/images/stockphoto1.webp',
    description: 'Learn how to introduce yourself and express personal info.',
    duration: '2hr',
    count: 30,
    sales: 220
  },
  {
    name: 'Talk with a 3D Avatar',
    img: '/images/3dcourse.png',
    description: '**COMING SOON** Practice real-time ASL with a responsive 3D avatar.',
    duration: '—',
    count: 0,
    sales: 0
  },
];

function Home() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      } else {
        setUsername(null);
      }
    };
    fetchUsername();
  }, [user]);

  return (
    <div className="App custom-font">
      <Navigation currentPage="Home" />

      {/* Hero Section */}
      <div className="hero-section" style={{
        backgroundColor: '#2d5cb2', color: 'white', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
        padding: '60px 20px'
      }}>
        {/* Left Content */}
        <div style={{ flex: '1 1 400px', paddingLeft: '40px', maxWidth: '600px' }}>
          <img src={logo} alt="HandsIn Logo" style={{ width: '500px' }} />
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
            {user ? `Welcome, ${username || user.email}` : 'A new way to learn.'}
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '30px', textAlign: 'left' }}>
            HandsIn is an AI-powered training platform that equips healthcare providers with foundational American Sign Language (ASL) skills through interactive, avatar-based simulations.
          </p>
        </div>

        {/* Right Image */}
        <div style={{ flex: '1 1 400px', maxWidth: '800px', marginTop: '20px' }}>
          <img src={heroImg} alt="Landing Page Visual" style={{ width: '100%', borderRadius: '12px' }} />
        </div>

        <div className="features-image-wrapper">
          <img src={features} alt="Features" className="features-image" />
        </div>
      </div>

      {/* Tracks Section */}
      <section className="feature-page" style={{ padding: '10px 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', marginTop: "140px" }}>Our Tracks</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="course-card"
              style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                maxWidth: '320px',
                textAlign: 'left',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <img
                src={course.img}
                alt={`Course ${idx + 1}`}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '5px' }}>Introduction to Sign Language</p>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>{course.name}</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '10px' }}>{course.description}</p>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '20px',
                  flexWrap: 'wrap'
                }}>
                  <span>⏱ {course.duration}</span>
                  <span>🎬 {course.count} Courses</span>
                  <span>⬇️ {course.sales} Sales</span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <Link to={user ? "/dashboard" : "/signup"} style={{ textDecoration: 'none' }}>
                    <button className="nav-button" style={{
                      backgroundColor: '#f97316',
                      color: 'white',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '10px 24px',
                      fontSize: '16px',
                      cursor: 'pointer'
                    }}>
                      Join Course
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Section */}
      <section style={{ background: '#2d5cb2' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          alignItems: 'center', maxWidth: '1200px', margin: '0 auto'
        }}>
          <div style={{ flex: '1 1 400px', padding: '10px', textAlign: 'center' }}>
            <img src='/images/homepagedesign1.png' alt="Premium Learning" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
          </div>
          <div style={{ flex: '1 1 500px', padding: '0px 20px', color: 'white', textAlign: 'left' }}>
            <h2 style={{ fontSize: '46px', fontWeight: 'bold', marginBottom: '30px' }}>
              Premium <span style={{ color: '#facc15' }}>Learning</span> Experience
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <img src={icon1} alt="Accessible" style={{ width: '56px', height: '56px', marginRight: '20px' }} />
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>Easily Accessible</h4>
                <p style={{ fontSize: '16px', margin: 0 }}>Learn Anytime. Anywhere.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={icon2} alt="Fun Learning" style={{ width: '56px', height: '52px', marginRight: '20px' }} />
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>Fun Learning Experience</h4>
                <p style={{ fontSize: '16px', margin: 0 }}>Enjoy interactive lessons to keep you engaged!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter + Footer */}
      <div style={{ background: '#2d5cb2', padding: '80px 0' }}>
        <section style={{ maxWidth: '960px', margin: '0 auto' }}>
          <Newsletter />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
