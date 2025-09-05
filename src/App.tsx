import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import KeyHighlights from './components/KeyHighlights';
import FloorPlans from './components/FloorPlans';
import PricingPlans from './components/PricingPlans';
import VideoWalkthrough from './components/VideoWalkthrough';
import BlogInsights from './components/BlogInsights';
import AboutDeveloper from './components/AboutDeveloper';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy'; // ✅ import

function App(): JSX.Element {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="min-h-screen">
            <Hero />
            <Gallery />
            <KeyHighlights />
            <FloorPlans />
            <PricingPlans />
            <VideoWalkthrough />
            <BlogInsights />
            <AboutDeveloper />
            <ContactSection />
            <Footer />
          </div>
        }
      />

      {/* Privacy Policy Page */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
