import React from 'react';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';

function Signup() {
  const { signup, isLoading, error, handleInputChange, formData } = useSignup(); 
  
  const handleSignup = async (e) => {
    e.preventDefault(); 
    await signup(); 
  };

  return (
    <div className="signup-section">
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
            <button className="button" disabled={isLoading}>
              <span class="text">{isLoading ? 'Signing Up...' : 'Complete Sign-up'}</span>
            </button>
            {error && <p className="error-message">{error.message}</p>}
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
