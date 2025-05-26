import React from 'react';
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx';
import Newsletter from './components/Newsletter.jsx';

function SignUp() {
  return (
    <div className="App">
       <Navigation currentPage="signup" />
      <main className="App-header">
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;