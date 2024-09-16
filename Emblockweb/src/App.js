import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import WhyEmblock from './Components/WhyEmblock';
import OfferSection from './Components/OfferSection';
import ApplyNow from './Components/Apply';
import Quotes from './Components/Quotes';
import Footer from './Components/Footer';
import FrontendForm from './Components/FrontendForm'; // FrontendForm component
import Checkout from './Components/Checkout'; // Checkout component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from './Components/Data'


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
                
                <WhyEmblock />
                <div id='offer'>
                <OfferSection offerItems={data } />
                </div>
                
                <Quotes />
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
