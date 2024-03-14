import { useLogin } from '../hooks/useLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Background from '../components/Background';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
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
        <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" />
        <div className="login-card">
          <span className='login-text'>Login</span>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={isLoading} className="login-btn secondary-btn" onClick={handleLogin}>Login</button>
        </div> 
      </div>
    </div>
  );
}

export default Login;
