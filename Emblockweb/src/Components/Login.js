// // Login.js
// import React, { useState } from 'react';
// import { auth } from '../firebase'; // Import auth from firebase.js
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import the eye icons


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       toast.success('Login successful!');
//       console.log('User logged in:', user);
//       navigate('/'); // Redirect to the homepage after successful login
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="flex flex-col gap-8 bg-black justify-center items-center h-screen p-6">
//   <ToastContainer />

//   <div className="w-full max-w-md  p-8 rounded-lg shadow-lg">
//     <h2 className="text-3xl font-semibold mb-6 text-center text-white">Login</h2>

//     <form onSubmit={handleLogin}>
//       {/* Email Input */}
//       <div className="mb-6">
//         <label
//           className="block text-gray-300 text-sm font-semibold mb-2"
//           htmlFor="email"
//         >
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           required
//         />
//       </div>

//       {/* Password Input */}
//       <div className="mb-6 relative">
//         <label
//           className="block text-gray-300 text-sm font-semibold mb-2"
//           htmlFor="password"
//         >
//           Password
//         </label>
//         <input
//           id="password"
//           type={showPassword ? "text" : "password"}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
//           required
//         />
//         {/* Password Toggle */}
//         <span
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-4 top-2/3 transform -translate-y-1/2 cursor-pointer"
//         >
//           {showPassword ? (
//             <IoMdEye size={24} color="#041423" />
//           ) : (
//             <IoMdEyeOff size={24} color="#041423" />
//           )}
//         </span>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between items-center">
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
//         >
//           Login
//         </button>
//         <span
//           onClick={() => navigate("/signup")}
//           className="text-green-600 cursor-pointer hover:underline"
//         >
//           Create an Account
//         </span>
//       </div>
//     </form>
//   </div>
// </div>

//   );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Add useLocation for redirect info
import { AuthContext } from '../Components/Authcontext';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location to get redirect state
  const { setIsLoggedIn ,redirectPath, setRedirectPath} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login successful!');
      setIsLoggedIn(true);

      // Check if there is a redirect path after login
      // const redirectTo = location.state?.redirectTo || '/';
      navigate(redirectPath || '/frontend-form');  // Redirect to the form if coming from Apply
    } catch (error) {
      console.error('Login failed:', error.message);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-black justify-center items-center h-screen p-6">
      <ToastContainer />

      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
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
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
              required
            />
            {/* Password Toggle */}
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

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Login
            </button>
            <span
              onClick={() => navigate("/signup")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Create an Account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
