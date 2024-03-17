import React from 'react';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import Background from '../components/Background';
import DynamicButton from "../components/DynamicButton"; // Import the Button component

function Signup() {
  const { signup, isLoading, error, handleInputChange, formData } = useSignup(); 
  
  const handleSignup = async (e) => {
    e.preventDefault(); 
    await signup(); 
  };

  return (
    <div className="signup-section">
      <Background/>
      <span>Create your account</span>
      <span>Welcome to Onestep</span>
      <span>Your one-stop destination for stylish shoes</span>
      <div className="signup-container">
        <div className="signup-card">

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
              <DynamicButton isLoading={isLoading} text="Complete Sign-up" loadingText="Signing Up..." />  
              <span className="login-link">Already have an account? <u>Click here</u></span>
            </div>
            {error && <p className="error-message">{error.message}</p>}
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
