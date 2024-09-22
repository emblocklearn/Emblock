import React, { useState, useEffect } from 'react';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import carousel5 from '../assets/carousel5.png';
import carousel6 from '../assets/carousel6.png';

const quotes = [
    { text: carousel1, author: "Author 1", image: carousel1 },
    { text: carousel2, author: "Author 2", image: carousel2 },
    { text: carousel3, author: "Author 3", image: carousel3 },
    { text: carousel4, author: "Author 4", image: carousel4 },
    { text: carousel5, author: "Author 5", image: carousel5 },
    { text: carousel6, author: "Author 6", image: carousel6 },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCircleClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col bg-white items-center ">
            <h1 className=" mt-6  text-[28px] md:text-[40px] text-black font-bold mb-4 relative md :left-[-550px] ">
                Words of <span className="text-green-500 italic">Wisdom !!</span>
            </h1>

            <div className="w-full md:w-[70%] flex flex-col items-center">
                <div className="w-full flex justify-center mb-2 ">
                    <img
                        src={quotes[currentIndex].text}
                        alt="Quote Text"
                        className="w-full h-[150px] md:h-auto "
                    />
                </div>
            </div>

            <div className="flex space-x-3 p-4 mt-6">
                {quotes.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleCircleClick(index)}
                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
