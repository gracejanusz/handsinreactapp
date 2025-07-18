import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WebcamFeed from '../components/WebcamFeed';

export default function PhaseThreeBlind({ onNext, onBack }) {
  return (
    <div style={{ backgroundColor: '#0a1c3c', minHeight: '100vh', color: 'white' }}>
      <Navigation />
      <h2 style={{ padding: '20px 40px', fontSize: '24px' }}>Try It Without a Reference</h2>

      {/* Instruction + Webcam */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        padding: '40px'
      }}>
        <div style={{
          backgroundColor: '#e0e7ff',
          color: '#1e3a8a',
          padding: '30px',
          borderRadius: '12px',
          flex: 1,
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '28px' }}>Sign the letter: <strong>A</strong></h3>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            You won’t see a reference image this time — try to recall the sign you just learned and make it using your webcam.
          </p>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <WebcamFeed />
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', backgroundColor: '#e0e7ff' }}>
        <button
          onClick={onBack}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#1e40af',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ← Back
        </button>
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
          Finish →
        </button>
      </div>

      <Footer />
    </div>
  );
}
