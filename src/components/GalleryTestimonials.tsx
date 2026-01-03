import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const GalleryTestimonials: React.FC = () => {

    // Using real proof of work images
    const galleryImages = [
        `${import.meta.env.BASE_URL}assets/bukti_01.jpg`,
        `${import.meta.env.BASE_URL}assets/bukti_02.jpg`
    ];

    const testimonials = [
        {
            name: "Budi Santoso",
            role: "Warga Surabaya Barat",
            text: "Sangat puas dengan layanan deep cleaningnya. Kamar mandi yang tadinya berkerak jadi kinclong lagi seperti baru! Recommended banget.",
            rating: 5
        },
        {
            name: "Sarah Wijaya",
            role: "Owner Apartemen Puncak",
            text: "Timnya datang tepat waktu, sopan, dan kerjanya cepat tapi detail. Apartemen saya jadi wangi dan bersih total sebelum disewakan.",
            rating: 5
        },
        {
            name: "Ibu Hartini",
            role: "Warga Surabaya Timur",
            text: "Harga sangat terjangkau untuk kualitas sebagus ini. Mas-masnya juga ramah dan nurut kalau diminta bersihkan bagian tertentu.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Gallery Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3">Galeri Pekerjaan</h2>
                        <h3 className="text-3xl font-bold text-gray-900">Bukti Nyata Kebersihan</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl overflow-hidden shadow-lg aspect-[9/16] md:aspect-[3/4] relative group"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery Evidence ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-bold tracking-wide">Hasil Pekerjaan Terbaik</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3">Apa Kata Mereka?</h2>
                        <h3 className="text-3xl font-bold text-gray-900">Kepercayaan Pelanggan Adalah Prioritas</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testi, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
                                <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
                                <div className="flex gap-1 mb-4 text-yellow-400">
                                    {[...Array(testi.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                                </div>
                                <p className="text-gray-600 mb-6 italic relative z-10 flex-grow">"{testi.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                                        {testi.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900">{testi.name}</h5>
                                        <p className="text-xs text-gray-500">{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GalleryTestimonials;
