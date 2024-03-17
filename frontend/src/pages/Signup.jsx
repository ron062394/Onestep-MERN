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
          <span className='signup-text'>Create your account</span>
          <form onSubmit={handleSignup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label>Email Address</label>            
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Contact Number</label>
            <input
              type="number"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
            <label>Birthday</label>
            <input
              type="date"
              name="birthDay"
              placeholder="Enter your birthday"
              value={formData.birthDay}
              onChange={handleInputChange}
              required
            />
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div>
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
              <span className="login-link">Already have an account? Click here</span>
            </div>
            {error && <p className="error-message">{error.message}</p>}
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
