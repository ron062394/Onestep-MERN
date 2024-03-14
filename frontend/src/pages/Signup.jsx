import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import Background from '../components/Background';


function Signup() {
  const { signup, handleInputChange, isLoading, error } = useSignup(); 
  
  const handleSignup = async () => {
    await signup();
  };

  return (
    <div className="signup-section">
      <Background/>
      <div className="signup-container">
        <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" />
        <div className="signup-card">
          <span className='signup-text'>Sign up an account</span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="birthDay"
            placeholder="Birth Day"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button className="signup-btn secondary-btn" onClick={handleSignup} disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Complete Sign-up'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </div> 
      </div>
    </div>
  );
}

export default Signup;
