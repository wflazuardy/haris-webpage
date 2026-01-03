import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'Layanan', to: 'services' },
        { name: 'Keunggulan', to: 'why-us' },
        { name: 'Testimoni', to: 'testimonials' },
    ];

    return (
        <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        {/* CSS Crop for Padded Logo: Container h-20, Image h-56 centered */}
                        <div className="relative h-20 w-64 overflow-hidden flex items-center">
                            <img
                                src="/assets/HARIS - Long Logo.png"
                                alt="HARIS - Harapan Istana Cleaning Service"
                                className="absolute h-56 w-auto max-w-none object-contain"
                                style={{ top: '50%', transform: 'translateY(-50%)', left: '-10%' }}
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                className="text-gray-600 hover:text-brand-blue cursor-pointer font-medium transition-colors"
                                offset={-80}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/6285730249491"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                        >
                            Pesan Sekarang
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                                offset={-80}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <a href="#contact" className="block w-full text-center bg-brand-blue text-white px-6 py-3 rounded-lg font-bold">
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
