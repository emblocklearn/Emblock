import React from 'react';
import lap from '../assets/emblhero.png';

const HeroSection = () => (
  <div className="flex flex-col md:flex-row items-center py-10 px-6 md:py-14 md:px-16  bg-white-100 space-x-0 md:space-x-24">
    <div className="max-w-3xl">
      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        DEVELOP YOUR <span className="text-green-500">SKILLS</span> WITH EMBLOCK !!
      </h2>
      <p className="mt-6 md:mt-12 text-[14px] md:text-[20px] text-gray-600 ">
        Emblock Learn aims to give you the utmost skills of new technologies. Our program focuses more on experience and
        guarantee empowering young leaders with the practical skills required for the job. Join us.
      </p>
      <a href="#offer">
      <button className="mt-8 md:mt-14 px-16 text-[12px] md:text-[24px] md:px-24 py-3 bg-green-500 text-black font-bold rounded">
        Explore

      </button>
      </a>
    </div>
    <div className="mt-10 md:mt-0 w-full md:w-[2000px]">
      <img src='https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Fcolleagues-using-digital-devices-coworking-space_23-2148822821.jpg?alt=media&token=52c147a5-76a2-4766-941b-bef77b544730' alt="" className="w-full h-full " />
    </div>
  </div>
);

export default HeroSection;
