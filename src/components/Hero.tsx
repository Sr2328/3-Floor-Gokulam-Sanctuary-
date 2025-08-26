import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Calendar, CreditCard } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleCTAClick = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90 z-10"></div>
        <img
          src="https://i.postimg.cc/LsxjCwGR/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-001.png?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Living"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Gokulam Sanctuary
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Luxury 3BHK Floors in Sohna
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            South of Gurugram • Premium Living • Modern Amenities
          </p>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400">
            Starting ₹1.5 Crores
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleCTAClick('brochure')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Download size={20} />
            Download Brochure
          </button>
          <button
            onClick={() => handleCTAClick('payment')}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <CreditCard size={20} />
            Get Payment Plan
          </button>
          <button
            onClick={() => handleCTAClick('visit')}
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Calendar size={20} />
            Book a Visit
          </button>
        </motion.div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </section>
  );
};

export default Hero;