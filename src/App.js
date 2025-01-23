import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import MakePayment from "./pages/MakePayment";
import Track from "./pages/Track";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Admin from "./Admin/Admin";
import Navbar from "./components/Navbar";
import Painting from "./pages/Painting";

function App() {
  const [isHomeLoading, setIsHomeLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Ensure Navbar always displays after initial load or route change
    if (location.pathname !== "/") {
      setIsHomeLoading(false);
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Always render the Navbar if loading is complete or not on Home */}
          {!isHomeLoading && <Navbar />}
          <main className="flex-grow">
            <Routes>
              {/* Main Routes */}
              <Route
                path="/"
                element={<Home setIsHomeLoading={setIsHomeLoading} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/painting" element={<Painting />} />
              <Route path="/payment" element={<MakePayment />} />
              <Route path="/track" element={<Track />} />
              <Route path="/contact" element={<ContactUs />} />

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
