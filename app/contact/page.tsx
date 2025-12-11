'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Button from '@/components/shared/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend)
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/contact/hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-sand-100">
              We'd love to host you at our village retreat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 shadow-xl paper-overlay">
                <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
                  Book Your Stay
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-2">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        required
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-2">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        required
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sand-300 focus:border-clay-600 focus:ring-2 focus:ring-clay-200 outline-none transition resize-none"
                      placeholder="Any special requirements or questions?"
                    ></textarea>
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => handleSubmit}
                  >
                    <Send className="mr-2" size={20} />
                    Send Booking Request
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection animation="fadeInUp" delay={0.2}>
                <div className="bg-white rounded-3xl p-8 shadow-xl paper-overlay">
                  <h3 className="font-display text-2xl font-bold text-earth-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-clay-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-clay-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-earth-900 mb-1">
                          Location
                        </h4>
                        <p className="text-earth-600">{SITE_CONFIG.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-clay-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-clay-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-earth-900 mb-1">
                          Phone
                        </h4>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-clay-600 hover:text-clay-700"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-clay-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-clay-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-earth-900 mb-1">
                          Email
                        </h4>
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-clay-600 hover:text-clay-700"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <div className="bg-white rounded-3xl p-8 shadow-xl paper-overlay">
                  <h3 className="font-display text-2xl font-bold text-earth-900 mb-4">
                    Quick Chat
                  </h3>
                  <p className="text-earth-600 mb-6">
                    For immediate assistance, reach us on WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.6}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4945438841237!2d81.10659697451644!3d6.643387493351175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae415c5c9899483%3A0xec2f6ec1921218d0!2sJ4V5%2B9M3%2C%20Telulla!5e1!3m2!1sen!2slk!4v1765425784803!5m2!1sen!2slk`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}