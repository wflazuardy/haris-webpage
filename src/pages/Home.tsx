import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import GalleryTestimonials from '../components/GalleryTestimonials';

const Home: React.FC = () => {
    return (
        <>
            <div id="home">
                <Hero />
            </div>
            <div id="layanan">
                <Services />
            </div>
            <div id="keunggulan">
                <WhyUs />
            </div>
            <div id="testimoni">
                <GalleryTestimonials />
            </div>
        </>
    );
};

export default Home;
