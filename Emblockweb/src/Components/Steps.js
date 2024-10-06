import React from 'react';
import { steps } from './Data';

const Steps = () => {
  return (
    <section className="py-10 bg-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-10">How it works?</h2>

        {/* Container for steps */}
        <div className="relative px-2 md:px-4 ">
          {/* Horizontal connector line for md+ screens */}
          <div className="hidden md:flex md:px-36 justify-between absolute top-6 left-0 right-0 w-full">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="flex-1 h-1 bg-green-500"></div>
            ))}
          </div>

          {/* Steps */}
          <div className="flex flex-col px-2 md:px-4 md:flex-row justify-center space-y-0 md:space-x-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className=" relative z-10 flex flex-col items-center space-y-2 md:space-y-4  md:w-1/5"
              >
                {/* Step Number */}
                <div className="bg-green-500 text-white text-xl font-semibold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {step.id}
                </div>

                {/* Content */}
                <div className="bg-green-100 w-full max-w-md shadow-lg rounded-lg p-2 border-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    {step.title}
                  </h3> 
                  <p className="text-gray-700 font-semibold text-md">{step.description}</p>
                </div>

               
                {index !== steps.length - 1 && (
                  <div className="flex justify-center md:hidden">
                    
                    <div className="w-1 h-12 bg-green-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
