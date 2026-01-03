import React, { useEffect } from 'react';
import { Shield, Award, Heart, UserCheck, Smile } from 'lucide-react';

const AboutUs: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white pt-20">
            {/* Page Header */}
            <div className="bg-brand-blue text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
                    <p className="text-xl text-blue-100 italic">"Mewujudkan Kenyamanan Istana di Hunian Anda"</p>
                </div>
            </div>

            {/* Business Description */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-brand-green pl-4">
                        Profil Bisnis
                    </h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            <strong>Harapan Istana (HARIS)</strong> adalah penyedia layanan kebersihan profesional yang lahir dari filosofi bahwa setiap rumah adalah istana bagi penghuninya. Layanan kami hadir sebagai solusi bagi masyarakat perkotaan dengan mobilitas tinggi yang mendambakan hunian yang bersih, sehat, dan nyaman.
                        </p>
                        <p>
                            Kami memahami bahwa rumah bukan sekadar bangunan, melainkan tempat bernaung yang paling berharga. Oleh karena itu, HARIS mengedepankan ketelitian (detail-oriented), kepercayaan (trustworthy), dan privasi dalam setiap jengkal pekerjaan kami. Dengan standar layanan premium namun tetap terjangkau, kami berkomitmen untuk memberikan pengalaman tinggal di "istana" bagi setiap pelanggan kami.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision & Mission */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Menjadi standar utama layanan kebersihan hunian di Indonesia yang menghadirkan kemewahan kenyamanan dan kebersihan layaknya istana bagi setiap keluarga.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-brand-green/10 rounded-full text-brand-green">
                                    <Shield size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="h-2 w-2 bg-brand-green rounded-full mt-2 shrink-0" />
                                    <span className="text-gray-600">
                                        <strong>Keamanan & Kepercayaan:</strong> Menjamin keamanan properti dan privasi pelanggan melalui tenaga kerja yang jujur, amanah, dan berintegritas tinggi.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="h-2 w-2 bg-brand-green rounded-full mt-2 shrink-0" />
                                    <span className="text-gray-600">
                                        <strong>Kualitas Tanpa Kompromi:</strong> Mengutamakan ketelitian dan kehati-hatian dalam setiap proses pembersihan untuk hasil yang higienis dan tertata rapi.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="h-2 w-2 bg-brand-green rounded-full mt-2 shrink-0" />
                                    <span className="text-gray-600">
                                        <strong>Kepuasan Pelanggan:</strong> Menempatkan pelanggan sebagai prioritas utama (Customer is King) dengan layanan yang responsif dan terbuka terhadap masukan.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="h-2 w-2 bg-brand-green rounded-full mt-2 shrink-0" />
                                    <span className="text-gray-600">
                                        <strong>Profesionalisme Layanan:</strong> Menerapkan standar etika kerja "Senyum, Salam, Sapa" serta ketepatan waktu dalam setiap pelayanan.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai Inti (Core Values)</h2>
                        <p className="text-xl text-brand-blue font-semibold">The HARIS Way</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <ValueCard
                            letter="H"
                            title="Honesty"
                            desc="Jujur dalam bekerja dan menjaga amanah."
                            color="bg-blue-50 text-blue-600"
                        />
                        <ValueCard
                            letter="A"
                            title="Accountability"
                            desc="Bertanggung jawab penuh atas kualitas hasil kerja."
                            color="bg-green-50 text-green-600"
                        />
                        <ValueCard
                            letter="R"
                            title="Respect"
                            desc="Menghormati privasi dan aturan rumah tangga pelanggan."
                            color="bg-yellow-50 text-yellow-600"
                        />
                        <ValueCard
                            letter="I"
                            title="Integrity"
                            desc="Konsisten dalam memberikan pelayanan terbaik."
                            color="bg-purple-50 text-purple-600"
                        />
                        <ValueCard
                            letter="S"
                            title="Sincerity"
                            desc="Melayani dengan tulus hati untuk menciptakan kenyamanan."
                            color="bg-pink-50 text-pink-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ValueCard: React.FC<{ letter: string; title: string; desc: string; color: string }> = ({ letter, title, desc, color }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group">
        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4 ${color} group-hover:scale-110 transition-transform`}>
            {letter}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);

export default AboutUs;
