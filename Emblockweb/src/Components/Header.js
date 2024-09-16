import React from 'react';
import logo from '../assets/emblocklogo.png'



const Header = () => (
    <div className="bg-gray-900 text-white py-4 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
      <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
        <h1 className="text-2xl font-bold">Emblock Learn</h1>
      </div>
    </div>
  );


  export default Header;