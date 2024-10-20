// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
// import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon from react-icons

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
//   const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const handleLoginLogout = () => {
//     if (isLoggedIn) {
//       // Logic for logging out
//       setIsLoggedIn(false);
//     } else {
//       // Navigate to login page
//       setIsLoggedIn(true); 
//       navigate('/login');
//     }
//     setShowDropdown(false);
//   };

//   return (
//     <div className="bg-black text-white py-4 px-8 flex justify-between items-center">
//       <Link to="/" className="text-white">
//         <div className="flex items-center justify-center md:justify-start">
//           <div className='h-6 w-8'>
//             <img
//               src="https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Femblocklogo3.png?alt=media&token=e2fd552b-7338-460d-ba8f-1634177267a7"
//               alt="Logo"
//               className="w-full h-full"
//             />
//           </div>
//           <h2 className='text-xl font-semibold ml-1'>EMBLOCK LEARN</h2>
//         </div>
//       </Link>
//       <div className="relative">
//         <FaUserCircle className="h-8 w-8 cursor-pointer" onClick={toggleDropdown} /> {/* Toggle dropdown on click */}
//         {showDropdown && (
//           <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
//             <button
//               onClick={handleLoginLogout}
//               className="block px-4 py-2 text-sm text-black font-semibold hover:bg-green-800 w-full text-center bg-green-600 absolute right-10 bottom-1"
//             >
//               {isLoggedIn ? 'Logout' : 'Login'}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon from react-icons
import { auth } from '../firebase'; // Import your initialized auth from firebase
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn based on user presence
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logic for logging out
      auth.signOut() // Call Firebase sign-out
        .then(() => {
          setIsLoggedIn(false); // Update local state
          navigate('/'); // Redirect to home page or wherever you want after logout
        });
    } else {
      // Navigate to login page
      navigate('/login');
    }
    setShowDropdown(false);
  };

  return (
    <div className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-white">
        <div className="flex items-center justify-center md:justify-start">
          <div className='h-6 w-8'>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Femblocklogo3.png?alt=media&token=e2fd552b-7338-460d-ba8f-1634177267a7"
              alt="Logo"
              className="w-full h-full"
            />
          </div>
          <h2 className='text-xl font-semibold ml-1'>EMBLOCK LEARN</h2>
        </div>
      </Link>
      <div className="relative">
        <FaUserCircle className="h-8 w-8 cursor-pointer" onClick={toggleDropdown} />
        {showDropdown && (
          <div className="absolute right-10 bottom-[-4px] mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
            <button
              onClick={handleLoginLogout}
              className="block px-4 py-2 text-sm text-black font-semibold hover:bg-green-800 w-full text-center bg-green-600"
            >
              {isLoggedIn ? 'Logout' : 'Login'} {/* Conditional rendering */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
