import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Background from '../components/background/Background';
import DynamicButton from "../components/dynamic/DynamicButton"; // Import the Button component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await login(email, password);
      // Check if user is not empty and navigate to home if not empty
      if (localStorage.getItem('user')) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-section">
      <Background/>
      <div className="welcome-back-tagline">
        <h2>Welcome Back to Onestep!</h2>
        <p>We're thrilled to see you again. Let's find your perfect pair of shoes!</p>
      </div>
      <div className="login-container">
        {/* <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" /> */}
        <div className="login-card">
          <span className='login-text'>Great to have you back!</span>
          <form onSubmit={handleLogin}> {/* Form element */}
            <label>Email Address</label>            
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div>
              <DynamicButton isLoading={isLoading} text="Login" loadingText="Logging In..." />
              <span className="signup-link">Don't have an account yet? Click here</span>
            </div>

          </form>
          {error && <p className="error-message">{error}</p>}
        </div> 
      </div>

    </div>



  );
}

export default Login;
