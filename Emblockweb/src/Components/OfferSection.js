import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import UiUxDesign from './Apply'; // Import UiUxDesign component

const OfferSection = ({ offerItems = [] }) => {
  console.log('Offer Items:', offerItems); // Check if the offerItems prop is received correctly
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

      <div className={`pt-10 px-6 md:px-16 bg-white ${showUiUxDesign ? 'blur-sm' : ''}`}>
        <h2 className="text-[24px] md:text-[40px] font-bold text-gray-900 mb-8 lg:mb-12 text-center">
          What we offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(offerItems) && offerItems.length > 0 ? (
            offerItems.map((item, index) => (
              <div className="text-center group relative overflow-hidden" key={index}>
                <div className="relative group">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-60 md:h-72 object-cover transition-transform duration-300 ease-in-out scale-105"
                  />
                  <div className="absolute inset-[-5px] bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 opacity-100 transition-opacity duration-300 ease-in-out">
                    <p className="text-white text-lg lg:text-xl font-bold mb-2 transition-transform transform -translate-y-10">
                      {item.title}
                    </p>
                    <p className="text-white text-sm lg:text-lg px-4 transition-opacity duration-300 ease-in-out opacity-0 opacity-100">
                      {item.description}
                    </p>
                  </div>
                  <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-10 h-10 bg-green-600 text-white rounded-full bg-green-400 flex justify-center items-center transition duration-300 ease-in-out opacity-0 opacity-100"
                    onClick={() => handleClick(item)}
                  >
                    <FaArrowRight style={{ color: 'black' }} />
                  </button>
                </div>
                <p className="mt-4 text-[17px] md:text-[20px] font-semibold text-gray-800 transition-transform duration-300 ease-in-out ">
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