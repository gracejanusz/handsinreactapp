// App.js
import React from 'react';
import AppRouter from './router';
import { AuthProvider } from './context/AuthContext'; 
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <AuthProvider>
      <AppRouter />
      <Analytics />
    </AuthProvider>
  );
}

export default App;
