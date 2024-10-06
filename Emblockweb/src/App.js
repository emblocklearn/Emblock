import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhyEmblock from './Components/WhyEmblock';
import OfferSection from './Components/OfferSection';
import ApplyNow from './Components/Apply';
import Quotes from './Components/Quotes';
import Footer from './Components/Footer';
import ComingSoon from './Components/ComingSoon';
import FrontendForm from './Components/FrontendForm'; // FrontendForm component
import Checkout from './Components/Checkout'; // Checkout component
import Slider from './Components/Slider';
import FaqSection from './Components/FaqSection';
import Table from './Components/Table';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {offerItems} from './Components/Data'
import Steps from './Components/Steps';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Default Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />

                <ComingSoon />
                <WhyEmblock />
                <Steps/>
                <div id='offer' className='bg-gray-100 mt-6'>
                <OfferSection offerItems={offerItems } />
                </div>
                <div className='bg-gray-100 mt-6'>  
                <Slider />
                </div>
              
                
                <Quotes />
                <div className='bg-blue-100  mt-6'> 
                <FaqSection />
                </div>

                <Footer />
      
              
              </>
            } 
          />

          {/* FrontendForm Page */}
          <Route path="/frontend-form" element={<FrontendForm />} />

          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="/admin" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
