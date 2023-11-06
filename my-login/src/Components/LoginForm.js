import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the input
    if (name === 'email') {
      validateEmail(value);
    }
    // Add additional validation logic for the 'password' field if needed
  };

  const validateEmail = (value) => {
    try {
      new URL('mailto:' + value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      
      //  make an API request to know if user is true
    } else {
      // Display error messages 
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card bg-light">
        <div className="card-body">
          <h2 className="card-title text-success">Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              <p className="text-danger">{errors.email}</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              <p className="text-danger">{errors.password}</p>
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

