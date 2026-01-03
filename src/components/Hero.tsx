import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
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
                            <a
                                href="#services"
                                className="flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold rounded-xl text-gray-700 bg-white border-2 border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-all"
                            >
                                Lihat Layanan
                            </a>
                        </div>

                        <div className="mt-6 sm:mt-10 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 font-medium">
                            <div className="flex -space-x-2 sm:-space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span className="text-brand-blue font-bold">500+</span> Pelanggan Puas
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
                                    src="/assets/hero.jpg"
                                    alt="Cleaning Service Harapan Istana"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-brand-blue p-3 rounded-full text-white">
                                    <Star fill="currentColor" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Rating</p>
                                    <p className="font-bold text-gray-900 text-lg">4.9/5.0</p>
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
