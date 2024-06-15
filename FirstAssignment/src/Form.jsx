// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone No. is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      navigate('/success', { state: formData });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='text-black flex flex-col justify-center items-center mt-12'>
        <div className='w-96 border border-black rounded-xl p-4'>
        <h3 className='text-center font-bold'>Form </h3>
    <form onSubmit={handleSubmit}>
      <div className='m-2 flex items-center justify-between'>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Username</label>
        <input
          type="text"
          name="username"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg items-center'
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg  ' 
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Password</label>
        <input
          type="password"
          name="password"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Phone No.</label>
        <input
          type="text"
          name="phoneNo"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.phoneNo}
          onChange={handleChange}
        />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Country</label>
        <select name="country"className='ml-2 py-2 px-10 border border-black text-blue-400 rounded-lg' value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'> 
        <label>City</label>
        <select name="city" className='ml-2 py-2 px-12 border border-black text-blue-400 rounded-lg' value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="New Delhi">New Delhi</option>
          <option value="New York">New York</option>
          <option value="Toronto">Toronto</option>
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Pan No.</label>
        <input
          type="text"
          name="panNo"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>

      <div className='m-2 flex items-center justify-between'>
        <label>Aadhar No.</label>
        <input
          type="text"
          name="aadharNo"
          className='ml-2 p-2 border border-black text-blue-400 rounded-lg'
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <div className='flex items-center justify-center'>
      <button className='m-2 px-6 py-2 bg-green-400 rounded-lg' type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Form;
