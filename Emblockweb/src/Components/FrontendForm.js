import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import bground from '../assets/formbg.png';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

const FrontendForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {}; // Access the title from the state
  const [loading, setLoading] = useState(false); // Loading state

  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    houseNo: '',
    streetName: '',
    pincode: '',
    state: '',
    district: '',
    college: '',
    degree: '',
    Department: '',
    Batch: '',
    xMark: '',
    xiiMark: '',
    currentCGPA: '',
    languages: '',
    careerGoal: '',
    internship: '',
    referral: '',
    domain: '',
    tools: '',
    rating: 5,
    linkedIn: '',
    github: '',
    interest: '',
    otherDomain: '',
    paymentDetails: [
      {
        orderId: '',
        paymentStatus: false,
        invoiceId: '',
        invoiceUrl: '',
      }
    ],

  });

  const [errors, setErrors] = useState({});

  const handleBackClick = () => {
    navigate('/');
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address"
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: ""
        }));
      }
    }

    // Validate Department
    if (name === "Department") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Department: "Department is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Department: "",
        }));
      }
    }

    // Validate Batch and should be greater than 2020
    if (name === "Batch") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Batch: "Batch is required",
        }));
      } else if (value < 2020) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Batch: "Batch should be greater than 2020",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          Batch: "",
        }));
      }
    }





    // Validate xMark
    if (name === "xMark") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xMark: "X Mark is required",
        }));
      } else if (value < 0 || value > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xMark: "X Mark should be between 0 and 100",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xMark: "",
        }));
      }
    }

    // Validate xiiMark
    if (name === "xiiMark") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xiiMark: "XII Mark is required",
        }));
      } else if (value < 0 || value > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xiiMark: "XII Mark should be between 0 and 100",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          xiiMark: "",
        }));
      }
    }

    // Validate currentCGPA and value should be between 0 and 10
    if (name === "currentCGPA") {
      if (!value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          currentCGPA: "Current CGPA is required",
        }));
      } else if (value < 0 || value > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          currentCGPA: "Current CGPA should be between 0 and 10",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          currentCGPA: "",
        }));
      }
    }
  };




  const handleProceedClick = async () => {
    const newErrors = {};
  
    // List of required fields to validate
    const requiredFields = ['fullName', 'contactNumber', 'college', 'degree', 'email', 'Department', 'Batch', 'xMark', 'xiiMark', 'currentCGPA'];
  
    // Check if each required field is filled and valid
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = `Please fill the ${field} field.`;
      }
    });
  
    // If there are any errors, stop the form submission and display errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fill all the required fields correctly.");
      return;
    }
  
    try {
      // Show the loading spinner
      setLoading(true);

      // Create a new document in Firestore with the email as the document ID
      const docRef = doc(db, "Users", formData.email);
      await setDoc(docRef, {
        ...formData,
        course: title || 'Unknown Course',
        timestamp: new Date(),
      });
  
      // Use formData.email as the document ID since we are using it as the docRef
      const docId = formData.email;

      // Navigate to checkout page with user data and document ID
      navigate('/checkout', { state: { name: formData.fullName, email: formData.email, title: title, docId: docId } });
      toast.success('Form submitted successfully');
    } catch (error) {
      console.error('Error storing form data:', error.message); // Log the error message
      toast.error('Failed to submit form');
      alert('Failed to submit form: ' + error.message); // Show detailed error to user
    } finally {
      // Hide the loading spinner after the operation is complete
      setLoading(false);
    }
  };

  



  return (
    <div className="py-4  pb-12 min-h-screen flex justify-center items-center bg-white relative">
      <ToastContainer />

      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-11/12 max-w-4xl relative z-10"

      >
        <button
          className="absolute top-1 left-1 md:top-6 md:left-3 bg-green-500 text-white p-2 rounded-full flex text-black items-center hover:bg-green-600"
          onClick={handleBackClick}

        >
          <FaArrowLeft />
        </button>

        <h1 className="text-3xl font-bold mb-4 text-center">{title || 'Apply for the Course'}</h1>

        <form className="space-y-6 text-black">
          <div className="col-span-2">
            <h2 className="font-semibold text-green-500 text-xl">Personal Information</h2>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium">House No./Block No.</label>
              <input
                type="text"
                name="houseNo"
                value={formData.houseNo}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.houseNo && <p className="text-red-500 text-sm">{errors.houseNo}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">Street Name</label>
              <input
                type="text"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.streetName && <p className="text-red-500 text-sm">{errors.streetName}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled selected hidden>
                  Select a State
                </option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">District</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled selected hidden>
                  Select a District
                </option>
                <option>Ariyalur</option>
                <option>Chengalpattu</option>
                <option>Chennai</option>
                <option>Coimbatore</option>
                <option>Cuddalore</option>
                <option>Dharmapuri</option>
                <option>Dindigul</option>
                <option>Erode</option>
                <option>Kallakurichi</option>
                <option>Kancheepuram</option>
                <option>Karur</option>
                <option>Krishnagiri</option>
                <option>Madurai</option>
                <option>Mayiladuthurai</option>
                <option>Nagapattinam</option>
                <option>Namakkal</option>
                <option>Nilgiris</option>
                <option>Perambalur</option>
                <option>Pudukkottai</option>
                <option>Ramanathapuram</option>
                <option>Ranipet</option>
                <option>Salem</option>
                <option>Sivaganga</option>
                <option>Tenkasi</option>
                <option>Thanjavur</option>
                <option>Theni</option>
                <option>Thoothukudi</option>
                <option>Tiruchirappalli</option>
                <option>Tirunelveli</option>
                <option>Tirupattur</option>
                <option>Tiruppur</option>
                <option>Tiruvallur</option>
                <option>Tiruvannamalai</option>
                <option>Tiruvarur</option>
                <option>Vellore</option>
                <option>Viluppuram</option>
                <option>Virudhunagar</option>
              </select>
              {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-8">
            <div className="col-span-2">
              <h2 className="font-semibold text-green-500 text-xl">Education</h2>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.college && <p className="text-red-500 text-sm">{errors.college}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Degree</label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled selected hidden>
                  Select a degree
                </option>
                <option>Bachelor of Arts (BA)</option>
                <option>Bachelor of Science (BSc)</option>
                <option>Bachelor of Commerce (BCom)</option>
                <option>Bachelor of Business Administration (BBA)</option>
                <option>Bachelor of Computer Applications (BCA)</option>
                <option>Bachelor of Technology (BTech)</option>
                <option>Bachelor of Engineering (BE)</option>
                <option>Bachelor of Medicine and Bachelor of Surgery (MBBS)</option>
                <option>Bachelor of Dental Surgery (BDS)</option>
                <option>Bachelor of Pharmacy (BPharm)</option>
                <option>Bachelor of Science in Nursing (BSc Nursing)</option>
                <option>Bachelor of Architecture (BArch)</option>
                <option>Bachelor of Education (BEd)</option>
                <option>Bachelor of Fine Arts (BFA)</option>
                <option>Bachelor of Design (BDes)</option>
                <option>Bachelor of Hotel Management (BHM)</option>
                <option>Bachelor of Social Work (BSW)</option>
                <option>Bachelor of Physiotherapy (BPT)</option>
                <option>Bachelor of Veterinary Science (BVSc)</option>
                <option>Bachelor of Law (LLB)</option>
                <option>Bachelor of Science in Agriculture (BSc Agriculture)</option>
                <option>Bachelor of Journalism and Mass Communication (BJMC)</option>
                <option>Bachelor of Aviation (BAviation)</option>
                <option>Bachelor of Home Science (BHS)</option>
                <option>Bachelor of Library Science (BLibSc)</option>
                <option>Bachelor of Physical Education (BPEd)</option>



              </select>
              {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Department</label>
              <input
                type="text"
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.Department && <p className="text-red-500 text-sm">{errors.Department}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Batch</label>
              <input
                type="number"
                name="Batch"
                value={formData.Batch}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.Batch && <p className="text-red-500 text-sm">{errors.Batch}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">X Mark in %</label>
              <input
                type="number"
                name="xMark"
                max="100"
                value={formData.xMark}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.xMark && <p className="text-red-500 text-sm">{errors.xMark}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">XII Mark in %</label>
              <input
                type="number"
                name="xiiMark"
                min="0"
                max="100"
                value={formData.xiiMark}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />

              {errors.xiiMark && <p className="text-red-500 text-sm">{errors.xiiMark}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Current CGPA</label>
              <input
                type="number"
                name="currentCGPA"
                max="10"
                value={formData.currentCGPA}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.currentCGPA && <p className="text-red-500 text-sm">{errors.currentCGPA}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full">
              <label className="block text-sm font-medium">Languages/Softwares Known</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">Career Goal</label>
              <input
                type="text"
                name="careerGoal"
                value={formData.careerGoal}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.careerGoal && <p className="text-red-500 text-sm">{errors.careerGoal}</p>}
            </div>
           

            <div className="w-full">
            {/* Dropdown Select for Domains */}
            <label className="block text-sm font-medium">Have you worked/are you interested in any other domains?</label>
            <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-lg p-2"
            >
                <option value="">Select a domain</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Photoshop">Photoshop</option>
                <option value="Copywriting / Script writing">Copywriting / Script writing</option>
                <option value="Social media management">Social media management</option>
                <option value="Others">Others</option>
            </select>

            {/* Conditionally Render Input Field for "Others" */}
            {formData.domain === 'Others' && (
                <input
                    type="text"
                    name="otherDomain"
                    placeholder="Please specify"
                    value={formData.otherDomain}
                    onChange={handleChange}
                    className="mt-2 block w-full border border-gray-300 rounded-lg p-2"
                />
            )}
        </div>

            <div className="w-full">
              {/* Interest in Domain */}
              <label className="block text-sm font-medium mb-2">Explain why it is your interest</label>
              <input
                type="text"
                name="interest"
                placeholder="Why are you interested in this domain?"
                value={formData.interest}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />

      
            </div>

            <div className="w-full">
                {/* Tools Expertise */}
                <label className="block text-sm font-medium mb-2">Tools you are experienced in</label>
              <textarea
                name="tools"
                placeholder="Mention any tools you are experienced in"
                value={formData.tools}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 h-24"
              ></textarea>

            </div>
            <div className="w-full">
               {/* Rate Expertise */}
               <div className="">
                <label className="block text-sm font-medium mb-2">Rate your expertise (1-10)</label>
                <input
                  type="range"
                  name="rating"
                  min="1"
                  max="10"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">Rating: {formData.rating}/10</p>
              </div>
            </div>




            <div className="w-full">
              <label className="block text-sm font-medium">Internships (If Any) or put NA</label>
              <input
                type="text"
                name="internship"
                value={formData.internship}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.internship && <p className="text-red-500 text-sm">{errors.internship}</p>}
            </div>


             {/* LinkedIn Profile Link */}
             <div className="w-full">
                <label className="block text-sm font-medium">LinkedIn Profile Link</label>
                <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/your-profile"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                />
                {errors.linkedIn && <p className="text-red-500 text-sm">{errors.linkedIn}</p>}
            </div>

            {/* GitHub Profile Link */}
            <div className="w-full">
                <label className="block text-sm font-medium">GitHub Profile Link</label>
                <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/your-username"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                />
                {errors.github && <p className="text-red-500 text-sm">{errors.github}</p>}
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium">How Did You Hear About Us?</label>
              <select
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled selected hidden>Select an option</option>
                <option>Google Search</option>
                <option>Social Media (Facebook, Instagram, etc.)</option>
                <option>Friends or Family</option>
                <option>Online Ads</option>
                <option>Television</option>
                <option>Radio</option>
                <option>Newspaper or Magazine</option>
                <option>Event or Conference</option>
                <option>Word of Mouth</option>
                <option>Email Newsletter</option>
                <option>Billboard</option>
                <option>Referral from a Partner</option>
                <option>Blog or Website</option>
                <option>YouTube</option>
                <option>Other</option>
              </select>
              {errors.referral && <p className="text-red-500 text-sm">{errors.referral}</p>}
            </div>
          </div>




          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handleProceedClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Proceed
            </button>
          </div>
        </form>
        {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <ClipLoader color="#22c55e" size={70} loading={loading} />
        </div>
      )}
      </div>
    </div>
  );
};

export default FrontendForm;