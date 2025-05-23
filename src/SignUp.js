import React from 'react';
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx';

function SignUp() {
  return (
    <div className="App">
       <Navigation currentPage="signup" />
      <main className="App-header">
        <h1>Sign Up for HandsIn</h1>
        <p className="custom-font">This is the Sign Up page - join our learning platform.</p>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;