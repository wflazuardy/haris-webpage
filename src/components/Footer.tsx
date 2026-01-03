import { useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFooterNav = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-16 w-16 overflow-hidden flex items-center justify-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/HARIS - Logo.png`}
                                    alt="HARIS"
                                    className="absolute h-40 w-40 max-w-none object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-wider">HARIS</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Solusi cleaning service profesional di Surabaya. Kami hadir untuk menciptakan lingkungan yang bersih, sehat, dan nyaman untuk keluarga Anda.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/harapanistana" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://wa.me/6285730249491" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigasi</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><button onClick={(e) => handleFooterNav(e, 'home')} className="hover:text-white transition-colors text-left">Home</button></li>
                            <li><button onClick={(e) => handleFooterNav(e, 'services')} className="hover:text-white transition-colors text-left">Layanan Kami</button></li>
                            <li><button onClick={(e) => handleFooterNav(e, 'why-us')} className="hover:text-white transition-colors text-left">Keunggulan</button></li>
                            <li><button onClick={(e) => handleFooterNav(e, 'testimonials')} className="hover:text-white transition-colors text-left">Testimoni</button></li>
                            <li><button onClick={() => { navigate('/tentang-kami'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Tentang Kami</button></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Layanan</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>Deep Cleaning Rumah</li>
                            <li>Pembersihan Taman</li>
                            <li>Cleaning Apartemen</li>
                            <li>Hydro Vacuum</li>
                            <li>Poles Lantai</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3">
                                <Phone size={18} className="text-brand-blue shrink-0" />
                                <span>+62 857-3024-9491 (WhatsApp)</span>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-4 h-4 rounded-full bg-green-500 shrink-0 mt-1"></div>
                                <span>Melayani seluruh area Surabaya (Barat, Timur, Utara, Selatan, Pusat)</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Harapan Istana Cleaning Service. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
