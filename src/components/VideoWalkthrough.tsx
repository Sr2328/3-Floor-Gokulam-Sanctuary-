import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VideoWalkthrough = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
            Virtual Walkthrough
          </h2>
          <p className="text-xl text-gray-600">
            Experience your future home with our immersive video tour
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white p-6 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  <Play size={48} className="ml-2" />
                </motion.button>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Complete Home Tour</h3>
                <p className="text-gray-200">
                  Take a detailed look at our luxury 3BHK floors with this comprehensive walkthrough
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our virtual walkthrough gives you an authentic feel of the spacious layouts, 
              premium finishes, and thoughtful design that makes Gokulam Sanctuary truly special.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>📱 Mobile Friendly</span>
              <span>🎥 HD Quality</span>
              <span>⏱️ 5 Min Duration</span>
              <span>🎵 Narrated Tour</span>
            </div>
          </div>
        </div>

        {/* Video Modal/Lightbox */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setIsPlaying(false)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
                onClick={() => setIsPlaying(false)}
              >
                <X size={32} />
              </button>
              
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Replace with actual video embed */}
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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