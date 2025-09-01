import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogInsights = () => {
  const blogPosts = [
    {
      title: 'Why Sohna is the New Luxury Hotspot',
      excerpt: 'Discover how Sohna has emerged as the preferred destination for luxury real estate investments in the NCR region.',
      image: 'https://i.postimg.cc/cLw7w3vK/jsd.webp?auto=compress&cs=tinysrgb&w=400',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Market Insights'
    },
    {
      title: '3BHK vs 4BHK: Making the Right Choice',
      excerpt: 'A comprehensive guide to help you choose between 3BHK and 4BHK apartments based on your lifestyle needs.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Buying Guide'
    },
    {
      title: 'Investment Potential in South Gurugram',
      excerpt: 'Analyze the growing investment opportunities and appreciation potential in the South Gurugram corridor.',
      image: 'https://i.postimg.cc/DzhNXnwT/Feature-image-Gurugram.webp?auto=compress&cs=tinysrgb&w=400',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Investment'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Guides
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with our expert insights on luxury real estate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogInsights;