import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => (
  <div className="bg-black text-white py-4 px-8">
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
  </div >

);


export default Header;