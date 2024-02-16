import { useState } from 'react';
import './Signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    password: '',
    birthDay: '',
    country: ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSignup = async () => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(formData)
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup-section">
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
          <button className="signup-btn secondary-btn" onClick={handleSignup}>Complete Sign-up</button>
        </div> 
      </div>
    </div>
  );
}

export default Signup;
