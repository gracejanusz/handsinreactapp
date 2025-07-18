import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, getDoc } from 'firebase/firestore';
import logo from '../images/HandShortLogo.png'; // use your logo file

function Navigation({ currentPage }) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(docRef);
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      } else {
        setUsername(null);
      }
    };
    getUsername();
  }, [user]);

  return (
  <div className="simple-nav">
    <div className="nav-left">
      <Link to="/">
        <img src={logo} alt="Logo" className="nav-logo-img" />
      </Link>
    </div>
  
    <div className="nav-right">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="nav-auth">
          {user ? (
            <Link to="/dashboard" className="username-box" style={{ textDecoration: 'none', color: 'white' }}>
              {username || user.email}
            </Link>
          ) : (
            <Link to="/signup" className="username-box">Sign Up</Link>
          )}
        </div>

    </div>

  </div>
  
  );
}

export default Navigation;
