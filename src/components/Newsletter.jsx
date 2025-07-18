import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import * as emailjs from '@emailjs/browser';
const EMAILJS_SERVICE_ID = 'service_2m782mf';
const EMAILJS_TEMPLATE_ID = 'template_jimcn2f';
const EMAILJS_PUBLIC_KEY = 'IduUPGs1Pxgw9zUnu';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  const handleSignupClick = async () => {
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setMessageType('error');
      return;
    }
    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }
    setLoading(true);
    setMessage('');
    setMessageType('');
    try {
      const templateParams = {
        user_email: email,
        timestamp: new Date().toLocaleString(),
        user_agent: navigator.userAgent,
        from_name: 'Website Newsletter Signup'
      };
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setMessage("Thanks for signing up! We'll be in touch soon.");
      setMessageType('success');
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage(
        error.text?.includes('Invalid')
          ? 'There was a configuration error. Please try again later.'
          : error.status === 422
          ? 'Email service temporarily unavailable. Please try again.'
          : 'Something went wrong. Please try again or contact support.'
      );
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSignupClick();
    }
  };

  if (isSubscribed) {
    return (
      <div style={{
        background: 'linear-gradient(to right, #1e3a8a, #1d4ed8)',
        padding: '60px 20px',
        border: '1px solid #cbd5e1',
        borderRadius: '20px',
        color: 'white',
        textAlign: 'center',
        margin: '40px 20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          color: '#1e3a8a',
          padding: '40px 20px',
          borderRadius: '20px',
          maxWidth: '500px',
          margin: '0 auto',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          <CheckCircle size={48} style={{ color: '#10b981', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>You're All Set!</h3>
          <p style={{ color: '#374151', marginBottom: '20px', fontSize: '16px' }}>
            Thank you for subscribing to our newsletter.
          </p>
          <button
            onClick={() => {
              setIsSubscribed(false);
              setMessage('');
              setMessageType('');
            }}
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '999px',
              cursor: 'pointer'
            }}
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div style={{ background: 'linear-gradient(to right, #1e3a8a, #1d4ed8)', padding: '60px 20px', borderRadius: '20px', color: 'white', textAlign: 'center', margin: '40px 20px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Subscribe to our newsletter</h2>
      <p style={{ margin: '10px 0 30px' }}>Sign up to keep up to date with HandsIn.</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', borderRadius: '50px', overflow: 'hidden' }}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
          style={{ flex: 1, padding: '15px 20px', border: 'none', fontSize: '16px', outline: 'none' }}
          disabled={loading}
        />
        <button
          onClick={handleSignupClick}
          disabled={loading || !email.trim()}
          style={{ backgroundColor: '#f97316', color: 'white', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {message && (
        <div style={{ marginTop: '20px', backgroundColor: messageType === 'success' ? '#d1fae5' : '#fee2e2', color: messageType === 'success' ? '#065f46' : '#991b1b', padding: '10px 20px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          {messageType === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span style={{ fontSize: '14px' }}>{message}</span>
        </div>
      )}
    </div>
  );
}

export default Newsletter;
