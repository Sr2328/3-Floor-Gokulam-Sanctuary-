import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Video, Volume2, MonitorPlay } from 'lucide-react';

const VideoWalkthrough = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: MonitorPlay, text: 'Interactive 3D Tour' },
    { icon: Clock, text: '5 Min Duration' },
    { icon: Video, text: '4K Ultra HD' },
    { icon: Volume2, text: 'Professional Narration' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4"
          >
            <span className="bg-blue-50 text-blue-600 text-sm font-medium px-4 py-2 rounded-full">
              Virtual Experience
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Immersive Walkthrough
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Step into your future home through our state-of-the-art virtual tour experience
          </p>
        </motion.div>

        {/* Main Video Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative rounded-2xl overflow-hidden shadow-2xl transform-gpu"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
              <motion.img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Overlay & Play Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white p-8 rounded-full hover:bg-white/30 transition-all duration-300">
                    <Play size={48} className="ml-2" />
                  </div>
                </motion.button>
              </div>

              {/* Video Info */}
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
                className="absolute bottom-8 left-8 right-8 text-white"
              >
                <h3 className="text-3xl font-bold mb-3">Experience Luxury Living</h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Discover every detail of our premium 3BHK floors through this immersive virtual tour
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center"
                >
                  <feature.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setIsPlaying(false)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsPlaying(false)}
              >
                <X size={32} />
              </motion.button>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                  title="Gokulam Sanctuary Walkthrough"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoWalkthrough;