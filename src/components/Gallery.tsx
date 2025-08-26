import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://i.postimg.cc/LsxjCwGR/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-001.png",
      title: "Terrace Lounge",
      description: "Open-to-sky sit-out with city views",
    },
    {
      src: "https://i.postimg.cc/MTcfg7Bp/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-031.png",
      title: "Modern Façade",
      description: "Contemporary architectural design",
    },
    {
      src: "https://i.postimg.cc/CLpn6fxw/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-009.jpg",
      title: "Solar Street Lights",
      description: "Eco-friendly smart lighting",
    },
    {
      src: "https://i.postimg.cc/VNtWCP7R/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-022.jpg",
      title: "Swimming Pool",
      description: "Luxury pool amidst greenery",
    },
    {
      src: "https://i.postimg.cc/RhRBNGVJ/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-017.jpg",
      title: "Sports Court",
      description: "Basketball & outdoor play zone",
    },
    {
      src: "https://i.postimg.cc/rpyqdqF6/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-006.jpg",
      title: "Spacious Living",
      description: "Elegant interiors with premium finish",
    },
    {
      src: "https://i.postimg.cc/nV9p9RZL/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-024.jpg",
      title: "Open Kitchen",
      description: "Modern modular kitchen space",
    },
    {
      src: "https://i.postimg.cc/tChb2ssQ/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-025.jpg",
      title: "Premium Bedrooms",
      description: "Designed for comfort and style",
    },
    {
      src: "https://i.postimg.cc/hjkF0ngt/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-028.jpg",
      title: "Community Spaces",
      description: "A blend of privacy and shared spaces",
    },
    {
      src: "https://i.postimg.cc/59LDMZb8/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-026.jpg",
      title: "Green Landscaping",
      description: "Eco-friendly lush surroundings",
    },
    {
      src: "https://i.postimg.cc/sgDL7xSJ/Gokulam-The-Sanctuary-luxury-Floor-2-pdf-image-023.jpg",
      title: "Children Play Area",
      description: "Safe & engaging outdoor fun zone",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Explore the lifestyle & spaces at Gokulam
          </p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative cursor-pointer overflow-hidden rounded-2xl break-inside-avoid shadow-lg group"
              onClick={() => {
                setSelectedImage(img.src);
                setLightboxOpen(true);
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{img.title}</h3>
                  <p className="text-sm text-gray-200">{img.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
                onClick={() => setLightboxOpen(false)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
