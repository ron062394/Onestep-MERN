import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import Background from '../components/background/Background';
import DynamicButton from "../components/dynamic/DynamicButton"; // Import the Button component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    // Remove the try-catch block as error handling is likely done in the useLogin hook
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  };

  return (
    <div className="login-section">
      <Background/>
      <div className="login-container">
        <h2>Welcome Back to Onestep!</h2>
        <div className="login-card" style={{ flex: '1' }}>
          <div className="welcome-back-tagline">
            <h3 className='login-text'>Great to have you back!</h3>
            <p>We're thrilled to see you again. Let's find your perfect pair of shoes!</p>
            <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" style={{ flex: '1' }} />
          </div>
          
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
              <span className="signup-link">
                Don't have an account yet? <Link to="/signup">Click here</Link>
              </span>
            </div>

          </form>
          {error && <p className="error-message">{error}</p>}
        </div> 
      </div>

    </div>

  );
}

export default Login;
