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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {offerItems} from './Components/Data'


function App() {
  return (
    <Router>
      <div className="bg-gray-100">
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
                <div id='offer'>
                <OfferSection offerItems={offerItems } />
                </div>
                <div className='bg-black mt-6'>  
                <Slider />
                </div>
              
                
                <Quotes />
                <FaqSection />

                <Footer />
      
              
              </>
            } 
          />

          {/* FrontendForm Page */}
          <Route path="/frontend-form" element={<FrontendForm />} />

          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
