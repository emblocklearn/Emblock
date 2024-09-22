import React from 'react';


const ComingSoon = () => {
    return (
        <div className="py-8 flex flex-col items-center md:flex-row bg-black text-green-500">
            {/* Left Side: Image */}
            <div className="flex items-center justify-center">
                <div className="w-full md:w-[600px]" >
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/project-emblock.appspot.com/o/assests%2FScreenshot_2024-09-21_175532-removebg-preview.png?alt=media&token=73a2ab37-30e8-4113-a4a8-4d690370a772'
                    alt="Coming Soon"
                    className="w-full h-full"
                />
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">COMING SOON...</h1>
                <p className="text-lg mb-4">Stay tuned for updates!</p>
                
                {/* Schedule or Additional Content */}
                <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-2">Upcoming Schedule</h2>
                    <ul className="list-disc list-inside">
                        <li>Event 1 - Date</li>
                        <li>Event 2 - Date</li>
                        <li>Event 3 - Date</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
