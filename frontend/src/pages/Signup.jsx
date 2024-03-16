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
    console.log(formValues)
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
            <button className="button" disabled={isLoading}>
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
