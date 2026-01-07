import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "6285730249491"; // Real number from Instagram
    const message = encodeURIComponent("Halo Haris Clean Surabaya, saya ingin menanyakan informasi untuk layanan cleaning service.");
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <MessageCircle size={32} />
        </motion.a>
    );
};

export default WhatsAppButton;
