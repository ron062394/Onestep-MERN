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
            <button disabled={isLoading} className="login-btn secondary-btn"> {/* Button inside form */}
              {isLoading ? 'Logging In...' : 'Login'}
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div> 
      </div>
    </div>
  );
}

export default Login;
