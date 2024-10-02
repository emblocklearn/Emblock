import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import UiUxDesign from './Apply'; // Import UiUxDesign component

const OfferSection = ({ offerItems = [] }) => {

  const [showUiUxDesign, setShowUiUxDesign] = useState(false);
  const [activeOffer, setActiveOffer] = useState(null);

  const handleClick = (offer) => {
    setShowUiUxDesign(true);
    setActiveOffer(offer);
  };

  const handleCloseUiUxDesign = () => {
    setShowUiUxDesign(false);
    setActiveOffer(null);
  };

  return (
    <div className="relative">
        {showUiUxDesign && activeOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <UiUxDesign offer={activeOffer} onClose={handleCloseUiUxDesign} />
        </div>
      )}

      <div className={`flex flex-col items-center gap-4 px-6 py-12 md:px-16 bg-black ${showUiUxDesign ? 'blur-sm' : ''}  `}>
        <h2 className="text-[24px] text-white md:text-[40px] font-bold text-gray-900 mb-8 lg:mb-12 text-center">
        Enroll for Courses now, Check what we offer
        </h2>
        <div className="w-full p-2  bg-white grid grid-cols-1 gap-6 md:grid-cols-2 md:w-2/3 md:p-6">
          {Array.isArray(offerItems) && offerItems.length > 0 ? (
            offerItems.map((item, index) => (
              <div   onClick={() => handleClick(item)} className="text-center cursor-pointer group relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out" key={index}>
                <div className="relative group">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-300 ease-in-out scale-105"
                  />
                  <div className="px-2 absolute inset-[-10px] bg-black bg-opacity-70 flex flex-col items-center justify-center  transition-opacity duration-300 ease-in-out">
                    <p className="text-white text-lg lg:text-xl font-bold mb-2 transition-transform transform -translate-y-10">
                      {item.title}
                    </p>
                    <p className="text-white text-sm lg:text-lg px-4 transition-opacity duration-300 ease-in-out opacity-0 opacity-100">
                      {item.description}
                    </p>
                  </div>
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-10 h-10 bg-green-600 text-white rounded-full bg-green-400 flex justify-center items-center transition duration-300 ease-in-out opacity-80 hover:opacity-100"
                  
                  >
                    <FaArrowRight style={{ color: 'black' }} />
                  </button>
                </div>
                <p className="mt-4 text-gray-600 text-[17px] md:text-[20px] font-semibold  transition-transform duration-300 ease-in-out ">
                  {item.title}
                </p>
              </div>
            ))
          ) : (
            <p>No offers available at the moment.</p>
          )}
        </div>
      </div>
      {/* Your existing code */}
    </div>
  );
};
 export default OfferSection;