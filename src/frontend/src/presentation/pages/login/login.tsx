// src/presentation/pages/login.tsx
import React from 'react';
import '../styles/login.css';  // Adjust the path if necessary
import AuthLoginButton from '../components/AuthLoginButton'; // Assuming AuthLoginButton.tsx is in the components directory
import logo from '../assets/track_logo_dpi.png';  // Adjust the path to your image directory

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Logo" />
      <h1>Welcome to Our Application</h1>
      <AuthLoginButton />
    </div>
  );
};

export default Login;
