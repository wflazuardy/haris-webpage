import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const GalleryTestimonials: React.FC = () => {

    // Using placeholder images that look like cleaning scenarios
    const galleryImages = [
        "https://images.unsplash.com/photo-1527513913470-4e598ccd9698?q=80&w=800&auto=format&fit=crop", // Living room
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Bathroom wash
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop", // Kitchen
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"  // Bedroom
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

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="rounded-xl overflow-hidden shadow-md h-48 md:h-64 cursor-pointer"
                            >
                                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
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
