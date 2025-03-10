import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar';
import Painting from './pages/Painting';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
 

  return (
    <div className="overflow-x-hidden">
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Conditionally render Navbar */}
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route path="/about" element={<About />} />
              <Route path="/painting" element={<Painting />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsofservice" element={<TermsOfService />} />

              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
