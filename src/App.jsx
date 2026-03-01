import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import UtilityBar from './components/layout/UtilityBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAvailability = () => {
    if (location.pathname === '/') {
      document.getElementById('availability-checker')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('availability-checker')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <UtilityBar />
      <Navbar onCheckAvailability={scrollToAvailability} />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <MobileBottomBar onCheckAvailability={scrollToAvailability} />
    </div>
  );
}
