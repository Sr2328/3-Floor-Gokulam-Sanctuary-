import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;