import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the input
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    // Basic username validation: Required and at least 3 characters
    if (name === 'username') {
      if (value.trim() === '' || value.length < 3) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: 'Username is required and should be at least 3 characters.',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: '',
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    const isFormValid = Object.values(errors).every((error) => !error);

    if (isFormValid) {
      // Perform registration logic
      // You can make an API request to register the user here
    } else {
      // Display error messages to the user
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <h2 className="card-title text-primary">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
              />
              <p className="text-danger">{errors.username}</p>
            </div>
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
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
