import React, { useState } from 'react';
// import ig from '../assets/ig.jpg';
import carousel from '../assets/carousel.png'
import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'

// Assuming you have images for each quote and author
const quotes = [
    {
        text: carousel,
        author: "Author 1",
        image:carousel
    },
    {
        text: carousel1,
        author: "Author 2",
        image: carousel1
    },
    {
        text: 'https://firebasestorage.googleapis.com/v0/b/emblock-3a756.appspot.com/o/1.jpg?alt=media&token=502b5818-4ef6-423a-916c-93d4ed7276d6',
        author: "Author 3",
        image: 'https://firebasestorage.googleapis.com/v0/b/emblock-3a756.appspot.com/o/1.jpg?alt=media&token=502b5818-4ef6-423a-916c-93d4ed7276d6'
    },
    // Add more quotes as needed
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCircleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col bg-white items-center ">
            {/* Title */}
            <h1 className=" mt-6  text-[28px] md:text-[40px] text-black font-bold mb-4 relative md :left-[-550px] ">
                Words of <span className="text-green-500 italic">Wisdom !!</span>
            </h1>

            <div className="w-[70%] flex flex-col items-center">
                {/* Image Container */}
                <div className="w-full flex justify-center mb-6">
                    
                </div>

                {/* Quote Image */}
                <div className="w-full flex justify-center mb-2 ">
                    <img
                        src={quotes[currentIndex].text}
                        alt="Quote Text"
                        className="w-full h-[100px] md:h-auto "
                    />
                </div>

                
            </div>

            {/* Circle Icons for Navigation */}
            <div className="flex space-x-3 p-4 mt-6">
                {quotes.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleCircleClick(index)}
                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full  ${currentIndex === index ? 'bg-green-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;