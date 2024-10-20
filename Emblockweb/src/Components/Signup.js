// Signup.js
import React, { useState } from 'react';
import { auth } from '../firebase'; // Import auth from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import the eye icons


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [gender, setGender] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Optionally, you can store the user's name in the database if needed
      toast.success('Signup successful!');
      console.log('User created:', user);
      navigate('/login');
      // Redirect to login or another page if necessary
    } catch (error) {
      console.error('Signup failed:', error.message);

      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-black justify-center items-center h-screen mb-[-100px]">
  <ToastContainer />

  <div className="w-full max-w-md  p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold mb-6 text-center text-white">Sign Up</h2>

    <form onSubmit={handleSignup}>
      {/* Name Input */}
      <div className="mb-6">
        <label
          className="block text-gray-300 text-sm font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <label
          className="block text-gray-300 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>

      {/* Password Input */}
      <div className="mb-6 relative">
        <label
          className="block text-gray-300 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-2/3 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? (
            <IoMdEye size={24} color="#041423" />
          ) : (
            <IoMdEyeOff size={24} color="#041423" />
          )}
        </span>
      </div>

      {/* Confirm Password Input */}
      <div className="mb-6 relative">
        <label
          className="block text-gray-300 text-sm font-semibold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
          required
        />
        <span
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-4 top-2/3 transform -translate-y-1/2 cursor-pointer"
        >
          {showConfirmPassword ? (
            <IoMdEye size={24} color="#041423" />
          ) : (
            <IoMdEyeOff size={24} color="#041423" />
          )}
        </span>
      </div>

      {/* Gender Input */}
      <div className="mb-6">
        <label
          className="block text-gray-300 text-sm font-semibold mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="" className="text-black">
            Select Gender
          </option>
          <option value="male" className="text-black">
            Male
          </option>
          <option value="female" className="text-black">
            Female
          </option>
          <option value="other" className="text-black">
            Other
          </option>
        </select>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          Sign Up
        </button>
        <span
          onClick={() => navigate('/login')}
          className="text-green-600 cursor-pointer hover:underline"
        >
          Already have an account?
        </span>
      </div>
    </form>
  </div>
</div>

  );
};

export default Signup;
