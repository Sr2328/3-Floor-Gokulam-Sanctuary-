import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building, Calendar, MapPin, Phone, Mail, Globe } from 'lucide-react';

// Types and Constants
interface Achievement {
  icon: React.ElementType;
  label: string;
  value: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { icon: Building, label: 'Projects Completed', value: '25+' },
  { icon: Users, label: 'Happy Families', value: '500+' },
  { icon: Award, label: 'Awards Won', value: '12' },
  { icon: Calendar, label: 'Years Experience', value: '15+' }
];

const CORE_VALUES = [
  { icon: Award, title: 'Excellence', color: 'blue' },
  { icon: Users, title: 'Integrity', color: 'green' },
  { icon: Building, title: 'Innovation', color: 'yellow' }
] as const;

const AboutDeveloper: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About Joginder Properties
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Building dreams with excellence, integrity, and luxury living
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Company Info Card */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Joginder Properties</h3>
                  <p className="text-blue-600 text-sm font-medium">Premium Real Estate Developer</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-medium">
                  RERA Registered
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
                  ISO Certified
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full font-medium">
                  Award Winner
                </span>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Excellence in Real Estate Development
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  With over <strong className="text-blue-600">15 years of experience</strong> in real estate,
                  we've established ourselves as a trusted name in luxury residential developments across NCR.
                </p>
                <p>
                  Our focus lies in creating premium living spaces that blend modern architecture with thoughtful amenities,
                  ensuring each project reflects our commitment to quality.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((item, index) => (
                <AchievementCard key={index} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Core Values */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Our Core Values</h4>
              <div className="grid grid-cols-3 gap-3">
                {CORE_VALUES.map(({ icon: Icon, title, color }) => (
                  <div key={title} className="text-center">
                    <div className={`w-12 h-12 bg-${color}-100 rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                      <Icon size={24} className={`text-${color}-600`} />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-5 border-l-4 border-yellow-400">
              <blockquote className="text-gray-700 text-sm font-medium mb-4">
                "Our vision is to create not just homes, but thriving communities. Every project stands as a
                testament to our unwavering commitment to excellence and innovation."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Joginder Singh</p>
                  <p className="text-xs text-gray-600">Founder & Managing Director</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h4>
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Sector 14, Gurugram, Haryana</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">+91 99999 99999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">info@joginderproperties.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Achievement Card Component
const AchievementCard: React.FC<Achievement & { index: number }> = ({ icon: Icon, label, value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center"
  >
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="text-xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-xs text-gray-600 font-medium">{label}</div>
  </motion.div>
);

export default AboutDeveloper;