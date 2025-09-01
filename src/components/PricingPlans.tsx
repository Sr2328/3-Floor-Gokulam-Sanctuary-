import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CreditCard } from 'lucide-react';
import ContactModal from './ContactModal';

const PricingPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Flexi Payment Plan (Based on 1.45 Cr)
  const flexiPlan = [
    { stage: 'Booking Amount', percentage: '-', amount: '₹5,00,000' },
    { stage: 'Within 45 days of booking', percentage: '30% (Less Booking)', amount: '₹38,50,000' },
    { stage: 'On Super Structure', percentage: '30%', amount: '₹43,50,000' },
    { stage: 'On Application of OC', percentage: '30%', amount: '₹43,50,000' },
    { stage: 'On Offer of Possession', percentage: '10%', amount: '₹14,50,000' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gokulam – Flexi Payment Plan
          </h2>
          <p className="text-xl text-gray-300">
            Convenient and transparent payment schedule designed for your ease
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 rounded-2xl text-black h-fit shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Exclusive Starting Price</h3>
              <div className="text-5xl font-bold mb-6">₹1.45 Cr*</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check size={20} />
                  <span>Spacious 3BHK Luxury Floors</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} />
                  <span>World-Class Amenities & Lifestyle</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} />
                  <span>Prime Location in Sohna</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} />
                  <span>Possession-Ready Residences</span>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard size={20} />
                Get Detailed Pricing
              </button>
            </div>
          </motion.div>

          {/* Flexi Payment Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Flexi Payment Schedule</h3>

              {/* Payment Schedule */}
              <div className="space-y-4">
                {flexiPlan.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/10 rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-white">{item.stage}</h4>
                      <p className="text-sm text-gray-300">{item.percentage}</p>
                    </div>
                    <div className="text-xl font-bold text-yellow-400">{item.amount}</div>
                  </motion.div>
                ))}
              </div>

              {/* Offer Box */}
              <div className="mt-8 p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                <p className="text-yellow-400 font-medium mb-2">💡 Limited Period Offer</p>
                <p className="text-gray-300">
                  Enjoy early-bird discounts and attractive EMI options for a stress-free investment experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type="payment"
        />
      </div>
    </section>
  );
};

export default PricingPlans;
