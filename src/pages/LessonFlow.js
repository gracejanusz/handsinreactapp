import React, { useState } from 'react';
import PhaseOneIntro from './PhaseOneIntro';
import PhaseOneQuiz from './PhaseOneQuiz';
import PhaseTwoReference from './PhaseTwoReference';
import PhaseThreeBlind from './PhaseThreeBlind';
import Footer from '../components/Footer';

const lessonSteps = [
  PhaseOneIntro,
  PhaseOneQuiz,
  PhaseTwoReference,
  PhaseThreeBlind
];

export default function LessonFlow() {
  const [step, setStep] = useState(0);
  const StepComponent = lessonSteps[step];

  const goNext = () => {
    if (step < lessonSteps.length - 1) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a1c3c', color: 'white' }}>
      <StepComponent onNext={goNext} onBack={goBack} />
      <Footer />
    </div>
  );
}
