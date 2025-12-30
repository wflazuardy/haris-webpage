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
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        {/* Logo Placeholder - Using Real Profile Pic */}
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-blue">
                            <img
                                src="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/450813695_873320847972935_1083183847106525733_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QEsn1iaAqO7Ys6wxbs5FzINDR9dhRBsvyFSB5tsk-AGCen2cFE1w2c0ORdkqTyJ_RM&_nc_ohc=wBr8YKJ2jE4Q7kNvwEAmCXf&_nc_gid=zaIn6D4Dvo77Xp5ZMbNPHg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfnD2FlThd9KBVQK0R56t35j3E7rF1zy-LAPBupMOvm4lA&oe=695930AD&_nc_sid=8b3546"
                                alt="HARIS"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-gray-900 leading-none">HARIS</span>
                            <span className="text-xs text-brand-blue font-medium tracking-wider">HARAPAN ISTANA</span>
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
