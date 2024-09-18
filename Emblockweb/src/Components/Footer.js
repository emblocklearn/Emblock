import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/emblocklogo.png';  // Ensure the path and filename are correct
import { IoMdCall } from "react-icons/io";
const Footer = () => {

  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modal) => {
    setOpenModal(modal);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };
  return (
    <footer className="bg-black text-white pt-14  px-8 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Logo and Title Section */}
        <div className="flex flex-col md:flex-col items-center md:items-start  mb-6 md:mb-0">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Emblock Logo" className="h-12 w-12" />
            <h2 className="text-xl font-bold ml-4">Emblock</h2>
          </div>
          <div>
            <p className="text-center md:text-left text-[15px]">
              Welcome to EMBLOCK – your catalyst for business transformation. We fuse technology,<br />
              innovation, and expertise to drive your success.
            </p>
          </div>
        </div>

        {/* Contact and Social Media Section */}
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4">
            <a href="tel:+919952311408" className="hover:text-gray-300 flex items-center"> <IoMdCall className="text-green-500 mr-2" />+91 99523 11408</a>
            <a href="mailto:contact@emblock.in" className="hover:text-gray-300">✉ contact@emblock.in</a>
          </div>
          <div className="flex flex-row space-x-4 md:space-x-6 items-center ">
            <p className="text-green-500">Follow us on:</p>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2 text-[12px] md:text-[15px] ">
        <p className='text-center  '>© Copyright EMBLOCK. All Rights Reserved</p>


        <div className="flex items-center gap-4 pb-6">
          <button

            className="text-green-500 ml-4 hover:text-green-600"
            onClick={() => handleOpenModal("terms")}
          >
            Terms & Conditions
          </button>
          <button
            className="text-green-500 hover:text-green-600"
            onClick={() => handleOpenModal("return")}
          >
            Return Policy
          </button>
          <button

            className="text-green-500 hover:text-green-600"
            onClick={() => handleOpenModal("refund")}
          >
            Cancellation and Refund Policy
          </button>
        </div>

        {/* Modal for Terms & Conditions */}
        {openModal === "terms" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md "
              onClick={handleCloseModal}
            >
              Close
            </button>
            <div className="bg-white border border-4 border-green-500 text-black px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2 ">

              <h2 className="text-[12px] text-center font-semibold">Terms & Conditions</h2>
              <div className=" font-semibold mb-4" >
                <ul className="list-disc pl-5 flex flex-col items-start" >
                  <li>This document is an electronic record in terms of the Information Technology Act, 2000 and relevant amendments. It does not require physical or digital signatures.</li>
                  <li>Published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, which requires publishing the rules and regulations, privacy policy, and Terms of Use for the domain [Enter domain name] (“Website”), including mobile site and mobile application (“Platform”).</li>
                  <li>The Platform is owned by [Enter name of the company], with its registered office at [Enter Address] (referred to as "Platform Owner", “we”, “us”, “our”).</li>
                  <li>Your use of the Platform and its services are governed by the following terms and conditions ("Terms of Use"), including applicable policies. By using the Platform, you contract with the Platform Owner, and these terms constitute your binding obligations.</li>
                  <li>These Terms of Use relate to your use of our website, goods, or services (collectively, “Services”). Any terms proposed by you that conflict with these Terms are expressly rejected.</li>
                  <li>These Terms can be modified at any time without notice. It is your responsibility to periodically review them to stay informed of updates.</li>
                  <li>"You", "your", or "user" refers to any natural or legal person who has agreed to use the Platform.</li>
                  <li>ACCESSING, BROWSING, OR USING THE PLATFORM INDICATES YOUR AGREEMENT TO THESE TERMS, SO PLEASE READ CAREFULLY BEFORE PROCEEDING.</li>
                  <li>You agree to provide accurate information during registration and are responsible for all actions done through your registered account on the Platform.</li>
                  <li>Neither we nor any third parties provide warranties or guarantees regarding the accuracy, timeliness, or completeness of the information and materials on the Platform.</li>
                  <li>Your use of the Services is at your own risk, and we shall not be liable for any consequences.</li>
                  <li>The contents of the Platform and Services are proprietary to us. You do not hold any intellectual property rights to the content.</li>
                  <li>Unauthorized use of the Platform and/or Services may result in action against you as per these Terms or applicable laws.</li>
                  <li>You agree to pay for the Services and not use the Platform for any unlawful or illegal purposes.</li>
                  <li>Our Platform may contain links to third-party websites. When accessing these, you are governed by the terms and policies of those websites.</li>
                  <li>When initiating a transaction on the Platform, you are entering into a legally binding contract with the Platform Owner.</li>
                  <li>You agree to indemnify and hold the Platform Owner harmless from any third-party claims due to your breach of these Terms.</li>
                  <li>The Platform Owner will not be liable for any indirect, consequential, or punitive damages arising from your use of the Services.</li>
                  <li>Liability will not exceed the amount paid by you for using the Services or Rs. 100, whichever is less.</li>
                  <li>Performance of obligations may be delayed or prevented by a force majeure event.</li>
                  <li>These Terms are governed by the laws of India, and disputes will be subject to the jurisdiction of courts in [Enter City and State].</li>
                  <li>Concerns regarding these Terms must be communicated using the contact information provided on the website.</li>
                </ul>
              </div>


            </div>
          </div>
        )}

        {/* Modal for Return Policy */}
        {openModal === "return" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md "
              onClick={handleCloseModal}
            >
              Close
            </button>
            <div className="bg-white border border-4 border-green-500 text-black px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2">
              <h2 className="text-lg text-center font-semibold mb-4">Return Policy</h2>
              <div className=" font-semibold mb-4">
                <ul className="list-disc pl-5 flex flex-col items-start">
                  <li>We offer a refund or exchange within [X] days from the date of purchase. After [X] days, returns, exchanges, or refunds will not be accepted.</li>
                  <li>To be eligible for a return or exchange:
                    <ul className="list-disc pl-5">
                      <li>The purchased item must be unused and in the same condition as you received it.</li>
                      <li>The item must have the original packaging.</li>
                      <li>If the item was purchased on sale, it may not be eligible for return or exchange.</li>
                      <li>Items are only replaced if they are defective or damaged, based on an exchange request.</li>
                    </ul>
                  </li>
                  <li>To place a return or exchange request for an eligible product/item, send us an email at [X].</li>
                  <li>Certain categories of products/items may be exempt from returns or refunds. Such categories will be identified to you at the time of purchase.</li>
                  <li>For accepted return/exchange requests:
                    <ul className="list-disc pl-5">
                      <li>Once we receive and inspect your returned product/item, we will email you to notify you of its receipt.</li>
                      <li>If approved after quality check, your return or exchange request will be processed in accordance with our policies.</li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* Modal for Cancellation and Refund Policy */}
        {openModal === "refund" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md "
              onClick={handleCloseModal}
            >
              Close
            </button>
            <div className="bg-white text-black  border border-4 border-green-500 rounded-lg shadow-lg px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2">
              <h2 className="text-lg text-center font-semibold mb-4">Cancellation and Refund Policy</h2>
              <div className="text-black font-semibold mb-4 flex flex-col items-start">
                <ul className="list-disc pl-5">
                  <li>This cancellation policy outlines how you can cancel or seek a refund for a product/service purchased through the Platform.</li>
                  <li>Cancellations will only be considered if the request is made within [X] days of placing the order.</li>
                  <li>Cancellation requests may not be entertained if:
                    <ul className="list-disc pl-5">
                      <li>The orders have been communicated to the seller/merchant listed on the Platform.</li>
                      <li>The shipping process has been initiated.</li>
                      <li>The product is out for delivery. In such cases, you may reject the product at the doorstep.</li>
                    </ul>
                  </li>
                  <li>[X] does not accept cancellation requests for perishable items such as flowers, eatables, etc. However, a refund or replacement can be processed if the user establishes that the product quality delivered is substandard.</li>
                  <li>For damaged or defective items, report the issue to our customer service team. The request will be processed once the seller/merchant verifies the claim. This should be reported within [X] days of receiving the product.</li>
                  <li>If the product received does not match the description or your expectations, inform customer service within [X] days of receipt. Our team will review the complaint and take appropriate action.</li>
                  <li>For products that come with a manufacturer warranty, please refer the issue to the manufacturer.</li>
                  <li>If [X] approves a refund, it will take [X] days for the refund to be processed.</li>
                </ul>
              </div>



            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;