import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useSignup } from '../hooks/useSignup';
import Background from '../components/Background';


function Signup() {
  const { signup, isLoading, error } = useSignup(); 
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    birthDay: '',
    country: '',
    password: ''
  });
  
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    await signup(formValues); // Pass formValues to signup function
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="signup-section">
      <Background/>
      <div className="signup-container">
        {/* <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" /> */}
        <div className="signup-card">
          <span className='signup-text'>Sign up an account</span>
          <form onSubmit={handleSignup}> {/* Form element */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange} // Change handler
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="contactNumber"
              placeholder="Contact Number"
              value={formValues.contactNumber}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="birthDay"
              placeholder="Birth Day"
              value={formValues.birthDay}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formValues.country}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <button className="signup-btn secondary-btn" disabled={isLoading}>
              {isLoading ? 'Signing Up...' : 'Complete Sign-up'}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
