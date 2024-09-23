import React from 'react';

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row bg-black text-green-400 py-12">
            {/* Left Side: Image */}
            <div className="flex items-center justify-center mb-8 md:mb-0 md:w-[50%]">
                <div className="w-[90%] md:w-[600px]">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2Fcominmgsoon.png?alt=media&token=f1a16a11-6a9c-4bf6-8740-4624cf0d8a1b"
                        alt="Coming Soon"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-2xl"
                    />
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 space-y-6">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 animate-pulse ">
                    COMING SOON...
                </h1>
                <p className="text-lg md:text-xl text-green-500">
                    Exciting content is on the way! Stay tuned.
                </p>

                {/* Schedule or Additional Content */}
                <div className="bg-white text-black p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-2 text-green-500">
                        Upcoming Schedule
                    </h2>
                    <p className="text-lg mb-2">
                        We are working on something awesome for you. Stay tuned for updates!
                    </p>
                    <p className="text-lg font-bold">
                        December 1st, 2024 - December 10th, 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
