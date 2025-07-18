import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PhaseOneIntro({ onNext }) {
  return (
    <div style={{ backgroundColor: '#0a1c3c', minHeight: '100vh', color: 'white' }}>
      <Navigation />
      <h2 style={{ padding: '20px 40px', fontSize: '24px' }}>Learn the Letter "A"</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', background: '#1e3a8a' }}>
        <div style={{ textAlign: 'center' }}>
          <img src="/asl_letters/A.webp" alt="ASL Letter A" style={{ height: '300px' }} />
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            This is how you sign the letter A in American Sign Language. Study the hand shape carefully.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button
          onClick={onNext}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          Ready to Test Yourself →
        </button>
      </div>

      <Footer />
    </div>
  );
}
