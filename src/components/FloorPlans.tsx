import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import ContactModal from './ContactModal';

const FloorPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  // ✅ Only 2 Floor Plans
  const floorPlans = [
    {
      id: 'plan-a',
      title: 'Plan A – 1450 sq. ft.',
      features: [
        '3 Spacious Bedrooms',
        '2 Modern Bathrooms',
        'Elegant Living & Dining Area',
        'Contemporary Kitchen',
        'Private Balcony with View'
      ],
      image:
        'https://images.pexels.com/photos/8293641/pexels-photo-8293641.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'plan-b',
      title: 'Plan B – 1550 sq. ft.',
      features: [
        '3 Premium Bedrooms',
        '3 Luxurious Bathrooms',
        'Expansive Living Room',
        'Designer Kitchen',
        'Dedicated Study / Work Space'
      ],
      image:
        'https://images.pexels.com/photos/8293649/pexels-photo-8293649.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const handleDownload = (planId: string) => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Floor Plans
          </h2>
          <p className="text-xl text-gray-600">
            Thoughtfully designed 3BHK layouts to suit your lifestyle
          </p>
        </motion.div>

        {/* Grid for Plans */}
        <div className="grid md:grid-cols-2 gap-8">
          {floorPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                      <Eye size={16} />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(plan.id)}
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors"
                    >
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {plan.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleDownload(plan.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type="floorplan"
        />
      </div>
    </section>
  );
};

export default FloorPlans;
