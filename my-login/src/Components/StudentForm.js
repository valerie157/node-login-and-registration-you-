import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle student addition form submission here
  };

  return (
    <div className="container mt-5">
      <div className="card bg-light">
        <div className="card-body">
          <h2 className="card-title text-info">Student Addition Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-control"
              />
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
            </div>
            <button type="submit" className="btn btn-info">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
