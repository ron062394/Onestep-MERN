import React from 'react';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import Background from '../components/background/Background';
import DynamicButton from "../components/dynamic/DynamicButton";
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const { signup, isLoading, error, handleInputChange, formData } = useSignup(); 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); 
    await signup();
    if (!error) {
      navigate('/login');
    }
  };

  return (
    <div className="signup-section">
      <Background />
      <div className="signup-content">
        <h1>Create your account</h1>
        <h2>Welcome to Onestep</h2>
        <p>Your one-stop destination for stylish shoes</p>
        <div className="signup-container">
          <div className="signup-card">
            <form onSubmit={handleSignup}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>            
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter your contact number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="birthDay">Birthday</label>
                  <input
                    type="date"
                    id="birthDay"
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <DynamicButton isLoading={isLoading} text="Complete Sign-up" loadingText="Signing Up..." />  
                <p className="login-link">
                  Already have an account? <Link to="/login">Click here</Link>
                </p>
              </div>
              {error && <p className="error-message">{error.message}</p>}
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Signup;
