import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const { msg } = data;
      alert(msg);
      if (response.ok) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#121212] text-white">
      <div className="bg-[#181818] shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center">Sign Up for Free</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                placeholder="First name"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1DB954] hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#1DB954] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;