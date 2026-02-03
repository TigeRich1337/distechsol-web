import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PartnersCarousel from './components/PartnersCarousel';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
