import React from 'react';
import { useNavigate } from 'react-router-dom';

const Apply = ({ offer, onClose }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/frontend-form', { state: { title: offer.title } });
  };

  return (
    <div className="relative flex flex-col w-full h-screen md:h-auto  md:flex-row justify-between items-center bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg max-w-[66rem] overflow-auto ">
      {/* Close Button */}
      <div className="absolute top-4 right-4">
        <button
          className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-700"
          onClick={onClose}
        >
          <span className="text-black text-2xl">X</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col items-center md:items-start space-y-4">
        {/* Title and Learning Objectives */}
        <div>

          <div className='flex flex-col '>
            <div>  <h1 className="text-2xl pt-[12px] md:text-3xl font-bold text-green-600 text-center md:text-left">{offer.title}</h1></div>

            <div className="w-full block  md:hidden md:w-[60%] mt-8 md:mt-0 flex justify-center">
              <div className="relative flex flex-col items-center">

                <img
                  src={offer.imgSrc}
                  alt="UI/UX Design Tools"
                  className="w-[85%] md:w-[78%] rounded-tl-[70px]  rounded-br-[70px] shadow-lg relative z-20"
                />


                <img
                  src={offer.secondImg}
                  alt="Second Layered Image"
                  className="absolute top-[-1.5rem] left-1 md:left-[5.5rem] w-[85%] md:w-3/4  shadow-lg opacity-70 z-10"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl  flex pb-[11px] font-bold text-black text-center md:text-left ">What you'll learn</h2>

            <ul className="list-none text-gray-700 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-between">
              {/* Left column */}
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <li className="relative pl-8">
                  <span className="absolute left-0 top-[30%] w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc1}
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-[20%] w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc2}
                </li>
              </div>

              {/* Right column */}
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <li className="relative pl-8">
                  <span className="absolute left-0 top-[30%] w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc3}
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-[20%] w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc4}
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Internship Includes */}
        <div className="mt-6 w-[100%]">
          <h2 className="text-xl font-bold text-black ">This internship includes</h2>
          <div className="flex flex-col  md:flex-row md:space-x-4 text-gray-700 mt-2 pl-[24px] ">
            <div className='flex flex-row items-center'>
              <i className="fas fa-chalkboard-teacher text-lg md:text-xl mr-2"></i>
              <p><span className="text-sm"> Mentorship by Industry Experts</span></p></div>
            <div className='flex flex-row items-center'>
              <i className="fa fa-users text-lg md:text-xl mr-2" aria-hidden="true"></i>
              <p><span className="text-sm"> Real-Time working exposure</span></p></div>
            <div className='flex flex-row items-center'> <i className="fa fa-trophy text-lg md:text-xl mr-2" aria-hidden="true"></i>
              <p><span className="text-sm"> Certificate of Completion</span></p>  </div>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button
            className="bg-green-600 text-white text-lg px-8 py-2 rounded-lg hover:bg-green-700"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full hidden md:block md:w-[60%] mt-8 md:mt-0 flex justify-center">
        <div className="relative flex flex-col items-center">
          {/* First Image */}
          <img
            src={offer.imgSrc}
            alt="UI/UX Design Tools"
            className="w-[85%] md:w-[78%] rounded-tl-[70px]  rounded-br-[70px] shadow-lg relative z-20"
          />

          {/* Second Image (slightly behind the first one) */}
          <img
            src={offer.secondImg}
            alt="Second Layered Image"
            className="absolute top-[-1.5rem] left-1 md:left-[5.5rem] w-[85%] md:w-3/4 rounded-lg shadow-lg opacity-70 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Apply;