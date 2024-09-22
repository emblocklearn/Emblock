import React from 'react';
import Slider from 'react-slick';
import { testimonials } from './Data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
   


    dots: false, // Hide the dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    arrows: true, // Add navigation arrows
    autoplay: true,
    autoplaySpeed: 2000,
     //add breakpoints for responsive design
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false
        },
      },
    ],
  };



  return (
    <div className="bg-black text-white pb-12 p-2 md:px-8">
        <h1 className="text-xl text-center py-6  md:text-3xl font-bold text-white md:text-4xl">
            What Our Students Say
        </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-2">
            <div className="h-full md:h-64 bg-gray-800 p-6 flex flex-col justify-between rounded-lg">
              <p className="text-base mb-4">{testimonial.content}</p>
              <div className="text-sm text-left">
                <span className="font-bold text-green-500">{testimonial.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
