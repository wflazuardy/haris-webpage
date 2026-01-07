import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Home, Building2, Shovel } from 'lucide-react';

const Services: React.FC<{ className?: string }> = ({ className = "" }) => {
    // ... items ...
    const services = [
        {
            icon: <Home size={40} />,
            title: "Deep Cleaning Rumah",
            description: "Pembersihan menyeluruh untuk setiap sudut rumah Anda. Debu, noda, dan kotoran tak kasat mata akan kami hilangkan.",
            color: "bg-blue-100 text-brand-blue"
        },
        {
            icon: <Shovel size={40} />,
            title: "Pembersihan Taman",
            description: "Kembalikan keasrian area luar rumah Anda. Kami membersihkan daun kering, gulma, dan merapikan tanaman.",
            color: "bg-green-100 text-brand-green"
        },
        {
            icon: <Building2 size={40} />,
            title: "Cleaning Apartemen",
            description: "Solusi praktis untuk hunian vertikal. Cepat, efisien, dan tetap detail membersihkan unit apartemen Anda.",
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            icon: <Sparkles size={40} />,
            title: "Layanan Khusus",
            description: "Hydro-vacuum untuk kasur/sofa atau pembersihan total pasca-renovasi agar siap huni.",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section id="services" className={`py-20 bg-white ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3">Layanan Kami</h2>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Solusi Kebersihan Terlengkap</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan kebersihan yang dapat disesuaikan dengan kebutuhan hunian Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
                        >
                            <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
