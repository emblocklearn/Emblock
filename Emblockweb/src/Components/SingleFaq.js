import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";




const SingleFaq = ({ question, response }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    const handleShow = () => {
      setIsOpen(!isOpen);
      setIsActive(!isActive);
    };
  
    return (
      <div className="bg-gray-800 p-4 border rounded-lg">
        <div
          className={`accordion flex justify-between items-center cursor-pointer border-b pb-2 ${
            isActive ? "text-primary" : ""
          }`}
          onClick={handleShow}
        >
          <h1 className="text-md font-bold md:text-lg">{question}</h1>
          {isOpen ? <BiMinus /> : <BiPlus />}
        </div>
        <p
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 p-2" : "max-h-0"
          }`}
        >
          {response}
        </p>
      </div>
    );
  };


export default SingleFaq;