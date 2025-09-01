import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, MessageSquare, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

interface DiscordWebhook {
  content: string;
  embeds: Array<{
    title: string;
    description?: string;
    fields: Array<{
      name: string;
      value: string;
      inline?: boolean;
    }>;
    color?: number;
  }>;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getModalTitle = () => {
    switch (type) {
      case 'brochure': return 'Download Brochure';
      case 'payment': return 'Get Payment Plan';
      case 'visit': return 'Book a Visit';
      default: return 'Contact Us';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const DISCORD_WEBHOOK_URL = process.env. ;

      if (DISCORD_WEBHOOK_URL) {
        const discordMessage: DiscordWebhook = {
          content: `🏢 New ${type} Request from Gokulam Sanctuary!`,
          embeds: [{
            title: `New ${getModalTitle()} Request`,
            fields: [
              { name: "👤 Name", value: formData.name, inline: true },
              { name: "📞 Phone", value: formData.phone, inline: true },
              { name: "📧 Email", value: formData.email, inline: true },
              { name: "💬 Message", value: formData.message || "No message provided" },
              { name: "📝 Request Type", value: type.charAt(0).toUpperCase() + type.slice(1) }
            ],
            color: 0x5865F2 // Discord Blue color
          }]
        };

        const response = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordMessage)
        });

        if (!response.ok) throw new Error('Discord webhook failed');
      }
      
      // Handle downloads based on type
      if (type === 'brochure') {
        const link = document.createElement('a');
        link.href = 'https://i.postimg.cc/gJnPBGFZ/Gokulam-The-Sanctuary-luxury-Floor-2.png';
        link.download = 'Gokulam-Sanctuary-Brochure.pdf';
        link.click();
      } else if (type === 'payment') {
        const link = document.createElement('a');
        link.href = 'https://i.postimg.cc/gJnPBGFZ/Gokulam-The-Sanctuary-luxury-Floor-2.png';
        link.download = 'Payment-Plan.pdf';
        link.click();
      }

      alert('Thank you! Your request has been submitted successfully.');
      onClose();
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{getModalTitle()}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>

            <div className="mt-6 flex gap-4">
              <a
                href="tel:+9818223938"
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/9818223938"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="https://discord.gg/YOUR-INVITE-CODE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-500 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
              >
                <MessageSquare size={18} />
                Discord
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;