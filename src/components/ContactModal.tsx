import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, MessageSquare, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  selectedPlan?: string;
}

interface DiscordWebhook {
  content: string;
  embeds: Array<{
    title: string;
    fields: Array<{
      name: string;
      value: string;
      inline?: boolean;
    }>;
    color?: number;
  }>;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  type,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getModalTitle = () => {
    switch (type) {
      case 'brochure':
        return 'Download Brochure';
      case 'payment':
        return 'Get Payment Plan';
      case 'floorplan':
        return 'Download Floor Plan';
      case 'visit':
        return 'Book a Visit';
      default:
        return 'Contact Us';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const DISCORD_WEBHOOK_URL =
        'https://discord.com/api/webhooks/1408075707996962898/lt_L3ho0Q0Mscu3gF3xOLFDWv9PLHQfIml5A8KhrgecK6F9q9VL72raYzhW5bwELgOg9';

      if (DISCORD_WEBHOOK_URL) {
        const discordMessage: DiscordWebhook = {
          content: `🏢 New ${type} Request from Gokulam Sanctuary!`,
          embeds: [
            {
              title: `New ${getModalTitle()} Request`,
              fields: [
                { name: '👤 Name', value: formData.name, inline: true },
                { name: '📞 Phone', value: formData.phone, inline: true },
                { name: '📧 Email', value: formData.email, inline: true },
                {
                  name: '💬 Message',
                  value: formData.message || 'No message provided',
                },
                {
                  name: '📝 Request Type',
                  value: type.charAt(0).toUpperCase() + type.slice(1),
                },
              ],
              color: 0x5865f2,
            },
          ],
        };

        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordMessage),
        });
      }

      // ✅ Handle downloads
      if (type === 'brochure') {
        const link = document.createElement('a');
        link.href = '../../dist/assets/Images/Gokulam The Sanctuary luxury Floor (1).pdf';
        link.download = '../../dist/assets/Images/Gokulam The Sanctuary luxury Floor (1).pdf';
        link.click();
      } else if (type === 'payment') {
        const link = document.createElement('a');
        link.href = '../../dist/assets/Images/Blue White and Gray Modern Project Management Guide Infographic.jpg';
        link.download = '../../dist/assets/Images/Blue White and Gray Modern Project Management Guide Infographic.jpg';
        link.click();
      } else if (type === 'floorplan' && selectedPlan) {
        const pdfLinks: Record<string, string> = {
          'plan-b-block': '../../dist/assets/Images/12.png',
          'plan-c-block': '../../dist/assets/Images/10.png',
        };

        const link = document.createElement('a');
        link.href = pdfLinks[selectedPlan];
        link.download = pdfLinks[selectedPlan].split('/').pop() || 'floorplan.pdf';
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

  if (!isOpen) return null;

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
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {getModalTitle()}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />
              <textarea
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
              />

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
                  'Submit & Download'
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
