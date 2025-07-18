import React, { useState } from 'react';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [subscribe, setSubscribe] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleAuth = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Save user profile
        await setDoc(doc(db, 'users', user.uid), { name, username, email });
  
        // ✅ If subscribed, add to newsletter list
        if (subscribe) {
          await addDoc(collection(db, 'newsletterSubscribers'), {
            email,
            subscribedAt: new Date()
          });
        }
  
        navigate('/dashboard'); // ⬅️ Redirect after sign-up
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // ⬅️ Redirect after sign-in
      }
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setErrorMessage('That email already has an account. Try signing in instead.');
      } else if (err.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password. Please try again.');
      } else if (err.code === 'auth/user-not-found') {
        setErrorMessage('No account found with that email. Try signing up.');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
      console.error(err.message);
    }
  };
  
  return (
    <div style={{ backgroundColor: '#2d5cb2', minHeight: '100vh' }}>
      <Navigation />
      <main style={{
        paddingTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        paddingBottom: '40px'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Sign Up / Log In</h2>
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '600px',
          margin: '20px auto',
          color: 'white',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}>
          {/* 🔴 Error Message Box */}
          {errorMessage && (
            <div style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              padding: '10px 16px',
              borderRadius: '12px',
              fontSize: '14px',
              marginBottom: '10px'
            }}>
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {isSignUp && (
              <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
              />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />

            {isSignUp && (
              <label style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={() => setSubscribe(!subscribe)}
                />
                Sign me up for the HandsIn newsletter
              </label>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <button type="submit" style={buttonStyle}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMessage(''); // Clear error on toggle
                }}
                style={{ ...buttonStyle, backgroundColor: '#1e40af' }}
              >
                {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const inputStyle = {
  padding: '12px 16px',
  borderRadius: '999px',
  border: 'none',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '12px 24px',
  borderRadius: '999px',
  border: 'none',
  backgroundColor: '#f97316',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px'
};

export default AuthForm;
