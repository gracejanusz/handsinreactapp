// App.js
import React from 'react';
import AppRouter from './router';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
