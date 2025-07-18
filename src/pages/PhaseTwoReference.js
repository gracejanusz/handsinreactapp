import React, { useState, useRef, useCallback } from 'react';
import Navigation from '../components/Navigation';
import HandTrackerWithHuman from '../components/HandTrackerWithHuman';

export default function PhaseTwoReference({ onNext }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const lastSentRef = useRef(0); // ⏱️ To throttle API calls

  const handleLandmarks = useCallback(async (landmarkObjects) => {
    const now = Date.now();
    if (now - lastSentRef.current < 3000) return;
    lastSentRef.current = now;

    if (!Array.isArray(landmarkObjects) || landmarkObjects.length !== 21) {
      console.warn("🚫 Invalid landmark data:", landmarkObjects);
      return;
    }

    // ✅ Transform {x, y, z} to [x, y, z]
    const landmarks = landmarkObjects.map(p => [p.x, p.y, p.z]);

    console.log("📤 Sending transformed landmarks to API:", landmarks);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/verify-sign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ landmarks, expected: 'a' })
      });

      const { match, predicted } = await res.json();

      if (match) {
        console.log(`✅ Match! Model predicted: ${predicted}`);
        setIsCorrect(true);
      } else {
        console.log(`❌ No match. Model predicted: ${predicted}`);
      }
    } catch (err) {
      console.error('❌ API error:', err);
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#0a1c3c', minHeight: '100vh', color: 'white' }}>
      <Navigation />
      <h2 style={{ textAlign: 'center' }}>Sign the Letter "A"</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '20px' }}>
        <div style={{
          background: '#f1f5f9',
          padding: '20px',
          borderRadius: '12px',
          color: '#000',
          textAlign: 'center'
        }}>
          <img src="/asl_letters/A.webp" alt="ASL A" style={{ height: '250px' }} />
          <p style={{ color: '#0a1c3c' }}>Try to match this shape with your hand</p>
        </div>

        <HandTrackerWithHuman onResult={handleLandmarks} />
      </div>

      <div style={{ textAlign: 'center', padding: '20px' }}>
        <button
          onClick={onNext}
          disabled={!isCorrect}
          style={{
            backgroundColor: isCorrect ? '#16a34a' : '#64748b',
            color: 'white',
            borderRadius: '6px',
            padding: '12px 24px',
            fontWeight: 'bold',
            cursor: isCorrect ? 'pointer' : 'not-allowed',
            opacity: isCorrect ? 1 : 0.6
          }}
        >
          {isCorrect ? 'Correct! →' : 'Waiting for correct sign...'}
        </button>
      </div>
    </div>
  );
}
