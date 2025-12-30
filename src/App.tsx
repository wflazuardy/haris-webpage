// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import GalleryTestimonials from './components/GalleryTestimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <GalleryTestimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
