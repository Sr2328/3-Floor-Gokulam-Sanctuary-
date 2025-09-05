
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface DiscordWebhook {
  content: string;
  embeds: Array<{
    title: string;
    description: string;
    fields: Array<{
      name: string;
      value: string;
    }>;
  }>;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1408075707996962898/lt_L3ho0Q0Mscu3gF3xOLFDWv9PLHQfIml5A8KhrgecK6F9q9VL72raYzhW5bwELgOg9 "


      if (DISCORD_WEBHOOK_URL) {
        const discordMessage: DiscordWebhook = {
          content: "💫 New Contact Form Submission!",
          embeds: [{
            title: "New Property Inquiry",
            description: formData.message || "No message provided",
            fields: [
              { name: "👤 Name", value: formData.name },
              { name: "📞 Phone", value: formData.phone },
              { name: "📧 Email", value: formData.email }
            ]
          }]
        };

        const response = await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(discordMessage)
        });

        if (!response.ok) throw new Error('Discord webhook failed');
      }
      
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 9818223938',
      href: 'tel:+919818223938',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'JoginderPropertiesNCR@gmail.com',
      href: 'mailto:JoginderPropertiesNCR@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Sector 14, Gurugram, Haryana',
      multiline: true,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-400 bg-blue-400/10 rounded-full">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100/80">
            Ready to experience luxury living? Contact us today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <item.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-blue-200/80 text-sm">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-lg font-semibold hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919818223938"
                className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-white py-4 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-colors border border-blue-400/20 hover:border-blue-400/40"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/919818223938"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-white py-4 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-colors border border-green-400/20 hover:border-green-400/40"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://discord.gg/YOUR-INVITE-CODE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-white py-4 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-colors border border-indigo-400/20 hover:border-indigo-400/40"
              >
                <MessageSquare size={20} />
                Discord
              </a>
            </div>

            {/* Map Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Our Location</h4>
              <div className="relative rounded-lg h-[300px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.079207992648!2d77.03087067529995!3d28.423829175766387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22c00ea0ba4b%3A0x5e7c4b143f9f2d1e!2sSector%2014%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1708932546840!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 mix-blend-luminosity"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`
                    w-full py-4 px-6 rounded-xl font-semibold
                    flex items-center justify-center gap-2
                    transition-all duration-200
                    ${isSubmitting 
                      ? 'bg-blue-500/50 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.p>
                )}

                {formStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;