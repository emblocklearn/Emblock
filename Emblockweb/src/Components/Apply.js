// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Apply = ({ offer, onClose }) => {
//   const navigate = useNavigate();

//   const handleApply = () => {
//     navigate('/frontend-form'); // Redirect to the form or appropriate page
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-between items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-[66rem] mx-auto">
//       {/* Close Button */}
//       <div className="absolute top-2 right-2">
//         <button
//           className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-700"
//           onClick={onClose}
//         >
//           <span className="text-black text-2xl">X</span>
//         </button>
//       </div>

//       {/* Content Section */}
//       <div className="w-full md:w-[154%] flex flex-col items-center md:items-start">
//         {/* Title and Learning Objectives */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-green-600 text-center md:text-left">{offer.title}</h1>

//           <div className="mt-4 space-y-4">
//             <h2 className="text-xl font-bold text-black text-center md:text-left">What you'll learn</h2>

//             <ul className="list-none text-gray-700 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-between">
//               {/* Left column */}
//               <div className="flex flex-col space-y-4 w-full md:w-1/2">
//                 <li className="relative pl-8">
//                   <span className="absolute left-[9px] top-[30%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
//                  {offer.applydesc1}
//                 </li>
//                 <li className="relative pl-8">
//                   <span className="absolute left-[9px] top-[20%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
//                 {offer.applydesc2}
//                 </li>
//               </div>

//               {/* Right column */}
//               <div className="flex flex-col space-y-4 w-full md:w-1/2">
//                 <li className="relative pl-8">
//                   <span className="absolute left-[9px] top-[30%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
//                   {offer.applydesc3}
//                 </li>
//                 <li className="relative pl-8">
//                   <span className="absolute left-[9px] top-[20%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
//                  {offer.applydesc4}
//                 </li>
//               </div>
//             </ul>
//           </div>
//         </div>

//         {/* Internship Includes */}
//         <div className="mt-6 flex flex-col mr-[118px] md:text-left">
//           <h2 className="text-xl font-bold text-black">This internship includes</h2>
//           <div className="w-[120%] flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-gray-700 mt-2">
//             <p><span className="text-sm">👨‍🏫 Mentorship by Industry Experts</span></p>
//             <p><span className="text-sm">📚 Access to Exclusive Resources and Materials</span></p>
//             <p><span className="text-sm">🌐 Networking Opportunities with Professionals</span></p>
//             <p><span className="text-sm">📝 Certificate of Completion</span></p>
//           </div>
//         </div>

//         {/* Apply Now Button */}
//         <div className="mt-6 flex justify-center">
//           <button
//             className="bg-green-600 text-white text-lg px-8 py-2 rounded-lg hover:bg-green-700"
//             onClick={handleApply}
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-[60%] flex flex-col items-center md:items-end mt-8 md:mt-0">
//         <div className="relative flex flex-col items-center">
//           {/* First Image */}
//           <img
//             src={offer.imgSrc}
//             alt="UI/UX Design Tools"
//             className="w-[85%] md:w-[78%] rounded-lg shadow-lg relative z-20"
//           />

//           {/* Second Image (slightly behind the first one) */}
//           <img
//             src={offer.secondImg} // Make sure offer.secondImg is defined
//             alt="Second Layered Image"
//             className="absolute top-[-1.5rem] left-[1rem] md:left-[5.5rem] w-[85%] md:w-3/4 rounded-lg shadow-lg opacity-70 z-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Apply;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Apply = ({ offer, onClose }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    // Pass the title as state to the FrontendForm component
    navigate('/frontend-form', { state: { title: offer.title } });
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-[66rem] mx-auto">
      {/* Close Button */}
      <div className="absolute top-2 right-2">
        <button
          className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-700"
          onClick={onClose}
        >
          <span className="text-black text-2xl">X</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[154%] flex flex-col items-center md:items-start">
        {/* Title and Learning Objectives */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-green-600 text-center md:text-left">{offer.title}</h1>

          <div className="mt-4 space-y-4">
            <h2 className="text-xl font-bold text-black text-center md:text-left">What you'll learn</h2>

            <ul className="list-none text-gray-700 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-between">
              {/* Left column */}
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <li className="relative pl-8">
                  <span className="absolute left-[9px] top-[30%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc1}
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-[9px] top-[20%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc2}
                </li>
              </div>

              {/* Right column */}
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <li className="relative pl-8">
                  <span className="absolute left-[9px] top-[30%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc3}
                </li>
                <li className="relative pl-8">
                  <span className="absolute left-[9px] top-[20%] transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-green-600"></span>
                  {offer.applydesc4}
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Internship Includes */}
        <div className="mt-6 flex flex-col mr-[118px] md:text-left">
          <h2 className="text-xl font-bold text-black">This internship includes</h2>
          <div className="w-[120%] flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-gray-700 mt-2">
            <p><span className="text-sm">👨‍🏫 Mentorship by Industry Experts</span></p>
            <p><span className="text-sm">📚 Access to Exclusive Resources and Materials</span></p>
            <p><span className="text-sm">🌐 Networking Opportunities with Professionals</span></p>
            <p><span className="text-sm">📝 Certificate of Completion</span></p>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="bg-green-600 text-white text-lg px-8 py-2 rounded-lg hover:bg-green-700"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[60%] flex flex-col items-center md:items-end mt-8 md:mt-0">
        <div className="relative flex flex-col items-center">
          {/* First Image */}
          <img
            src={offer.imgSrc}
            alt="UI/UX Design Tools"
            className="w-[85%] md:w-[78%] rounded-lg shadow-lg relative z-20"
          />

          {/* Second Image (slightly behind the first one) */}
          <img
            src={offer.secondImg} // Make sure offer.secondImg is defined
            alt="Second Layered Image"
            className="absolute top-[-1.5rem] left-[1rem] md:left-[5.5rem] w-[85%] md:w-3/4 rounded-lg shadow-lg opacity-70 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Apply;