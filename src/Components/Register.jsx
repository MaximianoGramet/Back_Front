import React, { useState } from 'react';
import { Link } from 'wouter';

const Register = () => {
  const url= 'https://maxicrazystore.up.railway.app'
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: ''
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataEntries = Object.entries(formData);
    const serializedFormData = {};
    formDataEntries.forEach(([key, value]) => {
      serializedFormData[key] = value;
    });

    try {
      const response = await fetch(`${url}/api/sessions/register`, {
        method: 'POST',
        body: JSON.stringify(serializedFormData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        window.location.replace('/users/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
