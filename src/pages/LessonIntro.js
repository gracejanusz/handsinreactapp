import React, { useState } from 'react';
import { signQuestions } from '../data/SignQuestions'; 
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function LessonIntro() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // null | true | false
  const question = signQuestions[current];

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsCorrect(option === question.correct);
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    if (current < signQuestions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    setSelected(null);
    setIsCorrect(null);
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div style={{ backgroundColor: '#0a1c3c', minHeight: '100vh', color: 'white' }}>
      <Navigation />
      <h2 style={{ padding: '20px 40px', fontSize: '24px' }}>
        Exercise {current + 1}
      </h2>

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
              onClick={() => handleOptionClick(option)}
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

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', backgroundColor: '#e0e7ff' }}>
        <button
          onClick={handlePrev}
          disabled={current === 0}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: current === 0 ? '#94a3b8' : '#1e40af',
            color: 'white',
            cursor: current === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ← Last question
        </button>

        <button
          onClick={handleNext}
          disabled={isCorrect !== true}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: isCorrect === true ? '#2563eb' : '#94a3b8',
            color: 'white',
            cursor: isCorrect === true ? 'pointer' : 'not-allowed'
          }}
        >
          Next question →
        </button>
      </div>

      <Footer />
    </div>
  );
}
