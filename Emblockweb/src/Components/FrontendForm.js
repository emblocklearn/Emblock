import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from 'react-router-dom';
import bground from '../assets/formbg.png';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const FrontendForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {};

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
    referral: ''
  });

  const [errors, setErrors] = useState({});

  const handleBackClick = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "Department" && !value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Department: "Department is required",
      }));
    } else if (name === "Batch" && !value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Batch: "Batch is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleProceedClick = async () => {
    const newErrors = {};
  
    // Check for empty fields
    for (let key in formData) {
      if (!formData[key]) {
        newErrors[key] =` Please fill the ${key} field.`;
      }
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill all the required fields.');
      return;
    }
  
    try {
      await setDoc(doc(db, "Users", formData.email), {
        ...formData,
        course: title || 'Unknown Course',
        timestamp: new Date(),
      });
  
      // Show toast on successful submission
      toast.success('Form submitted successfully!');
      navigate('/checkout');
    } catch (error) {
      console.error('Error storing form data:', error);
      toast.error('Failed to submit form.');
    }
  };
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-white relative">
      <ToastContainer /> {/* Toast Container for showing toasts */}
      
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-11/12 max-w-4xl relative z-10"
        style={{
          backgroundImage: `url(${bground})`,
          backgroundSize: "500px 500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          className="absolute top-4 md:left-[-7px] bg-green-500 text-white p-2 rounded-full flex text-black items-center hover:bg-green-600"
          onClick={handleBackClick}
          style={{ left: "35px", top: "30px", transform: "translateX(-50%)" }} // Center the button horizontally
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
    <label className="block text-sm font-medium">Internships (If Any)</label>
    <input
      type="text"
      name="internship"
      value={formData.internship}
      onChange={handleChange}
      className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
    />
    {errors.internship && <p className="text-red-500 text-sm">{errors.internship}</p>}
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
      </div>
    </div>
  );
};

export default FrontendForm;