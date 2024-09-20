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
            onClick={() => handleOpenModal("privacy")}
          >
            Privacy Policy
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
            <div className="mx-4 bg-white border border-4 border-green-500 text-black px-4 md:px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2 ">

              <h1 className="text-[12px] text-center font-extrabold">Terms and Conditions for EmBlock Workshop</h1>
              <div className="mb-4" >
                <p class="notice"><strong>This document is an electronic record in terms of the Information Technology Act, 2000 and relevant amendments. It does not require physical or digital signatures.</strong></p>
                <ul className="list-disc pl-5 flex flex-col items-start" >





                  <li><strong>Published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, which requires publishing the rules and regulations, privacy policy, and Terms of Use for the domain emblock.in ("Website"), including mobile site and mobile application ("Platform").</strong></li>

                  <li><strong>The Platform is owned by EmBlock, with its registered office at [23 a ramadoss salai nehru nagar neveli Cuddalore-607308] (referred to as "EmBlock", "we", "us", "our").</strong></li>

                  <li><strong>Your use of the Platform and its services, including the workshop, are governed by the following terms and conditions ("Terms of Use"). By using the Platform or registering for the workshop, you contract with EmBlock, and these terms constitute your binding obligations.</strong></li>

                  <li class="highlight"><strong>The workshop fee is 1000 INR and is strictly non-refundable. No cancellations are allowed under any circumstances. By registering for the workshop, you acknowledge and agree to this no-refund, no-cancellation policy.</strong></li>

                  <li><strong>These Terms of Use relate to your use of our website and workshop services (collectively, "Services"). Any terms proposed by you that conflict with these Terms are expressly rejected.</strong></li>

                  <li><strong>These Terms can be modified at any time without notice. It is your responsibility to periodically review them to stay informed of updates.</strong></li>

                  <li><strong>"You", "your", or "user" refers to any natural or legal person who has agreed to use the Platform or register for the workshop.</strong></li>

                  <li><strong>ACCESSING, BROWSING, OR USING THE PLATFORM, OR REGISTERING FOR THE WORKSHOP INDICATES YOUR AGREEMENT TO THESE TERMS, SO PLEASE READ CAREFULLY BEFORE PROCEEDING.</strong></li>

                  <li><strong>You agree to provide accurate information during registration and are responsible for all actions done through your registered account on the Platform.</strong></li>

                  <li><strong>Your use of the Services is at your own risk, and we shall not be liable for any consequences.</strong></li>

                  <li><strong>The contents of the Platform, Services, and workshop materials are proprietary to EmBlock. You do not hold any intellectual property rights to the content.</strong></li>

                  <li><strong>Unauthorized use of the Platform, Services, or workshop materials may result in action against you as per these Terms or applicable laws.</strong></li>

                  <li><strong>You agree to pay for the workshop and not use the Platform for any unlawful or illegal purposes.</strong></li>

                  <li><strong>When registering for the workshop on the Platform, you are entering into a legally binding contract with EmBlock.</strong></li>

                  <li><strong>You agree to indemnify and hold EmBlock harmless from any third-party claims due to your breach of these Terms.</strong></li>

                  <li><strong>EmBlock will not be liable for any indirect, consequential, or punitive damages arising from your use of the Services or participation in the workshop.</strong></li>

                  <li><strong>Liability will not exceed the amount paid by you for the workshop or Rs. 100, whichever is less.</strong></li>

                  <li><strong>Performance of obligations may be delayed or prevented by a force majeure event.</strong></li>

                  <li><strong>These Terms are governed by the laws of India, and disputes will be subject to the jurisdiction of courts in [Cuddalore, TamilNadu].</strong></li>

                  <li><strong>Concerns regarding these Terms must be communicated using the contact information provided on the website.</strong></li>

                </ul>
              </div>


            </div>
          </div>
        )}

        {/* Modal for Return Policy */}
        {openModal === "privacy" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md "
              onClick={handleCloseModal}
            >
              Close
            </button>
            <div className="mx-4 bg-white border border-4 border-green-500 text-black px-4 md:px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2">
              <h2 className="text-lg text-center font-extrabold mb-4">EmBlock Workshop Privacy Policy</h2>
              <div className="mb-4">
                <ul className="list-disc pl-5 flex flex-col items-start">


                  <p>Last updated: [19/09/2024]</p>

                  <p>EmBlock ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you participate in our workshop or use our website at emblock.in ("Site").</p>

                  <h2>1. Information We Collect</h2>
                  <ul>
                    <li><strong>Personal Information:</strong> When you register for our workshop, we may collect your name, email address, phone number, and payment information.</li>
                    <li><strong>Usage Data:</strong> We may collect information on how you interact with our Site, including IP address, browser type, pages visited, and time spent on pages.</li>
                  </ul>

                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Process your workshop registration and payment</li>
                    <li>Communicate with you about the workshop</li>
                    <li>Improve our services and Site</li>
                    <li>Send you promotional emails about future workshops</li>
                  </ul>

                  <h2>3. Information Sharing and Disclosure</h2>
                  <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
                  <ul>
                    <li>Service providers who assist us in operating our business</li>
                    <li>Law enforcement or other governmental officials, in response to a verified request</li>
                  </ul>

                  <h2>4. Data Security</h2>
                  <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

                  <h2>5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of your personal information</li>
                    <li>Request deletion of your personal information, subject to any legal obligations we may have</li>
                  </ul>

                  <h2>6. Cookies and Similar Technologies</h2>
                  <p>We use cookies and similar tracking technologies to collect information about your browsing activities on our Site. You can set your browser to refuse all or some browser cookies.</p>

                  <h2>7. Changes to This Privacy Policy</h2>
                  <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

                  <h2>8. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p>[23 a ramadoss salai nehru nagar neveli Cuddalore-607308, Ph: +91 99523 11408]</p>

                </ul>

              </div>

            </div>
          </div>
        )
        }


      </div >
    </footer >
  );
};

export default Footer;