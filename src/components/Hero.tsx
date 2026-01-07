import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { ArrowRight, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';

const Hero: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <section id="hero" className={`relative pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="z-10"
                    >
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-green/10 text-brand-green font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                            <CheckCircle size={14} className="mr-1.5 sm:mr-2 flex-shrink-0" />
                            <span className="whitespace-nowrap">Jasa Cleaning Service No.1 di Surabaya</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                            Deep Cleaning Profesional <span className="text-brand-blue">Bersih Maksimal,</span> Harga Bersahabat.
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                            Rumah bersih, sehat, dan nyaman dengan tenaga ahli tersertifikasi. Melayani pembersihan rumah, apartemen, hingga taman di seluruh Surabaya.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/6285730249491?text=Halo%20Haris,%20saya%20ingin%20tanya%20layanan%20cleaning%20service."
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-xl text-white bg-brand-green hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/40"
                            >
                                Konsultasi Gratis
                                <ArrowRight className="ml-2" size={18} />
                            </a>
                            <button
                                onClick={() => {
                                    scroller.scrollTo('services', {
                                        duration: 800,
                                        delay: 0,
                                        smooth: 'easeInOutQuart',
                                        offset: -80,
                                    });
                                }}
                                className="flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-xl text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-all cursor-pointer"
                            >
                                Lihat Layanan
                            </button>
                        </div>

                        <div className="mt-6 sm:mt-10 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 font-medium">
                            <div className="flex bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-sm text-brand-blue">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <div className="text-gray-900 font-bold text-base">100% Garansi Kepuasan</div>
                                <div className="text-gray-500 font-medium">
                                    Bersih ulang <span className="text-brand-green font-bold">GRATIS</span> jika tidak puas
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            {/* Hero Image Placeholder - Using a clean interior shot */}
                            <div className="aspect-[4/3] bg-gray-200 w-full relative group">
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/hero.jpg`}
                                    alt="Cleaning Service Harapan Istana"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-brand-blue p-3 rounded-full text-white">
                                    <MapPin fill="currentColor" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Area Layanan</p>
                                    <p className="font-bold text-gray-900 text-lg">Surabaya Raya</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background blob - softened glow effect */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-brand-blue/[0.02] rounded-full blur-2xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
