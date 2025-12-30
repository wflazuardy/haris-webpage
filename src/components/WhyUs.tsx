import React from 'react';
import { Award, DollarSign, PenTool, MapPin } from 'lucide-react';

const WhyUs: React.FC = () => {
    const features = [
        {
            icon: <Award className="w-12 h-12 text-white" />,
            title: "Tenaga Bersertifikat",
            description: "Tim kami telah melalui pelatihan intensif dan tersertifikasi profesional."
        },
        {
            icon: <DollarSign className="w-12 h-12 text-white" />,
            title: "Harga Kompetitif",
            description: "Layanan premium dengan harga yang sangat terjangkau bagi warga Surabaya."
        },
        {
            icon: <PenTool className="w-12 h-12 text-white" />,
            title: "Peralatan Lengkap",
            description: "Kami membawa chemical dan peralatan standar industri sendiri."
        },
        {
            icon: <MapPin className="w-12 h-12 text-white" />,
            title: "Seluruh Surabaya",
            description: "Menjangkau Surabaya Barat, Timur, Utara, Selatan, dan Pusat."
        }
    ];

    return (
        <section id="why-us" className="py-20 bg-brand-blue relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="text-white">
                        <h2 className="text-brand-green font-bold tracking-wider uppercase text-sm mb-3">Kenapa Memilih HARIS?</h2>
                        <h3 className="text-4xl font-bold mb-6">Bersih Itu Harus, Profesional Itu Pilihan.</h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Kami tidak sekadar membersihkan, tetapi merawat hunian Anda agar lebih sehat dan nyaman. Kebersihan detail adalah standar kami.
                        </p>
                        <button className="bg-white text-brand-blue px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="mb-4 bg-brand-green/80 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-blue-100 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
