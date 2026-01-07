import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import GalleryTestimonials from '../components/GalleryTestimonials';
import bgImage from '../components/haris_bg.png';

const Staging: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }}
        >
            <div id="home">
                <Hero className="!bg-white/85 backdrop-blur-md shadow-sm" />
            </div>
            <div id="layanan">
                <Services className="!bg-white/85 backdrop-blur-md shadow-sm" />
            </div>
            <div id="keunggulan">
                <WhyUs className="!bg-brand-blue/90 backdrop-blur-md shadow-sm" />
            </div>
            <div id="testimoni">
                <GalleryTestimonials className="!bg-white/85 backdrop-blur-md shadow-sm" />
            </div>
        </div>
    );
};

export default Staging;
