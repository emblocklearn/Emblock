import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { faqs } from "./Data";
import SingleFaq from "./SingleFaq";





const FaqSection = () => {
  return (

    <div className="flex flex-col items-center gap-6 bg-black py-12">
      <h1 className="text-xl md:text-3xl font-bold text-white md:text-4xl">
        Frequently Asked Questions
      </h1>
      <div className="px-3 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-4">



        {faqs.map((faq, index) => (
          <SingleFaq key={index} question={faq.question} response={faq.response} />
        ))}
      </div>

    </div>


  );
};

export default FaqSection;
