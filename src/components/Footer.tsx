import React from 'react';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                                <img
                                    src="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/450813695_873320847972935_1083183847106525733_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QEsn1iaAqO7Ys6wxbs5FzINDR9dhRBsvyFSB5tsk-AGCen2cFE1w2c0ORdkqTyJ_RM&_nc_ohc=wBr8YKJ2jE4Q7kNvwEAmCXf&_nc_gid=zaIn6D4Dvo77Xp5ZMbNPHg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfnD2FlThd9KBVQK0R56t35j3E7rF1zy-LAPBupMOvm4lA&oe=695930AD&_nc_sid=8b3546"
                                    alt="HARIS"
                                    className="w-full h-full object-cover"
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
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Layanan Kami</a></li>
                            <li><a href="#why-us" className="hover:text-white transition-colors">Keunggulan</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
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
