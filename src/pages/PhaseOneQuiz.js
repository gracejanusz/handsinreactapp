import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PhaseOneQuiz({ onNext, onBack }) {
  const question = {
    image: "/asl_letters/A.webp",
    correct: "A",
    options: ["A", "B", "C", "D"]
  };

  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // null | true | false

  const handleSelect = (option) => {
    setSelected(option);
    setIsCorrect(option === question.correct);
  };

  return (
    <div style={{ backgroundColor: '#0a1c3c', minHeight: '100vh', color: 'white' }}>
      <Navigation />
      <h2 style={{ padding: '20px 40px', fontSize: '24px' }}>Quiz: Which Letter Is This?</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', background: '#1e3a8a' }}>
        {/* Image */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={question.image} alt="ASL Sign" style={{ height: '250px' }} />
        </div>

        {/* Question & Options */}
        <div style={{ flex: 1, maxWidth: '400px', backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>This sign is...</h3>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: selected === option
                  ? (isCorrect === null ? '#2563eb' : (option === question.correct ? '#16a34a' : '#dc2626'))
                  : '#f3f4f6',
                color: selected === option ? 'white' : 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {option}
            </button>
          ))}

          {/* Feedback */}
          {isCorrect === true && (
            <p style={{ color: '#16a34a', marginTop: '10px', fontWeight: 'bold' }}>✅ Correct! Great job.</p>
          )}
          {isCorrect === false && (
            <p style={{ color: '#dc2626', marginTop: '10px', fontWeight: 'bold' }}>❌ Not quite. Try again!</p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
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
          disabled={isCorrect !== true}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: isCorrect === true ? '#2563eb' : '#94a3b8',
            color: 'white',
            cursor: isCorrect === true ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          Next →
        </button>
      </div>

      <Footer />
    </div>
  );
}
