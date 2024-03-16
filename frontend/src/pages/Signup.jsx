import React from 'react';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import Background from '../components/Background';

function Signup() {
  const { signup, isLoading, error, handleInputChange, formData } = useSignup(); 
  
  const handleSignup = async (e) => {
    e.preventDefault(); 
    await signup(); 
  };

  return (
    <div className="signup-section">
      <Background/>
      <div className="signup-container">
        <div className="signup-card">
          <span className='signup-text'>Sign up an account</span>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="birthDay"
              placeholder="Birth Day"
              value={formData.birthDay}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button disabled={isLoading} className="button">
              <span class="text">{isLoading ? 'Signing Up...' : 'Complete Sign-up'}</span>
              <svg
                class="arrow"
                viewBox="0 0 448 512"
                height="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
            {error && <p className="error-message">{error.message}</p>}
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
