import React from 'react';
import { motion } from 'framer-motion';
import { 
  Armchair, 
  ChefHat, 
  Car, 
  AirVent, 
  Trees,
  Dumbbell,
  Coffee,
  Shield,
  Sun
} from 'lucide-react';

const KeyHighlights = () => {
  const highlights = [
    {
      icon: Armchair,
      title: 'Spacious Interiors',
      description: 'Thoughtfully designed layouts with premium wardrobes and elegant finishes'
    },
    {
      icon: ChefHat,
      title: 'Modern Modular Kitchen',
      description: 'Sleek modular kitchen with branded fittings and ample storage'
    },
    {
      icon: Car,
      title: 'Covered Parking',
      description: 'Dedicated and secure car parking for every residence'
    },
    {
      icon: AirVent,
      title: 'Smart Ventilation',
      description: 'Cross-ventilated homes ensuring natural light & fresh air'
    },
    {
      icon: Trees,
      title: 'Landscaped Greens',
      description: 'Lush herbal garden and open spaces for wellness & relaxation'
    },
    {
      icon: Dumbbell,
      title: 'Fully Equipped Gym',
      description: 'State-of-the-art fitness center for a healthy lifestyle'
    },
    {
      icon: Coffee,
      title: 'Community Café',
      description: 'In-house coffee lounge for leisure & meet-ups'
    },
    {
      icon: Shield,
      title: '24×7 Security',
      description: 'Round-the-clock CCTV surveillance & gated community safety'
    },
    {
      icon: Sun,
      title: 'Energy Efficient',
      description: 'Eco-friendly design with sustainable energy saving systems'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to elevate your lifestyle with a perfect balance of luxury, wellness, and community living
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            A community crafted for those who seek more than just a home – a lifestyle.
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold">
            ✨ Luxury Living Redefined ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyHighlights;
