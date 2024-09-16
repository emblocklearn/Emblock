import { React, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import embeddedSystemsImage from '../assets/backendimg.png'; // Ensure the image path is correct4
import html2pdf from 'html2pdf.js';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from './firebase'; // Import storage and db

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const { name, email, title, docId } = location.state || {}; // Get name and email from state
  console.log("name", name, email, title, docId);

  const handleCloseClick = () => {
    navigate('/frontend-form');
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const generateInvoice = async (response, amount) => {
    setLoading(true);
    try {
      const invoiceHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <script src="https://cdn.tailwindcss.com"></script>
         <style>
          .invoice-container {
            margin-top: ; /100px* 
          }
         
        </style>
      </head>
      <body class="bg-gray-100 invoice-container">
        <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
          <div class="flex justify-center bg-green-500">
            <div class="py-4 text-center">
             <img class="w-24 h-24 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPKSURBVHgB7VnJTxNRHP5mmEJVVBTERuVE4kKCmJC4cRASDiTqSQxL2QSNcOKv4CQXuWiUpTEgJHCAgiF4IGAxwgEwtUaUsEgAWUrCUmzpMuN7ryxG1j4GKInfYfqWduZ7v72/EcLDwxX4MaampgSJDsTYEAjXwqDAj/j+WIBsmmJDRlKIOQNN5kUogv+QlJrGsGia9o7pRYBMCNJP/4HM2MhsLOIQQNpoUSaH0FDNK4pXvAq7eDfVnlM9CqLX1BRl5yQ1iwpsT1oJW9F7L2YHywO151SlggDts5sQzh/dOUl6ImXMgfDQM0hKSkJrayvGx8exV2Dyc8mb7m9pk4WFhSguLkZRURE57MG51ZYkBwYGMDs7C7PZDFmWcVCQtto0GAyoqKhg44OUpLTdFw6S3Aq2JckDhTje7Vs3cf5CBBx2Ozo+dhCzmQMvVA/mAQEByMjQIybmKoaGhqAJlJCf/xShoaHghaokRVFEeloaDXsoKzegu7sb9fVGdHZ24XFeLjdRVUkmJz+Ax+NGZWUVXC4XW6Oqb2//APMXC27cuA5wVFqq2SQNUTRkWSwW/FuqUKI0lEVEXABPGbNrklTFcXFxiIqKYkSXlpzLRNcQFBSEW8SR2traGWFfI8auSGo0GqSlpUIbFIiWlhYEBwfj/r27CCTO0tPzefUQGXo9hgYH0dvbyxXSuElSgqkpKXC73TDU1ECrPYLh4WFYrdPIyc7B2NgvpuIMfTrsDjsam5qYFHnA5TiSJDEJyoqMuto6HD9+AgUF+dDpdJiYmMTzkhLMzc1BTwjabDbUVNeQw3jAC58lSaXxMDkZHrcLVW+rQR3BarXiXVMjcnMfEbW/h50E8ISEBMyQ9VpyCJlTgtwkY2Njcfp0CF6XlmPFU6mdWb5+w5LDhfj4O3C5nSxGdnV1cat4VyQjIyPRTZzC6XSu2xse+Ynv/f0wmUyqkFuBzzZJbU2nO7v+RsSLs7IyiZRPqV7W+Uyys/MTrly+hMTExNU1rVaLnJxs2BYWYDQaVa+cfFb3/PwCXrx8hTziJCEnT2DaOoPo6GiMjo6gocEIFbW8Cq4QRONfaVk5ftsdCAsLI7m5nRUSe0GQgjuYU9tsbm5m9rfXhfGuqiCePMyDQ9HB+E9SLWzcCxIFCOe0pIbeh3+KNCKQROARlU29eGOSR0Qcq0qkDUHsNZazP3nS5llK2viHCuus7QeU1evmDzxMjuNPPd71YOp2m2fgedPnR2194rh9ax0Pgb4iEUnm8BCZivLfHVhgva3s31whmUwgHeHJ6UnhD2jbkOiUWO+UAAAAAElFTkSuQmCC" alt="Emblock Logo">
                <p>Emblock Learn</p>
              <h3 class="font-bold text-3xl mb-[10px]">Thank You!</h3>
            </div>
          </div>

          <div class="px-6 py-2  text-center">
            <h2 class="text-xl text-black font-semibold">Hey ${name}!</h2>
            <p class="text-sm text-gray-500">Thank you for being a part of Emblock Learn</p>
            <h3 class="text-lg text-black font-bold mt-4">Invoice Number: ${response.razorpay_order_id}</h3>
          </div>

          <div class="px-6 py-4 border-t-2 border-dashed border-gray-600">
            <h4 class="text-gray-500 font-semibold">Payment Information</h4>
            <div class="flex text-black justify-between mt-2">
              <div>
                <p class="text-sm font-medium">Bill To:</p>
                <p>${email}</p>
              </div>
              <div>
                <p class="text-sm font-medium">Order Date:</p>
                <p>${new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div class="flex justify-between mt-2">
              <div>
                <p class="text-gray-500 text-sm font-medium">Order ID:</p>
                <p class="text-black">${response.razorpay_order_id}</p>
              </div>
              <div>
                <p class="text-gray-500 text-sm font-medium">Source:</p>
                <p class="font-bold text-black">Emblock Learn</p>
              </div>
            </div>
          </div>

          <div class="px-6 pb-4">
            <h4 class="text-gray-500 font-semibold">Order Detail</h4>
            <div class=" text-black flex justify-between mt-2">
              <p class="text-sm font-medium">Description</p>
              <p class="text-sm font-medium">Name</p>
              <p class="text-sm font-medium">Price</p>
            </div>
            <div class=" text-black flex justify-between font-bold  mt-2">
              <p>Internship</p>
              <p>${title}</p>
              <p>${amount / 100} INR</p>
            </div>

            <div class="border-t-2 border-dashed border-gray-600 mt-2"></div>

            <div class="flex justify-end mt-4 font-semibold">
              <p>Total: class="text-gray-500" <span class="text-black font-bold ml-4">${amount / 100} INR</span></p>
            </div>

            <div class="border-b-2 border-dashed border-gray-600 mt-4"></div>
          </div>

          <div class="px-6 py-4 text-sm ">
            <p class="text-gray-500 text-center">Please retain this receipt for your records.</p>
            <p class="mt-2 text-black text-center">
              Emblock learn purchases are not refunded after payment. See 
              <a href="#" class="text-blue-500 underline">refund policy</a> for more information.
            </p>
          </div>

          <div class="py-6 bg-gray-100 text-white text-center">
            <p class="font-semibold text-blue-600 text-sm">
              Need Help? 
              <a href="mailto:support.learn@emblock.in" class="text-blue-600">support.learn@emblock.in</a>
            </p>
            <div class="text-black text-sm">
              <p>@ Copyright <span class="font-semibold">EMBLOCK.</span>  All Rights Reserved</p>
            </div>
            <p class="text-sm mt-2 text-black">
              <a href="#" class="font-medium text-lg text-blue-600">Terms of Service</a> | 
              <a href="#" class="font-medium text-lg text-blue-600">Privacy Policy</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

      // Convert HTML to PDF
      const element = document.createElement('div');
      element.innerHTML = invoiceHtml;

      const pdfBlob = await html2pdf().from(element).outputPdf('blob');
      const pdfRef = ref(storage, `invoices/${email + response.razorpay_order_id}.pdf`);
      await uploadBytes(pdfRef, pdfBlob);
      const pdfUrl = await getDownloadURL(pdfRef);

      return pdfUrl;
    } catch (error) {
      console.error('Error generating or uploading invoice:', error);
      throw error;
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  const updatePaymentDetails = async (docId, response, amount, invoiceUrl) => {
    const userDocRef = doc(db, 'Users', docId); // Use docId to locate the document

    // Payment details to be added
    const paymentDetails = {
      orderId: response.razorpay_order_id,
      paymentStatus: true, // Assuming payment is successful
      invoiceId: response.razorpay_order_id,
      invoiceUrl: invoiceUrl,
    };

    try {
      await updateDoc(userDocRef, {
        paymentDetails: [paymentDetails] // Adding paymentDetails array
      });
      console.log('Payment details updated successfully');
    } catch (error) {
      console.error('Error updating payment details:', error);
    }
  };


  const handlePayment = async () => {
    if (!isChecked) {
      // Optionally show a message or highlight the checkbox
      alert("You must agree to the Terms & Conditions before proceeding.");
      return;
    }


    const { name, email, title, docId } = location.state || {}; // Extract docId from state

    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false); // Hide spinner
      return;
    }

    try {
      const data = await fetch('http://localhost:5000/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000 }),
      });

      if (!data.ok) {
        throw new Error(`Server error: ${data.statusText}`);
      }

      const jsonData = await data.json();

      const options = {
        key: 'rzp_test_7B8acwKj7CrvtI',
        amount: jsonData.order.amount,
        currency: jsonData.order.currency,
        name: 'Emblock Learn',
        description: 'Test Transaction',
        image: 'https://yourcompany.com/logo.png',
        order_id: jsonData.order.id,
        handler: async function (response) {
          try {
            const verifyResponse = await fetch('http://localhost:5000/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email: email,
              }),
            });

            if (!verifyResponse.ok) {
              throw new Error(`Server error: ${verifyResponse.statusText}`);
            }

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              const invoiceUrl = await generateInvoice(response, jsonData.order.amount);
              await updatePaymentDetails(docId, response, jsonData.order.amount, invoiceUrl);
              console.log('payment url', invoiceUrl);
              const newTab = window.open(invoiceUrl, '_blank'); // Updated line
              if (newTab) {
                newTab.focus(); // Focus on the new tab
              } else {
                alert('Please allow popups for this website'); // Alert if popup is blocked
              }
              navigate('/'); // Redirect to home page
              alert('Payment Successful and Invoice Generated!');
            } else {
              alert('Payment verification failed.');
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Payment verification error.');
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: '9999999999',
        },
        notes: {
          address: 'Corporate Office',
        },
        theme: {
          color: '#F37254',
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal closed');
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Payment processing error.');

    }
    finally {
      setLoading(false);
    }
  };


  const handleOpenModal = () => setOpenModal("terms");
  const handleCloseModal = () => setOpenModal(null);









  return (
    <div className="bg-gray-100 p-4 md:p-10">
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50 ${loading ? '' : 'hidden'}`}>
        <div className="w-16 h-16 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
      </div>
      <div className="max-w-full md:max-w-6xl mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-row md:flex-row items-center justify-between p-4 md:p-6 border-b border-gray-200">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Checkout</h1>
          <button
            onClick={handleCloseClick}
            className="bg-green-500 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center hover:bg-green-700"
          >
            <span className="text-black text-lg md:text-2xl">X</span>
          </button>
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#28b463] mb-4">{title}</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={embeddedSystemsImage}
              alt="Embedded Systems"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">This internship includes</h3>
              <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex items-center mb-4 md:w-1/2">
                  <i className="fas fa-chalkboard-teacher text-lg md:text-xl mr-2"></i>
                  <span>Mentorship by Industry Experts</span>
                </div>
                <div className="flex items-center mb-4 md:w-1/2">
                  <i className="fa fa-users text-lg md:text-xl mr-2" aria-hidden="true"></i>
                  <span>Real-Time working exposure</span>
                </div>
                <div className="flex items-center mb-4 md:w-1/2">
                  <i className="fa fa-trophy text-lg md:text-xl mr-2" aria-hidden="true"></i>
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center mb-4 md:w-1/2">
                  <i className="fas fa-file-alt text-lg md:text-xl mr-2"></i>
                  <span>Professionally curated documentation</span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-end mt-4 md:mt-0 md:pl-6">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-dashed bg-gray-400 hidden md:block"></div>
              <p className="text-lg md:text-xl font-semibold">Total Price<i className="fas fa-chevron-down text-sm md:text-base p-1"></i></p>
              <p className="text-xl md:text-3xl font-bold mr-[32px]">₹1000</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-6 md:mt-8">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={handleOpenModal} // Open terms modal first
              >
                Checkout
              </button>
            </div>
            {openModal === "terms" && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <button
                  className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <div className="bg-white border border-4 border-green-500 text-black px-12 py-6 rounded-lg shadow-lg w-full max-h-[80vh] overflow-y-auto md:w-1/2">
                
                  

                    <h2 className="text-lg text-center font-semibold">Terms & Conditions</h2>
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


                  
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="mr-2 w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="agreeTerms" className="text-md">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                      onClick={() => {
                        handleCloseModal(); // Close the modal
                        handlePayment(); // Proceed with payment
                      }}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout;
