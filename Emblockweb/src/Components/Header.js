import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => (
  <div className="bg-gray-900 text-white py-4 px-8">
    <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
      <div className='h-10 w-12'>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Femblocklogo3.png?alt=media&token=e2fd552b-7338-460d-ba8f-1634177267a7"
          alt="Logo"
          className="w-full h-full"
        />
      
    </div>
    <Link to="/" className="text-white">
      <h1 className="text-2xl font-bold">Emblock Learn</h1>
    </Link>
  </div>
    </div >
  );


export default Header;