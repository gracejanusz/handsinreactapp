import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import * as emailjs from '@emailjs/browser';


const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);



  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Clear messages when user starts typing
    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  const handleSignupClick = async () => {
    // Validate email before sending
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
      // Prepare template parameters
      const templateParams = {
        user_email: email,
        timestamp: new Date().toLocaleString(),
        user_agent: navigator.userAgent,
        from_name: 'Website Newsletter Signup'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Success:', result);
      setMessage('Thanks for signing up! We\'ll be in touch soon.');
      setMessageType('success');
      setIsSubscribed(true);
      setEmail('');

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Provide user-friendly error messages
      if (error.text?.includes('Invalid')) {
        setMessage('There was a configuration error. Please try again later.');
      } else if (error.status === 422) {
        setMessage('Email service temporarily unavailable. Please try again.');
      } else {
        setMessage('Something went wrong. Please try again or contact support.');
      }
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
      <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-100">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">You're All Set!</h3>
          <p className="text-gray-600 mb-4">Thank you for subscribing to our newsletter.</p>
          <button 
            onClick={() => {
              setIsSubscribed(false);
              setMessage('');
              setMessageType('');
            }}
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <div className="mx-auto w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h1>Stay Updated</h1>
        <p className="text-gray-600">Sign up to keep up to date with HandsIn.</p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            className="w-full px-8 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            disabled={loading}
          />
        </div>

        <button
          onClick={handleSignupClick}
          disabled={loading || !email.trim()}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              <span>Subscribe</span>
            </>
          )}
        </button>

        {message && (
          <div className={`p-3 rounded-lg flex items-center space-x-2 ${
            messageType === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {messageType === 'success' ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterSignup;