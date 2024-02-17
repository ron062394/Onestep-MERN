import { useState } from 'react';
import './Login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleLogin = async => {
    try {
        console.log('Login triggered')
    } catch (error) {
        
    }
  }

  return (
    <div className="login-section">
      <div className="login-container">
        <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" />
        <div className="login-card">
          <span className='signup-text'>Login</span>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button className="login-btn secondary-btn" onClick={handleLogin}>Login</button>
        </div> 
      </div>
    </div>
  );
}

export default Login;
