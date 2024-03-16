import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Background from '../components/Background';

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
      <div className="login-container">
        {/* <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" /> */}
        <div className="login-card">
          <span className='login-text'>Login</span>
          <form onSubmit={handleLogin}> {/* Form element */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button disabled={isLoading} className="button">
              <span class="text">{isLoading ? 'Logging In...' : 'Login'}</span>
              <svg
                class="arrow"
                viewBox="0 0 448 512"
                height="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div> 
      </div>
    </div>
  );
}

export default Login;
